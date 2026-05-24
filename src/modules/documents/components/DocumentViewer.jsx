import { useState } from 'react';
import { X, Pencil, ChevronDown, Eye, Download, FileDown, Loader2 } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { updateDocument } from '../services/documentService';
import { getDocumentTypeConfig, formatTimestamp, fieldLabel } from '../utils/documentUtils';
import { DOCUMENT_STATUS_OPTIONS } from '../types/documentStatus';
import { buildAuditUser } from '../utils/documentUtils';
import { usePDFGeneration } from '../hooks/usePDFGeneration';
import DocumentStatusBadge from './DocumentStatusBadge';
import toast from 'react-hot-toast';

/* ── Clinical data renderer ─────────────────────────── */
function renderValue(val) {
  if (val === null || val === undefined || val === '') return <span className="text-gray-300 italic">—</span>;
  if (typeof val === 'boolean') return val ? 'Sí' : 'No';
  if (typeof val === 'object' && !Array.isArray(val)) {
    return (
      <div className="pl-3 border-l-2 border-gray-100 space-y-1 mt-1">
        {Object.entries(val).map(([k, v]) => (
          <div key={k} className="flex gap-2">
            <span className="text-[10px] font-semibold text-gray-400 shrink-0 w-28 pt-px">{fieldLabel(k)}</span>
            <span className="text-xs text-gray-700">{renderValue(v)}</span>
          </div>
        ))}
      </div>
    );
  }
  if (Array.isArray(val)) {
    return (
      <ul className="list-disc pl-4 space-y-0.5">
        {val.map((v, i) => <li key={i} className="text-xs text-gray-700">{renderValue(v)}</li>)}
      </ul>
    );
  }
  return <span className="text-xs text-gray-800 whitespace-pre-wrap">{String(val)}</span>;
}

function ClinicalDataSection({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return <p className="text-sm text-gray-400 italic">Sin datos clínicos registrados.</p>;
  }
  return (
    <div className="space-y-3">
      {Object.entries(data).map(([key, val]) => (
        <div key={key} className="grid grid-cols-[140px_1fr] gap-3 text-sm py-2 border-b border-gray-50 last:border-0">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide pt-0.5">
            {fieldLabel(key)}
          </span>
          <div>{renderValue(val)}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Status changer ─────────────────────────────────── */
function StatusChanger({ document, patientId, onUpdated }) {
  const { canEdit, user } = useAuth();
  const [open, setOpen]   = useState(false);

  const change = async (newStatus) => {
    try {
      await updateDocument(patientId, document.id, {
        status:    newStatus,
        updatedBy: buildAuditUser(user),
      });
      toast.success('Estado actualizado');
      setOpen(false);
      onUpdated?.();
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (!canEdit) return <DocumentStatusBadge status={document.status} size="lg" />;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 transition-colors hover:bg-gray-50">
        <DocumentStatusBadge status={document.status} size="xs" />
        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 z-20 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden min-w-[160px]">
          {DOCUMENT_STATUS_OPTIONS.map(o => (
            <button
              key={o.value}
              onClick={() => change(o.value)}
              className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 transition-colors
                ${document.status === o.value ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── PDF actions ────────────────────────────────────── */
function PDFSection({ doc, patientId, patient }) {
  const { generateAndSave, isLoading, stateLabel } = usePDFGeneration();

  const handleGenerate = async () => {
    try {
      await generateAndSave({
        patient,
        clinicalData: doc.clinicalData ?? {},
        documentType: doc.documentType,
        documentId:   doc.id,
        patientId,
      });
    } catch {
      /* already toasted */
    }
  };

  if (doc.pdf?.url) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={doc.pdf.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          Ver PDF
        </a>
        <a
          href={doc.pdf.url}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Descargar
        </a>
        <span className="text-[10px] text-gray-400">
          v{doc.pdf.version} · {doc.pdf.sizeBytes ? `${(doc.pdf.sizeBytes / 1024).toFixed(0)} KB` : ''}
        </span>
        {/* Regenerate */}
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-600 disabled:opacity-50 ml-auto"
          title="Regenerar PDF con datos actuales"
        >
          {isLoading
            ? <Loader2 className="w-3 h-3 animate-spin" />
            : <FileDown className="w-3 h-3" />}
          {isLoading ? stateLabel : 'Regenerar'}
        </button>
      </div>
    );
  }

  /* No PDF yet */
  if (!patient) return (
    <p className="text-[10px] text-gray-400 italic">Sin PDF generado.</p>
  );

  return (
    <button
      onClick={handleGenerate}
      disabled={isLoading}
      className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 transition-colors disabled:opacity-50"
    >
      {isLoading
        ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
        : <FileDown className="w-3.5 h-3.5" />}
      {isLoading ? (stateLabel ?? 'Procesando…') : 'Generar PDF'}
    </button>
  );
}

/* ── Main drawer ─────────────────────────────────────── */
export default function DocumentViewer({
  document: doc,
  patientId,
  patient,
  onClose,
  onEdit,
}) {
  if (!doc) return null;

  const cfg      = getDocumentTypeConfig(doc.documentType);
  const isLocked = doc.metadata?.locked;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div
        className="relative z-10 flex flex-col bg-white shadow-2xl w-full max-w-xl h-full"
        onClick={e => e.stopPropagation()}>

        {/* ── Header ──────────────────────────────────── */}
        <div className="px-6 pt-5 pb-4 border-b border-gray-100 shrink-0"
             style={{ borderTop: `3px solid ${cfg.color}` }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cfg.icon}</span>
              <div>
                <h2 className="text-lg font-extrabold text-gray-900 leading-tight">{cfg.label}</h2>
                <p className="text-xs text-gray-400">{cfg.specialty}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3">
            <StatusChanger document={doc} patientId={patientId} />
            {!isLocked && onEdit && (
              <button
                onClick={() => onEdit(doc)}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium">
                <Pencil className="w-3 h-3" />
                Editar
              </button>
            )}
            {isLocked && (
              <span className="text-[10px] text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
                🔒 Bloqueado
              </span>
            )}
          </div>
        </div>

        {/* ── Audit ───────────────────────────────────── */}
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 shrink-0">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] text-gray-500">
            <span>Creado: <strong className="text-gray-700">{formatTimestamp(doc.createdAt)}</strong></span>
            <span>Por: <strong className="text-gray-700">{doc.createdBy?.name || '—'}</strong></span>
            <span>Actualizado: <strong className="text-gray-700">{formatTimestamp(doc.updatedAt)}</strong></span>
            <span>Por: <strong className="text-gray-700">{doc.updatedBy?.name || '—'}</strong></span>
          </div>
        </div>

        {/* ── Clinical data ────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
            Datos clínicos
          </p>
          <ClinicalDataSection data={doc.clinicalData} />
        </div>

        {/* ── Footer with PDF actions ──────────────────── */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 shrink-0 space-y-3">
          <PDFSection doc={doc} patientId={patientId} patient={patient} />
          <div className="flex items-center justify-between text-[10px] text-gray-400">
            <span>v{doc.version ?? 1} · ID: {doc.id?.slice(0, 8)}…</span>
            {doc.metadata?.printable && (
              <span className="text-green-600 font-medium">✓ Imprimible</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}