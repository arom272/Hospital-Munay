import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import useStore from '../../store/useStore';

const THERAPY_TYPES = [
  'Fonoaudiología', 'Psicología', 'Nutrición',
  'Kinesiología', 'Terapia Ocupacional', 'Otro',
];

export default function TherapyForm({ initial, onSubmit, onCancel, busy }) {
  const { patients } = useStore();
  const activePats   = patients.filter((p) => p.status === 'activo');

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    defaultValues: initial ?? {
      patientId: '', therapyType: '', date: '', startTime: '',
      durationMinutes: 45, therapist: '', status: 'programado', notes: '',
    },
  });

  useEffect(() => { if (initial) reset(initial); }, [initial]);

  const patientId = watch('patientId');
  const selectedPatient = patients.find((p) => p.id === patientId);

  const onFormSubmit = (data) => {
    const patient = patients.find((p) => p.id === data.patientId);
    onSubmit({
      ...data,
      patientName: patient?.fullName ?? '',
      patientType: patient?.patientType ?? 'external',
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <div className="form-group mb-0">
        <label className="label">Paciente *</label>
        <select
          className={`input ${errors.patientId ? 'input-error' : ''}`}
          {...register('patientId', { required: 'Selecciona un paciente' })}
        >
          <option value="">Seleccionar paciente...</option>
          {activePats.map((p) => (
            <option key={p.id} value={p.id}>{p.fullName} — {p.diagnosis}</option>
          ))}
        </select>
        {errors.patientId && <p className="error-msg">{errors.patientId.message}</p>}
      </div>

      <div className="form-group mb-0">
        <label className="label">Tipo de terapia *</label>
        <select
          className={`input ${errors.therapyType ? 'input-error' : ''}`}
          {...register('therapyType', { required: 'Requerido' })}
        >
          <option value="">Seleccionar...</option>
          {THERAPY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.therapyType && <p className="error-msg">{errors.therapyType.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="form-group mb-0">
          <label className="label">Fecha *</label>
          <input type="date" className={`input ${errors.date ? 'input-error' : ''}`}
            {...register('date', { required: 'Requerido' })} />
          {errors.date && <p className="error-msg">{errors.date.message}</p>}
        </div>
        <div className="form-group mb-0">
          <label className="label">Hora *</label>
          <input type="time" className={`input ${errors.startTime ? 'input-error' : ''}`}
            {...register('startTime', { required: 'Requerido' })} />
          {errors.startTime && <p className="error-msg">{errors.startTime.message}</p>}
        </div>
        <div className="form-group mb-0">
          <label className="label">Duración (min)</label>
          <input type="number" min="15" max="240" step="5" className="input"
            {...register('durationMinutes')} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group mb-0">
          <label className="label">Terapeuta</label>
          <input className="input" placeholder="Nombre del profesional" {...register('therapist')} />
        </div>
        <div className="form-group mb-0">
          <label className="label">Estado</label>
          <select className="input" {...register('status')}>
            <option value="programado">Programado</option>
            <option value="confirmado">Confirmado</option>
            <option value="realizado">Realizado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
      </div>

      <div className="form-group mb-0">
        <label className="label">Observaciones</label>
        <textarea rows={2} className="input resize-none" {...register('notes')} />
      </div>

      <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
        <button type="button" onClick={onCancel} className="btn-secondary btn">Cancelar</button>
        <button type="submit" disabled={busy} className="btn-primary btn">
          {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : initial?.id ? 'Guardar cambios' : 'Agendar terapia'}
        </button>
      </div>
    </form>
  );
}
