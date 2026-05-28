import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Loader2, CheckCircle2, X, Unlink } from 'lucide-react';
import { THERAPISTS_CONFIG } from './therapyConstants';
import useStore from '../../store/useStore';

function fmtDate(iso) {
  if (!iso) return '—';
  try { return format(parseISO(iso), "dd 'de' MMMM yyyy", { locale: es }); }
  catch { return iso; }
}

export default function PackageSessionModal({ pkg, session, onSave, onClose, busy }) {
  const { therapies } = useStore();
  const isDone = session?.status === 'completada';

  // Therapies for this patient (to link)
  const patientTherapies = therapies
    .filter((t) => t.patientId === pkg?.patientId && t.status === 'asistio')
    .sort((a, b) => b.date?.localeCompare(a.date ?? '') ?? 0)
    .slice(0, 20);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      date:      session?.date      ?? new Date().toISOString().slice(0, 10),
      therapist: session?.therapist ?? pkg?.therapist ?? '',
      therapyId: session?.therapyId ?? '',
      notes:     session?.notes     ?? '',
    },
  });

  const onFormSubmit = (data) => {
    onSave({
      ...data,
      status: 'completada',
    });
  };

  const handleUnmark = () => {
    onSave({ date: null, therapist: null, therapyId: null, notes: '', status: 'pendiente' });
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex items-start justify-between">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
              {pkg?.patientName}
            </p>
            <h3 className="text-base font-extrabold text-hm-primary">
              Sesión {session?.sessionNumber} de 8
            </h3>
            {isDone && (
              <p className="text-xs text-green-600 font-semibold mt-0.5">
                Completada el {fmtDate(session.date)}
              </p>
            )}
          </div>
          <button onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="px-5 py-4 space-y-4">

          {/* Fecha */}
          <div className="form-group mb-0">
            <label className="label">Fecha de la sesión *</label>
            <input type="date" className={`input ${errors.date ? 'input-error' : ''}`}
              {...register('date', { required: 'Requerido' })} />
            {errors.date && <p className="error-msg">{errors.date.message}</p>}
          </div>

          {/* Terapeuta */}
          <div className="form-group mb-0">
            <label className="label">Terapeuta</label>
            <input
              list="pkg-session-therapists"
              className="input"
              placeholder="Nombre del terapeuta"
              {...register('therapist')}
            />
            <datalist id="pkg-session-therapists">
              {THERAPISTS_CONFIG.map((t) => <option key={t.id} value={t.name} />)}
            </datalist>
          </div>

          {/* Vincular a terapia agendada */}
          {patientTherapies.length > 0 && (
            <div className="form-group mb-0">
              <label className="label">Vincular a terapia de la agenda (opcional)</label>
              <select className="input" {...register('therapyId')}>
                <option value="">— Sin vincular —</option>
                {patientTherapies.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.date} · {t.therapyType} · {t.therapist || '—'}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Notas */}
          <div className="form-group mb-0">
            <label className="label">Notas de la sesión</label>
            <textarea rows={2} className="input resize-none" placeholder="Observaciones..."
              {...register('notes')} />
          </div>

          {/* Acciones */}
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            {isDone && (
              <button type="button" onClick={handleUnmark} disabled={busy}
                className="btn btn-secondary btn-sm flex items-center gap-1.5 text-amber-600 border-amber-200 hover:bg-amber-50">
                <Unlink className="w-3.5 h-3.5" /> Desmarcar
              </button>
            )}
            <div className="flex gap-2 ml-auto">
              <button type="button" onClick={onClose} className="btn btn-secondary">Cancelar</button>
              <button type="submit" disabled={busy} className="btn btn-primary flex items-center gap-1.5">
                {busy
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <><CheckCircle2 className="w-4 h-4" /> {isDone ? 'Actualizar' : 'Marcar completada'}</>
                }
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}