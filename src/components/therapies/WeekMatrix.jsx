import { useMemo } from 'react';
import { getWeekDates, getSpecialtyStyle, getStatusConfig, calcAge, TODAY_ISO, ATTENDED_STATUSES } from './therapyConstants';

const MORNING_SLOTS   = ['08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00'];
const AFTERNOON_SLOTS = ['14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00'];
const ALL_SLOTS       = [...MORNING_SLOTS, ...AFTERNOON_SLOTS];

function snapSlot(time) {
  if (!time) return null;
  const [h, m] = time.split(':').map(Number);
  const snapped = `${String(h).padStart(2, '0')}:${m < 30 ? '00' : '30'}`;
  return ALL_SLOTS.includes(snapped) ? snapped : null;
}

function TherapyCard({ therapy, onCard, onAttend }) {
  const spec = getSpecialtyStyle(therapy.therapyType);
  const st   = getStatusConfig(therapy.status);
  return (
    <div
      onClick={e => { e.stopPropagation(); onCard(therapy); }}
      className="text-[10px] rounded border-l-2 bg-white p-1 mb-0.5 cursor-pointer hover:shadow-md transition-shadow group relative"
      style={{ borderLeftColor: spec.color, boxShadow: '0 1px 2px rgba(0,0,0,.06)' }}>
      <div className="font-semibold truncate text-gray-800 leading-tight">{therapy.patientName}</div>
      <div className="flex items-center justify-between gap-0.5 mt-0.5">
        <span className="truncate text-[9px]" style={{ color: spec.color }}>{therapy.therapyType}</span>
        <span className={`text-[8px] px-1 py-px rounded font-bold border shrink-0 ${st.tw}`}>{st.short}</span>
      </div>
      {therapy.therapist && (
        <div className="text-gray-400 truncate text-[9px] mt-0.5">{therapy.therapist}</div>
      )}
      <button
        onClick={e => { e.stopPropagation(); onAttend(therapy); }}
        className="absolute bottom-1 right-1 text-[8px] text-blue-600 hover:text-blue-800 hidden group-hover:block bg-blue-50 rounded px-1 py-px font-medium">
        ✓
      </button>
    </div>
  );
}

