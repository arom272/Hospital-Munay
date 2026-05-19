import { useEffect, useRef, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Search, X, ChevronDown, UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';
import useStore from '../../store/useStore';
import Modal from '../ui/Modal';
import PatientForm from '../patients/PatientForm';
import { addPatient } from '../../services/patientService';
import {
  ALL_SPECIALTY_KEYS, ALL_STATUSES, STATUS_CONFIG, calcAge,
} from './therapyConstants';

/* ── Patient search combobox ─────────────────────────── */
function PatientCombobox({ patients, value, onChange, error }) {
  const [query,  setQuery]  = useState('');
  const [open,   setOpen]   = useState(false);
  const wrapRef  = useRef(null);
  const inputRef = useRef(null);

  /* initialize display text from existing value */
  useEffect(() => {
    if (value) {
      const p = patients.find(p => p.id === value);
      if (p) setQuery(p.fullName ?? '');
    } else {
      setQuery('');
    }
  }, [value, patients]);

  /* close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const base = q
      ? patients.filter(p =>
          p.fullName?.toLowerCase().includes(q) ||
          p.patientCode?.toLowerCase().includes(q) ||
          p.diagnosis?.toLowerCase().includes(q)
        )
      : patients;
    return base.slice(0, 12);
  }, [patients, query]);

  const selectedPat = patients.find(p => p.id === value);

  const handleSelect = (p) => {
    onChange(p.id);
    setQuery(p.fullName ?? '');
    setOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div ref={wrapRef} className="relative">
      <div className={`flex items-center border rounded-lg bg-white transition-colors
        ${error ? 'border-red-400' : open ? 'border-blue-400 ring-2 ring-blue-100' : 'border-gray-200'}`}>
        <Search className="w-4 h-4 text-gray-400 ml-3 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); onChange(''); }}
          onFocus={() => setOpen(true)}
          onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}
          placeholder="Buscar por nombre, código o diagnóstico…"
          className="flex-1 px-2 py-2 text-sm bg-transparent outline-none placeholder-gray-400"
        />
        {value && (
          <button type="button" onClick={handleClear} className="p-1.5 mr-1 text-gray-400 hover:text-gray-600 rounded">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        <button type="button" onClick={() => setOpen(o => !o)} className="p-1.5 mr-1 text-gray-400 hover:text-gray-600 rounded">
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
             style={{ maxHeight: 280 }}>
          {filtered.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-400 text-center">
              {query ? 'Sin resultados para esta búsqueda' : 'Sin pacientes registrados'}
            </div>
          ) : (
            <ul className="overflow-y-auto" style={{ maxHeight: 278 }}>
              {filtered.map(p => (
                <li key={p.id}
                    onClick={() => handleSelect(p)}
                    className={`px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0
                      ${p.id === value ? 'bg-blue-50' : ''}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 leading-tight truncate">{p.fullName}</p>
                      {p.diagnosis && (
                        <p className="text-xs text-gray-500 truncate mt-0.5">{p.diagnosis}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-0.5">
                      {p.patientCode && (
                        <span className="text-[10px] font-mono text-gray-400">{p.patientCode}</span>
                      )}
                      {calcAge(p.birthDate) && (
                        <span className="text-[10px] text-gray-400">{calcAge(p.birthDate)}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="px-3 py-1.5 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-right">
            {filtered.length} de {patients.length} pacientes
          </div>
        </div>
      )}

      {/* Selected patient mini-card */}
      {selectedPat && (
        <div className="mt-1.5 flex flex-wrap gap-3 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5 text-xs text-blue-700">
          {calcAge(selectedPat.birthDate) && <span>Edad: <strong>{calcAge(selectedPat.birthDate)}</strong></span>}
          {selectedPat.diagnosis  && <span>Dx: <strong>{selectedPat.diagnosis}</strong></span>}
          {selectedPat.guardian   && <span>Tutor: <strong>{selectedPat.guardian}</strong></span>}
          {selectedPat.guardianPhone && <span>Tel: <strong>{selectedPat.guardianPhone}</strong></span>}
        </div>
      )}
    </div>
  );
}

