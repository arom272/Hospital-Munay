import { useEffect, useState, useMemo, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin     from '@fullcalendar/daygrid';
import timeGridPlugin    from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin        from '@fullcalendar/list';
const esLocale = {
  code: 'es',
  week: { dow: 1, doy: 4 },
  buttonText: {
    prev: 'Ant', next: 'Sig', today: 'Hoy',
    year: 'Año', month: 'Mes', week: 'Semana', day: 'Día', list: 'Agenda',
  },
  weekText: 'Sm',
  allDayText: 'Todo el día',
  moreLinkText: (n) => `+${n} más`,
  noEventsText: 'No hay eventos',
};
import { Plus, Printer, FileDown } from 'lucide-react';
import { format, startOfWeek, addDays } from 'date-fns';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';
import { useAuth } from '../contexts/AuthContext';
import { CAL_COLORS, getTypeInfo } from '../utils/patientTypes';
import { subscribePatients }  from '../services/patientService';
import { subscribeTherapies } from '../services/therapyService';
import { subscribeSurgeries, addSurgery, updateSurgery, deleteSurgery } from '../services/surgeryService';
import Modal         from '../components/ui/Modal';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import SurgeryForm   from '../components/calendar/SurgeryForm';
import SurgeryDetail from '../components/calendar/SurgeryDetail';
import { exportDailySchedulePDF, exportWeeklySchedulePDF } from '../utils/pdfExport';
import { exportSurgeriesCSV } from '../utils/csvExport';


const DISPLAY_MINUTES = 90;

function addMinutes(time, mins) {
  const [h, m] = time.split(':').map(Number);
  const total  = h * 60 + m + mins;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

export default function CalendarPage() {
  const { patients, setPatients, surgeries, setSurgeries, setTherapies } = useStore();
  const { isAdmin, canEdit } = useAuth();
  const calRef = useRef(null);

  const [formOpen,     setFormOpen]     = useState(false);
  const [detailOpen,   setDetailOpen]   = useState(false);
  const [cancelTarget, setCancelTarget] = useState(null);
  const [selected,     setSelected]     = useState(null);
  const [busy,         setBusy]         = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [tooltip,      setTooltip]      = useState(null);

  useEffect(() => {
    const u1 = subscribePatients(setPatients);
    const u2 = subscribeSurgeries(setSurgeries);
    const u3 = subscribeTherapies(setTherapies);
    return () => { u1(); u2(); u3(); };
  }, []);

  const filteredSurgeries = useMemo(() => {
    if (filterStatus === 'all') return surgeries;
    return surgeries.filter((s) => s.status === filterStatus);
  }, [surgeries, filterStatus]);

  const calEvents = filteredSurgeries
    .filter((s) => s.status !== 'cancelado')
    .map((s) => {
      const isSuspended = s.status === 'suspendido';
      const colors = isSuspended
        ? { backgroundColor: '#9ca3af', borderColor: '#6b7280', textColor: '#fff' }
        : (CAL_COLORS[s.patientType] ?? CAL_COLORS.ext);
      const endTime = addMinutes(s.startTime, DISPLAY_MINUTES);
      return {
        id:    s.id,
        title: s.patientName,
        start: `${s.date}T${s.startTime}`,
        end:   `${s.date}T${endTime}`,
        ...colors,
        extendedProps: s,
      };
    });

  const openCreate  = (dateStr) => { setSelected(dateStr ? { date: dateStr } : null); setFormOpen(true); };
  const openEdit    = () => { setDetailOpen(false); setFormOpen(true); };
  const closeDetail = () => { setDetailOpen(false); setSelected(null); };

  const handleEventClick = ({ event }) => { setTooltip(null); setSelected(event.extendedProps); setDetailOpen(true); };
  const handleDateClick  = ({ dateStr }) => { if (canEdit) openCreate(dateStr); };

  const handleEventMouseEnter = ({ event, jsEvent }) => {
    const s = event.extendedProps;
    const p = patients.find((pt) => pt.id === s.patientId);
    setTooltip({ surgery: s, patient: p, x: jsEvent.clientX, y: jsEvent.clientY });
  };
  const handleEventMouseLeave = () => setTooltip(null);

  const handleEventDrop = async ({ event, revert }) => {
    if (!canEdit) { revert(); return; }
    const s       = event.extendedProps;
    const newDate = format(event.start, 'yyyy-MM-dd');
    const newTime = format(event.start, 'HH:mm');
    try {
      await updateSurgery(s.id, { date: newDate, startTime: newTime });
      toast.success('Cirugía reprogramada');
    } catch {
      revert();
      toast.error('Error al reprogramar');
    }
  };

  const handleSave = async (data) => {
    setBusy(true);
    try {
      if (selected?.id) {
        await updateSurgery(selected.id, data);
        toast.success('Cirugía actualizada');
      } else {
        await addSurgery(data);
        toast.success('Cirugía programada');
      }
      setFormOpen(false);
      setSelected(null);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleCancelSurgery = async () => {
    if (!cancelTarget) return;
    try {
      await updateSurgery(cancelTarget.id, { status: 'cancelado' });
      toast.success('Cirugía cancelada');
      setDetailOpen(false);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setCancelTarget(null);
    }
  };

  const handleSuspendSurgery = async (id, updates) => {
    try {
      await updateSurgery(id, updates);
      toast.success(updates.status === 'suspendido' ? 'Cirugía suspendida' : 'Cirugía reprogramada');
      setDetailOpen(false);
      setSelected(null);
    } catch (err) {
      toast.error('Error: ' + err.message);
      throw err;
    }
  };

  const printDaily = () => {
    const api  = calRef.current?.getApi();
    const date = api ? format(api.getDate(), 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd');
    exportDailySchedulePDF(surgeries, date);
  };

  const printWeekly = () => {
    const api   = calRef.current?.getApi();
    const start = api ? startOfWeek(api.getDate(), { weekStartsOn: 1 }) : startOfWeek(new Date(), { weekStartsOn: 1 });
    const dates = Array.from({ length: 7 }, (_, i) => format(addDays(start, i), 'yyyy-MM-dd'));
    exportWeeklySchedulePDF(surgeries, dates);
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="card py-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {[
              { v: 'all',        l: 'Todas' },
              { v: 'programado', l: 'Programadas' },
              { v: 'confirmado', l: 'Confirmadas' },
              { v: 'realizado',  l: 'Realizadas' },
              { v: 'suspendido', l: 'Suspendidas' },
            ].map(({ v, l }) => (
              <button key={v} onClick={() => setFilterStatus(v)}
                className={`btn btn-sm ${filterStatus === v ? 'btn-primary' : 'btn-secondary'}`}>
                {l}
              </button>
            ))}
          </div>

          <div className="ml-auto flex gap-2 flex-wrap items-center">
            <div className="flex items-center gap-3 mr-2 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: '#1e40af' }} /> MNY
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: '#ea580c' }} /> JWI
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-3 h-3 rounded-full bg-green-600 inline-block" /> EXT
              </span>
              <span className="w-px h-4 bg-gray-200" />
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full inline-block bg-green-500" /> Pagado
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full inline-block bg-yellow-400" /> Parcial
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full inline-block bg-red-500" /> Sin pago
              </span>
            </div>
            <button onClick={printDaily}   className="btn-secondary btn btn-sm"><Printer className="w-4 h-4" /> Día</button>
            <button onClick={printWeekly}  className="btn-secondary btn btn-sm"><Printer className="w-4 h-4" /> Semana</button>
            <button onClick={() => exportSurgeriesCSV(surgeries)} className="btn-secondary btn btn-sm" title="CSV">
              <FileDown className="w-4 h-4" />
            </button>
            {canEdit && (
              <button onClick={() => openCreate()} className="btn-primary btn btn-sm">
                <Plus className="w-4 h-4" /> Nueva cirugía
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="card p-3 md:p-5">
        <FullCalendar
          ref={calRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          locale={esLocale}
          height="auto"
          headerToolbar={{
            left:   'prev,next today',
            center: 'title',
            right:  'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          events={calEvents}
          editable={canEdit}
          selectable={canEdit}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          eventMouseEnter={handleEventMouseEnter}
          eventMouseLeave={handleEventMouseLeave}
          eventContent={(arg) => {
            const s = arg.event.extendedProps;
            const dotColor = s.paymentComplete ? '#22c55e' : Number(s.amountPaid) > 0 ? '#eab308' : '#ef4444';
            return (
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0 4px', overflow: 'hidden', height: '100%', width: '100%' }}>
                <span style={{ width: 7, height: 7, minWidth: 7, borderRadius: '50%', backgroundColor: dotColor, border: '1.5px solid rgba(255,255,255,0.8)' }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.72rem', fontWeight: 600 }}>
                  {arg.event.title}
                </span>
              </div>
            );
          }}
          eventTimeFormat={{ hour: '2-digit', minute: '2-digit', meridiem: false }}
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          allDaySlot={false}
          nowIndicator
          eventDisplay="block"
          dayMaxEvents={4}
          moreLinkText={(n) => `+${n} más`}
          noEventsText="Sin cirugías en este período"
          buttonText={{ today: 'Hoy', month: 'Mes', week: 'Semana', day: 'Día', list: 'Lista' }}
        />
      </div>

      {/* Hover tooltip */}
      {tooltip && (
        <div
          className="fixed z-[200] pointer-events-none"
          style={{
            left: Math.min(tooltip.x + 16, window.innerWidth - 272),
            top:  tooltip.y - 8,
          }}
        >
          {(() => {
            const ti = getTypeInfo(tooltip.surgery.patientType);
            return (
              <div className="w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header strip — type color */}
                <div className="px-4 py-2.5 flex items-center justify-between gap-2"
                  style={{ backgroundColor: ti.bg }}>
                  <p className="text-white font-extrabold text-sm truncate">{tooltip.surgery.patientName}</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-white/20 text-white">
                    {ti.label}
                  </span>
                </div>

                {/* Body */}
                <div className="px-4 py-3 space-y-2">
                  {tooltip.patient?.diagnosis && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: '#72A0C1' }}>Diagnóstico</p>
                      <p className="text-xs font-semibold text-hm-primary mt-0.5">{tooltip.patient.diagnosis}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: '#72A0C1' }}>Tipo de cirugía</p>
                    <p className="text-xs font-semibold text-hm-primary mt-0.5">{tooltip.surgery.surgeryType || '—'}</p>
                  </div>
                  {isAdmin && tooltip.surgery.quotation > 0 && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: '#72A0C1' }}>Cotización</p>
                      <p className="text-xs font-semibold text-hm-primary mt-0.5">
                        {Number(tooltip.surgery.quotation).toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                    <span className="text-[10px] text-gray-400">{tooltip.surgery.startTime}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize"
                        style={{
                          backgroundColor: tooltip.surgery.status === 'confirmado' ? '#dbeafe' : tooltip.surgery.status === 'realizado' ? '#dcfce7' : '#f1f5f9',
                          color: tooltip.surgery.status === 'confirmado' ? '#1d4ed8' : tooltip.surgery.status === 'realizado' ? '#15803d' : '#475569',
                        }}>
                        {tooltip.surgery.status}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: ti.lightBg, color: ti.textColor }}>
                        {ti.longLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Form modal */}
      <Modal
        open={formOpen}
        onClose={() => { setFormOpen(false); setSelected(null); }}
        title={selected?.id ? 'Editar cirugía' : 'Nueva cirugía'}
        size="xl"
      >
        <SurgeryForm
          initial={selected}
          onSubmit={handleSave}
          onCancel={() => { setFormOpen(false); setSelected(null); }}
          busy={busy}
        />
      </Modal>

      {/* Detail modal — full custom (no Modal wrapper, to control footer) */}
      {detailOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeDetail(); }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden" style={{ maxHeight: '92vh' }}>
            <SurgeryDetail
              surgery={selected}
              onEdit={openEdit}
              onClose={closeDetail}
              onCancelSurgery={() => setCancelTarget(selected)}
              onSuspendSurgery={handleSuspendSurgery}
              isAdmin={isAdmin}
              canEdit={canEdit}
            />
          </div>
        </div>
      )}

      {/* Cancel surgery confirm */}
      <ConfirmDialog
        open={!!cancelTarget}
        title="Cancelar cirugía"
        message={`¿Marcar la cirugía de ${cancelTarget?.patientName} como cancelada?`}
        confirmLabel="Sí, cancelar"
        onConfirm={handleCancelSurgery}
        onCancel={() => setCancelTarget(null)}
      />
    </div>
  );
}
