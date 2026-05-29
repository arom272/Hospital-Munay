import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
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
import {
  Plus, Printer, FileDown,
  Scissors, Clock, CheckCircle2, AlertTriangle, DollarSign,
  Loader2, Zap,
} from 'lucide-react';
import {
  format, startOfWeek, endOfWeek, addDays, parseISO, isWithinInterval,
} from 'date-fns';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';
import { useAuth } from '../contexts/AuthContext';
import { CAL_COLORS, getTypeInfo } from '../utils/patientTypes';
import { subscribePatients }  from '../services/patientService';
import { subscribeTherapies } from '../services/therapyService';
import { subscribeSurgeries, addSurgery, updateSurgery } from '../services/surgeryService';
import Modal         from '../components/ui/Modal';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import SurgeryForm      from '../components/calendar/SurgeryForm';
import QuickSurgeryForm from '../components/calendar/QuickSurgeryForm';
import SurgeryDetail from '../components/calendar/SurgeryDetail';
import { exportDailySchedulePDF, exportWeeklySchedulePDF } from '../utils/pdfExport';
import { exportSurgeriesCSV } from '../utils/csvExport';


const DISPLAY_MINUTES = 90;

function addMinutes(time, mins) {
  const [h, m] = time.split(':').map(Number);
  const total  = h * 60 + m + mins;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

// ── Surgical stat card ────────────────────────────────────────────────────────
function StatCard({ icon: Icon, value, label, accent, iconBg }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 flex-1 min-w-[120px]"
      style={{ boxShadow: '0 1px 3px rgba(26,54,93,0.06)' }}
    >
      <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: iconBg ?? '#e8f1f8' }}>
        <Icon className="w-4 h-4" style={{ color: accent ?? '#1A365D' }} />
      </div>
      <div className="min-w-0">
        <p className="text-lg font-extrabold leading-none" style={{ color: accent ?? '#1A365D' }}>
          {value}
        </p>
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-0.5 truncate">
          {label}
        </p>
      </div>
    </div>
  );
}

// ── Filter chip ───────────────────────────────────────────────────────────────
const CHIP_ACTIVE = {
  all:        'bg-hm-primary    text-white      border-hm-primary',
  programado: 'bg-blue-50      text-blue-700   border-blue-300',
  confirmado: 'bg-indigo-50    text-indigo-700 border-indigo-300',
  realizado:  'bg-green-50     text-green-700  border-green-300',
  suspendido: 'bg-amber-50     text-amber-700  border-amber-300',
};
const CHIP_BADGE_ACTIVE = {
  all:        'bg-white/30 text-white',
  programado: 'bg-blue-100   text-blue-600',
  confirmado: 'bg-indigo-100 text-indigo-600',
  realizado:  'bg-green-100  text-green-600',
  suspendido: 'bg-amber-100  text-amber-600',
};

function FilterChip({ value, label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150
        ${active
          ? (CHIP_ACTIVE[value] ?? CHIP_ACTIVE.all)
          : 'bg-white text-gray-500 border-gray-200 hover:border-hm-secondary-200 hover:text-hm-primary'
        }`}
    >
      {label}
      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none
        ${active ? (CHIP_BADGE_ACTIVE[value] ?? 'bg-white/30 text-white') : 'bg-gray-100 text-gray-400'}`}>
        {count}
      </span>
    </button>
  );
}

// ── Quick-status metadata ─────────────────────────────────────────────────────
const STATUS_META = {
  programado: { label: 'Programada', bg: '#f1f5f9', color: '#475569' },
  confirmado: { label: 'Confirmada', bg: '#dbeafe', color: '#1d4ed8' },
  realizado:  { label: 'Realizada',  bg: '#dcfce7', color: '#15803d' },
  suspendido: { label: 'Suspendida', bg: '#fef3c7', color: '#92400e' },
};

