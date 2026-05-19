import { useMemo } from 'react';
import { User } from 'lucide-react';
import { getSpecialtyStyle, getStatusConfig, calcAge } from './therapyConstants';

export default function DayAgenda({ therapies, patients, onCard, onAttend, isAdmin }) {
  const sorted = useMemo(
    () => [...therapies].sort((a, b) => a.startTime.localeCompare(b.startTime)),
    [therapies]
  );

  const patientMap = useMemo(
    () => Object.fromEntries(patients.map(p => [p.id, p])),
    [patients]
  );

  if (!sorted.length) {
    return (
      <div className="text-center py-16 text-gray-400">
        <div className="text-4xl mb-3">📋</div>
        <p className="font-medium text-gray-600">Sin sesiones programadas para este día</p>
      </div>
    );
  }

  return (
    <div className="space-y-1.5 max-h-[62vh] overflow-y-auto pr-1">
      {sorted.map(t => {
        const spec    = getSpecialtyStyle(t.therapyType);
        const stCfg   = getStatusConfig(t.status);
        const patient = patientMap[t.patientId];
        const age     = calcAge(patient?.birthDate);
        return (
          <div key={t.id}
               onClick={() => onCard(t)}
               className="flex items-stretch gap-0 bg-white rounded-lg border border-gray-100 overflow-hidden cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all group">
            {/* Specialty stripe */}
            <div className="w-1 shrink-0" style={{ background: spec.color }} />
            {/* Time block */}
            <div className="flex-none text-center w-14 px-2 py-2 border-r border-gray-100 bg-gray-50 flex flex-col justify-center">
              <p className="font-mono text-xs font-bold text-gray-700 leading-none">{t.startTime}</p>
              <p className="text-[9px] text-gray-400 mt-0.5">{t.durationMinutes || 45}m</p>
            </div>
            {/* Content */}
            <div className="flex-1 px-3 py-2 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {t.patientName}
                    {age && <span className="text-xs font-normal text-gray-400 ml-1">· {age}</span>}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5" style={{ color: spec.color }}>{t.therapyType}</p>
                  {patient?.diagnosis && (
                    <p className="text-[10px] text-gray-400 truncate mt-0.5">{patient.diagnosis}</p>
                  )}
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 border ${stCfg.tw}`}>
                  {stCfg.icon} {stCfg.label}
                </span>
              </div>
              {t.therapist && (
                <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                  <User className="w-3 h-3" /> {t.therapist}
                </p>
              )}
              {t.attendanceNote && (
                <p className="text-[10px] text-amber-600 mt-0.5 italic">"{t.attendanceNote}"</p>
              )}
            </div>
            {/* Quick attend button */}
            <div className="flex items-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={e => { e.stopPropagation(); onAttend(t); }}
                className="btn btn-sm btn-secondary text-[10px] py-1 px-2 whitespace-nowrap">
                ✓ Asistencia
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
