import { useState, useMemo, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Zap, Search, X, UserPlus } from 'lucide-react';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';
import toast from 'react-hot-toast';
import { getTypeInfo } from '../../utils/patientTypes';
import useStore from '../../store/useStore';
import { addPatient } from '../../services/patientService';
import Modal from '../ui/Modal';
import PatientForm from '../patients/PatientForm';

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
  if (!age) return '';
  const parts = [];
  if (age.years > 0)  parts.push(`${age.years}a`);
  if (age.months > 0) parts.push(`${age.months}m`);
  if (age.days > 0 || parts.length === 0) parts.push(`${age.days}d`);
  return parts.join(' ');
}

const SURGERY_OPTIONS = [
  'Plastia del Complejo Naso Labial (PCNL)',
  'Rinoplastia',
  'Colgajo Vomeriano + Adherencia Labial',
  'Palatoplastia',
  'Queiloplastia',
  'Gingivoperioplastia (GPP)',
  'Cierre de Fistula',
];

export default function QuickSurgeryForm({ initialDate, onSubmit, onCancel, busy }) {
  const { patients } = useStore();

  // ── Búsqueda de paciente ──────────────────────────────────────────────────
  const [patientSearch,   setPatientSearch]   = useState('');
  const [dropdownOpen,    setDropdownOpen]    = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const dropdownRef = useRef(null);

  // ── Tipo de cirugía ───────────────────────────────────────────────────────
  const [surgerySelect,  setSurgerySelect]  = useState('');
  const [surgeryOther,   setSurgeryOther]   = useState('');
  const [surgeryTypeErr, setSurgeryTypeErr] = useState(false);

  // ── Nuevo paciente modal ──────────────────────────────────────────────────
  const [newPatientOpen, setNewPatientOpen] = useState(false);
  const [newPatientBusy, setNewPatientBusy] = useState(false);

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

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: { patientId: '', date: initialDate ?? '', startTime: '', quotation: '' },
  });

  const age     = calcAge(selectedPatient?.birthDate);
  const ageText = age ? fmtAge(age) : '';

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

  // ── Guardar nuevo paciente y auto-seleccionarlo ───────────────────────────
  const handleNewPatientSave = async (patientData) => {
    setNewPatientBusy(true);
    try {
      const ref = await addPatient(patientData);
      toast.success('Paciente registrado');
      // Auto-seleccionar el paciente recién creado sin esperar a que el store se actualice
      const newPatient = { id: ref.id, ...patientData };
      selectPatient(newPatient);
      setNewPatientOpen(false);
    } catch (err) {
      toast.error('Error al registrar: ' + err.message);
    } finally {
      setNewPatientBusy(false);
    }
  };

  const onFormSubmit = (data) => {
    const surgeryType = surgerySelect === '__otro__' ? surgeryOther.trim() : surgerySelect;
    if (!surgeryType) { setSurgeryTypeErr(true); return; }
    setSurgeryTypeErr(false);
    onSubmit({
      ...data,
      surgeryType,
      patientName: selectedPatient?.fullName ?? '',
      patientAge:  ageText,
      diagnosis:   selectedPatient?.diagnosis ?? '',
      status:      'programado',
      patientType: selectedPatient?.patientType ?? 'ext',
      isQuickEntry: true,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">

        {/* Badge estado fijo */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-200">
          <Zap className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-sm font-semibold text-blue-700">Estado: Programado</span>
        </div>

        {/* ── Búsqueda de paciente ── */}
        <div ref={dropdownRef} className="relative">
          <input type="hidden" {...register('patientId', { required: 'Selecciona un paciente' })} />

          <div className="flex items-center justify-between mb-1">
            <label className="label mb-0">Paciente *</label>
            <button
              type="button"
              onClick={() => setNewPatientOpen(true)}
              className="flex items-center gap-1 text-xs font-semibold text-hm-primary hover:text-hm-secondary-600 transition"
            >
              <UserPlus className="w-3.5 h-3.5" />
              Nuevo paciente
            </button>
          </div>

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
            <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-card-hover max-h-48 overflow-y-auto">
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
                      <p className="text-xs text-gray-500 truncate">
                        {p.diagnosis}{a ? ` · ${fmtAge(a)}` : ''}
                      </p>
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

          {/* Card del paciente seleccionado */}
          {selectedPatient && (
            <div className="mt-2 p-3 rounded-xl border grid grid-cols-2 gap-x-4 gap-y-1.5"
              style={{ backgroundColor: 'rgba(9,214,212,0.06)', borderColor: 'rgba(9,214,212,0.3)' }}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-0.5">Edad</p>
                <p className="text-sm font-semibold text-hm-primary">{ageText || '—'}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-0.5">Diagnóstico</p>
                <p className="text-sm font-semibold text-hm-primary">{selectedPatient.diagnosis || '—'}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Tipo de cirugía ── */}
        <div className="form-group mb-0">
          <label className="label">Tipo de cirugía *</label>
          <select
            className={`input ${surgeryTypeErr ? 'input-error' : ''}`}
            value={surgerySelect}
            onChange={(e) => {
              setSurgerySelect(e.target.value);
              setSurgeryTypeErr(false);
              if (e.target.value !== '__otro__') setSurgeryOther('');
            }}
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

        {/* ── Costo ── */}
        <div className="form-group mb-0">
          <label className="label">Costo de la cirugía ($)</label>
          <input
            type="number"
            min="0"
            className="input"
            placeholder="ej: 1500"
            {...register('quotation')}
          />
        </div>

        {/* ── Fecha + Hora ── */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-0">
            <label className="label">Fecha *</label>
            <input type="date" className={`input ${errors.date ? 'input-error' : ''}`}
              {...register('date', { required: 'Requerido' })} />
            {errors.date && <p className="error-msg">{errors.date.message}</p>}
          </div>
          <div className="form-group mb-0">
            <label className="label">Hora (opcional)</label>
            <input type="time" className="input" {...register('startTime')} />
          </div>
        </div>

        {/* ── Acciones ── */}
        <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
          <button type="button" onClick={onCancel} className="btn-secondary btn">Cancelar</button>
          <button type="submit" disabled={busy} className="btn-primary btn">
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Programar'}
          </button>
        </div>
      </form>

      {/* ── Modal registro de nuevo paciente ── */}
      <Modal
        open={newPatientOpen}
        onClose={() => setNewPatientOpen(false)}
        title="Nuevo paciente"
        size="lg"
      >
        <PatientForm
          initial={null}
          onSubmit={handleNewPatientSave}
          onCancel={() => setNewPatientOpen(false)}
          busy={newPatientBusy}
        />
      </Modal>
    </>
  );
}
