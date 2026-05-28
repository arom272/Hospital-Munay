import { useState, useMemo } from 'react';
import { Plus, Package, Search } from 'lucide-react';
import PackageCard from './PackageCard';

const STATUS_TABS = [
  { k: 'activo',     l: 'Activos'     },
  { k: 'completado', l: 'Completados' },
  { k: 'cancelado',  l: 'Cancelados'  },
];

export default function PackagesView({ packages, onNewPackage, onEditPackage, onDeletePackage, onTickSession }) {
  const [activeStatus, setActiveStatus] = useState('activo');
  const [search,       setSearch]       = useState('');

  const counts = useMemo(() => ({
    activo:     packages.filter((p) => p.status === 'activo').length,
    completado: packages.filter((p) => p.status === 'completado').length,
    cancelado:  packages.filter((p) => p.status === 'cancelado').length,
  }), [packages]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return packages
      .filter((p) => p.status === activeStatus)
      .filter((p) => !q ||
        p.patientName?.toLowerCase().includes(q) ||
        p.therapist?.toLowerCase().includes(q) ||
        p.services?.some((s) => s.toLowerCase().includes(q))
      );
  }, [packages, activeStatus, search]);

  return (
    <div className="space-y-4">

      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Status tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {STATUS_TABS.map(({ k, l }) => (
            <button
              key={k}
              onClick={() => setActiveStatus(k)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5
                ${activeStatus === k ? 'bg-white shadow text-hm-primary' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {l}
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                ${activeStatus === k ? 'bg-hm-secondary-100 text-hm-primary' : 'bg-gray-200 text-gray-500'}`}>
                {counts[k] ?? 0}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar paciente o terapeuta..."
            className="input pl-8 py-1.5 text-sm"
          />
        </div>

        <button onClick={onNewPackage} className="btn btn-primary btn-sm ml-auto flex items-center gap-1.5">
          <Plus className="w-3.5 h-3.5" /> Nuevo paquete
        </button>
      </div>

      {/* ── Grid de tarjetas ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-3">
            <Package className="w-7 h-7 text-gray-300" />
          </div>
          <p className="text-sm font-semibold text-gray-400">
            {search ? 'Sin resultados para esa búsqueda' : `No hay paquetes ${activeStatus === 'activo' ? 'activos' : activeStatus === 'completado' ? 'completados' : 'cancelados'}`}
          </p>
          {activeStatus === 'activo' && !search && (
            <button onClick={onNewPackage}
              className="mt-3 text-xs text-hm-primary font-semibold hover:underline flex items-center gap-1">
              <Plus className="w-3.5 h-3.5" /> Crear el primer paquete
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onTickSession={onTickSession}
              onEdit={onEditPackage}
              onDelete={onDeletePackage}
            />
          ))}
        </div>
      )}
    </div>
  );
}