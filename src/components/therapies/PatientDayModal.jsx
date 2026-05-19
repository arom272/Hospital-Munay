import { useState, useMemo } from 'react';
import { X, User, MapPin, Phone, Plus } from 'lucide-react';
import useStore from '../../store/useStore';
import { getSpecialtyStyle, getStatusConfig, calcAge } from './therapyConstants';

const TABS = [
  { id: 'sesiones',  label: 'Sesiones del día' },
  { id: 'historial', label: 'Historial' },
];

/* ── sub-components ────────────────────────────────────── */
function DataRow({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 px-4 py-2.5 border-b border-gray-100 last:border-b-0">
      <Icon className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
      <div className="min-w-0">
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wide leading-none mb-0.5">{label}</p>
        <p className="text-sm text-gray-700 leading-snug">{value}</p>
      </div>
    </div>
  );
}

function TherapySessionCard({ therapy, onAttend, onEdit, isAdmin }) {
  const spec = getSpecialtyStyle(therapy.therapyType);
  const st   = getStatusConfig(therapy.status);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 transition-colors group">
      <div className="flex">
        <div className="w-1.5 shrink-0 self-stretch" style={{ background: spec.color }} />
        <div className="flex-1 min-w-0 px-3 py-2.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-tight" style={{ color: spec.color }}>
                {therapy.therapyType}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-xs text-gray-500">
                <span className="font-mono font-semibold text-gray-700">{therapy.startTime}</span>
                {therapy.durationMinutes && <span>{therapy.durationMinutes} min</span>}
                {therapy.therapist && <span>{therapy.therapist}</span>}
              </div>
              {therapy.notes && (
                <p className="text-xs text-gray-400 italic mt-1 truncate">"{therapy.notes}"</p>
              )}
              {therapy.attendanceNote && (
                <p className="text-xs text-amber-600 mt-1 bg-amber-50 rounded px-2 py-0.5 truncate">
                  Obs: {therapy.attendanceNote}
                </p>
              )}
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${st.tw}`}>
                {st.icon} {st.label}
              </span>
            </div>
          </div>
          {/* Hover actions */}
          <div className="flex gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onAttend(therapy)}
              className="text-[10px] px-2 py-1 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition-colors">
              ✓ Registrar asistencia
            </button>
            {isAdmin && (
              <button onClick={() => onEdit(therapy)}
                className="text-[10px] px-2 py-1 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors">
                Editar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main modal ─────────────────────────────────────────── */
export default function PatientDayModal({ patientId, patientName, date, dayTherapies, onClose, onAttend, onEdit, onNewSession, isAdmin }) {
  const [activeTab, setActiveTab] = useState('sesiones');
  const { patients, therapies: allTherapies } = useStore();

  const patient = useMemo(() => patients.find(p => p.id === patientId), [patients, patientId]);
  const age     = calcAge(patient?.birthDate);

  const fmtDate = new Date(date + 'T12:00').toLocaleDateString('es', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  const history = useMemo(() =>
    allTherapies
      .filter(t => t.patientId === patientId && t.date !== date)
      .sort((a, b) => b.date.localeCompare(a.date) || (b.startTime ?? '').localeCompare(a.startTime ?? ''))
      .slice(0, 15),
    [allTherapies, patientId, date]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
         onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col"
           style={{ maxHeight: '88vh' }}
           onClick={e => e.stopPropagation()}>

        {/* ── Header ──────────────────────────────────────── */}
        <div className="px-6 pt-5 pb-0 border-b border-gray-100 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-extrabold text-gray-900 truncate">{patientName}</h2>
              <p className="text-sm text-gray-500 mt-0.5 capitalize">{fmtDate}</p>
            </div>
            <button onClick={onClose}
              className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            {age && (
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                {age}
              </span>
            )}
            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
              {dayTherapies.length} {dayTherapies.length === 1 ? 'terapia' : 'terapias'}
            </span>
            {patient?.diagnosis && (
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100 max-w-[220px] truncate">
                {patient.diagnosis}
              </span>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-0 mt-4 -mb-px">
            {TABS.map(({ id, label }) => (
              <button key={id} onClick={() => setActiveTab(id)}
                className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors
                  ${activeTab === id
                    ? 'border-blue-600 text-blue-700'
                    : 'border-transparent text-gray-400 hover:text-gray-700'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content ─────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-4">

          {/* SESIONES DEL DÍA */}
          {activeTab === 'sesiones' && (
            <div className="space-y-4">

              {/* Patient quick-info */}
              {patient && (patient.guardian || patient.guardianPhone || patient.address) && (
                <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                  <DataRow icon={User}   label="Responsable" value={[patient.guardian, patient.guardianPhone].filter(Boolean).join(' — ')} />
                  <DataRow icon={Phone}  label="Teléfono"    value={!patient.guardian ? patient.guardianPhone : null} />
                  <DataRow icon={MapPin} label="Dirección"   value={patient.address} />
                </div>
              )}

              {/* Therapy sessions */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Ruta terapéutica del día
                </p>
                <div className="space-y-2">
                  {dayTherapies.map(t => (
                    <TherapySessionCard
                      key={t.id}
                      therapy={t}
                      onAttend={onAttend}
                      onEdit={onEdit}
                      isAdmin={isAdmin}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* HISTORIAL */}
          {activeTab === 'historial' && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Historial reciente ({history.length})
              </p>
              {!history.length ? (
                <p className="text-sm text-gray-400 italic text-center py-8">
                  Sin historial previo registrado.
                </p>
              ) : (
                <ul className="space-y-1.5">
                  {history.map(t => {
                    const spec = getSpecialtyStyle(t.therapyType);
                    const st   = getStatusConfig(t.status);
                    return (
                      <li key={t.id}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: spec.color }} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold" style={{ color: spec.color }}>
                            {t.therapyType}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {new Date(t.date + 'T12:00').toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' })}
                            {' · '}{t.startTime}
                            {t.therapist ? ` · ${t.therapist}` : ''}
                          </p>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border shrink-0 ${st.tw}`}>
                          {st.icon} {st.short}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* ── Footer ──────────────────────────────────────── */}
        <div className="px-6 py-4 border-t border-gray-100 flex flex-wrap items-center gap-2 shrink-0">
          {isAdmin && (
            <button onClick={onNewSession}
              className="btn btn-sm border border-blue-200 text-blue-600 hover:bg-blue-50 gap-1">
              <Plus className="w-3.5 h-3.5" /> Nueva sesión
            </button>
          )}
          <button onClick={onClose} className="btn btn-secondary btn-sm ml-auto">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
