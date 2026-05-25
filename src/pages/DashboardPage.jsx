import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Calendar, CheckCircle, Clock, AlertCircle,
  HeartPulse, TrendingUp, Activity, UserCheck, XCircle,
  Bell, ArrowRight, Zap,
} from 'lucide-react';
import { getTypeInfo } from '../utils/patientTypes';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import useStore from '../store/useStore';
import { subscribePatients }  from '../services/patientService';
import { subscribeSurgeries } from '../services/surgeryService';
import { subscribeTherapies } from '../services/therapyService';
import Badge from '../components/ui/Badge';
import {
  SPECIALTY_CONFIG,
  ATTENDED_STATUSES,
  ABSENT_STATUSES,
  PENDING_STATUSES,
} from '../components/therapies/therapyConstants';

const SPECIALTY_MAP = Object.fromEntries(SPECIALTY_CONFIG.map(s => [s.key, s]));

export default function DashboardPage() {
  const { patients, setPatients, surgeries, setSurgeries, therapies, setTherapies } = useStore();
  const today = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    const u1 = subscribePatients(setPatients);
    const u2 = subscribeSurgeries(setSurgeries);
    const u3 = subscribeTherapies(setTherapies);
    return () => { u1(); u2(); u3(); };
  }, []);

  /* ── Surgery stats ─────────────────────────────────── */
  const todaySurgeries = surgeries.filter(s => s.date === today && s.status !== 'cancelado');
  const totalPatients  = patients.length;
  const totalMNY       = patients.filter(p => getTypeInfo(p.patientType).label === 'MNY').length;
  const pendingCount   = surgeries.filter(s => s.status === 'programado').length;

  const upcomingSurgeries = useMemo(() =>
    surgeries
      .filter(s => s.date >= today && s.status !== 'cancelado')
      .sort((a, b) => a.date.localeCompare(b.date) || (a.startTime ?? '').localeCompare(b.startTime ?? ''))
      .slice(0, 5),
  [surgeries, today]);

  /* ── Therapy stats ─────────────────────────────────── */
  const todayTherapies = useMemo(
    () => therapies.filter(t => t.date === today),
    [therapies, today],
  );

  const therapyStats = useMemo(() => {
    const atendidos  = todayTherapies.filter(t => ATTENDED_STATUSES.includes(t.status)).length;
    const ausentes   = todayTherapies.filter(t => ABSENT_STATUSES.includes(t.status)).length;
    const pendientes = todayTherapies.filter(t => PENDING_STATUSES.includes(t.status)).length;
    const pct = todayTherapies.length
      ? Math.round((atendidos / todayTherapies.length) * 100) : 0;
    return { total: todayTherapies.length, atendidos, ausentes, pendientes, pct };
  }, [todayTherapies]);

  const therapiesBySpecialty = useMemo(() => {
    const map = {};
    for (const t of todayTherapies) {
      if (!map[t.therapyType]) map[t.therapyType] = [];
      map[t.therapyType].push(t);
    }
    return Object.entries(map).sort((a, b) => b[1].length - a[1].length);
  }, [todayTherapies]);

  const upcomingTherapies = useMemo(() => {
    const seen = new Set();
    const result = [];
    const sorted = [...therapies]
      .filter(t => t.date > today)
      .sort((a, b) => a.date.localeCompare(b.date) || (a.startTime ?? '').localeCompare(b.startTime ?? ''));
    for (const t of sorted) {
      const key = `${t.patientId}__${t.date}`;
      if (!seen.has(key)) { seen.add(key); result.push(t); }
      if (result.length >= 5) break;
    }
    return result;
  }, [therapies, today]);

  /* ── Daily operational timeline ───────────────────── */
  const dailyTimeline = useMemo(() => {
    const surgItems = todaySurgeries.map(s => ({
      id:        `s-${s.id}`,
      time:      s.startTime ?? '',
      patient:   s.patientName ?? '—',
      procedure: s.surgeryType ?? '—',
      status:    s.status,
      kind:      'surgery',
    }));
    const therapyItems = todayTherapies.map(t => ({
      id:        `t-${t.id}`,
      time:      t.startTime ?? '',
      patient:   t.patientName ?? '—',
      procedure: t.therapyType ?? '—',
      status:    t.status,
      kind:      'therapy',
    }));
    return [...surgItems, ...therapyItems]
      .sort((a, b) => (a.time || '99:99').localeCompare(b.time || '99:99'));
  }, [todaySurgeries, todayTherapies]);

  /* ── Alerts (derived from live data) ─────────────── */
  const alerts = useMemo(() => {
    const list = [];
    const unconfirmed = surgeries.filter(s => s.date >= today && s.status === 'programado').length;
    if (unconfirmed > 0) {
      list.push({
        id: 'surg-unconf', icon: Calendar, color: 'amber',
        msg: `${unconfirmed} cirugía${unconfirmed > 1 ? 's' : ''} sin confirmar`,
        to: '/cirugias',
      });
    }
    if (therapyStats.ausentes > 0) {
      list.push({
        id: 'absent', icon: XCircle, color: 'red',
        msg: `${therapyStats.ausentes} ausencia${therapyStats.ausentes > 1 ? 's' : ''} en terapias hoy`,
        to: '/terapias',
      });
    }
    if (therapyStats.pendientes > 0) {
      list.push({
        id: 'pend-therapy', icon: Clock, color: 'blue',
        msg: `${therapyStats.pendientes} terapia${therapyStats.pendientes > 1 ? 's' : ''} pendiente${therapyStats.pendientes > 1 ? 's' : ''} hoy`,
        to: '/terapias',
      });
    }
    if (pendingCount > unconfirmed) {
      list.push({
        id: 'pend-surg', icon: AlertCircle, color: 'purple',
        msg: `${pendingCount} cirugía${pendingCount > 1 ? 's' : ''} programada${pendingCount > 1 ? 's' : ''} en total`,
        to: '/cirugias',
      });
    }
    return list;
  }, [surgeries, therapyStats, pendingCount, today]);

  /* ── Recent activity (derived) ───────────────────── */
  const recentActivity = useMemo(() => {
    const items = [];

    // Attended therapies today
    const attendedToday = todayTherapies
      .filter(t => ATTENDED_STATUSES.includes(t.status))
      .slice(0, 3);
    for (const t of attendedToday) {
      const spec = SPECIALTY_MAP[t.therapyType];
      items.push({
        id:        `t-${t.id}`,
        Icon:      HeartPulse,
        iconColor: spec?.color ?? '#64748b',
        primary:   `Terapia · ${t.patientName ?? '—'}`,
        secondary: `${t.therapyType}${t.startTime ? ' · ' + t.startTime : ''}`,
        date:      today,
      });
    }

    // Recent surgeries (last 3 by date ≤ today)
    const recentSurgs = [...surgeries]
      .filter(s => s.date <= today)
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3);
    for (const s of recentSurgs) {
      items.push({
        id:        `s-${s.id}`,
        Icon:      Calendar,
        iconColor: '#1A365D',
        primary:   `Cirugía · ${s.patientName ?? '—'}`,
        secondary: `${s.surgeryType}${s.startTime ? ' · ' + s.startTime : ''}`,
        date:      s.date,
      });
    }

    return items
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 5);
  }, [surgeries, todayTherapies, today]);

  return (
    <div className="space-y-4">

      {/* ── Compact KPI Row ─────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPICard icon={Users}       label="Total Pacientes" value={totalPatients}
          sub={`${totalMNY} Munay`}                    color="teal"   to="/pacientes" />
        <KPICard icon={Calendar}    label="Cirugías Hoy"    value={todaySurgeries.length}
          sub={`${pendingCount} programadas`}           color="blue"   to="/cirugias" />
        <KPICard icon={HeartPulse}  label="Terapias Hoy"   value={therapyStats.total}
          sub={`${therapyStats.pendientes} pendientes`} color="purple" to="/terapias" />
        <KPICard icon={CheckCircle} label="Asistencia"      value={`${therapyStats.pct}%`}
          sub={`${therapyStats.atendidos} atendidos`}   color="green"  to="/terapias" />
      </div>

      {/* ── Main section: timeline + right panels ────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

        {/* Daily operational timeline */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/60">
            <h2 className="section-title flex items-center gap-2">
              <Zap className="w-4 h-4 text-hm-tertiary" />
              Actividad Operativa — Hoy
            </h2>
            <span className="text-[11px] text-gray-400 capitalize hidden sm:block">
              {format(new Date(), "EEEE d 'de' MMMM", { locale: es })}
            </span>
          </div>

          {dailyTimeline.length === 0 ? (
            <SmartEmpty message="Sin actividad programada para hoy" to="/cirugias" actionLabel="Nueva cirugía" />
          ) : (
            <div className="divide-y divide-gray-50/80">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-50/80">
                <span className="w-12 shrink-0 text-[9px] uppercase tracking-widest text-gray-400 font-bold">Hora</span>
                <span className="flex-1 text-[9px] uppercase tracking-widest text-gray-400 font-bold">Paciente / Procedimiento</span>
                <span className="w-16 shrink-0 text-[9px] uppercase tracking-widest text-gray-400 font-bold">Tipo</span>
                <span className="w-20 shrink-0 text-[9px] uppercase tracking-widest text-gray-400 font-bold">Estado</span>
              </div>
              {dailyTimeline.map(item => <TimelineRow key={item.id} item={item} />)}
            </div>
          )}
        </div>

        {/* Right column: alerts + recent activity */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* Alerts */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/60">
              <h2 className="section-title flex items-center gap-2">
                <Bell className="w-4 h-4 text-amber-500" />
                Alertas
              </h2>
              {alerts.length > 0 && (
                <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">
                  {alerts.length}
                </span>
              )}
            </div>
            {alerts.length === 0 ? (
              <SmartEmpty message="Sin alertas activas" small />
            ) : (
              <ul className="divide-y divide-gray-50/80">
                {alerts.map(a => <AlertRow key={a.id} alert={a} />)}
              </ul>
            )}
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/60">
              <h2 className="section-title flex items-center gap-2">
                <Activity className="w-4 h-4 text-hm-secondary" />
                Actividad Reciente
              </h2>
            </div>
            {recentActivity.length === 0 ? (
              <SmartEmpty message="Sin actividad reciente" small />
            ) : (
              <ul className="divide-y divide-gray-50/80">
                {recentActivity.map(item => <RecentRow key={item.id} item={item} />)}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ── Secondary panels ─────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Terapias hoy por especialidad */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/60">
            <h2 className="section-title flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-purple-600" />
              Terapias Hoy — Especialidades
            </h2>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2.5 text-[10px] text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {therapyStats.atendidos} atend.
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {therapyStats.ausentes} aus.
                </span>
              </div>
              <Link to="/terapias" className="text-[11px] text-hm-primary hover:underline font-medium">
                Ver módulo
              </Link>
            </div>
          </div>

          {therapiesBySpecialty.length === 0 ? (
            <SmartEmpty message="No hay terapias registradas para hoy." to="/terapias" actionLabel="Agendar terapia" />
          ) : (
            <ul className="divide-y divide-gray-50/80">
              {therapiesBySpecialty.map(([specialty, ts]) => {
                const spec     = SPECIALTY_MAP[specialty] ?? { color: '#64748b', light: '#f1f5f9' };
                const attended = ts.filter(t => ATTENDED_STATUSES.includes(t.status)).length;
                const absent   = ts.filter(t => ABSENT_STATUSES.includes(t.status)).length;
                return (
                  <li key={specialty} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50/70 transition">
                    <div className="w-1 h-8 rounded-full shrink-0" style={{ background: spec.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: spec.color }}>{specialty}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {ts.length} {ts.length === 1 ? 'paciente' : 'pacientes'}
                        {attended > 0 && ` · ${attended} ✓`}
                        {absent > 0   && ` · ${absent} ✗`}
                      </p>
                    </div>
                    <div className="flex -space-x-1.5 shrink-0">
                      {ts.slice(0, 4).map(t => (
                        <div
                          key={t.id}
                          title={t.patientName}
                          className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white"
                          style={{ background: spec.color }}
                        >
                          {(t.patientName ?? '?')[0].toUpperCase()}
                        </div>
                      ))}
                      {ts.length > 4 && (
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-[9px] font-bold text-gray-600">
                          +{ts.length - 4}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Próximas cirugías */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/60">
            <h2 className="section-title flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-hm-primary" />
              Próximas Cirugías
            </h2>
            <Link to="/cirugias" className="text-[11px] text-hm-primary hover:underline font-medium">Ver todas</Link>
          </div>

          {upcomingSurgeries.length === 0 ? (
            <SmartEmpty message="No hay cirugías próximas registradas." to="/cirugias" actionLabel="Nueva cirugía" />
          ) : (
            <ul className="divide-y divide-gray-50/80">
              {upcomingSurgeries.map(s => (
                <li key={s.id} className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50/70 transition">
                  <div
                    className="w-1 h-8 rounded-full shrink-0"
                    style={{ backgroundColor: getTypeInfo(s.patientType).bg }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-800 truncate leading-tight">{s.patientName}</p>
                    <p className="text-[11px] text-gray-400 truncate leading-tight">
                      {format(new Date(s.date + 'T12:00'), "EEE d MMM", { locale: es })}
                      {s.startTime ? ` · ${s.startTime}` : ''} · {s.surgeryType}
                    </p>
                  </div>
                  <Badge variant={s.status} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ── Tertiary panels ──────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Próximas terapias */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/60">
            <h2 className="section-title flex items-center gap-2">
              <Activity className="w-4 h-4 text-hm-primary" />
              Próximas Terapias
            </h2>
            <Link to="/terapias" className="text-[11px] text-hm-primary hover:underline font-medium">Ver módulo</Link>
          </div>

          {upcomingTherapies.length === 0 ? (
            <SmartEmpty message="No hay terapias próximas registradas." to="/terapias" actionLabel="Agendar terapia" />
          ) : (
            <ul className="divide-y divide-gray-50/80">
              {upcomingTherapies.map(t => {
                const spec = SPECIALTY_MAP[t.therapyType] ?? { color: '#64748b' };
                return (
                  <li key={t.id} className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50/70 transition">
                    <div className="w-1 h-8 rounded-full shrink-0" style={{ background: spec.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-800 truncate leading-tight">{t.patientName}</p>
                      <p className="text-[11px] text-gray-400 leading-tight">
                        {format(new Date(t.date + 'T12:00'), "EEE d MMM", { locale: es })}
                        {t.startTime ? ` · ${t.startTime}` : ''}
                        {' · '}<span style={{ color: spec.color }}>{t.therapyType}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Therapy summary + progress */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-card p-4">
          <h2 className="section-title flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-hm-primary" />
            Resumen de Terapias Hoy
          </h2>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <MiniStat icon={Clock}     label="Programadas"  value={therapyStats.total}    color="slate" />
            <MiniStat icon={UserCheck} label="Atendidos"    value={therapyStats.atendidos} color="green" />
            <MiniStat icon={XCircle}   label="Ausencias"    value={therapyStats.ausentes}  color="red"   />
          </div>
          {therapyStats.total > 0 && (
            <div>
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1.5">
                <span>Tasa de asistencia</span>
                <span className="font-bold text-gray-700">{therapyStats.pct}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${therapyStats.pct}%`,
                    background: therapyStats.pct >= 80
                      ? '#22c55e'
                      : therapyStats.pct >= 60 ? '#f59e0b' : '#ef4444',
                  }}
                />
              </div>
            </div>
          )}
          {therapyStats.total === 0 && (
            <p className="text-xs text-gray-400 text-center py-2">No hay datos de terapias hoy</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ─────────────────────────────────────── */

function KPICard({ icon: Icon, label, value, sub, color, to }) {
  const palette = {
    teal:   { bg: 'bg-teal-50',   text: 'text-teal-600'   },
    blue:   { bg: 'bg-blue-50',   text: 'text-blue-600'   },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
    green:  { bg: 'bg-green-50',  text: 'text-green-600'  },
  };
  const c = palette[color] ?? palette.blue;
  return (
    <Link
      to={to}
      className="bg-white rounded-xl border border-gray-100 shadow-card hover:shadow-card-hover
                 transition-shadow flex items-center gap-3 p-4 group"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.bg}
                       group-hover:scale-105 transition-transform duration-150`}>
        <Icon className={`w-5 h-5 ${c.text}`} />
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold text-gray-800 leading-none">{value}</p>
        <p className="text-xs font-semibold text-gray-500 mt-0.5 leading-tight">{label}</p>
        <p className="text-[10px] text-gray-400 mt-0.5 leading-tight truncate">{sub}</p>
      </div>
    </Link>
  );
}

function MiniStat({ icon: Icon, label, value, color }) {
  const colors = {
    slate: 'bg-slate-50 text-slate-600 border-slate-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    red:   'bg-red-50   text-red-600   border-red-200',
  };
  return (
    <div className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl border ${colors[color]}`}>
      <Icon className="w-4 h-4 shrink-0 opacity-70" />
      <p className="text-xl font-bold leading-none">{value}</p>
      <p className="text-[9px] uppercase tracking-wider opacity-60 text-center leading-tight">{label}</p>
    </div>
  );
}

function TimelineRow({ item }) {
  const isSurgery = item.kind === 'surgery';
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50/60 transition">
      <span className="w-12 shrink-0 text-xs font-mono font-bold text-gray-400 tabular-nums">
        {item.time || '—'}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate leading-tight">{item.patient}</p>
        <p className="text-[11px] text-gray-400 truncate leading-tight">{item.procedure}</p>
      </div>
      <span className={`hidden sm:inline-flex items-center justify-center w-16 shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
        isSurgery
          ? 'bg-blue-50 text-blue-600 border-blue-100'
          : 'bg-purple-50 text-purple-600 border-purple-100'
      }`}>
        {isSurgery ? 'Cirugía' : 'Terapia'}
      </span>
      <div className="w-20 shrink-0 flex justify-end">
        <Badge variant={item.status} />
      </div>
    </div>
  );
}

const ALERT_COLORS = {
  amber:  'bg-amber-50 text-amber-600',
  red:    'bg-red-50   text-red-600',
  blue:   'bg-blue-50  text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
};

function AlertRow({ alert }) {
  const { icon: Icon, color, msg, to } = alert;
  const iconCls = ALERT_COLORS[color] ?? ALERT_COLORS.blue;
  return (
    <li>
      <Link to={to} className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50/70 transition group">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${iconCls}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <p className="flex-1 text-xs text-gray-700 leading-snug">{msg}</p>
        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition shrink-0" />
      </Link>
    </li>
  );
}

function RecentRow({ item }) {
  const { Icon, iconColor, primary, secondary, date } = item;
  return (
    <li className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50/70 transition">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
        style={{ background: iconColor + '22' }}
      >
        <Icon className="w-3 h-3" style={{ color: iconColor }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-700 truncate leading-tight">{primary}</p>
        <p className="text-[10px] text-gray-400 truncate leading-tight">{secondary}</p>
      </div>
      <span className="text-[10px] text-gray-300 shrink-0 font-mono">{date}</span>
    </li>
  );
}

function SmartEmpty({ message, to, actionLabel, small = false }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${small ? 'py-5' : 'py-8'}`}>
      <AlertCircle className={`${small ? 'w-5 h-5' : 'w-6 h-6'} text-gray-200 mb-2`} />
      <p className="text-xs text-gray-400 px-4 leading-snug">{message}</p>
      {to && actionLabel && (
        <Link to={to} className="mt-2 text-[11px] font-semibold text-hm-primary hover:underline">
          {actionLabel} →
        </Link>
      )}
    </div>
  );
}