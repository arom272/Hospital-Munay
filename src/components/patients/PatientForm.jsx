import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { differenceInYears, differenceInMonths, differenceInDays, isValid, parseISO } from 'date-fns';
import { getTypeInfo } from '../../utils/patientTypes';
import useStore from '../../store/useStore';

const DIAGNOSIS_OPTIONS = [
  'FLAP Izquierdo',
  'FLAP Derecho',
  'FLAP Bilateral',
  'FLA Izquierdo',
  'FLA Derecho',
  'FLA Bilateral',
  'Fisura Palatina',
];

function initDiagSelect(val) {
  if (!val) return '';
  return DIAGNOSIS_OPTIONS.includes(val) ? val : '__otro__';
}

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

function fmtAge({ years, months, days }) {
  const parts = [];
  if (years > 0)  parts.push(`${years} ${years === 1 ? 'año' : 'años'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'mes' : 'meses'}`);
  if (days > 0 || parts.length === 0) parts.push(`${days} ${days === 1 ? 'día' : 'días'}`);
  return parts.join(', ');
}

const NEXT_NEW_CODE = 1077;

function getNextCode(patients, patientType) {
  const nums = patients
    .filter(p => p.patientType === patientType)
    .map(p => parseInt(p.patientCode, 10))
    .filter(n => !isNaN(n));
  const max = nums.length ? Math.max(...nums) : NEXT_NEW_CODE - 1;
  return String(Math.max(max + 1, NEXT_NEW_CODE));
}

