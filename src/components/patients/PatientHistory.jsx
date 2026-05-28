import { useState } from 'react';
import { format, differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, HeartPulse, FileText, Clock, FolderOpen, ExternalLink, CheckCircle, Circle, Upload, Trash2, Package } from 'lucide-react';
import toast from 'react-hot-toast';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import ConfirmDialog from '../ui/ConfirmDialog';
import useStore from '../../store/useStore';
import { useAuth } from '../../contexts/AuthContext';
import { getTypeInfo } from '../../utils/patientTypes';
import { deleteDocument, updateDocument } from '../../modules/documents/services/documentService';
import { uploadFile, deleteFile } from '../../services/uploadService';
import {
  usePatientDocuments,
  PatientTimeline,
} from '../../modules/documents/index';

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

const TABS = [
  { id: 'datos',    label: 'Datos',    Icon: FileText   },
  { id: 'historial',label: 'Historial',Icon: FolderOpen },
  { id: 'timeline', label: 'Timeline', Icon: Clock      },
];

const DOC_SURGERY_LABELS = {
  consentimiento:        'Consentimiento',
  epicrisis:             'Epicrisis',
  historia_quirurgica:   'Historia Clínica Quirúrgica',
  control_postoperatorio:'Control Postoperatorio',
  ficha_social:          'Ficha Social',
};

const DOC_PATIENT_LABELS = {
  historia_clinica: 'Historia Clínica',
  ficha_social:     'Ficha Social',
  consentimiento:   'Consentimiento',
  evolucion:        'Evolución',
};

