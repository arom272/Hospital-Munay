import { useState, useMemo } from 'react';
import { Pencil, Trash2, Plus, X, Loader2 } from 'lucide-react';
import { ALL_SPECIALTY_KEYS, getSpecialtyStyle } from './therapyConstants';
import { addTherapist, updateTherapist, deleteTherapist } from '../../services/therapistService';
import toast from 'react-hot-toast';

const WEEK_DAYS = [
  { n: 1, label: 'Lunes' },
  { n: 2, label: 'Martes' },
  { n: 3, label: 'Miércoles' },
  { n: 4, label: 'Jueves' },
  { n: 5, label: 'Viernes' },
];

/* ── Schedule builder (form) ──────────────────────────── */
function buildInitialScheduleState(schedule = []) {
  const state = {};
  WEEK_DAYS.forEach(d => {
    const found = schedule.find(s => s.day === d.n);
    state[d.n] = {
      enabled: !!found,
      shifts:  found?.shifts ?? [],
    };
  });
  return state;
}

function scheduleStateToArray(state) {
  return WEEK_DAYS
    .filter(d => state[d.n]?.enabled && state[d.n]?.shifts.length > 0)
    .map(d => ({
      day:     d.n,
      dayName: d.label,
      shifts:  state[d.n].shifts,
    }));
}

