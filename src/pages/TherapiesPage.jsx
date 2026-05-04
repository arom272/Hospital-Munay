import { useEffect, useState, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin     from '@fullcalendar/daygrid';
import timeGridPlugin    from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin        from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import { Plus, Pencil, Trash2, HeartPulse } from 'lucide-react';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';
import { useAuth } from '../contexts/AuthContext';
import { subscribePatients } from '../services/patientService';
import { subscribeTherapies, addTherapy, updateTherapy, deleteTherapy } from '../services/therapyService';
import Modal         from '../components/ui/Modal';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import TherapyForm   from '../components/therapies/TherapyForm';
import Badge         from '../components/ui/Badge';

const THERAPY_COLORS = {
  'Fonoaudiología':      { backgroundColor: '#7c3aed', borderColor: '#6d28d9' },
  'Psicología':          { backgroundColor: '#db2777', borderColor: '#be185d' },
  'Nutrición':           { backgroundColor: '#ea580c', borderColor: '#c2410c' },
  'Kinesiología':        { backgroundColor: '#0891b2', borderColor: '#0e7490' },
  'Terapia Ocupacional': { backgroundColor: '#16a34a', borderColor: '#15803d' },
  default:               { backgroundColor: '#64748b', borderColor: '#475569' },
};

export default function TherapiesPage() {
  const { patients, setPatients, therapies, setTherapies } = useStore();
  const { isAdmin } = useAuth();

  const [formOpen,   setFormOpen]   = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [delTarget,  setDelTarget]  = useState(null);
  const [selected,   setSelected]   = useState(null);
  const [busy,       setBusy]       = useState(false);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const u1 = subscribePatients(setPatients);
    const u2 = subscribeTherapies(setTherapies);
    return () => { u1(); u2(); };
  }, []);

  const therapyTypes = useMemo(() => {
    const set = new Set(therapies.map((t) => t.therapyType).filter(Boolean));
    return ['all', ...set];
  }, [therapies]);

  const filtered = filterType === 'all' ? therapies : therapies.filter((t) => t.therapyType === filterType);

  const calEvents = filtered.map((t) => {
    const colors = THERAPY_COLORS[t.therapyType] ?? THERAPY_COLORS.default;
    const [h, m] = t.startTime.split(':').map(Number);
    const endMins = h * 60 + m + Number(t.durationMinutes ?? 45);
    const endTime = `${String(Math.floor(endMins / 60)).padStart(2, '0')}:${String(endMins % 60).padStart(2, '0')}`;
    return {
      id:    t.id,
      title: `${t.startTime} ${t.patientName} (${t.therapyType})`,
      start: `${t.date}T${t.startTime}`,
      end:   `${t.date}T${endTime}`,
      ...colors,
      textColor: '#fff',
      extendedProps: t,
    };
  });

  const handleDateClick = ({ dateStr }) => {
    if (!isAdmin) return;
    setSelected({ date: dateStr });
    setFormOpen(true);
  };

  const handleEventClick = ({ event }) => {
    setSelected(event.extendedProps);
    setDetailOpen(true);
  };

  const handleSave = async (data) => {
    setBusy(true);
    try {
      if (selected?.id) {
        await updateTherapy(selected.id, data);
        toast.success('Terapia actualizada');
      } else {
        await addTherapy(data);
        toast.success('Terapia agendada');
      }
      setFormOpen(false);
      setSelected(null);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async () => {
    if (!delTarget) return;
    try {
      await deleteTherapy(delTarget.id);
      toast.success('Terapia eliminada');
      setDetailOpen(false);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setDelTarget(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Info banner */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 flex items-center gap-3">
        <HeartPulse className="w-5 h-5 text-purple-600 shrink-0" />
        <p className="text-sm text-purple-700">
          Módulo de terapias — sin restricción de quirófano. Múltiples terapeutas pueden atender simultáneamente.
        </p>
      </div>

      {/* Toolbar */}
      <div className="card py-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {therapyTypes.map((t) => (
              <button key={t} onClick={() => setFilterType(t)}
                className={`btn btn-sm ${filterType === t ? 'btn-primary' : 'btn-secondary'}`}>
                {t === 'all' ? 'Todas' : t}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="ml-auto flex flex-wrap gap-2 items-center">
            {Object.entries(THERAPY_COLORS).filter(([k]) => k !== 'default').map(([k, v]) => (
              <span key={k} className="flex items-center gap-1 text-xs text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: v.backgroundColor }} />
                {k}
              </span>
            ))}
          </div>

          {isAdmin && (
            <button onClick={() => { setSelected(null); setFormOpen(true); }} className="btn-primary btn btn-sm">
              <Plus className="w-4 h-4" /> Nueva terapia
            </button>
          )}
        </div>
      </div>

      {/* Calendar */}
      <div className="card p-3 md:p-5">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="timeGridWeek"
          locale={esLocale}
          height="auto"
          headerToolbar={{
            left:   'prev,next today',
            center: 'title',
            right:  'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          events={calEvents}
          editable={isAdmin}
          selectable={isAdmin}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventTimeFormat={{ hour: '2-digit', minute: '2-digit', meridiem: false }}
          slotMinTime="07:00:00"
          slotMaxTime="20:00:00"
          allDaySlot={false}
          nowIndicator
          buttonText={{ today: 'Hoy', month: 'Mes', week: 'Semana', day: 'Día', list: 'Lista' }}
          noEventsText="Sin terapias en este período"
        />
      </div>

      {/* Form modal */}
      <Modal
        open={formOpen}
        onClose={() => { setFormOpen(false); setSelected(null); }}
        title={selected?.id ? 'Editar terapia' : 'Nueva terapia'}
        size="lg"
      >
        <TherapyForm
          initial={selected}
          onSubmit={handleSave}
          onCancel={() => { setFormOpen(false); setSelected(null); }}
          busy={busy}
        />
      </Modal>

      {/* Detail modal */}
      <Modal
        open={detailOpen}
        onClose={() => { setDetailOpen(false); setSelected(null); }}
        title="Detalle de terapia"
        size="sm"
      >
        {selected && (
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800">{selected.patientName}</p>
              <p className="text-gray-500">{selected.therapyType} · {selected.therapist || '—'}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-xs text-gray-400">Fecha</p>
                <p className="font-medium">{selected.date}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-xs text-gray-400">Hora</p>
                <p className="font-medium">{selected.startTime} · {selected.durationMinutes} min</p>
              </div>
            </div>
            {selected.notes && <p className="text-gray-600 bg-gray-50 rounded p-2">{selected.notes}</p>}
            <Badge variant={selected.status} />
            {isAdmin && (
              <div className="flex gap-2 justify-end pt-2 border-t border-gray-100">
                <button onClick={() => setDelTarget(selected)} className="btn-danger btn btn-sm">
                  <Trash2 className="w-4 h-4" /> Eliminar
                </button>
                <button onClick={() => { setSelected(selected); setDetailOpen(false); setFormOpen(true); }} className="btn-primary btn btn-sm">
                  <Pencil className="w-4 h-4" /> Editar
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Delete confirm */}
      <ConfirmDialog
        open={!!delTarget}
        title="Eliminar terapia"
        message={`¿Eliminar la sesión de ${delTarget?.patientName}?`}
        onConfirm={handleDelete}
        onCancel={() => setDelTarget(null)}
      />
    </div>
  );
}