export default function WeekMatrix({ therapies, patients, selectedDate, onDateSelect, onCard, onAttend, onScheduleSlot, isAdmin }) {
  const weekDates = useMemo(() => getWeekDates(selectedDate), [selectedDate]);

  /* build matrix: date → slot → therapies[] */
  const matrix = useMemo(() => {
    const m = {};
    for (const d of weekDates) {
      m[d] = {};
      for (const s of ALL_SLOTS) m[d][s] = [];
    }
    for (const t of therapies) {
      if (!weekDates.includes(t.date)) continue;
      const slot = snapSlot(t.startTime);
      if (slot) m[t.date][slot].push(t);
    }
    return m;
  }, [therapies, weekDates]);

  /* per-day totals for header */
  const dayTotals = useMemo(() => {
    const tot = {};
    for (const d of weekDates) {
      const day = therapies.filter(t => t.date === d);
      tot[d] = {
        total:    day.length,
        attended: day.filter(t => ATTENDED_STATUSES.includes(t.status)).length,
      };
    }
    return tot;
  }, [therapies, weekDates]);

  const COL_W = 130;

  const renderSlotRows = (slots) =>
    slots.map(slot => (
      <tr key={slot} className="border-b border-gray-100 hover:bg-blue-50/10 transition-colors">
        <td className="sticky left-0 z-10 bg-gray-50 border-r border-gray-200 text-center py-1.5 px-1 font-mono text-[10px] font-bold text-gray-600 align-top whitespace-nowrap w-14"
            style={{ verticalAlign: 'top' }}>
          {slot}
        </td>
        {weekDates.map(date => {
          const cells   = matrix[date]?.[slot] ?? [];
          const isToday = date === TODAY_ISO;
          const isSel   = date === selectedDate;
          const canBook = isAdmin && !cells.length;
          return (
            <td key={date}
                onClick={() => canBook && onScheduleSlot(date, slot)}
                className={`align-top p-1 border-r border-gray-100 transition-colors group/cell
                  ${isSel ? 'bg-blue-50/60' : isToday ? 'bg-amber-50/30' : ''}
                  ${canBook ? 'cursor-pointer hover:bg-blue-50/40' : ''}`}
                style={{ minWidth: COL_W, verticalAlign: 'top' }}>
              {cells.map(t => (
                <TherapyCard key={t.id} therapy={t} onCard={onCard} onAttend={onAttend} />
              ))}
              {canBook && (
                <div className="h-5 border border-dashed border-transparent group-hover/cell:border-blue-300 rounded text-[8px] text-transparent group-hover/cell:text-blue-400 flex items-center justify-center transition-all select-none">
                  + agendar
                </div>
              )}
            </td>
          );
        })}
      </tr>
    ));

  const isEmpty = !therapies.some(t => weekDates.includes(t.date));

  return (
    <div className="overflow-auto rounded-lg border border-gray-100" style={{ maxHeight: '65vh' }}>
      <table className="border-collapse text-xs"
             style={{ minWidth: `${64 + weekDates.length * COL_W}px`, tableLayout: 'fixed' }}>

        {/* ── Header ── */}
        <thead className="sticky top-0 z-20">
          <tr>
            <th className="sticky left-0 z-30 bg-gray-900 text-white text-center py-2 px-1 w-14 text-[8px] font-bold uppercase tracking-widest border-r border-gray-700">
              HORA
            </th>
            {weekDates.map(date => {
              const d       = new Date(date + 'T12:00');
              const dayLbl  = d.toLocaleDateString('es', { weekday: 'long' });
              const num     = d.toLocaleDateString('es', { day: 'numeric', month: 'short' });
              const isToday = date === TODAY_ISO;
              const isSel   = date === selectedDate;
              const tot     = dayTotals[date] ?? { total: 0, attended: 0 };
              return (
                <th key={date}
                    onClick={() => onDateSelect(date)}
                    style={{ minWidth: COL_W, borderRight: '1px solid rgba(255,255,255,.15)', cursor: 'pointer' }}
                    className={`py-2 px-2 text-center hover:opacity-80 transition-opacity select-none
                      ${isSel ? 'bg-blue-500' : isToday ? 'bg-blue-800' : 'bg-gray-800'}`}>
                  <div className="capitalize text-white font-bold text-[10px]">{dayLbl}</div>
                  <div className="text-[8px] text-gray-400">{num}</div>
                  {tot.total > 0 && (
                    <div className="mt-0.5 flex justify-center gap-1">
                      <span className="bg-white/20 text-white text-[8px] px-1 py-px rounded font-bold">{tot.total}</span>
                      {tot.attended > 0 && (
                        <span className="bg-green-500/70 text-white text-[8px] px-1 py-px rounded font-bold">✓{tot.attended}</span>
                      )}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {/* ── TURNO MAÑANA ── */}
          <tr>
            <td colSpan={weekDates.length + 1}
                className="bg-blue-900 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 sticky left-0 z-10">
              ☀ TURNO MAÑANA · 08:30 – 13:00
            </td>
          </tr>
          {renderSlotRows(MORNING_SLOTS)}

          {/* ── TURNO TARDE ── */}
          <tr>
            <td colSpan={weekDates.length + 1}
                className="bg-orange-700 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 sticky left-0 z-10">
              🌤 TURNO TARDE · 14:30 – 19:00
            </td>
          </tr>
          {renderSlotRows(AFTERNOON_SLOTS)}

          {/* Empty state row when no therapies */}
          {isEmpty && (
            <tr>
              <td colSpan={weekDates.length + 1} className="py-12 text-center text-gray-400">
                <div className="text-3xl mb-2">📅</div>
                <p className="text-sm font-medium text-gray-500">Sin terapias esta semana</p>
                {isAdmin && <p className="text-xs mt-1">Hacé click en una celda para agendar</p>}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
