import { useMemo, useState } from 'react';
import {
  SPECIALTY_CONFIG, getSpecialtyStyle, getStatusConfig,
  ATTENDED_STATUSES, ABSENT_STATUSES, PENDING_STATUSES,
  getWeekDates, TODAY_ISO, TURNO_MAÑANA_CUTOFF,
} from './therapyConstants';

/* ── helpers ── */
function slotHour(s) { return parseInt((s || '0').split(':')[0]); }
function occupancyColor(count) {
  if (count === 0) return { bg: 'bg-gray-50',   text: 'text-gray-300', ring: '' };
  if (count <= 3)  return { bg: 'bg-green-50',  text: 'text-green-700', ring: 'ring-1 ring-green-200' };
  if (count <= 6)  return { bg: 'bg-amber-50',  text: 'text-amber-700', ring: 'ring-1 ring-amber-200' };
  return             { bg: 'bg-red-50',    text: 'text-red-700',   ring: 'ring-1 ring-red-200'  };
}

function TherapistChip({ name, count, attended, absent, morning, afternoon, onClick }) {
  const occ = occupancyColor(count);
  const shift = morning && afternoon ? 'M+T' : morning ? 'M' : afternoon ? 'T' : '';
  return (
    <div onClick={onClick}
         className={`text-[9px] rounded p-1 mb-0.5 cursor-pointer hover:opacity-80 transition-opacity ${occ.bg} ${occ.ring}`}>
      <div className="flex items-center justify-between gap-0.5 mb-0.5">
        <span className={`font-bold truncate max-w-[68px] ${occ.text}`}>{name}</span>
        {shift && (
          <span className="text-[7px] bg-gray-200 text-gray-600 px-0.5 rounded font-bold shrink-0">{shift}</span>
        )}
      </div>
      <div className="flex gap-0.5">
        <span className="text-[8px] font-bold text-gray-600">{count}p</span>
        {attended > 0 && <span className="text-[8px] text-green-600">✓{attended}</span>}
        {absent  > 0 && <span className="text-[8px] text-red-600">✗{absent}</span>}
      </div>
    </div>
  );
}

