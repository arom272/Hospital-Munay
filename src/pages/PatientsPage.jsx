import { useEffect, useState, useMemo } from 'react';
import { UserPlus, Pencil, Trash2, Eye, FileDown, FileText, ClipboardList, Camera, Stethoscope } from 'lucide-react';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid, format } from 'date-fns';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';
import { subscribePatients, addPatient, updatePatient, deletePatient } from '../services/patientService';
import { subscribeSurgeries } from '../services/surgeryService';
import { subscribeTherapies } from '../services/therapyService';
import { useAuth }            from '../contexts/AuthContext';
import { getTypeInfo }        from '../utils/patientTypes';
import Modal          from '../components/ui/Modal';
import ConfirmDialog  from '../components/ui/ConfirmDialog';
import SearchBar      from '../components/ui/SearchBar';
import Badge          from '../components/ui/Badge';
import PatientForm    from '../components/patients/PatientForm';
import PatientHistory from '../components/patients/PatientHistory';
import { exportPatientsCSV } from '../utils/csvExport';
import { exportPatientsPDF } from '../utils/pdfExport';
import { printFichaSocial }  from '../utils/printFichaSocial';
import { printConsentFotos }    from '../utils/printConsentFotos';
import { printHistoriaClinica } from '../utils/printHistoriaClinica';

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
  if (!age) return '-';
  const parts = [];
  if (age.years > 0)  parts.push(`${age.years}a`);
  if (age.months > 0) parts.push(`${age.months}m`);
  if (age.days > 0 || parts.length === 0) parts.push(`${age.days}d`);
  return parts.join(' ');
}

const FILTER_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'mny', label: 'MNY' },
  { value: 'jwi', label: 'JWI' },
  { value: 'ext', label: 'EXT' },
];