/* ── Datos tab (original content) ───────────────────── */
function DatosTab({ patient, surgeries, therapies, packages }) {
  const ptSurgeries = surgeries
    .filter(s => s.patientId === patient.id)
    .sort((a, b) => b.date.localeCompare(a.date));

  const ptTherapies = therapies
    .filter(t => t.patientId === patient.id)
    .sort((a, b) => b.date.localeCompare(a.date));

  const ptPackages = (packages ?? [])
    .filter(p => p.patientId === patient.id)
    .sort((a, b) => (b.startDate ?? '').localeCompare(a.startDate ?? ''));

  return (
    <div className="space-y-6">
      {/* Patient summary */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        {[
          ['Diagnóstico',     patient.diagnosis],
          ['Tipo',            getTypeInfo(patient.patientType).longLabel],
          ['Fecha de nac.',   patient.birthDate ? format(parseISO(patient.birthDate), 'dd/MM/yyyy') : '-'],
          ['Edad',            fmtAge(calcAge(patient.birthDate))],
          ['CI paciente',     patient.idNumber || '-'],
          ['Sexo',            patient.sex === 'masculino' ? 'Masculino' : patient.sex === 'femenino' ? 'Femenino' : '-'],
          ['Responsable',     patient.guardian || '-'],
          ['CI responsable',  patient.guardianIdNumber || '-'],
          ['Tel. responsable',patient.guardianPhone || '-'],
          ['Dirección',       patient.address || '-'],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-xs text-gray-400 uppercase font-medium">{k}</p>
            <p className="text-gray-800 font-medium">{v}</p>
          </div>
        ))}
      </div>

      {patient.allergies && (
        <div>
          <p className="text-xs text-gray-400 uppercase font-medium mb-1">Alergias / Medicamentos</p>
          <p className="text-sm text-gray-700 bg-amber-50 rounded-lg p-3">{patient.allergies}</p>
        </div>
      )}

      {patient.clinicalHistory && (
        <div>
          <p className="text-xs text-gray-400 uppercase font-medium mb-1">Historial clínico</p>
          <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{patient.clinicalHistory}</p>
        </div>
      )}

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
          <Calendar className="w-4 h-4 text-teal-600" />
          Cirugías ({ptSurgeries.length})
        </h3>
        {ptSurgeries.length === 0 ? (
          <p className="text-sm text-gray-400">Sin cirugías registradas.</p>
        ) : (
          <ul className="space-y-2">
            {ptSurgeries.map(s => (
              <li key={s.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm">
                <div>
                  <p className="font-medium text-gray-800">{s.surgeryType}</p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(s.date + 'T12:00'), "d MMM yyyy", { locale: es })} · {s.startTime} · {s.surgeon || '—'}
                  </p>
                </div>
                <Badge variant={s.status} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
          <HeartPulse className="w-4 h-4 text-purple-600" />
          Terapias ({ptTherapies.length})
        </h3>
        {ptTherapies.length === 0 ? (
          <p className="text-sm text-gray-400">Sin terapias registradas.</p>
        ) : (
          <ul className="space-y-2">
            {ptTherapies.map(t => (
              <li key={t.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm">
                <div>
                  <p className="font-medium text-gray-800">{t.therapyType}</p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(t.date + 'T12:00'), "d MMM yyyy", { locale: es })} · {t.startTime} · {t.therapist || '—'}
                  </p>
                </div>
                <Badge variant={t.status ?? 'programado'} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
          <Package className="w-4 h-4 text-fuchsia-600" />
          Paquetes ({ptPackages.length})
        </h3>
        {ptPackages.length === 0 ? (
          <p className="text-sm text-gray-400">Sin paquetes registrados.</p>
        ) : (
          <ul className="space-y-2">
            {ptPackages.map(p => {
              const done    = (p.sessions ?? []).filter(s => s.status === 'completada').length;
              const total   = (p.sessions ?? []).length || 8;
              const progress = Math.round((done / total) * 100);
              const status   = p.status ?? 'activo';
              const statusBadge = {
                activo:     { label: 'Activo',     cls: 'bg-blue-100  text-blue-700  border-blue-300'  },
                completado: { label: 'Completado', cls: 'bg-green-100 text-green-700 border-green-300' },
                cancelado:  { label: 'Cancelado',  cls: 'bg-red-100   text-red-700   border-red-300'   },
              }[status] ?? { label: status, cls: 'bg-gray-100 text-gray-700 border-gray-300' };
              return (
                <li key={p.id} className="p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-800 truncate">
                        {(p.services ?? []).join(' + ') || 'Paquete'}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Inicio: {p.startDate ? format(new Date(p.startDate + 'T12:00'), 'd MMM yyyy', { locale: es }) : '—'}
                        {p.therapist ? ` · ${p.therapist}` : ''}
                      </p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${statusBadge.cls}`}>
                      {statusBadge.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-700">{done}/{total} sesiones</span>
                    <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: progress === 100 ? '#16a34a' : '#a855f7',
                        }}
                      />
                    </div>
                    <span className="text-[11px] text-gray-500">{progress}%</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

const DOC_REGISTRY = [
  { key: 'historia_quirurgica',   label: 'Hist. Clínica Quirúrgica' },
  { key: 'epicrisis',             label: 'Epicrisis'                },
  { key: 'control_postoperatorio',label: 'Control Postoperatorio'   },
];

function getSavedDocTypes(docs) {
  const s = new Set();
  for (const doc of docs) {
    if (doc.documentType === 'consentimiento') {
      const ct = doc.clinicalData?.consentType;
      s.add(ct ? `consentimiento_${ct}` : 'consentimiento');
    } else {
      s.add(doc.documentType);
    }
  }
  return s;
}

/* ── Historial tab ───────────────────────────────────── */
function HistorialTab({ patient, isAdmin, canEdit }) {
  const { documents, loading } = usePatientDocuments(patient.id);
  const { surgeries } = useStore();

  const [uploadModal,  setUploadModal]  = useState({ open: false, docId: '', docLabel: '' });
  const [selectedPdf,  setSelectedPdf]  = useState(null);
  const [uploading,    setUploading]    = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const openUpload = (doc, label) =>
    setUploadModal({ open: true, docId: doc.id, docLabel: label });

  const closeUpload = () => { setUploadModal({ open: false, docId: '', docLabel: '' }); setSelectedPdf(null); };

  const handleUploadPdf = async () => {
    if (!selectedPdf || !uploadModal.docId) return;
    setUploading(true);
    try {
      const result = await uploadFile(patient.id, 'consents', selectedPdf);
      await updateDocument(patient.id, uploadModal.docId, {
        pdf: {
          url:         result.url,
          storagePath: result.path,
          sizeBytes:   result.size,
          version:     1,
          generatedAt: new Date().toISOString(),
          generatedBy: { uid: '', name: 'Sistema' },
        },
        'metadata.signed': true,
      });
      toast.success('PDF firmado guardado');
      closeUpload();
    } catch (err) {
      toast.error(err.message || 'Error al subir el PDF');
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteDoc = async () => {
    if (!deleteTarget) return;
    try {
      if (deleteTarget.doc.pdf?.storagePath) await deleteFile(deleteTarget.doc.pdf.storagePath);
      for (const att of deleteTarget.doc.attachments ?? []) {
        if (att.storagePath) await deleteFile(att.storagePath);
      }
      await deleteDocument(patient.id, deleteTarget.doc.id);
      toast.success('Documento eliminado');
    } catch (err) {
      toast.error('Error al eliminar: ' + err.message);
    } finally {
      setDeleteTarget(null);
    }
  };

  const patientSurgeries = surgeries
    .filter((s) => s.patientId === patient.id)
    .sort((a, b) => b.date.localeCompare(a.date));

  const standaloneDocs = documents
    .filter((d) => !d.surgeryId)
    .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));

  const docsBySurgery = {};
  for (const doc of documents) {
    if (!doc.surgeryId) continue;
    if (!docsBySurgery[doc.surgeryId]) docsBySurgery[doc.surgeryId] = [];
    docsBySurgery[doc.surgeryId].push(doc);
  }

  if (loading) {
    return <p className="text-sm text-gray-400">Cargando historial…</p>;
  }

  if (patientSurgeries.length === 0 && standaloneDocs.length === 0) {
    return <p className="text-sm text-gray-400 italic">Sin historial registrado.</p>;
  }

  return (
    <div className="space-y-4">
      {/* ── Standalone patient documents (e.g. Historia Clínica) ── */}
      {standaloneDocs.length > 0 && (
        <div className="border border-indigo-100 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-indigo-50 border-b border-indigo-100">
            <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
            <p className="text-sm font-bold text-indigo-800 uppercase">Documentos del Paciente</p>
          </div>
          <div className="px-4 py-3">
            <ul className="space-y-1.5">
              {standaloneDocs.map((doc) => {
                const label = DOC_PATIENT_LABELS[doc.documentType] ?? doc.documentType;
                const docTs = doc.updatedAt ?? doc.createdAt;
                const dateStr = docTs?.seconds
                  ? format(new Date(docTs.seconds * 1000), 'dd/MM/yyyy · HH:mm', { locale: es })
                  : null;
                const isPrintBased = doc.documentType === 'ficha_social'
                  || (doc.documentType === 'consentimiento' && doc.clinicalData?.consentType === 'fotos');
                return (
                  <li key={doc.id} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg text-sm gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-gray-700 font-medium truncate">{label}</p>
                        {dateStr && <p className="text-[11px] text-gray-400">{dateStr}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {doc.pdf?.url && (
                        <a href={doc.pdf.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition">
                          <ExternalLink className="w-3 h-3" /> Ver PDF
                        </a>
                      )}
                      {(isPrintBased && canEdit) && (
                        <button onClick={() => openUpload(doc, label)}
                          className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 transition"
                          title="Subir PDF firmado">
                          <Upload className="w-3 h-3" />{doc.pdf?.url ? 'Reemplazar' : 'Subir firmado'}
                        </button>
                      )}
                      {isAdmin && (
                        <button onClick={() => setDeleteTarget({ doc, docLabel: label })}
                          className="p-1 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition"
                          title="Eliminar documento">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {patientSurgeries.map((surgery) => {
        const surgDocs = docsBySurgery[surgery.id] ?? [];
        const savedTypes = getSavedDocTypes(surgDocs);
        const dateStr = format(new Date(surgery.date + 'T12:00'), "dd/MM/yyyy", { locale: es });

        return (
          <div key={surgery.id} className="border border-blue-100 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border-b border-blue-100">
              <FolderOpen className="w-4 h-4 text-blue-600 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-blue-800 uppercase truncate">
                  CIRUGÍA: {surgery.surgeryType}
                </p>
                <p className="text-xs text-blue-500">{dateStr} · {surgery.surgeon || '—'}</p>
              </div>
              <Badge variant={surgery.status} />
            </div>
            <div className="px-4 py-3 space-y-3">
              {/* Checklist de documentos */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {DOC_REGISTRY.map(({ key, label }) => {
                  const saved = savedTypes.has(key);
                  return (
                    <div key={key} className="flex items-center gap-1.5">
                      {saved
                        ? <CheckCircle className="w-3 h-3 text-green-500 shrink-0" />
                        : <Circle className="w-3 h-3 text-gray-300 shrink-0" />}
                      <span className={`text-xs truncate ${saved ? 'text-gray-700' : 'text-gray-400'}`}>{label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Documentos guardados con PDF */}
              {surgDocs.length > 0 && (
                <ul className="space-y-1.5 border-t border-gray-100 pt-2">
                  {surgDocs.map((doc) => {
                    const baseLabel = DOC_SURGERY_LABELS[doc.documentType] ?? doc.documentType;
                    let label = baseLabel;
                    if (doc.documentType === 'consentimiento') {
                      if (doc.clinicalData?.consentType === 'cirugia')        label = 'Consentimiento de Cirugía';
                      else if (doc.clinicalData?.consentType === 'anestesia') label = 'Consentimiento de Anestesia';
                      else if (doc.clinicalData?.consentType === 'fotos')     label = 'Autorización de Fotografías';
                    }
                    const docTs = doc.updatedAt ?? doc.createdAt;
                    const docDateStr = docTs?.seconds
                      ? format(new Date(docTs.seconds * 1000), 'dd/MM/yyyy · HH:mm', { locale: es })
                      : null;
                    const isPrintBased = doc.documentType === 'ficha_social'
                      || (doc.documentType === 'consentimiento' && doc.clinicalData?.consentType === 'fotos');
                    return (
                      <li key={doc.id} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg text-sm gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-gray-700 font-medium truncate">{label}</p>
                            {docDateStr && <p className="text-[11px] text-gray-400">{docDateStr}</p>}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {doc.pdf?.url && (
                            <a href={doc.pdf.url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition">
                              <ExternalLink className="w-3 h-3" /> Ver PDF
                            </a>
                          )}
                          {(isPrintBased && canEdit) && (
                            <button onClick={() => openUpload(doc, label)}
                              className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 transition"
                              title="Subir PDF firmado">
                              <Upload className="w-3 h-3" />{doc.pdf?.url ? 'Reemplazar' : 'Subir firmado'}
                            </button>
                          )}
                          {isAdmin && (
                            <button onClick={() => setDeleteTarget({ doc, docLabel: label })}
                              className="p-1 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition"
                              title="Eliminar documento">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        );
      })}
      {/* Upload signed PDF modal */}
      <Modal open={uploadModal.open} onClose={closeUpload} title={`Subir PDF firmado — ${uploadModal.docLabel}`} size="sm">
        <div className="p-5 space-y-4">
          <p className="text-sm text-gray-500">Adjunte el documento impreso y firmado. Este paso es opcional.</p>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Archivo PDF firmado</label>
            <input
              type="file" accept="application/pdf"
              onChange={e => setSelectedPdf(e.target.files[0] ?? null)}
              className="block w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-600 hover:file:bg-gray-200"
            />
          </div>
          <div className="flex gap-2 pt-1">
            <button onClick={closeUpload} disabled={uploading}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition disabled:opacity-50">
              Cancelar
            </button>
            <button onClick={handleUploadPdf} disabled={!selectedPdf || uploading}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold bg-hm-primary text-white hover:bg-hm-primary-800 transition disabled:opacity-40">
              {uploading ? 'Subiendo…' : 'Subir PDF firmado'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete document confirm */}
      <ConfirmDialog
        open={!!deleteTarget}
        title="Eliminar documento"
        message={`¿Eliminar "${deleteTarget?.docLabel}"? Esta acción no se puede deshacer.`}
        onConfirm={handleDeleteDoc}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

/* ── Timeline tab ───────────────────────────────────── */
function TimelineTab({ patient }) {
  const { documents, loading }  = usePatientDocuments(patient.id);
  const { surgeries, therapies } = useStore();

  const ptSurgeries = surgeries.filter(s => s.patientId === patient.id);
  const ptTherapies = therapies.filter(t => t.patientId === patient.id);

  return (
    <PatientTimeline
      documents={documents}
      surgeries={ptSurgeries}
      therapies={ptTherapies}
      loading={loading}
    />
  );
}

/* ── Main component ──────────────────────────────────── */
export default function PatientHistory({ patient }) {
  const { surgeries, therapies, packages } = useStore();
  const { isAdmin, canEdit } = useAuth();
  const [activeTab, setActiveTab] = useState('datos');

  return (
    <div className="space-y-0">
      {/* Tab bar */}
      <div className="flex gap-0 -mx-1 mb-4 border-b border-gray-100">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors
              ${activeTab === id
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-400 hover:text-gray-700'}`}>
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'datos'     && <DatosTab patient={patient} surgeries={surgeries} therapies={therapies} packages={packages} />}
      {activeTab === 'historial' && <HistorialTab patient={patient} isAdmin={isAdmin} canEdit={canEdit} />}
      {activeTab === 'timeline'  && <TimelineTab patient={patient} />}
    </div>
  );
}