// ─────────────────────────────────────────────────────────────────────────────
export default function CalendarPage() {
  const { patients, setPatients, surgeries, setSurgeries, setTherapies } = useStore();
  const { isAdmin, canEdit } = useAuth();
  const calRef = useRef(null);

  const [formOpen,      setFormOpen]      = useState(false);
  const [quickFormOpen, setQuickFormOpen] = useState(false);
  const [quickFormDate, setQuickFormDate] = useState('');
  const [detailOpen,   setDetailOpen]   = useState(false);
  const [cancelTarget, setCancelTarget] = useState(null);
  const [selected,     setSelected]     = useState(null);
  const [busy,         setBusy]         = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [tooltip,      setTooltip]      = useState(null);   // { surgery, patient, x, y }
  const [statusBusy,   setStatusBusy]   = useState(null);   // surgeryId or null

  // Tooltip hover tracking (stay open when mouse moves from event → tooltip)
  const tooltipTimer    = useRef(null);
  const isOverTooltip   = useRef(false);

  useEffect(() => {
    const u1 = subscribePatients(setPatients);
    const u2 = subscribeSurgeries(setSurgeries);
    const u3 = subscribeTherapies(setTherapies);
    return () => { u1(); u2(); u3(); };
  }, []);

  // ── Weekly stats ────────────────────────────────────────────────────────────
  const { weekStart, weekEnd } = useMemo(() => {
    const now = new Date();
    return {
      weekStart: startOfWeek(now, { weekStartsOn: 1 }),
      weekEnd:   endOfWeek(now,   { weekStartsOn: 1 }),
    };
  }, []);

  const surgeryStats = useMemo(() => {
    const active = surgeries.filter((s) => s.status !== 'cancelado');
    const thisWeek = active.filter((s) => {
      try { return isWithinInterval(parseISO(s.date), { start: weekStart, end: weekEnd }); }
      catch { return false; }
    });
    return {
      weekTotal:      thisWeek.length,
      programado:     active.filter((s) => s.status === 'programado').length,
      confirmado:     active.filter((s) => s.status === 'confirmado').length,
      realizado:      active.filter((s) => s.status === 'realizado').length,
      suspendido:     active.filter((s) => s.status === 'suspendido').length,
      pendingPayment: active.filter((s) => !s.paymentComplete && Number(s.amountPaid || 0) === 0).length,
    };
  }, [surgeries, weekStart, weekEnd]);

  const statusCounts = useMemo(() => ({
    all:        surgeries.filter((s) => s.status !== 'cancelado').length,
    programado: surgeries.filter((s) => s.status === 'programado').length,
    confirmado: surgeries.filter((s) => s.status === 'confirmado').length,
    realizado:  surgeries.filter((s) => s.status === 'realizado').length,
    suspendido: surgeries.filter((s) => s.status === 'suspendido').length,
  }), [surgeries]);

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
      const startTime = s.startTime || '00:00';
      const endTime   = addMinutes(startTime, DISPLAY_MINUTES);
      return {
        id:    s.id,
        title: s.patientName,
        start: `${s.date}T${startTime}`,
        end:   `${s.date}T${endTime}`,
        ...colors,
        extendedProps: s,
      };
    });

  // ── List view range: spans every surgery so the "Lista" shows them all ──────
  const listRange = useMemo(() => {
    const dates = surgeries.map((s) => s.date).filter(Boolean).sort();
    if (!dates.length) {
      const today = format(new Date(), 'yyyy-MM-dd');
      return { start: today, end: format(addDays(new Date(), 1), 'yyyy-MM-dd') };
    }
    const last = parseISO(dates[dates.length - 1]);
    return { start: dates[0], end: format(addDays(last, 1), 'yyyy-MM-dd') };
  }, [surgeries]);

  // ── Event content — finance indicators only for admin ───────────────────────
  const renderEventContent = useCallback((arg) => {
    const s = arg.event.extendedProps;
    const viewType = arg.view.type;
    const ti = getTypeInfo(s.patientType);
    const typeLabel = ti?.label ?? (s.patientType?.toUpperCase().slice(0, 3) ?? '—');

    // Payment dot: only for admin
    const dotColor = isAdmin
      ? (s.paymentComplete ? '#22c55e' : Number(s.amountPaid) > 0 ? '#eab308' : '#ef4444')
      : null;

    /* ─ Month view: compact single line ─ */
    if (viewType === 'dayGridMonth') {
      return (
        <div style={{ display:'flex', alignItems:'center', gap:3, padding:'1px 4px',
                      overflow:'hidden', height:'100%', width:'100%' }}>
          {s.isQuickEntry && (
            <Zap style={{ width:8, height:8, minWidth:8, flexShrink:0, color:'rgba(255,255,255,0.95)', strokeWidth:2.5 }} />
          )}
          {dotColor && (
            <span style={{ width:6, height:6, minWidth:6, borderRadius:'50%',
                           backgroundColor:dotColor, border:'1.5px solid rgba(255,255,255,0.6)', flexShrink:0 }} />
          )}
          <span style={{ fontSize:'0.6rem', fontWeight:800, padding:'0 3px', borderRadius:3,
                         backgroundColor:'rgba(255,255,255,0.22)', color:'rgba(255,255,255,0.92)',
                         flexShrink:0, letterSpacing:'0.03em' }}>
            {typeLabel}
          </span>
          <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                         fontSize:'0.72rem', fontWeight:600, flex:1, color:'rgba(255,255,255,0.95)' }}>
            {arg.event.title}
          </span>
        </div>
      );
    }

    /* ─ List view ─ */
    if (viewType.startsWith('list')) {
      return (
        <div style={{ display:'flex', alignItems:'center', gap:6, padding:'2px 0', width:'100%' }}>
          {s.isQuickEntry && (
            <Zap style={{ width:10, height:10, minWidth:10, flexShrink:0, color:'rgba(255,255,255,0.95)', strokeWidth:2.5 }} />
          )}
          {dotColor && (
            <span style={{ width:7, height:7, minWidth:7, borderRadius:'50%',
                           backgroundColor:dotColor, border:'1.5px solid rgba(255,255,255,0.7)', flexShrink:0 }} />
          )}
          <span style={{ fontWeight:700, fontSize:'0.8rem', flex:1 }}>{arg.event.title}</span>
          {s.surgeryType && (
            <span style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.8)', fontWeight:500 }}>
              {s.surgeryType}
            </span>
          )}
          <span style={{ fontSize:'0.62rem', fontWeight:800, padding:'1px 5px', borderRadius:4,
                         backgroundColor:'rgba(255,255,255,0.25)', color:'white',
                         textTransform:'capitalize', letterSpacing:'0.02em' }}>
            {typeLabel}
          </span>
        </div>
      );
    }

    /* ─ Time-grid views: richer card ─ */
    const statusBg = {
      programado: 'rgba(255,255,255,0.18)',
      confirmado: 'rgba(219,234,254,0.35)',
      realizado:  'rgba(220,252,231,0.35)',
      suspendido: 'rgba(254,243,199,0.35)',
    };

    return (
      <div style={{ padding:'3px 5px', overflow:'hidden', height:'100%',
                    display:'flex', flexDirection:'column', gap:2 }}>
        <div style={{ display:'flex', alignItems:'center', gap:3 }}>
          {s.isQuickEntry && (
            <Zap style={{ width:8, height:8, minWidth:8, flexShrink:0, color:'rgba(255,255,255,0.95)', strokeWidth:2.5 }} />
          )}
          {dotColor && (
            <span style={{ width:6, height:6, minWidth:6, borderRadius:'50%',
                           backgroundColor:dotColor, border:'1.5px solid rgba(255,255,255,0.7)', flexShrink:0 }} />
          )}
          <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                         fontSize:'0.72rem', fontWeight:700, flex:1, color:'white' }}>
            {arg.event.title}
          </span>
          <span style={{ fontSize:'0.6rem', fontWeight:800, padding:'1px 4px', borderRadius:4,
                         backgroundColor:'rgba(255,255,255,0.25)', color:'white',
                         flexShrink:0, letterSpacing:'0.03em' }}>
            {typeLabel}
          </span>
        </div>
        {s.surgeryType && (
          <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                         fontSize:'0.65rem', color:'rgba(255,255,255,0.85)', fontWeight:500 }}>
            {s.surgeryType}
          </span>
        )}
        <span style={{ fontSize:'0.6rem', fontWeight:700, padding:'1px 5px', borderRadius:4,
                       backgroundColor: statusBg[s.status] ?? statusBg.programado,
                       color:'rgba(255,255,255,0.9)',
                       alignSelf:'flex-start', textTransform:'capitalize' }}>
          {s.status}
        </span>
      </div>
    );
  }, [isAdmin]);

  // ── Handlers ────────────────────────────────────────────────────────────────
  const openCreate  = (dateStr) => { setSelected(dateStr ? { date: dateStr } : null); setFormOpen(true); };
  const openEdit    = () => { setDetailOpen(false); setFormOpen(true); };
  const closeDetail = () => { setDetailOpen(false); setSelected(null); };

  const handleEventClick = ({ event }) => {
    clearTimeout(tooltipTimer.current);
    setTooltip(null);
    setSelected(event.extendedProps);
    setDetailOpen(true);
  };
  const handleDateClick = ({ dateStr }) => {
    if (!canEdit) return;
    setQuickFormDate(dateStr);
    setQuickFormOpen(true);
  };

  const handleEventMouseEnter = ({ event, jsEvent }) => {
    clearTimeout(tooltipTimer.current);
    const s = event.extendedProps;
    const p = patients.find((pt) => pt.id === s.patientId);
    setTooltip({ surgery: s, patient: p, x: jsEvent.clientX, y: jsEvent.clientY });
  };
  const handleEventMouseLeave = () => {
    tooltipTimer.current = setTimeout(() => {
      if (!isOverTooltip.current) setTooltip(null);
    }, 120);
  };

  const handleTooltipMouseEnter = () => {
    clearTimeout(tooltipTimer.current);
    isOverTooltip.current = true;
  };
  const handleTooltipMouseLeave = () => {
    isOverTooltip.current = false;
    setTooltip(null);
  };

  // ── Quick status change ──────────────────────────────────────────────────────
  const handleQuickStatus = async (surgeryId, newStatus) => {
    if (statusBusy) return;
    setStatusBusy(surgeryId);
    try {
      await updateSurgery(surgeryId, { status: newStatus });
      toast.success(`Estado → ${STATUS_META[newStatus]?.label ?? newStatus}`);
      // Optimistic update in tooltip
      setTooltip((t) => t ? { ...t, surgery: { ...t.surgery, status: newStatus } } : null);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setStatusBusy(null);
    }
  };

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

  const handleQuickSave = async (data) => {
    setBusy(true);
    try {
      await addSurgery(data);
      toast.success('Cirugía programada');
      setQuickFormOpen(false);
    } catch (err) {
      toast.error('Error: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleSave = async (data) => {
    setBusy(true);
    try {
      if (selected?.id) {
        await updateSurgery(selected.id, { ...data, isQuickEntry: false });
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
    const start = api
      ? startOfWeek(api.getDate(), { weekStartsOn: 1 })
      : startOfWeek(new Date(), { weekStartsOn: 1 });
    const dates = Array.from({ length: 7 }, (_, i) => format(addDays(start, i), 'yyyy-MM-dd'));
    exportWeeklySchedulePDF(surgeries, dates);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-4">

      {/* ── Module Header: Surgical Stats ─────────────────────────────────── */}
      <div className="flex flex-wrap gap-3">
        <StatCard icon={Scissors}     value={surgeryStats.weekTotal}  label="Esta semana"  accent="#1A365D" iconBg="#e8f1f8" />
        <StatCard icon={Clock}        value={surgeryStats.programado} label="Programadas"  accent="#2563eb" iconBg="#dbeafe" />
        <StatCard icon={CheckCircle2} value={surgeryStats.confirmado} label="Confirmadas"  accent="#7c3aed" iconBg="#ede9fe" />
        <StatCard icon={CheckCircle2} value={surgeryStats.realizado}  label="Realizadas"   accent="#15803d" iconBg="#dcfce7" />
        {surgeryStats.suspendido > 0 && (
          <StatCard icon={AlertTriangle} value={surgeryStats.suspendido} label="Suspendidas" accent="#b45309" iconBg="#fef3c7" />
        )}
        {/* ↓ Finance: admin only */}
        {isAdmin && surgeryStats.pendingPayment > 0 && (
          <StatCard icon={DollarSign} value={surgeryStats.pendingPayment} label="Sin pago" accent="#dc2626" iconBg="#fee2e2" />
        )}
      </div>

      {/* ── Toolbar ────────────────────────────────────────────────────────── */}
      <div className="card py-3">

        {/* Filter chips + actions */}
        <div className="flex flex-wrap items-center gap-2 mb-3 pb-3 border-b border-gray-100">
          {[
            { v: 'all',        l: 'Todas'       },
            { v: 'programado', l: 'Programadas' },
            { v: 'confirmado', l: 'Confirmadas' },
            { v: 'realizado',  l: 'Realizadas'  },
            { v: 'suspendido', l: 'Suspendidas' },
          ].map(({ v, l }) => (
            <FilterChip
              key={v} value={v} label={l}
              count={statusCounts[v] ?? 0}
              active={filterStatus === v}
              onClick={() => setFilterStatus(v)}
            />
          ))}

          <div className="ml-auto flex items-center gap-2 flex-wrap">
            <button onClick={printDaily}  className="btn btn-secondary btn-sm"><Printer className="w-3.5 h-3.5" /> Día</button>
            <button onClick={printWeekly} className="btn btn-secondary btn-sm"><Printer className="w-3.5 h-3.5" /> Semana</button>
            <button onClick={() => exportSurgeriesCSV(surgeries)} className="btn btn-secondary btn-sm" title="Exportar CSV">
              <FileDown className="w-3.5 h-3.5" />
            </button>
            {canEdit && (
              <>
                <button onClick={() => setQuickFormOpen(true)} className="btn btn-secondary btn-sm">
                  <Zap className="w-3.5 h-3.5" /> Prog. rápida
                </button>
                <button onClick={() => openCreate()} className="btn btn-primary btn-sm">
                  <Plus className="w-3.5 h-3.5" /> Nueva cirugía
                </button>
              </>
            )}
          </div>
        </div>

        {/* Legend row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {/* Patient type legend — always visible */}
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Tipo paciente</span>
          {[
            { color: '#1e40af', lbl: 'MNY' },
            { color: '#ea580c', lbl: 'JWI' },
            { color: '#16a34a', lbl: 'EXT' },
          ].map(({ color, lbl }) => (
            <span key={lbl} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: color }} />
              <span className="text-[11px] font-semibold text-gray-600">{lbl}</span>
            </span>
          ))}

          {/* Payment legend — admin only */}
          {isAdmin && (
            <>
              <span className="w-px h-3 bg-gray-200 mx-1" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Pago</span>
              {[
                { color: '#22c55e', lbl: 'Pagado'   },
                { color: '#eab308', lbl: 'Parcial'  },
                { color: '#ef4444', lbl: 'Sin pago' },
              ].map(({ color, lbl }) => (
                <span key={lbl} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: color }} />
                  <span className="text-[11px] text-gray-500 font-medium">{lbl}</span>
                </span>
              ))}
            </>
          )}
        </div>
      </div>

      {/* ── Calendar ───────────────────────────────────────────────────────── */}
      <div className="card p-3 md:p-5">
        <FullCalendar
          ref={calRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          locale={esLocale}
          height="auto"
          fixedWeekCount={false}
          showNonCurrentDates={false}
          headerToolbar={{
            left:   'prev,next today',
            center: 'title',
            right:  'dayGridMonth,timeGridWeek,timeGridDay,listAll',
          }}
          views={{
            listAll: {
              type: 'list',
              visibleRange: listRange,
              buttonText: 'Lista',
            },
          }}
          events={calEvents}
          editable={canEdit}
          selectable={canEdit}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventDrop={handleEventDrop}
          eventMouseEnter={handleEventMouseEnter}
          eventMouseLeave={handleEventMouseLeave}
          eventContent={renderEventContent}
          eventDidMount={({ event, el }) => {
            if (event.extendedProps.isQuickEntry) {
              el.style.borderStyle = 'dashed';
              el.style.opacity = '0.85';
            }
          }}
          eventTimeFormat={{ hour: '2-digit', minute: '2-digit', meridiem: false }}
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          allDaySlot={false}
          nowIndicator
          eventDisplay="block"
          dayMaxEvents={4}
          moreLinkText={(n) => `+${n} más`}
          noEventsText="Sin cirugías registradas"
          buttonText={{ today: 'Hoy', month: 'Mes', week: 'Semana', day: 'Día', list: 'Lista', listAll: 'Lista' }}
        />
      </div>

      {/* ── Interactive hover tooltip (with quick status change) ───────────── */}
      {tooltip && (
        <div
          className="fixed z-[200] animate-slide-in-right"
          style={{
            left: Math.min(tooltip.x + 16, window.innerWidth - 280),
            top:  Math.min(tooltip.y - 8,  window.innerHeight - 460),
          }}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
        >
          {(() => {
            const ti = getTypeInfo(tooltip.surgery.patientType);
            const dotColor = tooltip.surgery.paymentComplete
              ? '#22c55e'
              : Number(tooltip.surgery.amountPaid) > 0 ? '#eab308' : '#ef4444';
            const currentStatus = tooltip.surgery.status;
            const isBusy = statusBusy === tooltip.surgery.id;

            return (
              <div className="w-[268px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* ── Header strip ── */}
                <div className="px-4 py-2.5 flex items-center justify-between gap-2"
                  style={{ backgroundColor: ti.bg }}>
                  <p className="text-white font-extrabold text-sm truncate">
                    {tooltip.surgery.patientName}
                  </p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-white/20 text-white">
                    {ti.label}
                  </span>
                </div>

                {/* ── Info body ── */}
                <div className="px-4 py-3 space-y-2">
                  {tooltip.patient?.diagnosis && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: '#72A0C1' }}>
                        Diagnóstico
                      </p>
                      <p className="text-xs font-semibold text-hm-primary mt-0.5">
                        {tooltip.patient.diagnosis}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: '#72A0C1' }}>
                      Tipo de cirugía
                    </p>
                    <p className="text-xs font-semibold text-hm-primary mt-0.5">
                      {tooltip.surgery.surgeryType || '—'}
                    </p>
                  </div>
                  {/* Cotización: admin only */}
                  {isAdmin && Number(tooltip.surgery.quotation) > 0 && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: '#72A0C1' }}>
                        Cotización
                      </p>
                      <p className="text-xs font-semibold text-hm-primary mt-0.5">
                        {Number(tooltip.surgery.quotation).toLocaleString('es-CL', {
                          style: 'currency', currency: 'CLP', maximumFractionDigits: 0,
                        })}
                      </p>
                    </div>
                  )}

                  {/* Footer: time + payment dot (admin) + status badge */}
                  <div className="flex items-center justify-between pt-1.5 border-t border-gray-50">
                    <div className="flex items-center gap-1.5">
                      {/* Payment dot: admin only */}
                      {isAdmin && (
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: dotColor }} />
                      )}
                      <span className="text-[10px] text-gray-500 font-medium">
                        {tooltip.surgery.startTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize"
                        style={{
                          backgroundColor: STATUS_META[currentStatus]?.bg ?? '#f1f5f9',
                          color:           STATUS_META[currentStatus]?.color ?? '#475569',
                        }}
                      >
                        {currentStatus}
                      </span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: ti.lightBg, color: ti.textColor }}
                      >
                        {ti.longLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Quick status change (canEdit only) ── */}
                {canEdit && (
                  <div className="px-4 pb-3 border-t border-gray-50 pt-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Cambiar estado
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {Object.entries(STATUS_META).map(([st, meta]) => {
                        const isActive = currentStatus === st;
                        return (
                          <button
                            key={st}
                            disabled={isActive || isBusy}
                            onClick={() => handleQuickStatus(tooltip.surgery.id, st)}
                            className={`
                              flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold
                              transition-all duration-100 border
                              ${isActive
                                ? 'cursor-default border-transparent'
                                : 'hover:shadow-sm active:scale-95 cursor-pointer border-gray-100 hover:border-gray-200'
                              }
                            `}
                            style={{
                              backgroundColor: isActive ? meta.bg : 'white',
                              color: isActive ? meta.color : '#6b7280',
                            }}
                          >
                            {isBusy
                              ? <Loader2 className="w-3 h-3 animate-spin" />
                              : (
                                <>
                                  {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: meta.color }} />
                                  )}
                                  {meta.label}
                                </>
                              )
                            }
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* ── Quick form modal ───────────────────────────────────────────────── */}
      <Modal
        open={quickFormOpen}
        onClose={() => { setQuickFormOpen(false); setQuickFormDate(''); }}
        title="Programación rápida"
        size="md"
      >
        <QuickSurgeryForm
          initialDate={quickFormDate}
          onSubmit={handleQuickSave}
          onCancel={() => { setQuickFormOpen(false); setQuickFormDate(''); }}
          busy={busy}
        />
      </Modal>

      {/* ── Form modal ─────────────────────────────────────────────────────── */}
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

      {/* ── Detail modal ───────────────────────────────────────────────────── */}
      {detailOpen && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeDetail(); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            style={{ maxHeight: '92vh' }}>
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

      {/* ── Cancel confirm ─────────────────────────────────────────────────── */}
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