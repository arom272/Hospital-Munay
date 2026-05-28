import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { User, Calendar, CheckCircle2, Circle, Pencil, Trash2, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { getTypeInfo } from '../../utils/patientTypes';
import { getSpecialtyStyle } from './therapyConstants';

function fmtDate(iso) {
  if (!iso) return '—';
  try { return format(parseISO(iso), "dd MMM yyyy", { locale: es }); }
  catch { return iso; }
}

const TOTAL = 8;

export default function PackageCard({ pkg, onTickSession, onEdit, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const ti           = getTypeInfo(pkg.patientType);
  const completed    = (pkg.sessions ?? []).filter((s) => s.status === 'completada').length;
  const progress     = Math.round((completed / TOTAL) * 100);
  const precio       = Number(pkg.precio)       || 0;
  const montoPagado  = Number(pkg.montoPagado)  || 0;
  const saldo        = precio - montoPagado;
  const isCompleted  = pkg.status === 'completado';
  const isCancelled  = pkg.status === 'cancelado';

  const statusBadge = {
    activo:     { label: 'Activo',     bg: '#dbeafe', color: '#1d4ed8' },
    completado: { label: 'Completado', bg: '#dcfce7', color: '#15803d' },
    cancelado:  { label: 'Cancelado',  bg: '#fee2e2', color: '#dc2626' },
  }[pkg.status] ?? { label: pkg.status, bg: '#f1f5f9', color: '#475569' };

  return (
    <div className={`bg-white rounded-2xl border overflow-hidden shadow-sm transition-all
      ${isCompleted ? 'border-green-200' : isCancelled ? 'border-red-200 opacity-70' : 'border-gray-100 hover:shadow-md'}`}>

      {/* ── Header ── */}
      <div className="px-4 pt-4 pb-3 flex items-start justify-between gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
            style={{ backgroundColor: ti.bg }}>
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-hm-primary truncate">{pkg.patientName}</p>
            <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: ti.lightBg, color: ti.textColor }}>{ti.label}</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: statusBadge.bg, color: statusBadge.color }}>
                {statusBadge.label}
              </span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-7 z-20 w-36 bg-white rounded-xl border border-gray-100 shadow-lg py-1"
              onMouseLeave={() => setMenuOpen(false)}>
              <button onClick={() => { setMenuOpen(false); onEdit?.(pkg); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                <Pencil className="w-3.5 h-3.5" /> Editar
              </button>
              <button onClick={() => { setMenuOpen(false); onDelete?.(pkg); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition">
                <Trash2 className="w-3.5 h-3.5" /> Eliminar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Info ── */}
      <div className="px-4 pb-3 space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>Inicio: <span className="font-semibold">{fmtDate(pkg.startDate)}</span></span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="truncate">{pkg.therapist || '—'}</span>
        </div>
        {pkg.services?.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0.5">
            {pkg.services.map((s) => {
              const st = getSpecialtyStyle(s);
              return (
                <span key={s} className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: st.light, color: st.color }}>
                  {s}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Sesiones ── */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Sesiones
          </p>
          <p className="text-xs font-bold text-hm-primary">{completed}/{TOTAL}</p>
        </div>

        {/* Sesiones agrupadas por especialidad si la sesión tiene `specialty` asignada */}
        {(() => {
          const sessions = pkg.sessions ?? Array.from({ length: 8 }, (_, i) => ({ sessionNumber: i + 1, status: 'pendiente' }));
          const hasSpecialty = sessions.some(s => s.specialty);

          if (!hasSpecialty) {
            /* Vista legacy: una sola fila */
            return (
              <div className="flex gap-1.5 mb-2">
                {sessions.map((s) => {
                  const done = s.status === 'completada';
                  return (
                    <button
                      key={s.sessionNumber}
                      type="button"
                      disabled={isCancelled}
                      onClick={() => !isCancelled && onTickSession?.(pkg, s)}
                      title={done
                        ? `Sesión ${s.sessionNumber}: ${fmtDate(s.date)}${s.therapist ? ' · ' + s.therapist : ''}`
                        : `Sesión ${s.sessionNumber}: pendiente`}
                      className={`flex-1 h-8 rounded-lg flex items-center justify-center transition-all border
                        ${done
                          ? 'bg-green-50 border-green-300 text-green-600 hover:bg-green-100'
                          : 'bg-gray-50 border-gray-200 text-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500'
                        } ${isCancelled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {done
                        ? <CheckCircle2 className="w-4 h-4" />
                        : <span className="text-[10px] font-bold">{s.sessionNumber}</span>
                      }
                    </button>
                  );
                })}
              </div>
            );
          }

          /* Vista agrupada por especialidad */
          const groups = {};
          for (const s of sessions) {
            const key = s.specialty ?? 'Sin asignar';
            if (!groups[key]) groups[key] = [];
            groups[key].push(s);
          }
          return (
            <div className="space-y-2 mb-2">
              {Object.entries(groups).map(([specialty, group]) => {
                const style = getSpecialtyStyle(specialty);
                const doneGrp = group.filter(s => s.status === 'completada').length;
                return (
                  <div key={specialty}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold flex items-center gap-1"
                        style={{ color: style.color }}>
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: style.color }} />
                        {specialty}
                      </span>
                      <span className="text-[10px] font-semibold text-gray-500">{doneGrp}/{group.length}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {group.map((s) => {
                        const done = s.status === 'completada';
                        return (
                          <button
                            key={s.sessionNumber}
                            type="button"
                            disabled={isCancelled}
                            onClick={() => !isCancelled && onTickSession?.(pkg, s)}
                            title={done
                              ? `Sesión ${s.sessionNumber} (${specialty}): ${fmtDate(s.date)}${s.therapist ? ' · ' + s.therapist : ''}`
                              : `Sesión ${s.sessionNumber} (${specialty}): pendiente`}
                            className={`flex-1 h-7 rounded-lg flex items-center justify-center transition-all border text-[10px] font-bold
                              ${done
                                ? 'text-white'
                                : 'bg-white text-gray-400 hover:text-gray-700'}
                              ${isCancelled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            style={done
                              ? { backgroundColor: style.color, borderColor: style.color }
                              : { borderColor: style.light, backgroundColor: style.light }}
                          >
                            {done ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.sessionNumber}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Barra de progreso */}
        <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              backgroundColor: progress === 100 ? '#16a34a' : '#09D6D4',
            }}
          />
        </div>
      </div>

      {/* ── Cobro ── */}
      {precio > 0 && (
        <div className={`px-4 py-2.5 border-t flex items-center justify-between text-xs
          ${saldo <= 0 ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
          <span className={`font-semibold ${saldo <= 0 ? 'text-green-700' : 'text-red-600'}`}>
            {saldo <= 0 ? '✓ Pagado' : `Saldo: Bs. ${saldo.toFixed(2)}`}
          </span>
          <span className="text-gray-500">Total: Bs. {precio.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}