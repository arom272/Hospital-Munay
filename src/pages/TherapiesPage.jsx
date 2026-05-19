import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin     from '@fullcalendar/daygrid';
import timeGridPlugin    from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin        from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import {
  Plus, Search, ChevronLeft, ChevronRight,
  LayoutGrid, Calendar, Table2,
  CheckCircle, XCircle, Clock, RefreshCw, AlertCircle, Filter, Users,
} from 'lucide-react';
import toast from 'react-hot-toast';
import useStore from '../store/useStore';
import { useAuth } from '../contexts/AuthContext';
import { subscribePatients } from '../services/patientService';
import { subscribeTherapies, addTherapy, updateTherapy, deleteTherapy, deleteTherapies } from '../services/therapyService';
import { subscribeTherapists } from '../services/therapistService';
import Modal          from '../components/ui/Modal';
import ConfirmDialog  from '../components/ui/ConfirmDialog';
import TherapyForm     from '../components/therapies/TherapyForm';
import WeekMatrix      from '../components/therapies/WeekMatrix';
import MatrixView      from '../components/therapies/MatrixView';
import TherapistsView  from '../components/therapies/TherapistsView';
import PatientDayModal        from '../components/therapies/PatientDayModal';
import QuickModal             from '../components/therapies/QuickModal';
import AttendanceModal        from '../components/therapies/AttendanceModal';
import SpecialtyScheduleBar   from '../components/therapies/SpecialtyScheduleBar';
import {
  SPECIALTY_CONFIG, STATUS_CONFIG, ALL_STATUSES,
  ATTENDED_STATUSES, ABSENT_STATUSES, RESCHEDULED_STATUSES, PENDING_STATUSES,
  getWeekDates, isoAddDays, TODAY_ISO,
} from '../components/therapies/therapyConstants';

/* ── helpers ── */
function fmtDay(iso) {
  if (!iso) return '';
  return new Date(iso + 'T12:00').toLocaleDateString('es', {
    weekday: 'long', day: 'numeric', month: 'long',
  });
}
function fmtWeekRange(iso) {
  const week = getWeekDates(iso);
  const from = new Date(week[0] + 'T12:00').toLocaleDateString('es', { day: 'numeric', month: 'short' });
  const to   = new Date(week[6] + 'T12:00').toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
  return `Semana ${from} – ${to}`;
}

const CAL_COLORS = Object.fromEntries(
  SPECIALTY_CONFIG.map(s => [s.key, { backgroundColor: s.color, borderColor: s.color }])
);

const VIEWS = [
  { k: 'calendar',    l: 'Calendario', I: Calendar  , tip: 'Vista de calendario mensual' },
  { k: 'week',        l: 'Semanal',    I: Table2    , tip: 'Vista semanal por paciente' },
  { k: 'matrix',      l: 'Día',        I: LayoutGrid, tip: 'Vista diaria por paciente' },
  { k: 'therapists',  l: 'Terapistas', I: Users     , tip: 'Equipo terapéutico' },
];

