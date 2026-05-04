import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, CheckCircle, Clock, AlertCircle, HeartPulse, TrendingUp } from 'lucide-react';
import { getTypeInfo } from '../utils/patientTypes';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import useStore from '../store/useStore';
import { subscribePatients }  from '../services/patientService';
import { subscribeSurgeries } from '../services/surgeryService';
import Badge from '../components/ui/Badge';

export default function DashboardPage() {
  const { patients, setPatients, surgeries, setSurgeries } = useStore();
  const today = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    const unsub1 = subscribePatients(setPatients);
    const unsub2 = subscribeSurgeries(setSurgeries);
    return () => { unsub1(); unsub2(); };
  }, []);

  const todaySurgeries    = surgeries.filter((s) => s.date === today && s.status !== 'cancelado');
  const totalPatients     = patients.length;
  const totalMNY          = patients.filter((p) => getTypeInfo(p.patientType).label === 'MNY').length;
  const pendingCount      = surgeries.filter((s) => s.status === 'programado').length;
  const doneCount         = surgeries.filter((s) => s.status === 'realizado').length;

  const upcomingSurgeries = surgeries
    .filter((s) => s.date >= today && s.status !== 'cancelado')
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={Users}        label="Total Pacientes" value={totalPatients}
          sub={`${totalMNY} Munay`}   color="teal"   to="/pacientes"
        />
        <StatCard
          icon={Calendar}     label="Cirugías Hoy"   value={todaySurgeries.length}
          sub="quirófano único"        color="blue"   to="/cirugias"
        />
        <StatCard
          icon={Clock}        label="Programadas"    value={pendingCount}
          sub="pendientes"             color="yellow" to="/cirugias"
        />
        <StatCard
          icon={CheckCircle}  label="Realizadas"     value={doneCount}
          sub="historial total"        color="green"  to="/cirugias"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's schedule */}
        <div className="card">
          <div className="card-header">
            <h2 className="section-title flex items-center gap-2">
              <Calendar className="w-5 h-5 text-hm-primary" />
              Agenda de Hoy
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
                .map((s) => (
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

        {/* Upcoming */}
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
              {upcomingSurgeries.map((s) => (
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

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <QuickLink to="/pacientes" icon={Users}      label="Registrar Paciente" color="navy" />
        <QuickLink to="/cirugias"  icon={Calendar}   label="Nueva Cirugía"      color="blue" />
        <QuickLink to="/terapias"  icon={HeartPulse} label="Agendar Terapia"    color="purple" />
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, to }) {
  const colors = {
    teal:   'bg-teal-50   text-teal-700',
    blue:   'bg-blue-50   text-blue-700',
    yellow: 'bg-yellow-50 text-yellow-700',
    green:  'bg-green-50  text-green-700',
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

function QuickLink({ to, icon: Icon, label, color }) {
  const colors = {
    navy:   'bg-hm-primary   hover:bg-hm-primary-800',
    blue:   'bg-blue-600     hover:bg-blue-700',
    purple: 'bg-purple-600   hover:bg-purple-700',
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
