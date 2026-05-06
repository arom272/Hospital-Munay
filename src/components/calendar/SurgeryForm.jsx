import { useEffect, useState, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, AlertTriangle, Search, X, User } from 'lucide-react';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';
import { getSameDaySurgeries } from '../../utils/conflictChecker';
import { getTypeInfo } from '../../utils/patientTypes';
import useStore from '../../store/useStore';

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
  if (!age) return null;
  const parts = [];
  if (age.years > 0)  parts.push(`${age.years}a`);
  if (age.months > 0) parts.push(`${age.months}m`);
  if (age.days > 0 || parts.length === 0) parts.push(`${age.days}d`);
  return parts.join(' ');
}

const STATUS_OPTIONS = ['programado', 'confirmado', 'realizado', 'cancelado'];

const SURGERY_OPTIONS = [
  'Plastia del Complejo Naso Labial (PCNL)',
  'Rinoplastia',
  'Colgajo Vomeriano + Adherencia Labial',
  'Palatoplastia',
  'Queiloplastia',
  'Gingivoperioplastia (GPP)',
  'Cierre de Fistula',
];

function initSurgerySelect(val) {
  if (!val) return '';
  return SURGERY_OPTIONS.includes(val) ? val : '__otro__';
}

export default function SurgeryForm({ initial, onSubmit, onCancel, busy }) {
  const { patients, surgeries } = useStore();

  // ── Patient search ─────────────────────────────────────
  const [patientSearch,  setPatientSearch]  = useState(initial?.patientName ?? '');
  const [dropdownOpen,   setDropdownOpen]   = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(
    initial?.patientId ? patients.find((p) => p.id === initial.patientId) : null
  );
  const dropdownRef = useRef(null);

  // ── Surgery type select ────────────────────────────────
  const [surgerySelect, setSurgerySelect] = useState(initSurgerySelect(initial?.surgeryType));
  const [surgeryOther,  setSurgeryOther]  = useState(
    initial?.surgeryType && !SURGERY_OPTIONS.includes(initial.surgeryType) ? initial.surgeryType : ''
  );
  const [surgeryTypeErr, setSurgeryTypeErr] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filteredPatients = useMemo(() => {
    const q    = patientSearch.toLowerCase().trim();
    const code = q.replace(/^mny\s*-?\s*/i, '');
    if (!q) return patients;
    return patients.filter((p) =>
      p.fullName?.toLowerCase().includes(q) ||
      p.diagnosis?.toLowerCase().includes(q) ||
      (p.patientCode && p.patientCode.toLowerCase().includes(code)) ||
      (p.patientCode && `mny-${p.patientCode}`.toLowerCase().includes(q))
    );
  }, [patients, patientSearch]);

  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm({
    defaultValues: initial ?? {
      patientId: '', date: '', startTime: '',
      admissionTime: '', fastingTime: '', peso: '', talla: '',
      surgeon: '', anesthesiologist: '', scrubNurse: '',
      status: 'programado', notes: '',
      quotation: '', paymentComplete: false, amountPaid: '',
      paymentDate: '', partialPaymentDate: '',
      socialAid: false, socialAidAmount: '', adminNotes: '',
    },
  });

  useEffect(() => {
    if (initial) {
      reset(initial);
      setPatientSearch(initial.patientName ?? '');
      setSelectedPatient(patients.find((p) => p.id === initial.patientId) ?? null);
      setSurgerySelect(initSurgerySelect(initial.surgeryType));
      setSurgeryOther(initial.surgeryType && !SURGERY_OPTIONS.includes(initial.surgeryType) ? initial.surgeryType : '');
    }
  }, [initial]);

  const date            = watch('date');
  const patientId       = watch('patientId');
  const paymentComplete = watch('paymentComplete');
  const currentStatus   = watch('status');
  const amountPaid      = watch('amountPaid');

  useEffect(() => {
    if (patientId && !selectedPatient) {
      const p = patients.find((pp) => pp.id === patientId);
      if (p) { setSelectedPatient(p); setPatientSearch(p.fullName); }
    }
  }, [patientId, patients]);

  useEffect(() => {
    if (paymentComplete && currentStatus === 'programado') {
      setValue('status', 'confirmado');
    } else if (!paymentComplete && currentStatus === 'confirmado') {
      setValue('status', 'programado');
    }
  }, [paymentComplete]);

  const sameDaySurgeries = date ? getSameDaySurgeries(surgeries, { date, excludeId: initial?.id }) : [];

  const selectPatient = (p) => {
    setSelectedPatient(p);
    setPatientSearch(p.fullName);
    setValue('patientId', p.id, { shouldValidate: true });
    setDropdownOpen(false);
  };

  const clearPatient = () => {
    setSelectedPatient(null);
    setPatientSearch('');
    setValue('patientId', '');
  };

  const onFormSubmit = (data) => {
    const surgeryType = surgerySelect === '__otro__' ? surgeryOther.trim() : surgerySelect;
    if (!surgeryType) { setSurgeryTypeErr(true); return; }
    setSurgeryTypeErr(false);
    const patient = patients.find((p) => p.id === data.patientId);
    onSubmit({ ...data, surgeryType, patientName: patient?.fullName ?? '', patientType: patient?.patientType ?? 'ext' });
  };

  const age = calcAge(selectedPatient?.birthDate);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
      {/* Same-day warning */}
      {sameDaySurgeries.length > 0 && (
        <div className="flex gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-3 text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
          <div>
            <p className="font-semibold">
              {sameDaySurgeries.length} cirugía{sameDaySurgeries.length > 1 ? 's' : ''} ya programada{sameDaySurgeries.length > 1 ? 's' : ''} para este día
            </p>
            {sameDaySurgeries.map((s) => (
              <p key={s.id} className="text-xs mt-0.5 text-amber-700">
                · {s.patientName} — {s.startTime} ({s.surgeryType})
              </p>
            ))}
          </div>
        </div>
      )}

      {/* ── Paciente ──────────────────────────────────────── */}
      <div ref={dropdownRef} className="relative">
        <input type="hidden" {...register('patientId', { required: 'Selecciona un paciente' })} />
        <label className="label">Paciente *</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text" value={patientSearch} autoComplete="off"
            onChange={(e) => { setPatientSearch(e.target.value); setDropdownOpen(true); if (!e.target.value) clearPatient(); }}
            onFocus={() => setDropdownOpen(true)}
            placeholder="Buscar por nombre, código MNY- o diagnóstico..."
            className={`input pl-9 pr-8 ${errors.patientId ? 'input-error' : ''}`}
          />
          {patientSearch && (
            <button type="button" onClick={clearPatient}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {dropdownOpen && filteredPatients.length > 0 && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-card-hover max-h-52 overflow-y-auto">
            {filteredPatients.map((p) => {
              const a  = calcAge(p.birthDate);
              const ti = getTypeInfo(p.patientType);
              return (
                    <button key={p.id} type="button" onClick={() => selectPatient(p)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-hm-secondary-100 text-left transition">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: ti.bg }} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-hm-primary truncate">{p.fullName}</p>
                          {p.patientCode && (
                            <span className="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded shrink-0"
                              style={{ backgroundColor: ti.bg }}>
                              {ti.label}-{p.patientCode}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 truncate">{p.diagnosis}{a !== null ? ` · ${a} años` : ''}</p>
                      </div>
                      <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0"
                        style={{ backgroundColor: ti.lightBg, color: ti.textColor }}>
                        {ti.label}
                      </span>
                    </button>
              );
            })}
          </div>
        )}
        {errors.patientId && <p className="error-msg">{errors.patientId.message}</p>}

        {selectedPatient && (
          <div className="mt-2 flex items-start gap-3 p-3 rounded-xl border" style={{ backgroundColor: 'rgba(9,214,212,0.06)', borderColor: 'rgba(9,214,212,0.3)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: getTypeInfo(selectedPatient.patientType).bg }}>
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-bold text-hm-primary">{selectedPatient.fullName}</p>
                {selectedPatient.patientCode && (
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: getTypeInfo(selectedPatient.patientType).bg, color: '#fff' }}>
                    {getTypeInfo(selectedPatient.patientType).label}-{selectedPatient.patientCode}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-600 mt-0.5">
                {selectedPatient.diagnosis}
                {age && <span className="ml-2 font-semibold" style={{ color: '#09D6D4' }}>· {fmtAge(age)}</span>}
              </p>
              {selectedPatient.guardian && (
                <p className="text-xs text-gray-400 mt-0.5">
                  Resp: {selectedPatient.guardian}{selectedPatient.guardianPhone ? ` — ${selectedPatient.guardianPhone}` : ''}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Tipo de cirugía ───────────────────────────────── */}
      <div className="form-group mb-0">
        <label className="label">Tipo de cirugía *</label>
        <select
          className={`input ${surgeryTypeErr ? 'input-error' : ''}`}
          value={surgerySelect}
          onChange={(e) => { setSurgerySelect(e.target.value); setSurgeryTypeErr(false); if (e.target.value !== '__otro__') setSurgeryOther(''); }}
        >
          <option value="">— Seleccionar tipo —</option>
          {SURGERY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          <option value="__otro__">Otro (especificar)</option>
        </select>
        {surgerySelect === '__otro__' && (
          <input
            className={`input mt-2 ${surgeryTypeErr ? 'input-error' : ''}`}
            placeholder="Especificar tipo de cirugía..."
            value={surgeryOther}
            onChange={(e) => { setSurgeryOther(e.target.value); setSurgeryTypeErr(false); }}
          />
        )}
        {surgeryTypeErr && <p className="error-msg">Selecciona o especifica el tipo de cirugía</p>}
      </div>

      {/* ── Fecha + hora inicio + hora internación ─────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="form-group mb-0">
          <label className="label">Fecha *</label>
          <input type="date" className={`input ${errors.date ? 'input-error' : ''}`}
            {...register('date', { required: 'Requerido' })} />
          {errors.date && <p className="error-msg">{errors.date.message}</p>}
        </div>
        <div className="form-group mb-0">
          <label className="label">Hora de inicio *</label>
          <input type="time" className={`input ${errors.startTime ? 'input-error' : ''}`}
            {...register('startTime', { required: 'Requerido' })} />
          {errors.startTime && <p className="error-msg">{errors.startTime.message}</p>}
        </div>
        <div className="form-group mb-0">
          <label className="label">Hora de internación</label>
          <input type="time" className="input" {...register('admissionTime')} />
        </div>
      </div>

      {/* ── Peso + talla + hora de ayuno ─────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="form-group mb-0">
          <label className="label">Peso (kg)</label>
          <input
            type="number" step="0.1" min="0"
            className="input" placeholder="ej: 23.5"
            {...register('peso')}
          />
        </div>
        <div className="form-group mb-0">
          <label className="label">Talla (cm)</label>
          <input
            type="number" step="0.5" min="0"
            className="input" placeholder="ej: 112"
            {...register('talla')}
          />
        </div>
        <div className="form-group mb-0">
          <label className="label">Hora de ayuno</label>
          <input
            type="time"
            className="input"
            {...register('fastingTime')}
          />
        </div>
      </div>

      {/* ── Equipo quirúrgico ─────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="form-group mb-0">
          <label className="label">Cirujano</label>
          <input className="input" placeholder="Dr. Nombre" {...register('surgeon')} />
        </div>
        <div className="form-group mb-0">
          <label className="label">Anestesiólogo</label>
          <input className="input" placeholder="Dr. Nombre" {...register('anesthesiologist')} />
        </div>
        <div className="form-group mb-0">
          <label className="label">Instrumentadora</label>
          <input className="input" placeholder="Nombre" {...register('scrubNurse')} />
        </div>
      </div>

      {/* ── Estado ───────────────────────────────────────── */}
      <div>
        <label className="label">Estado</label>
        <div className="flex gap-4 flex-wrap">
          {STATUS_OPTIONS.map((s) => (
            <label key={s} className="flex items-center gap-1.5 cursor-pointer text-sm">
              <input type="radio" value={s} {...register('status')} className="accent-hm-primary" />
              <span className="capitalize font-medium text-gray-700">{s}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ── Gestión Financiera ────────────────────────────── */}
      <div className="border border-hm-secondary-200 rounded-xl p-4 space-y-3" style={{ backgroundColor: '#f8fafc' }}>
        <p className="text-sm font-bold text-hm-primary">Gestión Financiera</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Cotización total ($)</label>
            <input type="number" min="0" className="input bg-white" {...register('quotation')} />
          </div>
          <div>
            <label className="label">Monto pagado ($)</label>
            <input type="number" min="0" className="input bg-white" {...register('amountPaid')} />
          </div>
        </div>

        <div className="flex gap-6 pt-1">
          <label className="flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700">
            <input type="checkbox" className="accent-hm-primary w-4 h-4" {...register('paymentComplete')} />
            Pago completo
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer font-medium text-gray-700">
            <input type="checkbox" className="accent-hm-primary w-4 h-4" {...register('socialAid')} />
            Ayuda social
          </label>
        </div>

        {paymentComplete && (
          <div>
            <label className="label">Fecha de pago completo</label>
            <input type="date" className="input bg-white" {...register('paymentDate')} />
          </div>
        )}
        {Number(amountPaid) > 0 && !paymentComplete && (
          <div>
            <label className="label">Fecha del último pago parcial</label>
            <input type="date" className="input bg-white" {...register('partialPaymentDate')} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Monto ayuda social ($)</label>
            <input type="number" min="0" className="input bg-white" {...register('socialAidAmount')} />
          </div>
          <div>
            <label className="label">Observaciones financieras</label>
            <input className="input bg-white" {...register('adminNotes')} />
          </div>
        </div>
      </div>

      {/* ── Notas clínicas ────────────────────────────────── */}
      <div className="form-group mb-0">
        <label className="label">Notas clínicas</label>
        <textarea rows={2} className="input resize-none" {...register('notes')} />
      </div>

      {/* ── Acciones ─────────────────────────────────────── */}
      <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
        <button type="button" onClick={onCancel} className="btn-secondary btn">Cancelar</button>
        <button type="submit" disabled={busy} className="btn-primary btn">
          {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : initial?.id ? 'Guardar cambios' : 'Programar cirugía'}
        </button>
      </div>
    </form>
  );
}
