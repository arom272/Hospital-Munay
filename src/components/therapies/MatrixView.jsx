import { useMemo } from 'react';
import { Plus } from 'lucide-react';
import { getSpecialtyStyle, getStatusConfig, DAY_SCHEDULE_CONFIG } from './therapyConstants';

/* ── Patient chip inside a specialty box ─────────────── */
function PatientChip({ therapy, onCard, onAttend }) {
  const st = getStatusConfig(therapy.status);
  return (
    <div
      onClick={() => onCard(therapy)}
      className="flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition-colors group border border-gray-100 hover:border-blue-200">
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-gray-800 truncate leading-tight">{therapy.patientName}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          {therapy.startTime && (
            <span className="text-[9px] text-gray-400 font-mono">{therapy.startTime}</span>
          )}
          {therapy.therapist && (
            <span className="text-[9px] text-gray-400 truncate">{therapy.therapist}</span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-0.5 shrink-0">
        <span className={`text-[8px] px-1 py-px rounded font-bold border ${st.tw}`}>{st.short}</span>
        <button
          onClick={e => { e.stopPropagation(); onAttend(therapy); }}
          className="text-[8px] text-blue-600 hidden group-hover:block bg-blue-100 rounded px-1 py-px font-medium">
          ✓
        </button>
      </div>
    </div>
  );
}

/* ── Single specialty box ────────────────────────────── */
function SpecialtyBox({ specialty, therapies, onCard, onAttend, onSchedule, isAdmin }) {
  const spec = getSpecialtyStyle(specialty);
  return (
    <div className="rounded-xl overflow-hidden flex flex-col shadow-sm border border-gray-100"
         style={{ borderTop: `3px solid ${spec.color}` }}>
      {/* Header */}
      <div className="px-3 py-2 flex items-center justify-between gap-1"
           style={{ background: spec.light }}>
        <span className="text-xs font-bold leading-tight truncate" style={{ color: spec.color }}>
          {specialty}
        </span>
        {therapies.length > 0 && (
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white shrink-0"
                style={{ background: spec.color }}>
            {therapies.length}
          </span>
        )}
      </div>

      {/* Patient list */}
      <div className="flex-1 p-2 space-y-1 min-h-[56px]"
           style={{ background: therapies.length ? '#fafafa' : '#fff' }}>
        {therapies.length === 0 ? (
          <div className="flex items-center justify-center h-12 text-[10px] text-gray-300 select-none">
            Disponible
          </div>
        ) : (
          therapies.map(t => (
            <PatientChip key={t.id} therapy={t} onCard={onCard} onAttend={onAttend} />
          ))
        )}
      </div>

      {/* Add button */}
      {isAdmin && (
        <div className="px-2 pb-2 bg-white">
          <button
            onClick={() => onSchedule(specialty)}
            className="w-full flex items-center justify-center gap-1 py-1.5 rounded-lg border-2 border-dashed border-gray-200 text-[10px] text-gray-400 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="w-3 h-3" />
            Agendar
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Shift section ───────────────────────────────────── */
function ShiftSection({ title, subtitle, headerClass, specialties, bySpecialty, shift, onCard, onAttend, onScheduleWithSpecialty, isAdmin }) {
  if (!specialties.length) return null;

  return (
    <div>
      <div className={`flex items-center gap-3 px-3 py-2 rounded-xl mb-3 ${headerClass}`}>
        <span className="text-sm font-bold">{title}</span>
        <span className="text-xs opacity-75">{subtitle}</span>
        <span className="ml-auto text-xs font-semibold opacity-75">
          {specialties.length} especialidades
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {specialties.map(spec => (
          <SpecialtyBox
            key={spec}
            specialty={spec}
            therapies={bySpecialty[spec]?.[shift] ?? []}
            onCard={onCard}
            onAttend={onAttend}
            onSchedule={sp => onScheduleWithSpecialty(sp, shift)}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────── */
export default function MatrixView({ therapies, patients, date, onCard, onAttend, onScheduleWithSpecialty, isAdmin }) {
  const dayOfWeek = useMemo(() => {
    if (!date) return 1;
    return new Date(date + 'T12:00').getDay();
  }, [date]);

  const daySchedule = DAY_SCHEDULE_CONFIG[dayOfWeek] ?? { mañana: [], tarde: [] };
  const allConfigured = [...new Set([...daySchedule.mañana, ...daySchedule.tarde])];

  /* group therapies: specialty → shift → therapies[] */
  const bySpecialty = useMemo(() => {
    const map = {};
    for (const t of therapies) {
      const spec = t.therapyType;
      if (!map[spec]) map[spec] = { mañana: [], tarde: [] };
      const isAft = t.startTime && t.startTime >= '13:00';
      if (isAft) map[spec].tarde.push(t);
      else        map[spec].mañana.push(t);
    }
    return map;
  }, [therapies]);

  /* therapies for specialties NOT in today's config (still show them) */
  const unconfiguredTherapies = useMemo(() =>
    therapies.filter(t => !allConfigured.includes(t.therapyType)),
    [therapies, allConfigured]
  );

  const noConfig = !daySchedule.mañana.length && !daySchedule.tarde.length;

  if (noConfig && !therapies.length) {
    return (
      <div className="text-center py-16 text-gray-400">
        <div className="text-4xl mb-3">📅</div>
        <p className="font-medium text-gray-600">Sin especialidades configuradas para este día</p>
        <p className="text-sm mt-1">Podés configurar el horario en <code>therapyConstants.js → DAY_SCHEDULE_CONFIG</code></p>
      </div>
    );
  }

  return (
    <div className="space-y-6" style={{ maxHeight: '65vh', overflowY: 'auto', paddingRight: 2 }}>

      <ShiftSection
        title="☀ Turno Mañana"
        subtitle="08:30 – 13:00"
        headerClass="bg-blue-900/10 text-blue-900"
        specialties={daySchedule.mañana}
        bySpecialty={bySpecialty}
        shift="mañana"
        onCard={onCard}
        onAttend={onAttend}
        onScheduleWithSpecialty={onScheduleWithSpecialty}
        isAdmin={isAdmin}
      />

      <ShiftSection
        title="🌤 Turno Tarde"
        subtitle="14:30 – 19:00"
        headerClass="bg-orange-700/10 text-orange-800"
        specialties={daySchedule.tarde}
        bySpecialty={bySpecialty}
        shift="tarde"
        onCard={onCard}
        onAttend={onAttend}
        onScheduleWithSpecialty={onScheduleWithSpecialty}
        isAdmin={isAdmin}
      />

      {/* Therapies outside today's config */}
      {unconfiguredTherapies.length > 0 && (
        <div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl mb-3 bg-gray-100 text-gray-600">
            <span className="text-sm font-bold">Otras terapias</span>
            <span className="text-xs opacity-75">fuera del horario configurado</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {[...new Set(unconfiguredTherapies.map(t => t.therapyType))].map(spec => (
              <SpecialtyBox
                key={spec}
                specialty={spec}
                therapies={unconfiguredTherapies.filter(t => t.therapyType === spec)}
                onCard={onCard}
                onAttend={onAttend}
                onSchedule={sp => onScheduleWithSpecialty(sp, null)}
                isAdmin={isAdmin}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
