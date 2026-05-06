import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { differenceInYears, differenceInMonths, differenceInDays, isValid, parseISO } from 'date-fns';
import { getTypeInfo } from '../../utils/patientTypes';

const DIAGNOSIS_OPTIONS = [
  'Fisura Labio Alveolo Palatina (FLAP) Izquierda',
  'FLAP Derecho',
  'FLAP Bilateral',
  'Fisura Labio Alveolo (FLA) Izquierda',
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

export default function PatientForm({ initial, onSubmit, onCancel, busy }) {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: initial ?? {
      patientCode: '', fullName: '', birthDate: '', diagnosis: '', idNumber: '',
      address: '', guardian: '', guardianIdNumber: '', guardianPhone: '',
      allergies: '', clinicalHistory: '', patientType: 'mny',
    },
  });

  useEffect(() => {
    if (initial) {
      reset(initial);
      setDiagSelect(initDiagSelect(initial.diagnosis));
      setDiagOther(initial.diagnosis && !DIAGNOSIS_OPTIONS.includes(initial.diagnosis) ? initial.diagnosis : '');
    }
  }, [initial]);

  const birthDate  = watch('birthDate');
  const patientType = watch('patientType');
  const age        = calcAge(birthDate);
  const typeInfo   = getTypeInfo(patientType);

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
            className="input rounded-l-none flex-1"
            placeholder="ej: 001"
            {...register('patientCode')}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">Número correlativo para buscar al paciente por código.</p>
      </div>

      {/* Birth date + calculated age */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      {/* Clinical history */}
      <div className="form-group mb-0">
        <label className="label">Historial clínico</label>
        <textarea
          rows={3}
          className="input resize-none"
          placeholder="Antecedentes, cirugías previas, observaciones..."
          {...register('clinicalHistory')}
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
