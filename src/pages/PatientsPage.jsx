import { useEffect, useRef, useState, useMemo } from 'react';
import {
  UserPlus, Pencil, Trash2, Eye, FileDown, FileText,
  ClipboardList, Camera, Stethoscope, MoreHorizontal,
  X, Calendar, HeartPulse,
} from 'lucide-react';
import {
  differenceInYears, differenceInMonths, differenceInDays,
  parseISO, isValid, format,
} from 'date-fns';
import { es } from 'date-fns/locale';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';
import { addPatient, updatePatient, deletePatient } from '../services/patientService';
import { useAuth }        from '../contexts/AuthContext';
import { getTypeInfo }    from '../utils/patientTypes';
import Modal              from '../components/ui/Modal';
import ConfirmDialog      from '../components/ui/ConfirmDialog';
import SearchBar          from '../components/ui/SearchBar';
import Badge              from '../components/ui/Badge';
import PatientForm        from '../components/patients/PatientForm';
import PatientHistory     from '../components/patients/PatientHistory';
import { exportPatientsCSV }    from '../utils/csvExport';
import { exportPatientsPDF }    from '../utils/pdfExport';
import { printFichaSocial }     from '../utils/printFichaSocial';
import { printConsentFotos }    from '../utils/printConsentFotos';
import { printHistoriaClinica } from '../utils/printHistoriaClinica';
import jsPDF                    from 'jspdf';
import { uploadFile, buildAttachmentRecord }              from '../services/uploadService';
import { createDocument, updateDocument, attachFileToDocument } from '../modules/documents/services/documentService';

/* ── Age helpers (unchanged) ─────────────────────────────── */
function calcAge(birthDate) {
  if (!birthDate) return null;
  const birth = parseISO(birthDate);
  if (!isValid(birth)) return null;
  const now = new Date();
  const years = differenceInYears(now, birth);
  const afterYears = new Date(birth.getFullYear() + years, birth.getMonth(), birth.getDate());
  const months = differenceInMonths(now, afterYears);
  const afterMonths = new Date(afterYears.getFullYear(), afterYears.getMonth() + months, afterYears.getDate());
  const days = differenceInDays(now, afterMonths);
  return { years, months, days };
}
function fmtAge(age) {
  if (!age) return '—';
  const parts = [];
  if (age.years > 0)  parts.push(`${age.years}a`);
  if (age.months > 0) parts.push(`${age.months}m`);
  if (age.days > 0 || parts.length === 0) parts.push(`${age.days}d`);
  return parts.join(' ');
}

const FILTER_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'mny', label: 'MNY'  },
  { value: 'jwi', label: 'JWI'  },
  { value: 'ext', label: 'EXT'  },
];

