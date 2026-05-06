import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, Calendar, HeartPulse,
  LogOut, X, DollarSign
} from 'lucide-react';
import { useAuth }  from '../contexts/AuthContext';
import useStore     from '../store/useStore';
import toast        from 'react-hot-toast';
import logoImg      from '../../LOGO.jpg';

const NAV_ITEMS = [
  { to: '/dashboard',  icon: LayoutDashboard, label: 'Dashboard',  adminOnly: false },
  { to: '/pacientes',  icon: Users,           label: 'Pacientes',  adminOnly: false },
  { to: '/cirugias',   icon: Calendar,        label: 'Cirugías',   adminOnly: false },
  { to: '/terapias',   icon: HeartPulse,      label: 'Terapias',   adminOnly: false },
  { to: '/finanzas',   icon: DollarSign,      label: 'Finanzas',   adminOnly: true  },
];

export default function Sidebar() {
  const { sidebarOpen, closeSidebar } = useStore();
  const { logout, user, isAdmin, isSecretary } = useAuth();

  const visibleItems = NAV_ITEMS.filter((i) => !i.adminOnly || isAdmin);

  const handleLogout = async () => {
    await logout();
    toast.success('Sesión cerrada');
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-30 w-64 flex flex-col
      transform transition-transform duration-200 ease-in-out
      lg:static lg:translate-x-0
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    `}
      style={{ backgroundColor: '#1A365D' }}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="bg-white rounded-xl px-3 py-1.5 flex items-center">
          <img
            src={logoImg}
            alt="Hospital Munay"
            className="h-12 w-auto object-contain"
          />
        </div>
        <button
          onClick={closeSidebar}
          className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {visibleItems.map(({ to, icon: Icon, label, adminOnly }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'text-hm-primary font-bold shadow-sm'
                  : 'text-white/75 hover:text-white hover:bg-white/10'
              }`
            }
            style={({ isActive }) =>
              isActive ? { backgroundColor: '#09D6D4', color: '#1A365D' } : {}
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span className="flex-1">{label}</span>
            {adminOnly && (
              <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-medium">
                Admin
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User + logout */}
      <div className="px-4 py-4 border-t border-white/10">
        <p className="text-xs text-white/60 truncate mb-0.5">{user?.email}</p>
        <p className="text-xs text-white/40 mb-3">
          {isAdmin ? 'Administrador' : isSecretary ? 'Secretaria' : 'Visualizador'}
        </p>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full text-sm text-white/70 hover:text-white
                     hover:bg-white/10 rounded-xl px-3 py-2 transition"
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
