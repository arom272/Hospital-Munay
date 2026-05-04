import { AlertTriangle } from 'lucide-react';

export default function ConfirmDialog({ open, title, message, onConfirm, onCancel, confirmLabel = 'Eliminar', danger = true }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6">
        <div className="flex gap-4">
          <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${danger ? 'bg-red-100' : 'bg-yellow-100'}`}>
            <AlertTriangle className={`w-5 h-5 ${danger ? 'text-red-600' : 'text-yellow-600'}`} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{message}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-6 justify-end">
          <button onClick={onCancel} className="btn-secondary btn">
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className={danger ? 'btn-danger btn' : 'btn-primary btn'}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
