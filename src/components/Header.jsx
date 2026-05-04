import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import useStore from '../store/useStore';

const TITLES = {
  '/dashboard': 'Dashboard',
  '/pacientes': 'Pacientes',
  '/cirugias':  'Cirugías',
  '/terapias':  'Terapias',
  '/finanzas':  'Finanzas',
};

export default function Header() {
  const { toggleSidebar } = useStore();
  const { pathname }      = useLocation();
  const title             = TITLES[pathname] ?? 'Hospital Munay';

  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-4 no-print shadow-sm">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-lg text-hm-primary hover:bg-hm-secondary-100 transition"
        aria-label="Abrir menú"
      >
        <Menu className="w-5 h-5" />
      </button>
      <h1 className="text-lg font-bold text-hm-primary flex-1">{title}</h1>
    </header>
  );
}
