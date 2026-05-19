import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Calendar, CheckCircle, Clock, AlertCircle,
  HeartPulse, TrendingUp, Activity, UserCheck, XCircle,
} from 'lucide-react';
import { getTypeInfo } from '../utils/patientTypes';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import useStore from '../store/useStore';
import { subscribePatients }  from '../services/patientService';
import { subscribeSurgeries } from '../services/surgeryService';
import { subscribeTherapies } from '../services/therapyService';
import Badge from '../components/ui/Badge';
import { SPECIALTY_CONFIG, ATTENDED_STATUSES, ABSENT_STATUSES, PENDING_STATUSES } from '../components/therapies/therapyConstants';

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
  const todaySurgeries    = surgeries.filter(s => s.date === today && s.status !== 'cancelado');
  const totalPatients     = patients.length;
  const totalMNY          = patients.filter(p => getTypeInfo(p.patientType).label === 'MNY').length;
  const pendingCount      = surgeries.filter(s => s.status === 'programado').length;
  const doneCount         = surgeries.filter(s => s.status === 'realizado').length;

  const upcomingSurgeries = surgeries
    .filter(s => s.date >= today && s.status !== 'cancelado')
    .slice(0, 5);

  /* ── Therapy stats ─────────────────────────────────── */
  const todayTherapies = useMemo(
    () => therapies.filter(t => t.date === today),
    [therapies, today]
  );

  const therapyStats = useMemo(() => {
    const atendidos  = todayTherapies.filter(t => ATTENDED_STATUSES.includes(t.status)).length;
    const ausentes   = todayTherapies.filter(t => ABSENT_STATUSES.includes(t.status)).length;
    const pendientes = todayTherapies.filter(t => PENDING_STATUSES.includes(t.status)).length;
    const pct = todayTherapies.length
      ? Math.round((atendidos / todayTherapies.length) * 100)
      : 0;
    return { total: todayTherapies.length, atendidos, ausentes, pendientes, pct };
  }, [todayTherapies]);

  /* group today's therapies by specialty for the panel */
  const therapiesBySpecialty = useMemo(() => {
    const map = {};
    for (const t of todayTherapies) {
      if (!map[t.therapyType]) map[t.therapyType] = [];
      map[t.therapyType].push(t);
    }
    return Object.entries(map).sort((a, b) => b[1].length - a[1].length);
  }, [todayTherapies]);

  /* upcoming therapies (next 5 distinct patient-days from tomorrow onwards) */
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

  return (
    <div className="space-y-6">

      {/* ── KPI Cards ──────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={Users}       label="Total Pacientes"   value={totalPatients}
          sub={`${totalMNY} Munay`}             color="teal"   to="/pacientes" />
        <StatCard icon={Calendar}    label="Cirugías Hoy"      value={todaySurgeries.length}
          sub="quirófano único"                  color="blue"   to="/cirugias" />
        <StatCard icon={HeartPulse}  label="Terapias Hoy"      value={therapyStats.total}
          sub={`${therapyStats.pendientes} pendientes`} color="purple" to="/terapias" />
        <StatCard icon={CheckCircle} label="Asistencia Hoy"    value={`${therapyStats.pct}%`}
          sub={`${therapyStats.atendidos} atendidos`}   color="green"  to="/terapias" />
      </div>

      {/* ── Therapy mini-stats ──────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        <MiniStat icon={Activity}   label="Programadas"  value={therapyStats.total}   color="slate" />
        <MiniStat icon={UserCheck}  label="Atendidos"    value={therapyStats.atendidos} color="green" />
        <MiniStat icon={XCircle}    label="Ausencias"    value={therapyStats.ausentes}  color="red"  />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── Terapias de hoy por especialidad ─────────── */}
        <div className="card">
          <div className="card-header">
            <h2 className="section-title flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-purple-600" />
              Terapias de Hoy
            </h2>
            <Link to="/terapias" className="text-sm text-hm-primary hover:underline">Ver módulo</Link>
          </div>

          {therapiesBySpecialty.length === 0 ? (
            <EmptyState message="No hay terapias registradas para hoy." />
          ) : (
            <ul className="space-y-2">
              {therapiesBySpecialty.map(([specialty, ts]) => {
                const spec    = SPECIALTY_MAP[specialty] ?? { color: '#64748b', light: '#f1f5f9' };
                const attended = ts.filter(t => ATTENDED_STATUSES.includes(t.status)).length;
                const absent   = ts.filter(t => ABSENT_STATUSES.includes(t.status)).length;
                return (
                  <li key={specialty}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100"
                      style={{ background: spec.light }}>
                    <div className="w-2 h-8 rounded-full shrink-0" style={{ background: spec.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate" style={{ color: spec.color }}>{specialty}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {ts.length} {ts.length === 1 ? 'paciente' : 'pacientes'}
                        {attended > 0 && ` · ${attended} atendido${attended > 1 ? 's' : ''}`}
                        {absent > 0   && ` · ${absent} ausente${absent > 1 ? 's' : ''}`}
                      </p>
                    </div>
                    <div className="flex -space-x-1">
                      {ts.slice(0, 4).map(t => (
                        <div key={t.id}
                          title={t.patientName}
                          className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                          style={{ background: spec.color }}>
                          {(t.patientName ?? '?')[0].toUpperCase()}
                        </div>
                      ))}
                      {ts.length > 4 && (
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-[9px] font-bold text-white">
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

        {/* ── Agenda de hoy (cirugías) ──────────────────── */}
        <div className="card">
          <div className="card-header">
            <h2 className="section-title flex items-center gap-2">
              <Calendar className="w-5 h-5 text-hm-primary" />
              Cirugías de Hoy
            </h2>
            <span className="text-sm text-gray-500 capitalize">
              {format(new Date(), "EEEE d 'de' MMMM", { locale: es })}
            </span>
          </div>

          {todaySurgeries.length === 0 ? (
            <EmptyState message="No hay cirugías programadas para hoy." />
          ) : (
            <ul className="space-y-2">
              {todaySurgeries
                .sort((a, b) => a.startTime.localeCompare(b.startTime))
                .map(s => (
                  <li key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                    <div className="w-2 h-10 rounded-full shrink-0" style={{ backgroundColor: getTypeInfo(s.patientType).bg }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-800 truncate">{s.patientName}</p>
                      <p className="text-xs text-gray-500">{s.startTime} · {s.surgeryType}</p>
                    </div>
                    <Badge variant={s.status} />
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ── Próximas terapias ─────────────────────────── */}
        <div className="card">
          <div className="card-header">
            <h2 className="section-title flex items-center gap-2">
              <Activity className="w-5 h-5 text-hm-primary" />
              Próximas Terapias
            </h2>
            <Link to="/terapias" className="text-sm text-hm-primary hover:underline">Ver módulo</Link>
          </div>

          {upcomingTherapies.length === 0 ? (
            <EmptyState message="No hay terapias próximas registradas." />
          ) : (
            <ul className="space-y-2">
              {upcomingTherapies.map(t => {
                const spec = SPECIALTY_MAP[t.therapyType] ?? { color: '#64748b', light: '#f1f5f9' };
                return (
                  <li key={t.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                    <div className="w-2 h-10 rounded-full shrink-0" style={{ background: spec.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-800 truncate">{t.patientName}</p>
                      <p className="text-xs text-gray-500">
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

        {/* ── Próximas cirugías ─────────────────────────── */}
        <div className="card">
          <div className="card-header">
            <h2 className="section-title flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-hm-primary" />
              Próximas Cirugías
            </h2>
            <Link to="/cirugias" className="text-sm text-hm-primary hover:underline">Ver todas</Link>
          </div>

          {upcomingSurgeries.length === 0 ? (
            <EmptyState message="No hay cirugías próximas registradas." />
          ) : (
            <ul className="space-y-2">
              {upcomingSurgeries.map(s => (
                <li key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                  <div className={`w-2 h-10 rounded-full shrink-0 ${s.patientType === 'flap' ? 'bg-green-500' : 'bg-blue-500'}`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-800 truncate">{s.patientName}</p>
                    <p className="text-xs text-gray-500">
                      {format(new Date(s.date + 'T12:00'), "EEE d MMM", { locale: es })} · {s.startTime} · {s.surgeryType}
                    </p>
                  </div>
                  <Badge variant={s.status} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ── Quick links ─────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <QuickLink to="/pacientes" icon={Users}      label="Registrar Paciente" color="navy"   />
        <QuickLink to="/cirugias"  icon={Calendar}   label="Nueva Cirugía"      color="blue"   />
        <QuickLink to="/terapias"  icon={HeartPulse} label="Agendar Terapia"    color="purple" />
      </div>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────── */

function StatCard({ icon: Icon, label, value, sub, color, to }) {
  const colors = {
    teal:   'bg-teal-50   text-teal-700',
    blue:   'bg-blue-50   text-blue-700',
    yellow: 'bg-yellow-50 text-yellow-700',
    green:  'bg-green-50  text-green-700',
    purple: 'bg-purple-50 text-purple-700',
  };
  return (
    <Link to={to} className="card hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${colors[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm font-medium text-gray-600 mt-0.5">{label}</p>
      <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
    </Link>
  );
}

function MiniStat({ icon: Icon, label, value, color }) {
  const colors = {
    slate: 'bg-slate-50  text-slate-600  border-slate-200',
    green: 'bg-green-50  text-green-600  border-green-200',
    red:   'bg-red-50    text-red-600    border-red-200',
  };
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${colors[color]}`}>
      <Icon className="w-5 h-5 shrink-0" />
      <div>
        <p className="text-xl font-bold leading-none">{value}</p>
        <p className="text-[10px] uppercase tracking-wide mt-0.5 opacity-70">{label}</p>
      </div>
    </div>
  );
}

function QuickLink({ to, icon: Icon, label, color }) {
  const colors = {
    navy:   'bg-hm-primary hover:bg-hm-primary-800',
    blue:   'bg-blue-600   hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
  };
  return (
    <Link to={to} className={`flex items-center gap-3 px-5 py-4 rounded-xl text-white font-medium text-sm transition ${colors[color]}`}>
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  );
}

function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-gray-400">
      <AlertCircle className="w-8 h-8 mb-2 opacity-40" />
      <p className="text-sm">{message}</p>
    </div>
  );
}
