import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, Calendar, HeartPulse,
  LogOut, X, DollarSign,
} from 'lucide-react';
import { useAuth }  from '../contexts/AuthContext';
import useStore     from '../store/useStore';
import toast        from 'react-hot-toast';
import logoImg      from '../../LOGO.jpg';

const NAV_GROUPS = [
  {
    label: 'CLÍNICO',
    items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard'  },
      { to: '/pacientes', icon: Users,           label: 'Pacientes'  },
      { to: '/cirugias',  icon: Calendar,        label: 'Cirugías'   },
      { to: '/terapias',  icon: HeartPulse,      label: 'Terapias'   },
    ],
  },
  {
    label: 'ADMINISTRATIVO',
    items: [
      { to: '/finanzas', icon: DollarSign, label: 'Finanzas', adminOnly: true },
    ],
  },
];

export default function Sidebar() {
  const { sidebarOpen, closeSidebar, surgeries, therapies } = useStore();
  const { logout, user, isAdmin, isSecretary } = useAuth();

  const today = new Date().toISOString().slice(0, 10);
  const surgeriesCount = surgeries.filter(s => s.date === today && s.status !== 'cancelado').length;
  const therapiesCount = therapies.filter(t => t.date === today).length;

  const getBadge = (to) => {
    if (to === '/cirugias' && surgeriesCount > 0) return surgeriesCount;
    if (to === '/terapias' && therapiesCount > 0) return therapiesCount;
    return null;
  };

  const handleLogout = async () => {
    await logout();
    toast.success('Sesión cerrada');
  };

  const userInitial = (user?.displayName || user?.email || 'U')[0].toUpperCase();
  const roleName    = isAdmin ? 'Administrador' : isSecretary ? 'Secretaria' : 'Visualizador';

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-30 w-56 flex flex-col
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
            className="h-10 w-auto object-contain"
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
      <nav className="flex-1 px-3 py-5 overflow-y-auto space-y-5">
        {NAV_GROUPS.map((group) => {
          const visible = group.items.filter(i => !i.adminOnly || isAdmin);
          if (visible.length === 0) return null;
          return (
            <div key={group.label}>
              <p className="text-[9px] font-bold tracking-widest text-white/30 px-3 mb-2 uppercase">
                {group.label}
              </p>
              <div className="space-y-0.5">
                {visible.map(({ to, icon: Icon, label }) => {
                  const badge = getBadge(to);
                  return (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'shadow-sm'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`
                      }
                      style={({ isActive }) =>
                        isActive ? { backgroundColor: '#09D6D4', color: '#1A365D' } : {}
                      }
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="flex-1 leading-none">{label}</span>
                      {badge !== null && (
                        <span
                          className="text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-none"
                          style={{ background: 'rgba(9,214,212,0.2)', color: '#09D6D4' }}
                        >
                          {badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* User info + logout */}
      <div className="px-3 py-3 border-t border-white/10">
        <div className="flex items-center gap-2.5 px-2 mb-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-hm-primary font-bold text-xs shrink-0"
            style={{ backgroundColor: '#09D6D4' }}
          >
            {userInitial}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-white/80 truncate font-medium leading-tight">{user?.email}</p>
            <p className="text-[10px] text-white/40 leading-tight">{roleName}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full text-xs text-white/60 hover:text-white
                     hover:bg-white/10 rounded-xl px-3 py-2 transition"
        >
          <LogOut className="w-3.5 h-3.5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}