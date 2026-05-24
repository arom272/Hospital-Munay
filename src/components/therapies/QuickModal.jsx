import { useMemo, useState, useRef } from 'react';
import { X, Phone, User, Activity, MapPin, CheckCircle, AlertCircle, FileText, ExternalLink, Loader2, Upload, Paperclip, Trash2 } from 'lucide-react';
import { getSpecialtyStyle, getStatusConfig, calcAge } from './therapyConstants';
import useStore from '../../store/useStore';
import { useTherapyDocuments } from '../../modules/documents/hooks/useTherapyDocuments';
import { DocumentFormModal }   from '../../modules/documents/index';
import { uploadAndLinkAttachment, removeAttachment } from '../../services/eventAttachmentService';

const TIPO_LABELS = {
  sesion: 'Sesión', paquete: 'Paquete', evaluacion: 'Evaluación', otro: 'Otro',
};

function fmtBs(n) {
  return `Bs. ${Number(n || 0).toFixed(2)}`;
}

const DOC_TYPE_LABELS = {
  historia_clinica:    'Historia Clínica',
  epicrisis:           'Epicrisis',
  historia_quirurgica: 'Historia Quirúrgica',
  ficha_social:        'Ficha Social',
  evolucion:           'Evolución',
  consentimiento:      'Consentimiento',
};