function ScheduleBuilder({ value, onChange }) {
  const toggleDay = (n) => {
    const next = { ...value, [n]: { ...value[n], enabled: !value[n].enabled, shifts: value[n].enabled ? [] : ['mañana'] } };
    onChange(next);
  };
  const toggleShift = (n, shift) => {
    const cur = value[n].shifts;
    const next = cur.includes(shift) ? cur.filter(s => s !== shift) : [...cur, shift];
    onChange({ ...value, [n]: { ...value[n], shifts: next } });
  };
  return (
    <div className="space-y-1.5">
      {WEEK_DAYS.map(({ n, label }) => {
        const { enabled, shifts } = value[n] ?? { enabled: false, shifts: [] };
        return (
          <div key={n} className="flex items-center gap-3">
            <button type="button" onClick={() => toggleDay(n)}
              className={`w-28 text-left text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all
                ${enabled ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}>
              {label}
            </button>
            {enabled && (
              <div className="flex gap-1.5">
                {[['mañana', '☀ Mañana'], ['tarde', '🌤 Tarde']].map(([s, lbl]) => (
                  <button key={s} type="button" onClick={() => toggleShift(n, s)}
                    className={`text-[11px] px-2 py-1 rounded border font-medium transition-all
                      ${shifts.includes(s)
                        ? 'bg-amber-500 text-white border-amber-500'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-amber-300'}`}>
                    {lbl}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Therapist form modal ─────────────────────────────── */
function TherapistModal({ initial, onClose }) {
  const [name,     setName]     = useState(initial?.name ?? '');
  const [specialty, setSpecialty] = useState(initial?.specialty ?? '');
  const [schedule, setSchedule] = useState(() => buildInitialScheduleState(initial?.schedule));
  const [busy,     setBusy]     = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !specialty) return toast.error('Completá nombre y especialidad');
    const scheduleArr = scheduleStateToArray(schedule);
    if (!scheduleArr.length) return toast.error('Seleccioná al menos un día y turno');
    setBusy(true);
    try {
      const payload = { name: name.trim(), specialty, schedule: scheduleArr };
      if (initial?.id) {
        await updateTherapist(initial.id, payload);
        toast.success('Terapista actualizado');
      } else {
        await addTherapist(payload);
        toast.success('Terapista registrado');
      }
      onClose();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setBusy(false);
    }
  };

  const sStyle = specialty ? getSpecialtyStyle(specialty) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">{initial?.id ? 'Editar terapista' : 'Nuevo terapista'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="label">Nombre completo *</label>
            <input value={name} onChange={e => setName(e.target.value)}
              className="input" placeholder="Ej. Lic. María García" />
          </div>
          <div>
            <label className="label">Especialidad *</label>
            <select value={specialty} onChange={e => setSpecialty(e.target.value)} className="input">
              <option value="">Seleccionar…</option>
              {ALL_SPECIALTY_KEYS.map(k => <option key={k} value={k}>{k}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Días y turnos de atención *</label>
            <ScheduleBuilder value={schedule} onChange={setSchedule} />
          </div>
          <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
            <button type="button" onClick={onClose} className="btn btn-secondary">Cancelar</button>
            <button type="submit" disabled={busy} className="btn btn-primary">
              {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : initial?.id ? 'Guardar' : 'Registrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ── Therapist card ───────────────────────────────────── */
function TherapistCard({ therapist, isAdmin, onEdit, onDelete }) {
  const sStyle = getSpecialtyStyle(therapist.specialty);
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-1.5" style={{ background: sStyle.color }} />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-bold text-sm text-gray-900 leading-tight">{therapist.name}</p>
            <span className="inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: sStyle.light, color: sStyle.color }}>
              {therapist.specialty}
            </span>
          </div>
          {isAdmin && (
            <div className="flex gap-1 shrink-0">
              <button onClick={() => onEdit(therapist)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => onDelete(therapist)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Schedule */}
        {therapist.schedule?.length > 0 && (
          <div className="mt-3 space-y-1">
            {therapist.schedule.map((s, i) => {
              const shifts = s.shifts ?? [];
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[11px] w-20 font-medium text-gray-600">{s.dayName}</span>
                  <div className="flex gap-1">
                    {shifts.map(sh => (
                      <span key={sh}
                        className={`text-[10px] px-1.5 py-0.5 rounded font-semibold
                          ${sh === 'mañana' ? 'bg-amber-100 text-amber-700' : 'bg-indigo-100 text-indigo-700'}`}>
                        {sh === 'mañana' ? '☀ M' : '🌤 T'}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main view ────────────────────────────────────────── */
export default function TherapistsView({ therapists, isAdmin }) {
  const [formTarget, setFormTarget] = useState(null); // null = closed, {} = new, {...} = edit
  const [delTarget,  setDelTarget]  = useState(null);

  /* group by specialty */
  const bySpecialty = useMemo(() => {
    const map = {};
    therapists.forEach(t => {
      if (!map[t.specialty]) map[t.specialty] = [];
      map[t.specialty].push(t);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b, 'es'));
  }, [therapists]);

  const handleDelete = async () => {
    if (!delTarget) return;
    try {
      await deleteTherapist(delTarget.id);
      toast.success('Terapista eliminado');
      setDelTarget(null);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-gray-800">Equipo terapéutico</h3>
          <p className="text-xs text-gray-500 mt-0.5">{therapists.length} profesionales registrados</p>
        </div>
        {isAdmin && (
          <button onClick={() => setFormTarget({})} className="btn btn-primary btn-sm">
            <Plus className="w-3.5 h-3.5" /> Nuevo terapista
          </button>
        )}
      </div>

      {/* Empty state */}
      {!therapists.length && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">👩‍⚕️</div>
          <p className="font-medium text-gray-600">Sin terapistas registrados</p>
          {isAdmin && (
            <button onClick={() => setFormTarget({})} className="mt-3 btn btn-primary btn-sm">
              <Plus className="w-3.5 h-3.5" /> Registrar primer terapista
            </button>
          )}
        </div>
      )}

      {/* Grouped by specialty */}
      {bySpecialty.map(([spec, group]) => {
        const sStyle = getSpecialtyStyle(spec);
        return (
          <div key={spec}>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: sStyle.color }} />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{spec}</span>
              <span className="text-[10px] text-gray-400">{group.length}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.map(t => (
                <TherapistCard key={t.id} therapist={t} isAdmin={isAdmin}
                  onEdit={setFormTarget} onDelete={setDelTarget} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Add/Edit modal */}
      {formTarget !== null && (
        <TherapistModal
          initial={formTarget?.id ? formTarget : null}
          onClose={() => setFormTarget(null)}
        />
      )}

      {/* Delete confirm */}
      {delTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <h3 className="font-bold text-gray-900 mb-2">Eliminar terapista</h3>
            <p className="text-sm text-gray-600 mb-5">
              ¿Eliminar a <strong>{delTarget.name}</strong>? Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDelTarget(null)} className="btn btn-secondary">Cancelar</button>
              <button onClick={handleDelete} className="btn bg-red-600 text-white hover:bg-red-700">Eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
