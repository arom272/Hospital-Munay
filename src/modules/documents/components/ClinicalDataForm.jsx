/**
 * Renders the appropriate clinical form fields based on documentType.
 * Designed to be embedded inside a react-hook-form <form>.
 * All fields are registered under `clinicalData.*`.
 */

/* ── Reusable field primitives ───────────────────────── */
function Field({ label, children, hint }) {
  return (
    <div className="form-group mb-0">
      <label className="label">{label}</label>
      {children}
      {hint && <p className="text-[10px] text-gray-400 mt-0.5">{hint}</p>}
    </div>
  );
}

function TextInput({ register, name, placeholder }) {
  return (
    <input
      className="input"
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

function TextArea({ register, name, rows = 3, placeholder }) {
  return (
    <textarea
      rows={rows}
      className="input resize-none"
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

function VitalsGrid({ register, prefix }) {
  const fields = [
    { key: 'peso',    label: 'Peso (kg)',  placeholder: 'ej: 12.5' },
    { key: 'talla',   label: 'Talla (cm)', placeholder: 'ej: 90'   },
    { key: 'temp',    label: 'Temp (°C)',  placeholder: 'ej: 36.5' },
    { key: 'fc',      label: 'FC (lpm)',   placeholder: 'ej: 90'   },
    { key: 'fr',      label: 'FR (rpm)',   placeholder: 'ej: 20'   },
    { key: 'spo2',    label: 'SpO₂ (%)',   placeholder: 'ej: 98'   },
  ];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
      {fields.map(f => (
        <div key={f.key} className="form-group mb-0">
          <label className="label">{f.label}</label>
          <input className="input" placeholder={f.placeholder} {...register(`${prefix}.${f.key}`)} />
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-1 pb-0.5 border-b border-gray-100">
      {children}
    </p>
  );
}

/* ── Document-type forms ─────────────────────────────── */

function HistoriaClinicaForm({ register }) {
  return (
    <>
      <SectionTitle>Motivo de consulta</SectionTitle>
      <Field label="Motivo de consulta *">
        <TextArea register={register} name="clinicalData.motivoConsulta" rows={2}
          placeholder="Describa el motivo principal de la consulta..." />
      </Field>
      <Field label="Enfermedad actual">
        <TextArea register={register} name="clinicalData.enfermedadActual" rows={3}
          placeholder="Inicio, evolución, síntomas asociados..." />
      </Field>

      <SectionTitle>Antecedentes</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Antecedentes personales">
          <TextArea register={register} name="clinicalData.antecedentesPersonales" rows={3}
            placeholder="Patologías previas, hospitalizaciones, cirugías..." />
        </Field>
        <Field label="Antecedentes familiares">
          <TextArea register={register} name="clinicalData.antecedentesFamiliares" rows={3}
            placeholder="Enfermedades hereditarias, patologías en familia..." />
        </Field>
      </div>

      <SectionTitle>Examen físico</SectionTitle>
      <VitalsGrid register={register} prefix="clinicalData.signosVitales" />
      <Field label="Examen físico general">
        <TextArea register={register} name="clinicalData.examenFisico" rows={3}
          placeholder="Hallazgos del examen físico..." />
      </Field>

      <SectionTitle>Diagnóstico y plan</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Diagnóstico clínico">
          <TextArea register={register} name="clinicalData.diagnostico" rows={2}
            placeholder="Diagnóstico presuntivo o definitivo..." />
        </Field>
        <Field label="Plan de tratamiento">
          <TextArea register={register} name="clinicalData.planTratamiento" rows={2}
            placeholder="Indicaciones, tratamiento propuesto..." />
        </Field>
      </div>
      <Field label="Observaciones">
        <TextArea register={register} name="clinicalData.observaciones" rows={2}
          placeholder="Notas adicionales..." />
      </Field>
    </>
  );
}

function EpicrisisForm({ register }) {
  return (
    <>
      <SectionTitle>Datos de internación</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Field label="Fecha ingreso">
          <input type="date" className="input" {...register('clinicalData.fechaIngreso')} />
        </Field>
        <Field label="Hora ingreso">
          <input type="time" className="input" {...register('clinicalData.horaIngreso')} />
        </Field>
        <Field label="Fecha egreso">
          <input type="date" className="input" {...register('clinicalData.fechaEgreso')} />
        </Field>
        <Field label="Hora egreso">
          <input type="time" className="input" {...register('clinicalData.horaEgreso')} />
        </Field>
      </div>

      <SectionTitle>Diagnósticos</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Diagnóstico pre-quirúrgico">
          <TextArea register={register} name="clinicalData.diagnosticoPreQx" rows={2}
            placeholder="CIE-10, diagnóstico de ingreso..." />
        </Field>
        <Field label="Diagnóstico post-quirúrgico">
          <TextArea register={register} name="clinicalData.diagnosticoPostQx" rows={2}
            placeholder="CIE-10, diagnóstico de egreso..." />
        </Field>
      </div>

      <SectionTitle>Procedimiento quirúrgico</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Procedimiento realizado">
          <TextInput register={register} name="clinicalData.procedimiento"
            placeholder="Nombre del procedimiento" />
        </Field>
        <Field label="Tipo de anestesia">
          <select className="input" {...register('clinicalData.anestesia')}>
            <option value="">Seleccionar...</option>
            <option value="general">General</option>
            <option value="local">Local</option>
            <option value="regional">Regional</option>
            <option value="sedacion">Sedación</option>
          </select>
        </Field>
        <Field label="Duración (min)">
          <TextInput register={register} name="clinicalData.duracionMin" placeholder="ej: 120" />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Sangrado (ml)">
          <TextInput register={register} name="clinicalData.sangradoMl" placeholder="ej: 50" />
        </Field>
        <Field label="Cirujano">
          <TextInput register={register} name="clinicalData.cirujano" placeholder="Nombre del cirujano" />
        </Field>
      </div>

      <SectionTitle>Indicaciones de alta</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Dieta">
          <TextArea register={register} name="clinicalData.indicaciones.dieta" rows={2}
            placeholder="Indicaciones dietarias..." />
        </Field>
        <Field label="Cuidado de herida">
          <TextArea register={register} name="clinicalData.indicaciones.cuidadoHerida" rows={2}
            placeholder="Cuidados locales, curaciones..." />
        </Field>
        <Field label="Precauciones generales">
          <TextArea register={register} name="clinicalData.indicaciones.precauciones" rows={2}
            placeholder="Restricciones, cuidados especiales..." />
        </Field>
        <Field label="Actividad / reposo">
          <TextArea register={register} name="clinicalData.indicaciones.actividad" rows={2}
            placeholder="Limitaciones físicas, reposo..." />
        </Field>
      </div>
      <Field label="Signos de alarma">
        <TextArea register={register} name="clinicalData.signosAlarma" rows={2}
          placeholder="Fiebre >38°C, sangrado excesivo, dificultad respiratoria..." />
      </Field>

      <SectionTitle>Próxima cita</SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Fecha">
          <input type="date" className="input" {...register('clinicalData.proximaCita.fecha')} />
        </Field>
        <Field label="Hora">
          <input type="time" className="input" {...register('clinicalData.proximaCita.hora')} />
        </Field>
      </div>
      <Field label="Observaciones de egreso">
        <TextArea register={register} name="clinicalData.observaciones" rows={2}
          placeholder="Notas adicionales del alta..." />
      </Field>
    </>
  );
}

function FichaSocialForm({ register }) {
  return (
    <>
      <SectionTitle>Composición familiar</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Tipo de familia">
          <select className="input" {...register('clinicalData.tipoFamilia')}>
            <option value="">Seleccionar...</option>
            <option value="nuclear">Nuclear</option>
            <option value="monoparental">Monoparental</option>
            <option value="extensa">Extensa</option>
            <option value="reconstituida">Reconstituida</option>
            <option value="unipersonal">Unipersonal</option>
          </select>
        </Field>
        <Field label="N° integrantes">
          <TextInput register={register} name="clinicalData.nIntegrantes" placeholder="ej: 4" />
        </Field>
      </div>
      <Field label="Descripción familiar">
        <TextArea register={register} name="clinicalData.composicionFamiliar" rows={3}
          placeholder="Integrantes, edades, relación con el paciente..." />
      </Field>

      <SectionTitle>Situación socioeconómica</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Ocupación padre / tutor">
          <TextInput register={register} name="clinicalData.ocupacionPadre"
            placeholder="Ocupación o trabajo" />
        </Field>
        <Field label="Ocupación madre / tutora">
          <TextInput register={register} name="clinicalData.ocupacionMadre"
            placeholder="Ocupación o trabajo" />
        </Field>
        <Field label="Nivel educativo">
          <select className="input" {...register('clinicalData.nivelEducativo')}>
            <option value="">Seleccionar...</option>
            <option value="ninguno">Ninguno</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="tecnico">Técnico/Universitario</option>
          </select>
        </Field>
        <Field label="Condición económica">
          <select className="input" {...register('clinicalData.condicionEconomica')}>
            <option value="">Seleccionar...</option>
            <option value="muy_baja">Muy baja</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="media_alta">Media alta</option>
          </select>
        </Field>
      </div>

      <SectionTitle>Vivienda y red de apoyo</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Tipo de vivienda">
          <select className="input" {...register('clinicalData.tipoVivienda')}>
            <option value="">Seleccionar...</option>
            <option value="propia">Propia</option>
            <option value="alquilada">Alquilada</option>
            <option value="prestada">Prestada</option>
            <option value="otro">Otro</option>
          </select>
        </Field>
        <Field label="Red de apoyo">
          <TextInput register={register} name="clinicalData.redApoyo"
            placeholder="Familiares, vecinos, organizaciones..." />
        </Field>
      </div>
      <Field label="Observaciones sociales">
        <TextArea register={register} name="clinicalData.observaciones" rows={3}
          placeholder="Observaciones del trabajador/a social..." />
      </Field>
    </>
  );
}

function HistoriaQxForm({ register }) {
  return (
    <>
      <SectionTitle>Motivo de consulta</SectionTitle>
      <Field label="Motivo quirúrgico *">
        <TextArea register={register} name="clinicalData.motivoConsulta" rows={2}
          placeholder="Indicación quirúrgica, motivo de la intervención..." />
      </Field>
      <Field label="Antecedentes quirúrgicos">
        <TextArea register={register} name="clinicalData.antecedentesQx" rows={2}
          placeholder="Cirugías previas, complicaciones..." />
      </Field>

      <SectionTitle>Examen preoperatorio</SectionTitle>
      <VitalsGrid register={register} prefix="clinicalData.signosVitales" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Peso (kg)"><TextInput register={register} name="clinicalData.peso" placeholder="ej: 14.5" /></Field>
        <Field label="Talla (cm)"><TextInput register={register} name="clinicalData.talla" placeholder="ej: 95" /></Field>
        <Field label="Ayuno (horas)"><TextInput register={register} name="clinicalData.ayunoHoras" placeholder="ej: 8" /></Field>
      </div>
      <Field label="Examen físico preoperatorio">
        <TextArea register={register} name="clinicalData.examenFisicoPreQx" rows={3}
          placeholder="Hallazgos relevantes para la cirugía..." />
      </Field>

      <SectionTitle>Plan quirúrgico</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Procedimiento planificado">
          <TextInput register={register} name="clinicalData.procedimientoPlanificado"
            placeholder="Tipo de cirugía a realizar" />
        </Field>
        <Field label="Tipo de anestesia planificada">
          <select className="input" {...register('clinicalData.tipoAnestesia')}>
            <option value="">Seleccionar...</option>
            <option value="general">General</option>
            <option value="local">Local</option>
            <option value="regional">Regional</option>
            <option value="sedacion">Sedación</option>
          </select>
        </Field>
      </div>
      <Field label="Diagnóstico preoperatorio">
        <TextArea register={register} name="clinicalData.diagnosticoPreQx" rows={2}
          placeholder="Diagnóstico que indica la cirugía..." />
      </Field>
      <Field label="Observaciones">
        <TextArea register={register} name="clinicalData.observaciones" rows={2}
          placeholder="Notas adicionales del cirujano..." />
      </Field>
    </>
  );
}

function EvolucionForm({ register }) {
  return (
    <>
      <Field label="Fecha de evolución">
        <input type="date" className="input" {...register('clinicalData.fecha')} />
      </Field>
      <Field label="Subjetivo (S)">
        <TextArea register={register} name="clinicalData.subjetivo" rows={2}
          placeholder="Lo que refiere el paciente/familia..." />
      </Field>
      <Field label="Objetivo (O)">
        <TextArea register={register} name="clinicalData.objetivo" rows={2}
          placeholder="Signos vitales, examen físico..." />
      </Field>
      <VitalsGrid register={register} prefix="clinicalData.signosVitales" />
      <Field label="Análisis (A)">
        <TextArea register={register} name="clinicalData.analisis" rows={2}
          placeholder="Evaluación clínica, diagnóstico diferencial..." />
      </Field>
      <Field label="Plan (P)">
        <TextArea register={register} name="clinicalData.plan" rows={2}
          placeholder="Indicaciones, cambios de tratamiento..." />
      </Field>
    </>
  );
}

/* ── Dispatcher ─────────────────────────────────────── */
export default function ClinicalDataForm({ documentType, register }) {
  switch (documentType) {
    case 'historia_clinica':    return <HistoriaClinicaForm    register={register} />;
    case 'epicrisis':           return <EpicrisisForm           register={register} />;
    case 'ficha_social':        return <FichaSocialForm         register={register} />;
    case 'historia_quirurgica': return <HistoriaQxForm          register={register} />;
    case 'evolucion':           return <EvolucionForm           register={register} />;
    default:
      return (
        <div className="form-group mb-0">
          <label className="label">Contenido clínico</label>
          <textarea rows={6} className="input resize-none"
            placeholder="Ingrese el contenido del documento..."
            {...register('clinicalData.contenido')} />
        </div>
      );
  }
}