export default function QuickModal({ therapy, isAdmin, onClose, onAttend, onEdit }) {
  const { patients, therapies } = useStore();
  const [docOpen,          setDocOpen]          = useState(false);
  const [attachUploading,  setAttachUploading]  = useState(false);
  const [attachError,      setAttachError]      = useState(null);
  const [attachRemoving,   setAttachRemoving]   = useState(null);
  const attachFileRef = useRef(null);
  const patient = useMemo(() => patients.find(p => p.id === therapy?.patientId), [patients, therapy]);
  const { documents: therapyDocs, loading: docsLoading } = useTherapyDocuments(therapy?.patientId, therapy?.id);

  async function handleAttachUpload(e) {
    const file = e.target.files?.[0];
    if (!file || !therapy) return;
    setAttachUploading(true);
    setAttachError(null);
    try {
      await uploadAndLinkAttachment({
        file,
        patientId: therapy.patientId,
        eventId:   therapy.id,
        eventType: 'therapy',
        label:     file.name,
        uploadedBy: { uid: '', name: '' },
      });
    } catch (err) {
      setAttachError(err.message);
    } finally {
      setAttachUploading(false);
      if (attachFileRef.current) attachFileRef.current.value = '';
    }
  }

  async function handleAttachRemove(record) {
    if (!therapy) return;
    setAttachRemoving(record.storagePath);
    try {
      await removeAttachment({
        record,
        eventId:            therapy.id,
        eventType:          'therapy',
        currentAttachments: therapy.attachments ?? [],
      });
    } catch (err) {
      setAttachError(err.message);
    } finally {
      setAttachRemoving(null);
    }
  }
  const spec    = getSpecialtyStyle(therapy?.therapyType);
  const stCfg   = getStatusConfig(therapy?.status);
  const age     = calcAge(patient?.birthDate);

  const todayRoute = useMemo(() => {
    if (!therapy) return [];
    return therapies
      .filter(t => t.patientId === therapy.patientId && t.date === therapy.date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  }, [therapies, therapy]);

  const recentHistory = useMemo(() => {
    if (!therapy) return [];
    return therapies
      .filter(t => t.patientId === therapy.patientId && t.id !== therapy.id)
      .sort((a, b) => b.date.localeCompare(a.date) || b.startTime.localeCompare(a.startTime))
      .slice(0, 6);
  }, [therapies, therapy]);

  if (!therapy) return null;

  return (
    <>
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/30" onClick={onClose} />
      <div className="w-80 md:w-96 bg-white shadow-2xl flex flex-col overflow-hidden"
           style={{ borderLeft: `4px solid ${spec.color}` }}>
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-start justify-between shrink-0"
             style={{ background: spec.light }}>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">{therapy.patientName}</p>
            <p className="text-xs text-gray-600 mt-0.5">{therapy.therapyType}</p>
            {age && <p className="text-xs text-gray-500">{age}</p>}
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-white/60 shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {/* Sesión actual */}
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Sesión actual</p>
            <div className="bg-gray-50 rounded-lg p-3 space-y-1.5 border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">{therapy.therapyType}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${stCfg.tw}`}>
                  {stCfg.icon} {stCfg.label}
                </span>
              </div>
              <p className="text-gray-600">{therapy.date} · {therapy.startTime} · {therapy.durationMinutes || 45} min</p>
              {therapy.therapist && <p className="text-gray-500">Terapeuta: {therapy.therapist}</p>}
              {therapy.attendanceNote && (
                <p className="text-amber-700 bg-amber-50 rounded px-2 py-1 mt-1 italic">"{therapy.attendanceNote}"</p>
              )}
            </div>
          </div>

          {/* Cobro */}
          {Number(therapy.precio) > 0 && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Cobro</p>
              <div className={`rounded-lg px-3 py-2.5 space-y-1.5 border text-xs
                ${therapy.pagado
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">
                    {TIPO_LABELS[therapy.tipoServicio] || 'Servicio'}
                  </span>
                  <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full
                    ${therapy.pagado
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-600'}`}>
                    {therapy.pagado
                      ? <><CheckCircle className="w-3 h-3" /> Al día</>
                      : <><AlertCircle className="w-3 h-3" /> Con deuda</>}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Precio</span>
                  <span className="font-semibold">{fmtBs(therapy.precio)}</span>
                </div>
                {Number(therapy.montoPagado) > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>Pagado</span>
                    <span className="font-semibold">{fmtBs(therapy.montoPagado)}</span>
                  </div>
                )}
                {!therapy.pagado && (
                  <div className="flex justify-between text-red-600 font-bold border-t border-red-200 pt-1 mt-1">
                    <span>Saldo</span>
                    <span>{fmtBs(Number(therapy.precio) - Number(therapy.montoPagado || 0))}</span>
                  </div>
                )}
                {therapy.fechaPago && (
                  <p className="text-gray-400 text-[10px]">Fecha pago: {therapy.fechaPago}</p>
                )}
              </div>
            </div>
          )}

          {/* Datos del paciente */}
          {patient && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Paciente</p>
              <div className="space-y-1.5">
                {patient.diagnosis && (
                  <div className="flex gap-2 items-start">
                    <Activity className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-snug">{patient.diagnosis}</span>
                  </div>
                )}
                {patient.guardian && (
                  <div className="flex gap-2 items-center">
                    <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-700">{patient.guardian}</span>
                  </div>
                )}
                {patient.guardianPhone && (
                  <div className="flex gap-2 items-center">
                    <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-700">{patient.guardianPhone}</span>
                  </div>
                )}
                {patient.address && (
                  <div className="flex gap-2 items-center">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-700 truncate">{patient.address}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Ruta terapéutica del día */}
          {todayRoute.length > 1 && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                Ruta terapéutica hoy
              </p>
              <div className="space-y-1">
                {todayRoute.map(t => {
                  const s   = getSpecialtyStyle(t.therapyType);
                  const stC = getStatusConfig(t.status);
                  const cur = t.id === therapy.id;
                  return (
                    <div key={t.id}
                         className={`flex items-center gap-2 rounded px-2 py-1.5 ${cur ? 'bg-blue-50 border border-blue-100' : ''}`}>
                      <span className="font-mono text-gray-500 w-10 shrink-0">{t.startTime}</span>
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                      <span className="flex-1 text-gray-700 font-medium">{t.therapyType}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${stC.tw}`}>{stC.short}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Historial reciente */}
          {recentHistory.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Historial reciente</p>
              <div className="space-y-1">
                {recentHistory.map(t => {
                  const stC = getStatusConfig(t.status);
                  return (
                    <div key={t.id} className="flex items-center gap-2">
                      <span className="text-gray-400 font-mono w-20 shrink-0">{t.date}</span>
                      <span className="text-gray-600 flex-1 truncate">{t.therapyType}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${stC.tw}`}>{stC.short}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Archivos adjuntos */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                <Paperclip className="w-3 h-3" /> Archivos ({therapy?.attachments?.length ?? 0})
              </p>
              <label className={`text-[10px] font-semibold px-2 py-0.5 rounded border cursor-pointer transition
                ${attachUploading
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
                {attachUploading
                  ? <Loader2 className="w-3 h-3 animate-spin inline" />
                  : <><Upload className="w-3 h-3 inline mr-0.5" /> Adjuntar</>}
                <input
                  ref={attachFileRef}
                  type="file"
                  accept=".pdf,image/*"
                  className="hidden"
                  disabled={attachUploading}
                  onChange={handleAttachUpload}
                />
              </label>
            </div>
            {attachError && <p className="text-[9px] text-red-500 mb-1">{attachError}</p>}
            {(therapy?.attachments?.length ?? 0) > 0 && (
              <div className="space-y-1">
                {therapy.attachments.map((a) => (
                  <div key={a.id ?? a.storagePath} className="flex items-center gap-1">
                    <span className="text-[10px] text-gray-700 truncate flex-1">{a.label}</span>
                    <a href={a.url} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 text-[9px] font-semibold px-1.5 py-0.5 rounded bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 transition">
                      <ExternalLink className="w-2.5 h-2.5 inline" />
                    </a>
                    <button
                      onClick={() => handleAttachRemove(a)}
                      disabled={attachRemoving === a.storagePath}
                      className="shrink-0 p-0.5 rounded text-gray-400 hover:text-red-500 transition"
                    >
                      {attachRemoving === a.storagePath
                        ? <Loader2 className="w-3 h-3 animate-spin" />
                        : <Trash2 className="w-3 h-3" />}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Documentos vinculados */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                <FileText className="w-3 h-3" /> Documentos ({therapyDocs.length})
              </p>
              <button
                onClick={() => setDocOpen(true)}
                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-hm-primary text-white hover:opacity-90 transition"
              >
                + Nuevo
              </button>
            </div>
            {docsLoading ? (
              <div className="flex items-center gap-1 text-[10px] text-gray-400">
                <Loader2 className="w-3 h-3 animate-spin" /> Cargando…
              </div>
            ) : therapyDocs.length === 0 ? (
              <p className="text-[10px] text-gray-400 italic">Sin documentos vinculados.</p>
            ) : (
              <div className="space-y-1">
                {therapyDocs.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between gap-1">
                    <span className="text-[10px] text-gray-700 truncate flex-1">
                      {DOC_TYPE_LABELS[doc.documentType] ?? doc.documentType}
                    </span>
                    {doc.pdf?.url ? (
                      <a href={doc.pdf.url} target="_blank" rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-0.5 text-[9px] font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition">
                        <ExternalLink className="w-2.5 h-2.5" /> PDF
                      </a>
                    ) : (
                      <span className="text-[9px] text-gray-400 italic shrink-0">borrador</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Acciones */}
        <div className="p-3 border-t border-gray-100 flex gap-2 shrink-0">
          <button onClick={() => onAttend(therapy)} className="flex-1 btn btn-sm btn-primary text-xs">
            Registrar asistencia
          </button>
          {isAdmin && (
            <button onClick={() => onEdit(therapy)} className="btn btn-sm btn-secondary text-xs">
              Editar
            </button>
          )}
        </div>
      </div>
    </div>

    <DocumentFormModal
      open={docOpen}
      onClose={() => setDocOpen(false)}
      patientId={therapy?.patientId}
      patient={patient}
      therapyId={therapy?.id}
      eventDate={therapy?.date}
    />
    </>
  );
}
