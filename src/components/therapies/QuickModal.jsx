import { useMemo } from 'react';
import { X, Phone, User, Activity, MapPin } from 'lucide-react';
import { getSpecialtyStyle, getStatusConfig, calcAge } from './therapyConstants';
import useStore from '../../store/useStore';

export default function QuickModal({ therapy, isAdmin, onClose, onAttend, onEdit }) {
  const { patients, therapies } = useStore();
  const patient = useMemo(() => patients.find(p => p.id === therapy?.patientId), [patients, therapy]);
  const spec    = getSpecialtyStyle(therapy?.therapyType);
  const stCfg   = getStatusConfig(therapy?.status);
  const age     = calcAge(patient?.birthDate);

  const todayRoute = useMemo(() => {
    if (!therapy) return [];
    return therapies
      .filter(t => t.patientId === therapy.patientId && t.date === therapy.date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  }, [therapies, therapy]);

  const recentHistory = useMemo(() => {
    if (!therapy) return [];
    return therapies
      .filter(t => t.patientId === therapy.patientId && t.id !== therapy.id)
      .sort((a, b) => b.date.localeCompare(a.date) || b.startTime.localeCompare(a.startTime))
      .slice(0, 6);
  }, [therapies, therapy]);

  if (!therapy) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/30" onClick={onClose} />
      <div className="w-80 md:w-96 bg-white shadow-2xl flex flex-col overflow-hidden"
           style={{ borderLeft: `4px solid ${spec.color}` }}>
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-start justify-between shrink-0"
             style={{ background: spec.light }}>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">{therapy.patientName}</p>
            <p className="text-xs text-gray-600 mt-0.5">{therapy.therapyType}</p>
            {age && <p className="text-xs text-gray-500">{age}</p>}
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-white/60 shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {/* Sesión actual */}
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Sesión actual</p>
            <div className="bg-gray-50 rounded-lg p-3 space-y-1.5 border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">{therapy.therapyType}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${stCfg.tw}`}>
                  {stCfg.icon} {stCfg.label}
                </span>
              </div>
              <p className="text-gray-600">{therapy.date} · {therapy.startTime} · {therapy.durationMinutes || 45} min</p>
              {therapy.therapist && <p className="text-gray-500">Terapeuta: {therapy.therapist}</p>}
              {therapy.attendanceNote && (
                <p className="text-amber-700 bg-amber-50 rounded px-2 py-1 mt-1 italic">"{therapy.attendanceNote}"</p>
              )}
            </div>
          </div>

          {/* Datos del paciente */}
          {patient && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Paciente</p>
              <div className="space-y-1.5">
                {patient.diagnosis && (
                  <div className="flex gap-2 items-start">
                    <Activity className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-snug">{patient.diagnosis}</span>
                  </div>
                )}
                {patient.guardian && (
                  <div className="flex gap-2 items-center">
                    <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-700">{patient.guardian}</span>
                  </div>
                )}
                {patient.guardianPhone && (
                  <div className="flex gap-2 items-center">
                    <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-700">{patient.guardianPhone}</span>
                  </div>
                )}
                {patient.address && (
                  <div className="flex gap-2 items-center">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-700 truncate">{patient.address}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Ruta terapéutica del día */}
          {todayRoute.length > 1 && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                Ruta terapéutica hoy
              </p>
              <div className="space-y-1">
                {todayRoute.map(t => {
                  const s   = getSpecialtyStyle(t.therapyType);
                  const stC = getStatusConfig(t.status);
                  const cur = t.id === therapy.id;
                  return (
                    <div key={t.id}
                         className={`flex items-center gap-2 rounded px-2 py-1.5 ${cur ? 'bg-blue-50 border border-blue-100' : ''}`}>
                      <span className="font-mono text-gray-500 w-10 shrink-0">{t.startTime}</span>
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                      <span className="flex-1 text-gray-700 font-medium">{t.therapyType}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${stC.tw}`}>{stC.short}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Historial reciente */}
          {recentHistory.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Historial reciente</p>
              <div className="space-y-1">
                {recentHistory.map(t => {
                  const stC = getStatusConfig(t.status);
                  return (
                    <div key={t.id} className="flex items-center gap-2">
                      <span className="text-gray-400 font-mono w-20 shrink-0">{t.date}</span>
                      <span className="text-gray-600 flex-1 truncate">{t.therapyType}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${stC.tw}`}>{stC.short}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Acciones */}
        <div className="p-3 border-t border-gray-100 flex gap-2 shrink-0">
          <button onClick={() => onAttend(therapy)} className="flex-1 btn btn-sm btn-primary text-xs">
            Registrar asistencia
          </button>
          {isAdmin && (
            <button onClick={() => onEdit(therapy)} className="btn btn-sm btn-secondary text-xs">
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
