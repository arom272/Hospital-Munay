import { useState } from 'react';
import { Eye, Pencil, Trash2, Printer, Plus, Loader2 } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import ConfirmDialog from '../../../components/ui/ConfirmDialog';
import { deleteDocument } from '../services/documentService';
import { getDocumentTypeConfig, formatDateOnly } from '../utils/documentUtils';
import DocumentStatusBadge from './DocumentStatusBadge';
import toast from 'react-hot-toast';

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-gray-400">
      <div className="text-4xl mb-3">📁</div>
      <p className="text-sm font-medium text-gray-500">Sin documentos clínicos</p>
      <p className="text-xs mt-1">Crea el primer documento usando el botón de arriba.</p>
    </div>
  );
}

export default function DocumentTable({
  documents = [],
  loading    = false,
  patientId,
  onView,
  onEdit,
  onNew,
}) {
  const { canEdit, isAdmin } = useAuth();
  const [delTarget, setDelTarget] = useState(null);

  const handleDelete = async () => {
    if (!delTarget) return;
    try {
      await deleteDocument(patientId, delTarget.id);
      toast.success('Documento eliminado');
    } catch (e) {
      toast.error(e.message);
    } finally {
      setDelTarget(null);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Documentos clínicos · {documents.length}
        </p>
        {canEdit && (
          <button onClick={onNew} className="btn btn-primary btn-sm gap-1">
            <Plus className="w-3.5 h-3.5" />
            Nuevo documento
          </button>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-gray-300" />
        </div>
      ) : documents.length === 0 ? (
        <EmptyState />
      ) : (
        /* Desktop table */
        <div className="rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['Fecha', 'Tipo', 'Especialidad', 'Profesional', 'Estado', ''].map(h => (
                  <th key={h} className="text-left px-4 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {documents.map(doc => {
                const cfg = getDocumentTypeConfig(doc.documentType);
                return (
                  <tr key={doc.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                      {formatDateOnly(doc.createdAt)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{cfg.icon}</span>
                        <span className="text-sm font-semibold text-gray-800">{cfg.label}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">{cfg.specialty}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 max-w-[140px] truncate">
                      {doc.createdBy?.name || '—'}
                    </td>
                    <td className="px-4 py-3">
                      <DocumentStatusBadge status={doc.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => onView(doc)}
                          title="Ver"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        {canEdit && (
                          <button
                            onClick={() => onEdit(doc)}
                            title="Editar"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          onClick={() => onView(doc)}
                          title="Imprimir"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
                          <Printer className="w-3.5 h-3.5" />
                        </button>
                        {isAdmin && (
                          <button
                            onClick={() => setDelTarget(doc)}
                            title="Eliminar"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
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
      )}

      <ConfirmDialog
        open={!!delTarget}
        title="Eliminar documento"
        message={`¿Eliminar "${getDocumentTypeConfig(delTarget?.documentType).label}"? Esta acción no se puede deshacer.`}
        onConfirm={handleDelete}
        onCancel={() => setDelTarget(null)}
      />
    </>
  );
}