export default function AvailabilityBoard({ therapies, patients, selectedDate, onCard }) {
  const [turnoFilter, setTurnoFilter] = useState('all'); // all | mañana | tarde
  const weekDates  = useMemo(() => getWeekDates(selectedDate), [selectedDate]);
  const workDays   = weekDates.slice(0, 5); // Mon-Fri

  /* Build board: specialty → date → therapist entries */
  const board = useMemo(() => {
    const b = {};
    SPECIALTY_CONFIG.forEach(s => {
      b[s.key] = {};
      workDays.forEach(d => b[s.key][d] = {});
    });
    therapies.forEach(t => {
      if (!workDays.includes(t.date)) return;
      if (!b[t.therapyType]) return;
      const h    = slotHour(t.startTime);
      const isMor  = h < TURNO_MAÑANA_CUTOFF;
      const isAft  = h >= TURNO_MAÑANA_CUTOFF;
      if (turnoFilter === 'mañana' && !isMor) return;
      if (turnoFilter === 'tarde'  && !isAft) return;
      const key  = t.therapist || '(sin nombre)';
      const cell = b[t.therapyType][t.date];
      if (!cell[key]) cell[key] = { name: key, count: 0, attended: 0, absent: 0, morning: false, afternoon: false };
      const e = cell[key];
      e.count++;
      if (ATTENDED_STATUSES.includes(t.status)) e.attended++;
      if (ABSENT_STATUSES.includes(t.status))   e.absent++;
      if (isMor) e.morning = true;
      if (isAft) e.afternoon = true;
    });
    return b;
  }, [therapies, workDays, turnoFilter]);

  /* active specialties this week */
  const activeSpecs = useMemo(() =>
    SPECIALTY_CONFIG.filter(s => workDays.some(d => Object.keys(board[s.key]?.[d] ?? {}).length > 0)),
    [board, workDays]
  );

  /* week totals per specialty */
  const specTotals = useMemo(() => {
    const t = {};
    activeSpecs.forEach(s => {
      let total = 0;
      workDays.forEach(d => Object.values(board[s.key][d] ?? {}).forEach(e => total += e.count));
      t[s.key] = total;
    });
    return t;
  }, [activeSpecs, board, workDays]);

  /* day → total sessions */
  const dayTotals = useMemo(() => {
    const t = {};
    workDays.forEach(d => {
      let total = 0;
      activeSpecs.forEach(s => Object.values(board[s.key][d] ?? {}).forEach(e => total += e.count));
      t[d] = total;
    });
    return t;
  }, [activeSpecs, board, workDays]);

  if (!activeSpecs.length) {
    return (
      <div className="text-center py-16 text-gray-400">
        <div className="text-4xl mb-3">📋</div>
        <p className="font-medium text-gray-600">Sin actividad registrada esta semana</p>
      </div>
    );
  }

  const COL_W = 130;

  return (
    <div className="space-y-2">
      {/* Turno filter */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Turno:</span>
        {[
          { k: 'all',    l: 'Ambos' },
          { k: 'mañana', l: '☀ Mañana 8:30–12:30' },
          { k: 'tarde',  l: '🌤 Tarde 14:30–18:30' },
        ].map(({ k, l }) => (
          <button key={k} onClick={() => setTurnoFilter(k)}
            className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors
              ${turnoFilter === k ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            {l}
          </button>
        ))}
      </div>

      {/* Board table */}
      <div className="overflow-auto rounded-lg border border-gray-200" style={{ maxHeight: '62vh' }}>
        <table className="border-collapse text-xs" style={{ minWidth: `${180 + workDays.length * COL_W}px` }}>
          <thead className="sticky top-0 z-20">
            <tr>
              <th className="sticky left-0 z-30 bg-gray-900 text-white text-left px-3 py-2.5 text-[9px] font-bold uppercase tracking-widest border-r border-gray-700 w-44">
                Especialidad
              </th>
              {workDays.map(date => {
                const d      = new Date(date + 'T12:00');
                const dayLbl = d.toLocaleDateString('es', { weekday: 'long' });
                const num    = d.toLocaleDateString('es', { day: 'numeric', month: 'short' });
                const isToday = date === TODAY_ISO;
                const isSel   = date === selectedDate;
                const total   = dayTotals[date] ?? 0;
                return (
                  <th key={date}
                      style={{ minWidth: COL_W, borderRight: '1px solid rgba(255,255,255,.15)' }}
                      className={`py-2 px-2 text-center ${isSel ? 'bg-blue-500' : isToday ? 'bg-blue-800' : 'bg-gray-800'}`}>
                    <div className="capitalize text-white font-bold text-[10px]">{dayLbl}</div>
                    <div className="text-[8px] text-gray-400">{num}</div>
                    {total > 0 && (
                      <div className="mt-0.5">
                        <span className="bg-white/20 text-white text-[8px] px-1.5 py-px rounded font-bold">{total} sesiones</span>
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {activeSpecs.map((spec, si) => {
              const sStyle = getSpecialtyStyle(spec.key);
              const total  = specTotals[spec.key] ?? 0;
              return (
                <tr key={spec.key} className={`${si % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-blue-50/20 transition-colors`}>
                  {/* Specialty label */}
                  <td className="sticky left-0 z-10 border-r border-gray-200 px-2 py-1.5 align-top"
                      style={{ background: si % 2 === 0 ? '#fff' : '#f9fafb', borderLeft: `3px solid ${sStyle.color}` }}>
                    <div className="font-bold text-[10px] leading-tight" style={{ color: sStyle.color }}>
                      {spec.key}
                    </div>
                    <div className="text-[8px] text-gray-400 mt-0.5">{total} esta semana</div>
                  </td>

                  {/* Day cells */}
                  {workDays.map(date => {
                    const therapistMap = board[spec.key]?.[date] ?? {};
                    const entries = Object.values(therapistMap);
                    const isToday = date === TODAY_ISO;
                    const isSel   = date === selectedDate;
                    return (
                      <td key={date}
                          className={`align-top p-1 border-r border-b border-gray-100 min-w-[${COL_W}px]
                            ${isSel ? 'bg-blue-50/60' : isToday ? 'bg-amber-50/30' : ''}`}
                          style={{ verticalAlign: 'top', minWidth: COL_W }}>
                        {entries.length > 0
                          ? entries.map(e => (
                              <TherapistChip key={e.name} {...e} />
                            ))
                          : <div className="h-5 border border-dashed border-gray-200 rounded text-[8px] text-gray-300 flex items-center justify-center">libre</div>
                        }
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-[10px] text-gray-500 px-1">
        <span className="font-semibold">Carga:</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-100 ring-1 ring-green-200 inline-block"></span> Normal (1–3)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-100 ring-1 ring-amber-200 inline-block"></span> Moderada (4–6)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-100 ring-1 ring-red-200 inline-block"></span> Alta (7+)</span>
        <span className="ml-2">M = mañana · T = tarde · M+T = ambos turnos</span>
      </div>
    </div>
  );
}
