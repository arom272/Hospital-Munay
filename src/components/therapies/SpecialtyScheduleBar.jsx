import { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { DAY_SCHEDULE_CONFIG, getSpecialtyStyle } from './therapyConstants';

const DAY_ORDER = [1, 2, 3, 4, 5, 6, 0];
const DAY_FULL  = { 1: 'Lunes', 2: 'Martes', 3: 'Miércoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sábado', 0: 'Domingo' };

function ShiftRow({ shift, therapists }) {
  const isMañana = shift === 'mañana';
  return (
    <div className="flex items-start gap-1.5">
      <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold shrink-0 mt-px
        ${isMañana ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
        {isMañana ? '☀ Mañana' : '🌤 Tarde'}
      </span>
      {therapists.length === 0 ? (
        <span className="text-[10px] text-gray-300 italic mt-px">Sin terapista registrado</span>
      ) : (
        <div className="flex flex-wrap gap-1">
          {therapists.map(t => (
            <span key={t.id ?? t.name}
              className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-px rounded font-medium">
              {t.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SpecialtyScheduleBar({ therapists = [] }) {
  const [active, setActive] = useState(null);

  /* collect every specialty that appears in any day config */
  const allSpecialties = useMemo(() => {
    const set = new Set();
    for (const cfg of Object.values(DAY_SCHEDULE_CONFIG)) {
      cfg.mañana.forEach(s => set.add(s));
      cfg.tarde.forEach(s => set.add(s));
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'es'));
  }, []);

  /* build weekly schedule detail for the active specialty */
  const detail = useMemo(() => {
    if (!active) return null;
    return DAY_ORDER
      .map(day => {
        const cfg = DAY_SCHEDULE_CONFIG[day];
        if (!cfg) return null;
        const inMañana = cfg.mañana.includes(active);
        const inTarde  = cfg.tarde.includes(active);
        if (!inMañana && !inTarde) return null;

        const specTherapists = therapists.filter(t => t.specialty === active);
        const forShift = (shift) =>
          specTherapists.filter(t =>
            t.schedule?.some(s => s.day === day && s.shifts?.includes(shift))
          );

        return {
          day,
          mañana: inMañana ? forShift('mañana') : null,
          tarde:  inTarde  ? forShift('tarde')  : null,
        };
      })
      .filter(Boolean);
  }, [active, therapists]);

  const activeSpec = active ? getSpecialtyStyle(active) : null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

      {/* ── Chips row ───────────────────────────────────── */}
      <div className="flex items-center gap-2 px-3 py-2.5 overflow-x-auto">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide shrink-0 pr-2 border-r border-gray-100">
          Especialidades
        </span>
        {allSpecialties.map(sp => {
          const s   = getSpecialtyStyle(sp);
          const sel = active === sp;
          return (
            <button
              key={sp}
              onClick={() => setActive(sel ? null : sp)}
              className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all whitespace-nowrap"
              style={sel
                ? { background: s.color, color: '#fff',   borderColor: s.color }
                : { background: s.light, color: s.color,  borderColor: s.color + '66' }
              }>
              {sp}
            </button>
          );
        })}
      </div>

      {/* ── Detail panel ─────────────────────────────────── */}
      {active && detail && (
        <div className="border-t border-gray-100 px-4 py-3"
             style={{ background: activeSpec.light + '66' }}>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: activeSpec.color }} />
            <span className="text-sm font-bold" style={{ color: activeSpec.color }}>{active}</span>
            <span className="text-[10px] text-gray-400">
              · {detail.length} {detail.length === 1 ? 'día' : 'días'} a la semana
            </span>
            <button onClick={() => setActive(null)}
              className="ml-auto p-1 rounded-lg hover:bg-black/5 transition-colors">
              <X className="w-3.5 h-3.5 text-gray-500" />
            </button>
          </div>

          {detail.length === 0 ? (
            <p className="text-xs text-gray-400 italic">Sin días configurados.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {detail.map(({ day, mañana, tarde }) => (
                <div key={day}
                     className="bg-white rounded-xl border border-gray-100 px-3 py-2.5 min-w-[170px] shadow-sm">
                  <p className="text-xs font-bold text-gray-800 mb-2">{DAY_FULL[day]}</p>
                  <div className="space-y-1.5">
                    {mañana !== null && <ShiftRow shift="mañana" therapists={mañana} />}
                    {tarde  !== null && <ShiftRow shift="tarde"  therapists={tarde}  />}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
