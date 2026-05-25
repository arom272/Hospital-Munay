import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Bell, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import useStore from '../store/useStore';
import { useAuth } from '../contexts/AuthContext';

const TITLES = {
  '/pacientes': 'Pacientes',
  '/cirugias':  'Cirugías',
  '/terapias':  'Terapias',
  '/finanzas':  'Finanzas',
};

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Buenos días';
  if (h < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

function getDisplayName(user) {
  if (user?.displayName) return user.displayName;
  const local = user?.email?.split('@')[0] ?? 'usuario';
  return local.charAt(0).toUpperCase() + local.slice(1).replace(/[._-]/g, ' ');
}

export default function Header() {
  const { toggleSidebar } = useStore();
  const { pathname } = useLocation();
  const { user, isAdmin } = useAuth();
  const [now, setNow] = useState(() => new Date());
  const isDashboard = pathname === '/dashboard';

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const greeting   = getGreeting();
  const name       = getDisplayName(user);
  const pageTitle  = TITLES[pathname];
  const dateStr    = format(now, "EEEE d 'de' MMMM", { locale: es });
  const timeStr    = format(now, 'HH:mm');

  return (
    <header
      className="bg-white border-b border-gray-100 no-print sticky top-0 z-10"
      style={{ boxShadow: '0 1px 3px rgba(26,54,93,0.06)' }}
    >
      <div className="px-4 md:px-6 h-14 flex items-center gap-3">

        {/* Mobile toggle */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg text-hm-primary hover:bg-hm-secondary-100 transition shrink-0"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Greeting (dashboard) or page title */}
        <div className="flex-1 min-w-0">
          {isDashboard ? (
            <div>
              <p className="text-sm font-bold text-hm-primary leading-tight truncate">
                {greeting}{name ? `, ${name}` : ''}
              </p>
              <p className="text-[11px] text-gray-400 capitalize leading-tight hidden sm:block">
                {dateStr} · {timeStr}
              </p>
            </div>
          ) : (
            <h1 className="text-sm font-bold text-hm-primary">
              {pageTitle ?? 'Hospital Munay'}
            </h1>
          )}
        </div>

        {/* Search — desktop */}
        <div
          className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl
                     px-3 py-2 w-48 lg:w-60 transition-all
                     focus-within:border-hm-secondary focus-within:bg-white"
        >
          <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Buscar paciente, cirugía..."
            className="bg-transparent text-xs placeholder-gray-400 outline-none w-full text-gray-700"
          />
        </div>

        {/* Quick actions — desktop */}
        <div className="hidden lg:flex items-center gap-1.5">
          <Link
            to="/pacientes"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold
                       bg-gray-100 text-gray-600 hover:bg-hm-secondary-100 hover:text-hm-primary transition"
          >
            <Plus className="w-3 h-3" /> Paciente
          </Link>
          <Link
            to="/cirugias"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold
                       bg-hm-primary text-white hover:bg-hm-primary-800 transition"
          >
            <Plus className="w-3 h-3" /> Cirugía
          </Link>
          <Link
            to="/terapias"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold
                       bg-hm-tertiary text-hm-primary hover:bg-hm-tertiary-600 transition"
          >
            <Plus className="w-3 h-3" /> Terapia
          </Link>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-gray-100 transition text-gray-400 shrink-0">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-hm-tertiary rounded-full border-2 border-white" />
        </button>
      </div>
    </header>
  );
}