export default function PatientForm({ initial, onSubmit, onCancel, busy }) {
  const { patients } = useStore();
  const isEditing = !!initial?.id;

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
    defaultValues: initial ?? {
      patientCode: '', fullName: '', birthDate: '', diagnosis: '', idNumber: '',
      sex: '', address: '', guardian: '', guardianIdNumber: '', guardianPhone: '',
      allergies: '', patientType: 'mny',
    },
  });

  const [patientMode, setPatientMode] = useState('nuevo');

  const birthDate   = watch('birthDate');
  const patientType = watch('patientType');
  const age         = calcAge(birthDate);
  const typeInfo    = getTypeInfo(patientType);
  const isMunay     = patientType === 'mny';

  useEffect(() => {
    if (initial) {
      reset(initial);
      setDiagSelect(initDiagSelect(initial.diagnosis));
      setDiagOther(initial.diagnosis && !DIAGNOSIS_OPTIONS.includes(initial.diagnosis) ? initial.diagnosis : '');
    }
  }, [initial]);

  useEffect(() => {
    if (!isEditing && isMunay && patientMode === 'nuevo') {
      setValue('patientCode', getNextCode(patients, patientType));
    } else if (!isEditing && (!isMunay || patientMode === 'antiguo')) {
      setValue('patientCode', '');
    }
  }, [patientMode, patients, isEditing, patientType, isMunay]);

  const [diagSelect, setDiagSelect] = useState(initDiagSelect(initial?.diagnosis));
  const [diagOther,  setDiagOther]  = useState(
    initial?.diagnosis && !DIAGNOSIS_OPTIONS.includes(initial.diagnosis) ? initial.diagnosis : ''
  );
  const [diagErr, setDiagErr] = useState(false);

  const handleFormSubmit = (data) => {
    const diagnosis = diagSelect === '__otro__' ? diagOther.trim() : diagSelect;
    if (!diagnosis) { setDiagErr(true); return; }
    setDiagErr(false);
    onSubmit({ ...data, diagnosis });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">

      {/* Nuevo / Antiguo — solo para pacientes Munay (MNY) */}
      {!isEditing && isMunay && (
        <div className="form-group mb-0">
          <label className="label">Tipo de registro</label>
          <div className="flex gap-2">
            {['nuevo', 'antiguo'].map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setPatientMode(mode)}
                className={`flex-1 py-2 rounded-lg border text-sm font-semibold capitalize transition-colors
                  ${patientMode === mode
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
              >
                Paciente {mode}
              </button>
            ))}
          </div>
          {patientMode === 'nuevo' && (
            <p className="text-xs text-blue-600 mt-1 font-medium">
              Código asignado automáticamente desde #{NEXT_NEW_CODE}
            </p>
          )}
        </div>
      )}

      {/* Name + type + code — top row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2 form-group mb-0">
          <label className="label">Nombre completo *</label>
          <input
            className={`input ${errors.fullName ? 'input-error' : ''}`}
            placeholder="Nombre y apellidos"
            {...register('fullName', { required: 'Requerido' })}
          />
          {errors.fullName && <p className="error-msg">{errors.fullName.message}</p>}
        </div>

        <div className="form-group mb-0">
          <label className="label">Tipo de paciente *</label>
          <select className="input" {...register('patientType', { required: true })}>
            <option value="mny">MNY — Hospital Munay</option>
            <option value="jwi">JWI — Fundación JIWAQUI</option>
            <option value="ext">EXT — Externo</option>
          </select>
        </div>
      </div>

      {/* Patient code — dynamic prefix from type */}
      <div className="form-group mb-0">
        <label className="label">Código de paciente</label>
        <div className="flex">
          <span
            className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 text-sm font-bold select-none"
            style={{ backgroundColor: typeInfo.lightBg, color: typeInfo.bg }}
          >
            {typeInfo.label} -
          </span>
          <input
            className={`input rounded-l-none flex-1 ${!isEditing && isMunay && patientMode === 'nuevo' ? 'bg-blue-50 font-semibold text-blue-800' : ''}`}
            placeholder={!isEditing && isMunay && patientMode === 'antiguo' ? 'Código existente' : 'ej: 001'}
            readOnly={!isEditing && isMunay && patientMode === 'nuevo'}
            {...register('patientCode')}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {!isEditing && isMunay && patientMode === 'nuevo'
            ? 'Asignado automáticamente. Editar solo si es necesario.'
            : 'Número correlativo para buscar al paciente por código.'}
        </p>
      </div>

      {/* Birth date + sex + CI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="form-group mb-0">
          <label className="label">Fecha de nacimiento</label>
          <input
            type="date"
            className="input"
            {...register('birthDate')}
          />
          {age !== null && (
            <p className="text-xs font-medium mt-1" style={{ color: '#09D6D4' }}>
              Edad: <span className="font-bold">{fmtAge(age)}</span>
            </p>
          )}
        </div>

        <div className="form-group mb-0">
          <label className="label">Sexo</label>
          <select className="input" {...register('sex')}>
            <option value="">— Seleccionar —</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div className="form-group mb-0">
          <label className="label">CI del paciente</label>
          <input
            className="input"
            placeholder="Ej: 12345678"
            {...register('idNumber')}
          />
        </div>
      </div>

      {/* Diagnosis — dropdown */}
      <div className="form-group mb-0">
        <label className="label">Diagnóstico *</label>
        <select
          className={`input ${diagErr ? 'input-error' : ''}`}
          value={diagSelect}
          onChange={(e) => { setDiagSelect(e.target.value); setDiagErr(false); if (e.target.value !== '__otro__') setDiagOther(''); }}
        >
          <option value="">— Seleccionar diagnóstico —</option>
          {DIAGNOSIS_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          <option value="__otro__">Otro (especificar)</option>
        </select>
        {diagSelect === '__otro__' && (
          <input
            className={`input mt-2 ${diagErr ? 'input-error' : ''}`}
            placeholder="Especificar diagnóstico..."
            value={diagOther}
            onChange={(e) => { setDiagOther(e.target.value); setDiagErr(false); }}
          />
        )}
        {diagErr && <p className="error-msg">Selecciona o especifica el diagnóstico</p>}
      </div>

      {/* Address */}
      <div className="form-group mb-0">
        <label className="label">Dirección</label>
        <input className="input" placeholder="Calle, ciudad, región" {...register('address')} />
      </div>

      {/* Guardian */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-1 form-group mb-0">
          <label className="label">Responsable / Tutor</label>
          <input className="input" placeholder="Nombre del responsable" {...register('guardian')} />
        </div>
        <div className="form-group mb-0">
          <label className="label">CI del responsable</label>
          <input className="input" placeholder="Ej: 12345678" {...register('guardianIdNumber')} />
        </div>
        <div className="form-group mb-0">
          <label className="label">Teléfono del responsable</label>
          <input className="input" placeholder="+591 7XXXXXXX" {...register('guardianPhone')} />
        </div>
      </div>

      {/* Allergies / Medications */}
      <div className="form-group mb-0">
        <label className="label">Alergias / Medicamentos</label>
        <textarea
          rows={2}
          className="input resize-none"
          placeholder="Alergias conocidas, medicamentos actuales..."
          {...register('allergies')}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
        <button type="button" onClick={onCancel} className="btn-secondary btn">
          Cancelar
        </button>
        <button type="submit" disabled={busy} className="btn-primary btn">
          {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : initial?.id ? 'Guardar cambios' : 'Registrar paciente'}
        </button>
      </div>
    </form>
  );
}