/* ══════════════════════════════════════════════════════════ */
export default function PatientsPage() {
  const { patients, surgeries, therapies } = useStore();
  const { isAdmin, canEdit, user } = useAuth();

  const [search,    setSearch]    = useState('');
  const [filter,    setFilter]    = useState('all');
  const [formOpen,  setFormOpen]  = useState(false);
  const [histOpen,  setHistOpen]  = useState(false);
  const [selected,  setSelected]  = useState(null);
  const [delTarget, setDelTarget] = useState(null);
  const [busy,      setBusy]      = useState(false);
  const [preview,      setPreview]      = useState(null);
  const [menuOpen,     setMenuOpen]     = useState(null);
  const [uploadDialog, setUploadDialog] = useState({ open: false, patientId: '', documentId: '', docLabel: '' });
  const [selectedPdf,  setSelectedPdf]  = useState(null);
  const [uploadBusy,   setUploadBusy]   = useState(false);
  const userRef = useRef(user);
  useEffect(() => { userRef.current = user; }, [user]);

  /* ── Historia Clínica: PDF save from popup (unchanged) ── */
  useEffect(() => {
    const handleMessage = async (e) => {
      if (e.data?.type !== 'MUNAY_SAVE_HC') return;
      const { patientId, patientName, clinicalData, savedAt, pdfBase64 } = e.data;
      if (!patientId) return;
      const tid = toast.loading('Guardando historia clínica…');
      try {
        const auditUser = user
          ? { uid: user.uid, name: user.displayName ?? user.email ?? 'Sistema' }
          : { uid: '', name: 'Sistema' };
        let pdfBlob;
        if (pdfBase64) {
          const base64Data = pdfBase64.includes(',') ? pdfBase64.split(',')[1] : pdfBase64;
          const bytes = atob(base64Data);
          const arr   = new Uint8Array(bytes.length);
          for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
          pdfBlob = new Blob([arr], { type: 'application/pdf' });
        } else {
          const doc = new jsPDF({ unit: 'mm', format: 'letter' });
          doc.setFontSize(12);
          doc.text('Historia Clínica — ' + (patientName || ''), 15, 20);
          doc.setFontSize(8);
          doc.text('Guardado: ' + new Date(savedAt || Date.now()).toLocaleString('es-BO'), 15, 30);
          pdfBlob = doc.output('blob');
        }
        const pdfFile = new File(
          [pdfBlob],
          `HC_${(patientName || 'paciente').replace(/\s+/g, '_')}_${Date.now()}.pdf`,
          { type: 'application/pdf' },
        );
        const uploaded = await uploadFile(patientId, 'documents', pdfFile);
        await createDocument(patientId, {
          documentType: 'historia_clinica',
          specialty:    'Medicina',
          status:       'completed',
          clinicalData,
          pdf: {
            url:         uploaded.url,
            storagePath: uploaded.path,
            sizeBytes:   uploaded.size,
            version:     1,
            generatedAt: new Date().toISOString(),
            generatedBy: auditUser,
          },
          createdBy: auditUser,
          updatedBy: auditUser,
          metadata:  { printable: true, signed: false, locked: false },
        });
        toast.success('Historia clínica guardada', { id: tid });
      } catch (err) {
        console.error('[HC save]', err);
        toast.error('Error al guardar: ' + err.message, { id: tid });
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [user]);

  /* ── Ficha Social / Consentimiento Fotos: registrar al imprimir ── */
  useEffect(() => {
    const handlePrintDoc = async (e) => {
      const type = e.data?.type;
      if (type !== 'MUNAY_PRINT_FICHA_SOCIAL' && type !== 'MUNAY_PRINT_CONSENT_FOTOS') return;
      const { patientId, clinicalData } = e.data;
      if (!patientId) return;
      const u = userRef.current;
      const auditUser = u ? { uid: u.uid, name: u.displayName ?? u.email ?? 'Sistema' } : { uid: '', name: 'Sistema' };
      const docType  = type === 'MUNAY_PRINT_FICHA_SOCIAL' ? 'ficha_social' : 'consentimiento';
      const specialty = type === 'MUNAY_PRINT_FICHA_SOCIAL' ? 'Social' : 'Medicina';
      const docLabel  = type === 'MUNAY_PRINT_FICHA_SOCIAL' ? 'Ficha Social' : 'Consentimiento de Fotos';
      try {
        const ref = await createDocument(patientId, {
          documentType: docType, specialty, status: 'completed', clinicalData,
          createdBy: auditUser, updatedBy: auditUser,
          metadata: { printable: true, signed: false, locked: false },
        });
        toast.success(`${docLabel} registrado`);
        setUploadDialog({ open: true, patientId, documentId: ref.id, docLabel });
        setSelectedPdf(null);
      } catch (err) {
        console.error('[print doc save]', err);
        toast.error(`Error al registrar ${docLabel}`);
      }
    };
    window.addEventListener('message', handlePrintDoc);
    return () => window.removeEventListener('message', handlePrintDoc);
  }, []);

  /* ── Close dropdown on outside click ─────────────────── */
  useEffect(() => {
    if (menuOpen === null) return;
    const close = () => setMenuOpen(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  /* ── Stats ───────────────────────────────────────────── */
  const todayStr = new Date().toISOString().slice(0, 10);
  const totalMNY = patients.filter(p => getTypeInfo(p.patientType).label === 'MNY').length;
  const totalJWI = patients.filter(p => getTypeInfo(p.patientType).label === 'JWI').length;
  const totalEXT = patients.filter(p => getTypeInfo(p.patientType).label === 'EXT').length;
  const todayTherapiesCount = therapies.filter(t => t.date === todayStr).length;
  const upcomingSurgsCount  = surgeries.filter(s => s.date >= todayStr && s.status !== 'cancelado').length;

  /* ── Filtered list (unchanged logic) ─────────────────── */
  const filtered = useMemo(() => {
    let list = patients;
    if (filter !== 'all') {
      list = list.filter(p => getTypeInfo(p.patientType).label === filter.toUpperCase());
    }
    if (search) {
      const q    = search.toLowerCase().replace(/^mny\s*-?\s*/i, '');
      const qRaw = search.toLowerCase();
      list = list.filter(p =>
        p.fullName?.toLowerCase().includes(qRaw) ||
        p.diagnosis?.toLowerCase().includes(qRaw) ||
        p.guardian?.toLowerCase().includes(qRaw) ||
        p.phone?.includes(qRaw) ||
        p.guardianPhone?.includes(qRaw) ||
        p.patientCode?.toLowerCase().includes(q) ||
        `mny-${p.patientCode}`.toLowerCase().includes(qRaw),
      );
    }
    return list;
  }, [patients, filter, search]);

  /* ── Preview panel data ──────────────────────────────── */
  const previewData = useMemo(() => {
    if (!preview) return null;
    const nextSurgery = surgeries
      .filter(s =>
        (s.patientId === preview.id || s.patientName === preview.fullName) &&
        s.date >= todayStr && s.status !== 'cancelado',
      )
      .sort((a, b) => a.date.localeCompare(b.date))[0] ?? null;
    const nextTherapy = therapies
      .filter(t =>
        (t.patientId === preview.id || t.patientName === preview.fullName) &&
        t.date >= todayStr,
      )
      .sort((a, b) => a.date.localeCompare(b.date))[0] ?? null;
    return { nextSurgery, nextTherapy };
  }, [preview, surgeries, therapies, todayStr]);

  /* ── Handlers (unchanged logic) ──────────────────────── */
  const openCreate    = () => { setSelected(null); setFormOpen(true); };
  const openEdit      = (p) => { setSelected(p);   setFormOpen(true); };
  const openHist      = (p) => { setSelected(p);   setHistOpen(true); };

  const closeUploadDialog = () => {
    setUploadDialog(d => ({ ...d, open: false }));
    setSelectedPdf(null);
  };

  const handleUploadSignedPdf = async () => {
    if (!selectedPdf || !uploadDialog.documentId) return;
    setUploadBusy(true);
    try {
      const result = await uploadFile(uploadDialog.patientId, 'consents', selectedPdf);
      const u = userRef.current;
      await updateDocument(uploadDialog.patientId, uploadDialog.documentId, {
        pdf: {
          url:         result.url,
          storagePath: result.path,
          sizeBytes:   result.size,
          version:     1,
          generatedAt: new Date().toISOString(),
          generatedBy: u ? { uid: u.uid, name: u.displayName ?? u.email ?? 'Sistema' } : { uid: '', name: 'Sistema' },
        },
        'metadata.signed': true,
      });
      toast.success('PDF firmado guardado');
      closeUploadDialog();
    } catch (err) {
      toast.error(err.message || 'Error al subir el PDF');
    } finally {
      setUploadBusy(false);
    }
  };
  const togglePreview = (p) => setPreview(prev => prev?.id === p.id ? null : p);

  const handleSave = async (data) => {
    setBusy(true);
    try {
      if (selected?.id) {
        await updatePatient(selected.id, data);
        toast.success('Paciente actualizado');
      } else {
        await addPatient(data);
        toast.success('Paciente registrado');
      }
      setFormOpen(false);
    } catch (err) {
      toast.error('Error al guardar: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async () => {
    if (!delTarget) return;
    try {
      await deletePatient(delTarget.id);
      toast.success('Paciente eliminado');
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setDelTarget(null);
    }
  };

  /* ── Filter counts for segmented control ─────────────── */
  const filterCounts = useMemo(() => ({
    all: patients.length,
    mny: totalMNY,
    jwi: totalJWI,
    ext: totalEXT,
  }), [patients.length, totalMNY, totalJWI, totalEXT]);

  return (
    <div className="space-y-4">

      {/* ── Module header with stats ─────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-card px-5 py-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-lg font-bold text-hm-primary leading-tight">Pacientes</h1>
            <p className="text-xs text-gray-400 mt-0.5">{patients.length} registrados en total</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <TypeStat label="MNY" count={totalMNY} color="#1e40af" />
              <TypeStat label="JWI" count={totalJWI} color="#ea580c" />
              <TypeStat label="EXT" count={totalEXT} color="#16a34a" />
            </div>
            <div className="w-px h-7 bg-gray-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-3">
              <ContextStat icon={HeartPulse} label="Terapias hoy"      value={todayTherapiesCount} color="purple" />
              <ContextStat icon={Calendar}   label="Cirugías próximas" value={upcomingSurgsCount}  color="blue"   />
            </div>
          </div>
        </div>
      </div>

      {/* ── Toolbar ──────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-card px-4 py-3">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

          {/* Search */}
          <div className="flex-1 w-full sm:w-auto">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Buscar por nombre, código MNY-, diagnóstico, teléfono…"
            />
          </div>

          {/* Segmented filter */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-0.5 shrink-0">
            {FILTER_OPTIONS.map(o => (
              <button
                key={o.value}
                onClick={() => setFilter(o.value)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === o.value
                    ? 'bg-white shadow-sm text-hm-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {o.label}
                <span className={`text-[10px] tabular-nums ${
                  filter === o.value ? 'text-gray-400' : 'text-gray-400'
                }`}>
                  {filterCounts[o.value]}
                </span>
              </button>
            ))}
          </div>

          {/* Export + create */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => exportPatientsCSV(filtered)}
              className="btn-secondary btn btn-sm"
              title="Exportar CSV"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => exportPatientsPDF(filtered)}
              className="btn-secondary btn btn-sm"
              title="Exportar PDF"
            >
              <FileText className="w-4 h-4" />
            </button>
            {canEdit && (
              <button onClick={openCreate} className="btn-primary btn btn-sm">
                <UserPlus className="w-4 h-4" />
                Nuevo
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Results count ─────────────────────────────────── */}
      {filtered.length > 0 && (
        <p className="text-xs text-gray-400 px-1">
          {filtered.length} paciente{filtered.length !== 1 ? 's' : ''}
          {preview && <span className="ml-2 text-hm-primary font-medium">· Vista rápida activa</span>}
        </p>
      )}

      {/* ── Content area ──────────────────────────────────── */}
      {filtered.length === 0 ? (
        <EmptyState search={search} canEdit={canEdit} onCreateFirst={openCreate} />
      ) : (
        <div className="flex gap-4 items-start">

          {/* Main table */}
          <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">

            {/* ── Desktop table ────────────────────────────── */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {['Paciente', 'Diagnóstico', 'Responsable', 'Tipo', ''].map(h => (
                      <th
                        key={h}
                        className="text-left px-4 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/70 sticky top-0 z-10"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, idx) => {
                    const age      = calcAge(p.birthDate);
                    const typeInfo = getTypeInfo(p.patientType);
                    const isActive = preview?.id === p.id;
                    return (
                      <tr
                        key={p.id}
                        onClick={() => togglePreview(p)}
                        className={`border-b border-gray-50 transition-colors duration-100 cursor-pointer ${
                          isActive
                            ? 'bg-hm-secondary-100/50'
                            : idx % 2 === 0
                              ? 'bg-white hover:bg-gray-50/70'
                              : 'bg-gray-50/20 hover:bg-gray-50/70'
                        }`}
                      >
                        {/* Paciente: avatar + name + code + age */}
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                              style={{ backgroundColor: typeInfo.bg }}
                            >
                              {(p.fullName ?? '?')[0].toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-800 leading-tight truncate">
                                {p.fullName}
                              </p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                {p.patientCode && (
                                  <span className="text-[10px] text-gray-400 font-mono leading-none">
                                    {typeInfo.label}-{p.patientCode}
                                  </span>
                                )}
                                {p.patientCode && age && (
                                  <span className="text-[10px] text-gray-300">·</span>
                                )}
                                <span className="text-[10px] text-gray-400 leading-none">
                                  {fmtAge(age)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Diagnóstico */}
                        <td className="px-4 py-3 max-w-[200px]">
                          <p className="text-sm text-gray-600 truncate leading-tight" title={p.diagnosis}>
                            {p.diagnosis || '—'}
                          </p>
                        </td>

                        {/* Responsable + teléfono */}
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-600 leading-tight">{p.guardian || '—'}</p>
                          {p.guardianPhone && (
                            <p className="text-[11px] text-gray-400 leading-tight">{p.guardianPhone}</p>
                          )}
                        </td>

                        {/* Tipo */}
                        <td className="px-4 py-3">
                          <Badge variant={p.patientType} />
                        </td>

                        {/* Acciones */}
                        <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                          <div className="flex items-center gap-0.5 justify-end">
                            <ActionBtn
                              icon={Eye}
                              label="Ver historial"
                              onClick={() => openHist(p)}
                              hoverCls="hover:text-hm-primary hover:bg-hm-secondary-100"
                            />
                            <ActionBtn
                              icon={ClipboardList}
                              label="Ficha social"
                              onClick={() => {
                                printFichaSocial(p);
                              }}
                              hoverCls="hover:text-teal-600 hover:bg-teal-50"
                            />
                            <ActionBtn
                              icon={Camera}
                              label="Consentimiento fotos"
                              onClick={() => {
                                printConsentFotos(p);
                              }}
                              hoverCls="hover:text-amber-600 hover:bg-amber-50"
                            />
                            <ActionBtn
                              icon={Stethoscope}
                              label="Historia clínica"
                              onClick={() => printHistoriaClinica(p)}
                              hoverCls="hover:text-indigo-600 hover:bg-indigo-50"
                            />

                            {/* Dropdown: editar / eliminar */}
                            {(canEdit || isAdmin) && (
                              <div
                                className="relative"
                                onClick={e => e.stopPropagation()}
                              >
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setMenuOpen(prev => prev === p.id ? null : p.id);
                                  }}
                                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
                                  title="Más opciones"
                                >
                                  <MoreHorizontal className="w-4 h-4" />
                                </button>
                                {menuOpen === p.id && (
                                  <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-gray-100 z-30 py-1 overflow-hidden animate-slide-in-right">
                                    {canEdit && (
                                      <button
                                        onClick={() => { openEdit(p); setMenuOpen(null); }}
                                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                                      >
                                        <Pencil className="w-3.5 h-3.5 text-gray-400" />
                                        Editar
                                      </button>
                                    )}
                                    {isAdmin && (
                                      <button
                                        onClick={() => { setDelTarget(p); setMenuOpen(null); }}
                                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                        Eliminar
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ── Mobile cards ─────────────────────────────── */}
            <ul className="md:hidden divide-y divide-gray-100">
              {filtered.map(p => {
                const age      = calcAge(p.birthDate);
                const typeInfo = getTypeInfo(p.patientType);
                return (
                  <li key={p.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5"
                        style={{ backgroundColor: typeInfo.bg }}
                      >
                        {(p.fullName ?? '?')[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-800 truncate leading-tight">{p.fullName}</p>
                            <p className="text-[10px] text-gray-400 font-mono leading-tight">
                              {typeInfo.label}-{p.patientCode} · {fmtAge(age)}
                            </p>
                          </div>
                          <Badge variant={p.patientType} />
                        </div>
                        {p.diagnosis && (
                          <p className="text-xs text-gray-500 mt-1.5 leading-snug">{p.diagnosis}</p>
                        )}
                        {p.guardian && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            Resp: {p.guardian}{p.guardianPhone ? ` · ${p.guardianPhone}` : ''}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      <button
                        onClick={() => openHist(p)}
                        className="btn-secondary btn btn-sm flex-1 justify-center min-w-[90px]"
                      >
                        <Eye className="w-3.5 h-3.5" /> Historial
                      </button>
                      <button
                        onClick={() => {
                          printFichaSocial(p);
                        }}
                        className="btn btn-sm px-2.5 text-teal-600 border border-teal-200 hover:bg-teal-50"
                        title="Ficha social"
                      >
                        <ClipboardList className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          printConsentFotos(p);
                        }}
                        className="btn btn-sm px-2.5 text-amber-600 border border-amber-200 hover:bg-amber-50"
                        title="Consentimiento fotos"
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => printHistoriaClinica(p)}
                        className="btn btn-sm px-2.5 text-indigo-600 border border-indigo-200 hover:bg-indigo-50"
                        title="Historia clínica"
                      >
                        <Stethoscope className="w-3.5 h-3.5" />
                      </button>
                      {canEdit && (
                        <button onClick={() => openEdit(p)} className="btn-secondary btn btn-sm px-2.5">
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {isAdmin && (
                        <button
                          onClick={() => setDelTarget(p)}
                          className="btn btn-sm px-2.5 text-red-500 border border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── Preview panel (desktop only) ──────────────── */}
          {preview && (
            <div className="hidden lg:block w-[268px] shrink-0 animate-slide-in-right">
              <PreviewPanel
                patient={preview}
                previewData={previewData}
                onClose={() => setPreview(null)}
                onEdit={openEdit}
                onHistory={openHist}
                canEdit={canEdit}
              />
            </div>
          )}
        </div>
      )}

      {/* ── Modals (unchanged) ───────────────────────────── */}
      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title={selected ? 'Editar paciente' : 'Nuevo paciente'}
        size="lg"
      >
        <PatientForm
          initial={selected}
          onSubmit={handleSave}
          onCancel={() => setFormOpen(false)}
          busy={busy}
        />
      </Modal>

      <Modal
        open={histOpen}
        onClose={() => setHistOpen(false)}
        title={selected ? `Historial — ${selected.fullName}` : 'Historial'}
        size="lg"
      >
        {selected && <PatientHistory patient={selected} />}
      </Modal>

      <ConfirmDialog
        open={!!delTarget}
        title="Eliminar paciente"
        message={`¿Seguro que deseas eliminar a ${delTarget?.fullName}? Esta acción no se puede deshacer.`}
        onConfirm={handleDelete}
        onCancel={() => setDelTarget(null)}
      />

      {/* ── Upload signed PDF ─────────────────────────────── */}
      <Modal
        open={uploadDialog.open}
        onClose={closeUploadDialog}
        title={`Subir PDF firmado — ${uploadDialog.docLabel}`}
        size="sm"
      >
        <div className="p-5 space-y-4">
          <p className="text-sm text-gray-500">
            Puede adjuntar el documento impreso y firmado. Este paso es opcional.
          </p>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">
              Archivo PDF firmado
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={e => setSelectedPdf(e.target.files[0] ?? null)}
              className="block w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-600 hover:file:bg-gray-200"
            />
          </div>
          <div className="flex gap-2 pt-1">
            <button
              onClick={closeUploadDialog}
              disabled={uploadBusy}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition disabled:opacity-50"
            >
              Omitir
            </button>
            <button
              onClick={handleUploadSignedPdf}
              disabled={!selectedPdf || uploadBusy}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold bg-hm-primary text-white hover:bg-hm-primary-800 transition disabled:opacity-40"
            >
              {uploadBusy ? 'Subiendo…' : 'Subir PDF firmado'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

/* ─── Sub-components ─────────────────────────────────────── */

/* Action button with tooltip */
function ActionBtn({ icon: Icon, label, onClick, hoverCls }) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`p-1.5 rounded-lg text-gray-400 transition-all duration-150 ${hoverCls}`}
        title={label}
      >
        <Icon className="w-4 h-4" />
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-50
                      opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150">
        <div className="bg-gray-900 text-white text-[10px] font-medium px-2 py-1 rounded-lg whitespace-nowrap">
          {label}
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[3px] border-transparent border-t-gray-900" />
      </div>
    </div>
  );
}

/* Preview side panel */
function PreviewPanel({ patient, previewData, onClose, onEdit, onHistory, canEdit }) {
  const typeInfo = getTypeInfo(patient.patientType);
  const age      = calcAge(patient.birthDate);

  return (
    <div
      className="bg-white rounded-xl border border-gray-100 shadow-card sticky top-20 flex flex-col overflow-hidden"
      style={{ maxHeight: 'calc(100vh - 6rem)' }}
    >
      {/* Panel header — fixed, does not scroll */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/60 flex-shrink-0">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Vista rápida
        </span>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-gray-100 transition text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto flex-1">
      <div className="p-4">
        {/* Avatar + name */}
        <div className="flex flex-col items-center text-center mb-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold mb-2 shadow-sm"
            style={{ backgroundColor: typeInfo.bg }}
          >
            {(patient.fullName ?? '?')[0].toUpperCase()}
          </div>
          <p className="font-bold text-gray-800 leading-tight">{patient.fullName}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Badge variant={patient.patientType} />
            {patient.patientCode && (
              <span className="text-[10px] text-gray-400 font-mono">
                {typeInfo.label}-{patient.patientCode}
              </span>
            )}
          </div>
          {age && (
            <p className="text-xs text-gray-400 mt-0.5">{fmtAge(age)}</p>
          )}
        </div>

        {/* Diagnóstico */}
        {patient.diagnosis && (
          <div className="bg-gray-50 rounded-xl p-3 mb-3">
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Diagnóstico</p>
            <p className="text-sm text-gray-700 leading-snug">{patient.diagnosis}</p>
          </div>
        )}

        {/* Next appointments */}
        <div className="space-y-2 mb-3">
          {previewData?.nextSurgery ? (
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl border border-blue-100 bg-blue-50/50">
              <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-0.5">
                  Próxima cirugía
                </p>
                <p className="text-xs text-gray-700 truncate leading-tight">
                  {previewData.nextSurgery.surgeryType}
                </p>
                <p className="text-[10px] text-gray-400 leading-tight">
                  {format(new Date(previewData.nextSurgery.date + 'T12:00'), "EEE d MMM", { locale: es })}
                  {previewData.nextSurgery.startTime ? ` · ${previewData.nextSurgery.startTime}` : ''}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-gray-100 bg-gray-50/50">
              <Calendar className="w-3.5 h-3.5 text-gray-300 shrink-0" />
              <p className="text-xs text-gray-400">Sin cirugías próximas</p>
            </div>
          )}

          {previewData?.nextTherapy ? (
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl border border-purple-100 bg-purple-50/50">
              <HeartPulse className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-purple-600 uppercase tracking-widest mb-0.5">
                  Próxima terapia
                </p>
                <p className="text-xs text-gray-700 truncate leading-tight">
                  {previewData.nextTherapy.therapyType}
                </p>
                <p className="text-[10px] text-gray-400 leading-tight">
                  {format(new Date(previewData.nextTherapy.date + 'T12:00'), "EEE d MMM", { locale: es })}
                  {previewData.nextTherapy.startTime ? ` · ${previewData.nextTherapy.startTime}` : ''}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-gray-100 bg-gray-50/50">
              <HeartPulse className="w-3.5 h-3.5 text-gray-300 shrink-0" />
              <p className="text-xs text-gray-400">Sin terapias próximas</p>
            </div>
          )}
        </div>

        {/* Responsable */}
        {patient.guardian && (
          <div className="mb-4 px-1">
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Responsable</p>
            <p className="text-sm text-gray-700 leading-tight">{patient.guardian}</p>
            {patient.guardianPhone && (
              <p className="text-xs text-gray-400 mt-0.5">{patient.guardianPhone}</p>
            )}
          </div>
        )}

        {/* Quick actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onHistory(patient)}
            className="btn-secondary btn btn-sm flex-1 justify-center"
          >
            <Eye className="w-3.5 h-3.5" /> Historial
          </button>
          {canEdit && (
            <button
              onClick={() => onEdit(patient)}
              className="btn-primary btn btn-sm flex-1 justify-center"
            >
              <Pencil className="w-3.5 h-3.5" /> Editar
            </button>
          )}
        </div>
      </div>
      </div>{/* end overflow-y-auto */}
    </div>
  );
}

/* Type stat badge in header */
function TypeStat({ label, count, color }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
      <span className="text-xs text-gray-500 font-medium">{label}</span>
      <span className="text-xs font-bold text-gray-700 tabular-nums">{count}</span>
    </div>
  );
}

/* Context stat widget in header */
function ContextStat({ icon: Icon, label, value, color }) {
  const palette = {
    purple: 'text-purple-600 bg-purple-50',
    blue:   'text-blue-600   bg-blue-50',
  };
  return (
    <div className="flex items-center gap-2">
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${palette[color]}`}>
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div>
        <p className="text-sm font-bold text-gray-800 leading-none tabular-nums">{value}</p>
        <p className="text-[10px] text-gray-400 leading-tight">{label}</p>
      </div>
    </div>
  );
}

/* Smart empty state */
function EmptyState({ search, canEdit, onCreateFirst }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-card flex flex-col items-center py-14">
      <UserPlus className="w-10 h-10 text-gray-200 mb-3" />
      <p className="text-sm font-medium text-gray-500">
        {search ? 'Sin resultados para la búsqueda.' : 'No hay pacientes registrados.'}
      </p>
      {canEdit && !search && (
        <button onClick={onCreateFirst} className="btn-primary btn mt-4">
          Registrar primer paciente
        </button>
      )}
    </div>
  );
}