export default function TherapiesPage() {
  const { patients, setPatients, therapies, setTherapies, therapists, setTherapists } = useStore();
  const { isAdmin } = useAuth();
  const calRef = useRef(null);

  /* ── navigation ───────────────────────────────────────── */
  const [view,         setView]         = useState('calendar');
  const [selectedDate, setSelectedDate] = useState(TODAY_ISO);
  const [showFilters,  setShowFilters]  = useState(false);

  /* ── filters ──────────────────────────────────────────── */
  const [search,          setSearch]          = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('all');
  const [filterTherapist, setFilterTherapist] = useState('all');
  const [filterStatus,    setFilterStatus]    = useState('all');

  /* ── modals ───────────────────────────────────────────── */
  const [formOpen,        setFormOpen]        = useState(false);
  const [quickOpen,       setQuickOpen]       = useState(false);
  const [attendOpen,      setAttendOpen]      = useState(false);
  const [delTarget,       setDelTarget]       = useState(null);
  const [cleanConfirm,    setCleanConfirm]    = useState(false);
  const [selected,        setSelected]        = useState(null);
  const [busy,            setBusy]            = useState(false);
  const [patientDayPreview, setPatientDayPreview] = useState(null); // { patientName, date, therapies[] }

  /* ── subscriptions ────────────────────────────────────── */
  useEffect(() => {
    const u1 = subscribePatients(setPatients);
    const u2 = subscribeTherapies(setTherapies);
    const u3 = subscribeTherapists(setTherapists);
    return () => { u1(); u2(); u3(); };
  }, []);

  /* ── therapist name list (for filter dropdown) ───────── */
  const therapistNames = useMemo(() => {
    const s = new Set(therapies.map(t => t.therapist).filter(Boolean));
    return Array.from(s).sort();
  }, [therapies]);

  /* ── filtered therapies ───────────────────────────────── */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return therapies.filter(t => {
      if (q && !t.patientName?.toLowerCase().includes(q)) return false;
      if (filterSpecialty !== 'all' && t.therapyType !== filterSpecialty) return false;
      if (filterTherapist !== 'all' && t.therapist   !== filterTherapist) return false;
      if (filterStatus    !== 'all' && t.status      !== filterStatus)    return false;
      return true;
    });
  }, [therapies, search, filterSpecialty, filterTherapist, filterStatus]);

  /* ── day therapies ────────────────────────────────────── */
  const dayTherapies = useMemo(
    () => filtered.filter(t => t.date === selectedDate),
    [filtered, selectedDate]
  );

  /* ── day stats ────────────────────────────────────────── */
  const dayStats = useMemo(() => {
    const tt = therapies.filter(t => t.date === selectedDate);
    return {
      total:         tt.length,
      atendidos:     tt.filter(t => ATTENDED_STATUSES.includes(t.status)).length,
      ausencias:     tt.filter(t => ABSENT_STATUSES.includes(t.status)).length,
      pendientes:    tt.filter(t => PENDING_STATUSES.includes(t.status)).length,
      reprogramados: tt.filter(t => RESCHEDULED_STATUSES.includes(t.status)).length,
    };
  }, [therapies, selectedDate]);

  /* ── week stats ───────────────────────────────────────── */
  const weekStats = useMemo(() => {
    const weekDates = getWeekDates(selectedDate);
    const tt = therapies.filter(t => weekDates.includes(t.date));
    const therapistsSet = new Set(tt.map(t => t.therapist).filter(Boolean));
    return {
      total:         tt.length,
      atendidos:     tt.filter(t => ATTENDED_STATUSES.includes(t.status)).length,
      ausencias:     tt.filter(t => ABSENT_STATUSES.includes(t.status)).length,
      pendientes:    tt.filter(t => PENDING_STATUSES.includes(t.status)).length,
      reprogramados: tt.filter(t => RESCHEDULED_STATUSES.includes(t.status)).length,
      terapeutas:    therapistsSet.size,
    };
  }, [therapies, selectedDate]);

  const isWeekView = view === 'week';
  const stats      = isWeekView ? weekStats : dayStats;

  /* ── alerts ───────────────────────────────────────────── */
  const alerts = useMemo(() => {
    const out = [];
    const absent = dayTherapies.filter(t => ABSENT_STATUSES.includes(t.status));
    if (absent.length) out.push({ type: 'warn', msg: `${absent.length} paciente(s) no asistieron hoy` });
    const cutoff = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
    const counts = {};
    therapies.filter(t => t.date >= cutoff && ABSENT_STATUSES.includes(t.status))
      .forEach(t => { counts[t.patientName] = (counts[t.patientName] || 0) + 1; });
    const chronic = Object.entries(counts).filter(([, c]) => c >= 3);
    if (chronic.length)
      out.push({ type: 'err', msg: `Ausentismo crónico (≥3 en 30d): ${chronic.map(([n]) => n).join(', ')}` });
    const weekDates = getWeekDates(selectedDate);
    const overloaded = Object.entries(
      therapies.filter(t => weekDates.includes(t.date) && t.therapist)
               .reduce((acc, t) => { acc[t.therapist] = (acc[t.therapist] || 0) + 1; return acc; }, {})
    ).filter(([, c]) => c > 20);
    if (overloaded.length)
      out.push({ type: 'warn', msg: `Sobrecarga esta semana: ${overloaded.map(([n, c]) => `${n} (${c})`).join(', ')}` });
    return out;
  }, [dayTherapies, therapies, selectedDate]);

  /* ── FullCalendar events ──────────────────────────────── */
  /* monthly view: one entry per patient per day */
  const monthlyCalEvents = useMemo(() => {
    const map = {};
    for (const t of filtered) {
      const key = `${t.patientId}__${t.date}`;
      if (!map[key]) map[key] = { patientId: t.patientId, patientName: t.patientName, date: t.date, therapies: [], earliest: '23:59' };
      map[key].therapies.push(t);
      if ((t.startTime ?? '') < map[key].earliest) map[key].earliest = t.startTime ?? '08:00';
    }
    return Object.values(map).map(({ patientId, patientName, date, therapies: ts, earliest }) => {
      ts.sort((a, b) => (a.startTime ?? '').localeCompare(b.startTime ?? ''));
      const count = ts.length;
      return {
        id:    `grp__${patientId}__${date}`,
        title: count > 1 ? `${patientName} (${count})` : patientName,
        start: `${date}T${earliest}`,
        backgroundColor: '#2563eb', borderColor: '#1d4ed8', textColor: '#fff',
        extendedProps: { isGrouped: true, therapies: ts, patientId, patientName, date },
      };
    });
  }, [filtered]);

  /* week/day view: individual events with specialty color */
  const weekCalEvents = useMemo(() => filtered.map(t => {
    const colors = CAL_COLORS[t.therapyType] ?? { backgroundColor: '#64748b', borderColor: '#475569' };
    const [h, m] = (t.startTime ?? '08:00').split(':').map(Number);
    const endM   = h * 60 + m + Number(t.durationMinutes ?? 45);
    const endT   = `${String(Math.floor(endM/60)).padStart(2,'0')}:${String(endM%60).padStart(2,'0')}`;
    return {
      id: t.id, title: `${t.startTime} ${t.patientName}`,
      start: `${t.date}T${t.startTime}`, end: `${t.date}T${endT}`,
      ...colors, textColor: '#fff', extendedProps: { ...t, isGrouped: false },
    };
  }), [filtered]);

  /* ── handlers ─────────────────────────────────────────── */
  const openCard    = useCallback(t => { setSelected(t); setQuickOpen(true); },  []);
  const openAttend  = useCallback(t => { setSelected(t); setAttendOpen(true); }, []);

  const handleScheduleSlot = useCallback((date, startTime) => {
    setSelected({ date, startTime });
    setFormOpen(true);
  }, []);

  const handleScheduleWithSpecialty = useCallback((specialty, shift) => {
    setSelected({
      date: selectedDate,
      therapyType: specialty,
      startTime: shift === 'tarde' ? '14:30' : '08:30',
    });
    setFormOpen(true);
  }, [selectedDate]);

  const handleSave = async (data) => {
    setBusy(true);
    try {
      if (selected?.id) { await updateTherapy(selected.id, data); toast.success('Terapia actualizada'); }
      else              { await addTherapy(data);                 toast.success('Terapia agendada');    }
      setFormOpen(false); setSelected(null);
    } catch (e) { toast.error(e.message); }
    finally { setBusy(false); }
  };

  const handleAttendSave = async ({ status, notes }) => {
    try {
      if (status === 'cancelado') {
        await deleteTherapy(selected.id);
        toast.success('Terapia cancelada y eliminada');
      } else {
        await updateTherapy(selected.id, { status, attendanceNote: notes, attendanceAt: new Date().toISOString() });
        toast.success('Asistencia registrada');
      }
      setAttendOpen(false);
    } catch (e) { toast.error(e.message); }
  };

  const handleDelete = async () => {
    if (!delTarget) return;
    try { await deleteTherapy(delTarget.id); toast.success('Terapia eliminada'); setDelTarget(null); }
    catch (e) { toast.error(e.message); }
  };

  const handleClean = async () => {
    const ids = therapies.filter(t => t.status === 'programado').map(t => t.id);
    try {
      await deleteTherapies(ids);
      toast.success(`${ids.length} terapias programadas eliminadas`);
    } catch (e) { toast.error(e.message); }
    finally { setCleanConfirm(false); }
  };

  const hasFilter = filterSpecialty !== 'all' || filterTherapist !== 'all' || filterStatus !== 'all' || !!search;

  /* ── date nav ─────────────────────────────────────────── */
  const navDelta   = isWeekView ? 7 : 1;
  const navPrev    = () => setSelectedDate(isoAddDays(selectedDate, -navDelta));
  const navNext    = () => setSelectedDate(isoAddDays(selectedDate, +navDelta));
  const dateLabel  = isWeekView ? fmtWeekRange(selectedDate) : fmtDay(selectedDate);

  /* ─────────────────────────────────────────────────────── */
  return (
    <div className="space-y-2">

      {/* ── TOOLBAR ───────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2.5">
        <div className="flex flex-wrap items-center gap-2">

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Buscar paciente…"
              className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 w-44 bg-gray-50" />
          </div>

          {/* Filter toggle */}
          <button onClick={() => setShowFilters(f => !f)}
            className={`btn btn-sm gap-1 ${showFilters || hasFilter ? 'btn-primary' : 'btn-secondary'}`}>
            <Filter className="w-3.5 h-3.5" />
            Filtros{hasFilter ? ' ●' : ''}
          </button>

          {/* View switcher */}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-[11px] font-medium">
            {VIEWS.map(({ k, l, I }) => (
              <button key={k} onClick={() => setView(k)}
                      title={l}
                      className={`px-2.5 py-1.5 flex items-center gap-1 border-r border-gray-200 last:border-r-0 transition-colors
                        ${view === k ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                <I className="w-3 h-3" />
                <span className="hidden sm:inline">{l}</span>
              </button>
            ))}
          </div>

          <div className="flex-1" />

          {isAdmin && (
            <>
              <button onClick={() => setCleanConfirm(true)}
                className="btn btn-sm border border-red-200 text-red-600 hover:bg-red-50 gap-1"
                title="Eliminar todas las terapias programadas">
                <XCircle className="w-3.5 h-3.5" /> Limpiar
              </button>
              <button onClick={() => { setSelected(null); setFormOpen(true); }} className="btn-primary btn btn-sm">
                <Plus className="w-3.5 h-3.5" /> Nueva terapia
              </button>
            </>
          )}
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-gray-100">
            <select value={filterSpecialty} onChange={e => setFilterSpecialty(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50">
              <option value="all">Todas las especialidades</option>
              {SPECIALTY_CONFIG.map(s => <option key={s.key} value={s.key}>{s.key}</option>)}
            </select>
            <select value={filterTherapist} onChange={e => setFilterTherapist(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50">
              <option value="all">Todos los terapeutas</option>
              {therapistNames.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50">
              <option value="all">Todos los estados</option>
              {ALL_STATUSES.map(s => <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>)}
            </select>
            {hasFilter && (
              <button onClick={() => { setFilterSpecialty('all'); setFilterTherapist('all'); setFilterStatus('all'); setSearch(''); }}
                className="text-xs text-red-500 hover:text-red-700 font-medium px-1">
                × Limpiar
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {[
          { label: 'Programados', value: stats.total,          I: Calendar,    c: 'text-slate-600',  bg: 'bg-slate-50  border-slate-200'  },
          { label: 'Atendidos',   value: stats.atendidos,      I: CheckCircle, c: 'text-green-600',  bg: 'bg-green-50  border-green-200'  },
          { label: 'Ausencias',   value: stats.ausencias,      I: XCircle,     c: 'text-red-600',    bg: 'bg-red-50    border-red-200'    },
          { label: 'Pendientes',  value: stats.pendientes,     I: Clock,       c: 'text-blue-600',   bg: 'bg-blue-50   border-blue-200'   },
          { label: 'Reprog.',     value: stats.reprogramados,  I: RefreshCw,   c: 'text-amber-600',  bg: 'bg-amber-50  border-amber-200'  },
          { label: 'Terapeutas',  value: isWeekView ? (stats.terapeutas ?? '—') : '—', I: Users, c: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
        ].map(({ label, value, I, c, bg }) => (
          <div key={label} className={`rounded-xl border px-3 py-2 flex items-center gap-2 ${bg}`}>
            <I className={`w-4 h-4 ${c} shrink-0`} />
            <div>
              <p className={`text-xl font-bold leading-none ${c}`}>{value}</p>
              <p className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wide">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── ALERTS ────────────────────────────────────────── */}
      {alerts.length > 0 && (
        <div className="space-y-1">
          {alerts.map((a, i) => (
            <div key={i} className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border
              ${a.type === 'err' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {a.msg}
            </div>
          ))}
        </div>
      )}

      {/* ── SPECIALTY SCHEDULE BAR ────────────────────────── */}
      <SpecialtyScheduleBar therapists={therapists} />

      {/* ── DATE NAV ──────────────────────────────────────── */}
      {view !== 'calendar' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1">
              <button onClick={navPrev} className="p-1 rounded-lg hover:bg-gray-100">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button onClick={() => setSelectedDate(TODAY_ISO)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors
                  ${getWeekDates(selectedDate).includes(TODAY_ISO) && isWeekView
                    ? 'bg-blue-600 text-white'
                    : selectedDate === TODAY_ISO && !isWeekView
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'}`}>
                Hoy
              </button>
              <button onClick={navNext} className="p-1 rounded-lg hover:bg-gray-100">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-sm font-semibold text-gray-800 capitalize ml-1 hidden sm:block">
                {dateLabel}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                {isWeekView ? 'Semana' : 'Día'}:
              </span>
              <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)}
                className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-200 bg-gray-50" />
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN VIEW ─────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3">

        {/* Color legend (specialty reference for matrix / week views) */}
        {view !== 'calendar' && view !== 'availability' && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2.5 pb-2.5 border-b border-gray-100">
            {SPECIALTY_CONFIG.map(s => (
              <span key={s.key} className="flex items-center gap-1 text-[10px] text-gray-500">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                {s.key}
              </span>
            ))}
          </div>
        )}

        {/* ── WEEK MATRIX ── */}
        {view === 'week' && (
          <WeekMatrix
            therapies={filtered}
            patients={patients}
            selectedDate={selectedDate}
            onDateSelect={d => setSelectedDate(d)}
            onCard={openCard}
            onAttend={openAttend}
            onScheduleSlot={handleScheduleSlot}
            isAdmin={isAdmin}
          />
        )}

        {/* ── DAY MATRIX ── */}
        {view === 'matrix' && (
          <MatrixView
            therapies={dayTherapies}
            patients={patients}
            date={selectedDate}
            onCard={openCard}
            onAttend={openAttend}
            onScheduleWithSpecialty={handleScheduleWithSpecialty}
            isAdmin={isAdmin}
          />
        )}

        {/* ── THERAPISTS ── */}
        {view === 'therapists' && (
          <TherapistsView therapists={therapists} isAdmin={isAdmin} />
        )}

        {/* ── FULLCALENDAR ── */}
        {view === 'calendar' && (
          <FullCalendar
            ref={calRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            initialView="dayGridMonth"
            locale={esLocale}
            height="auto"
            headerToolbar={{ left: 'prev,next today', center: 'title', right: '' }}
            events={monthlyCalEvents}
            editable={false}
            selectable={false}
            dateClick={({ dateStr }) => {
              setSelectedDate(dateStr.slice(0, 10));
              setView('matrix');
            }}
            eventClick={({ event }) => {
              const props = event.extendedProps;
              if (props.isGrouped) {
                setPatientDayPreview({ patientName: props.patientName, date: props.date, therapies: props.therapies });
              } else {
                setSelected(props);
                setQuickOpen(true);
              }
            }}
            eventTimeFormat={{ hour: '2-digit', minute: '2-digit', meridiem: false }}
            slotMinTime="07:00:00"
            slotMaxTime="20:00:00"
            allDaySlot={false}
            nowIndicator
            buttonText={{ today: 'Hoy', month: 'Mes', week: 'Semana', day: 'Día', list: 'Lista' }}
            noEventsText="Sin terapias en este período"
          />
        )}
      </div>

      {/* ── MODALS ────────────────────────────────────────── */}
      <Modal open={formOpen} onClose={() => { setFormOpen(false); setSelected(null); }}
        title={selected?.id ? 'Editar terapia' : 'Nueva terapia'} size="lg">
        <TherapyForm initial={selected} onSubmit={handleSave}
          onCancel={() => { setFormOpen(false); setSelected(null); }} busy={busy} />
      </Modal>

      {quickOpen && selected && (
        <QuickModal
          therapy={selected}
          isAdmin={isAdmin}
          onClose={() => { setQuickOpen(false); setSelected(null); }}
          onAttend={t => { setQuickOpen(false); setSelected(t); setAttendOpen(true); }}
          onEdit={t => { setQuickOpen(false); setSelected(t); setFormOpen(true); }}
        />
      )}

      {attendOpen && selected && (
        <AttendanceModal
          therapy={selected}
          onSave={handleAttendSave}
          onClose={() => { setAttendOpen(false); setSelected(null); }}
        />
      )}

      <ConfirmDialog open={!!delTarget} title="Eliminar terapia"
        message={`¿Eliminar la sesión de ${delTarget?.patientName}?`}
        onConfirm={handleDelete} onCancel={() => setDelTarget(null)} />

      <ConfirmDialog open={cleanConfirm} title="Limpiar terapias programadas"
        message={`Se eliminarán ${therapies.filter(t => t.status === 'programado').length} terapias con estado "Programado". Esta acción no se puede deshacer.`}
        onConfirm={handleClean} onCancel={() => setCleanConfirm(false)} />

      {/* ── Patient day modal (calendar monthly click) ───── */}
      {patientDayPreview && (
        <PatientDayModal
          patientId={patientDayPreview.patientId}
          patientName={patientDayPreview.patientName}
          date={patientDayPreview.date}
          dayTherapies={patientDayPreview.therapies}
          isAdmin={isAdmin}
          onClose={() => setPatientDayPreview(null)}
          onAttend={t => { setPatientDayPreview(null); setSelected(t); setAttendOpen(true); }}
          onEdit={t => { setPatientDayPreview(null); setSelected(t); setFormOpen(true); }}
          onNewSession={() => {
            setPatientDayPreview(null);
            setSelected({ date: patientDayPreview.date, patientId: patientDayPreview.patientId });
            setFormOpen(true);
          }}
        />
      )}
    </div>
  );
}
