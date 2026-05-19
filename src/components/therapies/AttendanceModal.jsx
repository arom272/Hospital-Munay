import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { ALL_STATUSES, STATUS_CONFIG, getSpecialtyStyle } from './therapyConstants';

export default function AttendanceModal({ therapy, onSave, onClose }) {
  const [status, setStatus] = useState(therapy?.status || 'programado');
  const [note, setNote]     = useState(therapy?.attendanceNote || '');
  const [busy, setBusy]     = useState(false);
  const spec = getSpecialtyStyle(therapy?.therapyType);

  const handleSave = async () => {
    setBusy(true);
    await onSave({ status, notes: note });
    setBusy(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
         onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100"
             style={{ borderLeft: `4px solid ${spec.color}`, borderRadius: '0.75rem 0.75rem 0 0' }}>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{therapy?.patientName}</p>
            <p className="text-xs text-gray-500">
              {therapy?.therapyType} · {therapy?.startTime}
              {therapy?.therapist ? ` · ${therapy.therapist}` : ''}
            </p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Estado de asistencia</p>
          <div className="grid grid-cols-3 gap-1.5 mb-4">
            {ALL_STATUSES.map(s => {
              const cfg = STATUS_CONFIG[s];
              const active = status === s;
              return (
                <button key={s} onClick={() => setStatus(s)}
                  className={`text-xs rounded-lg border px-2 py-2 text-left transition-all font-medium leading-tight
                    ${active
                      ? `ring-2 ring-offset-1 border-transparent shadow-sm ${cfg.tw}`
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                  <span className="mr-1">{cfg.icon}</span>
                  {cfg.label}
                </button>
              );
            })}
          </div>

          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1">Observación (opcional)</label>
            <textarea
              rows={2}
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder='Ej: "No asistió por enfermedad", "Llegó 20 min tarde"'
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button onClick={onClose} className="btn-secondary btn btn-sm">Cancelar</button>
            <button onClick={handleSave} disabled={busy} className="btn-primary btn btn-sm">
              {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Guardar asistencia'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