export default function PatientsPage() {
  const { patients, setPatients, setSurgeries, setTherapies } = useStore();
  const { isAdmin, canEdit } = useAuth();

  const [search,    setSearch]    = useState('');
  const [filter,    setFilter]    = useState('all');
  const [formOpen,  setFormOpen]  = useState(false);
  const [histOpen,  setHistOpen]  = useState(false);
  const [selected,  setSelected]  = useState(null);
  const [delTarget, setDelTarget] = useState(null);
  const [busy,      setBusy]      = useState(false);

  useEffect(() => {
    const u1 = subscribePatients(setPatients);
    const u2 = subscribeSurgeries(setSurgeries);
    const u3 = subscribeTherapies(setTherapies);
    return () => { u1(); u2(); u3(); };
  }, []);

  const filtered = useMemo(() => {
    let list = patients;
    if (filter !== 'all') {
      list = list.filter((p) => getTypeInfo(p.patientType).label === filter.toUpperCase());
    }
    if (search) {
      const q = search.toLowerCase().replace(/^mny\s*-?\s*/i, '');
      const qRaw = search.toLowerCase();
      list = list.filter((p) =>
        p.fullName?.toLowerCase().includes(qRaw) ||
        p.diagnosis?.toLowerCase().includes(qRaw) ||
        p.guardian?.toLowerCase().includes(qRaw) ||
        p.phone?.includes(qRaw) ||
        p.guardianPhone?.includes(qRaw) ||
        p.patientCode?.toLowerCase().includes(q) ||
        `mny-${p.patientCode}`.toLowerCase().includes(qRaw)
      );
    }
    return list;
  }, [patients, filter, search]);

  const openCreate = () => { setSelected(null); setFormOpen(true); };
  const openEdit   = (p) => { setSelected(p);   setFormOpen(true); };
  const openHist   = (p) => { setSelected(p);   setHistOpen(true); };

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

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="card py-3">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="flex-1 w-full sm:w-auto">
            <SearchBar value={search} onChange={setSearch} placeholder="Buscar por nombre, código MNY-, diagnóstico, teléfono..." />
          </div>

          <div className="flex gap-2 flex-wrap">
            {FILTER_OPTIONS.map((o) => (
              <button
                key={o.value}
                onClick={() => setFilter(o.value)}
                className={`btn btn-sm ${filter === o.value ? 'btn-primary' : 'btn-secondary'}`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 ml-auto">
            <button onClick={() => exportPatientsCSV(filtered)} className="btn-secondary btn btn-sm" title="Exportar CSV">
              <FileDown className="w-4 h-4" />
            </button>
            <button onClick={() => exportPatientsPDF(filtered)} className="btn-secondary btn btn-sm" title="Exportar PDF">
              <FileText className="w-4 h-4" />
            </button>
            {canEdit && (
              <button onClick={openCreate} className="btn-primary btn btn-sm">
                <UserPlus className="w-4 h-4" />
                Nuevo paciente
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500">{filtered.length} paciente{filtered.length !== 1 ? 's' : ''}</p>

      {filtered.length === 0 ? (
        <div className="card flex flex-col items-center py-12 text-gray-400">
          <UserPlus className="w-10 h-10 mb-2 opacity-40" />
          <p className="text-sm">{search ? 'Sin resultados para la búsqueda.' : 'No hay pacientes registrados.'}</p>
          {canEdit && !search && (
            <button onClick={openCreate} className="btn-primary btn mt-4">
              Registrar primer paciente
            </button>
          )}
        </div>
      ) : (
        <div className="card p-0 overflow-hidden">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {['Código', 'Nombre', 'Diagnóstico', 'Edad', 'Responsable', 'Tel. Resp.', 'Tipo', ''].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((p) => {
                  const age = calcAge(p.birthDate);
                  return (
                    <tr key={p.id} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 font-mono text-xs font-semibold whitespace-nowrap">
                        {p.patientCode ? (
                          <span className="px-1.5 py-0.5 rounded text-white text-[11px]"
                            style={{ backgroundColor: getTypeInfo(p.patientType).bg }}>
                            {getTypeInfo(p.patientType).label}-{p.patientCode}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-800">{p.fullName}</td>
                      <td className="px-4 py-3 text-gray-600 max-w-[200px] truncate" title={p.diagnosis}>{p.diagnosis}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{fmtAge(age)}</td>
                      <td className="px-4 py-3 text-gray-600">{p.guardian || '-'}</td>
                      <td className="px-4 py-3 text-gray-600">{p.guardianPhone || '-'}</td>
                      <td className="px-4 py-3">
                        <Badge variant={p.patientType} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1 justify-end">
                          <button onClick={() => openHist(p)} className="btn-ghost btn btn-sm p-1.5" title="Ver historial">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button onClick={() => printFichaSocial(p)} className="btn-ghost btn btn-sm p-1.5 text-teal-600 hover:bg-teal-50" title="Ficha social">
                            <ClipboardList className="w-4 h-4" />
                          </button>
                          <button onClick={() => printConsentFotos(p)} className="btn-ghost btn btn-sm p-1.5 text-amber-600 hover:bg-amber-50" title="Consentimiento fotos">
                            <Camera className="w-4 h-4" />
                          </button>
                          <button onClick={() => printHistoriaClinica(p)} className="btn-ghost btn btn-sm p-1.5 text-indigo-600 hover:bg-indigo-50" title="Historia clínica integral">
                            <Stethoscope className="w-4 h-4" />
                          </button>
                          {canEdit && (
                            <button onClick={() => openEdit(p)} className="btn-ghost btn btn-sm p-1.5" title="Editar">
                              <Pencil className="w-4 h-4" />
                            </button>
                          )}
                          {isAdmin && (
                            <button onClick={() => setDelTarget(p)} className="btn-ghost btn btn-sm p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50" title="Eliminar">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <ul className="md:hidden divide-y divide-gray-100">
            {filtered.map((p) => {
              const age = calcAge(p.birthDate);
              return (
                <li key={p.id} className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      {p.patientCode && (
                        <p className="text-xs font-mono font-bold mb-0.5"
                          style={{ color: getTypeInfo(p.patientType).bg }}>
                          {getTypeInfo(p.patientType).label}-{p.patientCode}
                        </p>
                      )}
                      <p className="font-medium text-gray-800 truncate">{p.fullName}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{p.diagnosis}</p>
                      {age && <p className="text-xs text-gray-400">{fmtAge(age)}</p>}
                      {p.guardian && (
                        <p className="text-xs text-gray-400">
                          Resp: {p.guardian}{p.guardianPhone ? ` · ${p.guardianPhone}` : ''}
                        </p>
                      )}
                    </div>
                    <Badge variant={p.patientType} />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => openHist(p)} className="btn-secondary btn btn-sm flex-1 justify-center">
                      <Eye className="w-3.5 h-3.5" /> Historial
                    </button>
                    <button onClick={() => printFichaSocial(p)} className="btn btn-sm px-2.5 text-teal-600 border border-teal-200 hover:bg-teal-50" title="Ficha social">
                      <ClipboardList className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => printConsentFotos(p)} className="btn btn-sm px-2.5 text-amber-600 border border-amber-200 hover:bg-amber-50" title="Consentimiento fotos">
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => printHistoriaClinica(p)} className="btn btn-sm px-2.5 text-indigo-600 border border-indigo-200 hover:bg-indigo-50" title="Historia clínica">
                      <Stethoscope className="w-3.5 h-3.5" />
                    </button>
                    {canEdit && (
                      <button onClick={() => openEdit(p)} className="btn-secondary btn btn-sm px-2.5">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {isAdmin && (
                      <button onClick={() => setDelTarget(p)} className="btn btn-sm px-2.5 text-red-500 border border-red-200 hover:bg-red-50">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Form modal */}
      <Modal open={formOpen} onClose={() => setFormOpen(false)} title={selected ? 'Editar paciente' : 'Nuevo paciente'} size="lg">
        <PatientForm initial={selected} onSubmit={handleSave} onCancel={() => setFormOpen(false)} busy={busy} />
      </Modal>

      {/* History modal */}
      <Modal open={histOpen} onClose={() => setHistOpen(false)} title={selected ? `Historial — ${selected.fullName}` : 'Historial'} size="lg">
        {selected && <PatientHistory patient={selected} />}
      </Modal>

      <ConfirmDialog
        open={!!delTarget}
        title="Eliminar paciente"
        message={`¿Seguro que deseas eliminar a ${delTarget?.fullName}? Esta acción no se puede deshacer.`}
        onConfirm={handleDelete}
        onCancel={() => setDelTarget(null)}
      />
    </div>
  );
}