/* ── Therapist selector ─────────────────────────────── */
function TherapistSelector({ specialty, value, onChange, therapistsList = [], dayOfWeek = null }) {
  /* filter by specialty, then optionally by day availability */
  const { available, unavailable } = useMemo(() => {
    const bySpec = specialty
      ? therapistsList.filter(t => t.specialty === specialty)
      : therapistsList;

    if (dayOfWeek === null) return { available: bySpec, unavailable: [] };

    const avail = bySpec.filter(t => t.schedule?.some(s => s.day === dayOfWeek));
    const unavail = bySpec.filter(t => !t.schedule?.some(s => s.day === dayOfWeek));
    return { available: avail, unavailable: unavail };
  }, [therapistsList, specialty, dayOfWeek]);

  const configured = [...available, ...unavailable];
  const [customMode, setCustomMode] = useState(false);

  useEffect(() => {
    if (value && configured.length > 0) {
      const inList = configured.some(t => t.name === value);
      if (!inList) setCustomMode(true);
    }
  }, [value, configured]);

  if (customMode || configured.length === 0) {
    return (
      <div className="space-y-1">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          className="input"
          placeholder="Nombre del profesional"
        />
        {configured.length > 0 && (
          <button type="button" onClick={() => { setCustomMode(false); onChange(''); }}
            className="text-xs text-blue-600 hover:text-blue-800">
            ← Ver lista configurada
          </button>
        )}
      </div>
    );
  }

  const renderTherapistBtn = (t, isUnavailable) => {
    const active = value === t.name;
    const dayLabels = t.schedule?.map(s =>
      `${s.dayName} (${s.shifts.map(sh => sh === 'mañana' ? 'M' : 'T').join('+')})`
    ).join(' · ') ?? '';
    return (
      <button
        key={t.id ?? t.name}
        type="button"
        onClick={() => !isUnavailable && onChange(active ? '' : t.name)}
        className={`text-left rounded-lg border px-3 py-2 text-xs transition-all
          ${active
            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
            : isUnavailable
            ? 'bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed opacity-60'
            : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'}`}>
        <div className="font-semibold">{t.name}</div>
        <div className={`text-[10px] mt-0.5 ${active ? 'text-blue-200' : isUnavailable ? 'text-gray-300' : 'text-gray-400'}`}>
          {t.specialty} · {dayLabels}
          {isUnavailable && dayOfWeek !== null && ' · no disponible este día'}
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-1.5">
      {dayOfWeek !== null && available.length === 0 && unavailable.length > 0 && (
        <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-1.5 border border-amber-100">
          Sin terapistas disponibles para este día según su horario registrado.
        </p>
      )}
      <div className="grid grid-cols-1 gap-1">
        {available.map(t => renderTherapistBtn(t, false))}
        {unavailable.map(t => renderTherapistBtn(t, true))}
      </div>
      <button type="button" onClick={() => setCustomMode(true)}
        className="text-xs text-gray-400 hover:text-gray-600">
        + Ingresar otro nombre
      </button>
    </div>
  );
}

/* ── Main form ──────────────────────────────────────── */
export default function TherapyForm({ initial, onSubmit, onCancel, busy }) {
  const { patients, therapists } = useStore();
  const allPats = useMemo(
    () => [...patients].sort((a, b) => (a.fullName ?? '').localeCompare(b.fullName ?? '', 'es')),
    [patients]
  );

  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm({
    defaultValues: initial ?? {
      patientId: '', therapyType: '', date: '', startTime: '',
      durationMinutes: 45, therapist: '', status: 'programado', notes: '',
    },
  });

  useEffect(() => {
    if (initial) reset(initial);
  }, [initial]);

  const patientId   = watch('patientId');
  const therapyType = watch('therapyType');
  const therapist   = watch('therapist');
  const watchDate   = watch('date');

  /* day of week (1=Mon … 5=Fri) from selected date */
  const dayOfWeek = useMemo(() => {
    if (!watchDate) return null;
    return new Date(watchDate + 'T12:00').getDay();
  }, [watchDate]);

  /* ── nuevo paciente ────────────────────────────────── */
  const [newPatOpen, setNewPatOpen] = useState(false);
  const [savingPat,  setSavingPat]  = useState(false);

  const handleNewPatient = async (data) => {
    setSavingPat(true);
    try {
      const ref = await addPatient(data);
      setValue('patientId', ref.id, { shouldValidate: true });
      setNewPatOpen(false);
      toast.success('Paciente registrado');
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSavingPat(false);
    }
  };

  const onFormSubmit = (data) => {
    const patient = patients.find(p => p.id === data.patientId);
    onSubmit({
      ...data,
      patientName: patient?.fullName ?? '',
      patientType: patient?.patientType ?? 'external',
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">

      {/* ── Paciente (búsqueda) ── */}
      <div className="form-group mb-0">
        <div className="flex items-center justify-between mb-1">
          <label className="label mb-0">Paciente *</label>
          <button
            type="button"
            onClick={() => setNewPatOpen(true)}
            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors">
            <UserPlus className="w-3.5 h-3.5" />
            Nuevo paciente
          </button>
        </div>
        {/* hidden input for react-hook-form validation */}
        <input type="hidden" {...register('patientId', { required: 'Selecciona un paciente' })} />
        <PatientCombobox
          patients={allPats}
          value={patientId}
          onChange={id => setValue('patientId', id, { shouldValidate: true })}
          error={!!errors.patientId}
        />
        {errors.patientId && <p className="error-msg mt-1">{errors.patientId.message}</p>}
      </div>

      {/* ── Especialidad + estado ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group mb-0">
          <label className="label">Especialidad *</label>
          <select
            className={`input ${errors.therapyType ? 'input-error' : ''}`}
            {...register('therapyType', { required: 'Requerido' })}>
            <option value="">Seleccionar...</option>
            {ALL_SPECIALTY_KEYS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.therapyType && <p className="error-msg">{errors.therapyType.message}</p>}
        </div>
        <div className="form-group mb-0">
          <label className="label">Estado</label>
          <select className="input" {...register('status')}>
            {ALL_STATUSES.map(s => (
              <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Fecha, hora, duración ── */}
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

      {/* ── Terapeuta ── */}
      <div className="form-group mb-0">
        <label className="label">Terapeuta</label>
        <TherapistSelector
          specialty={therapyType}
          value={therapist}
          onChange={v => setValue('therapist', v)}
          therapistsList={therapists}
          dayOfWeek={dayOfWeek}
        />
        {/* keep RHF registered so the value is included in submit */}
        <input type="hidden" {...register('therapist')} />
      </div>

      {/* ── Observaciones ── */}
      <div className="form-group mb-0">
        <label className="label">Observaciones</label>
        <textarea rows={2} className="input resize-none" {...register('notes')} />
      </div>

      <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
        <button type="button" onClick={onCancel} className="btn-secondary btn">Cancelar</button>
        <button type="submit" disabled={busy} className="btn-primary btn">
          {busy
            ? <Loader2 className="w-4 h-4 animate-spin" />
            : initial?.id ? 'Guardar cambios' : 'Agendar terapia'}
        </button>
      </div>
    </form>

    {/* ── Nuevo paciente modal ── */}
    <Modal open={newPatOpen} onClose={() => setNewPatOpen(false)}
      title="Registrar nuevo paciente" size="lg">
      <PatientForm
        onSubmit={handleNewPatient}
        onCancel={() => setNewPatOpen(false)}
        busy={savingPat}
      />
    </Modal>
    </>
  );
}
