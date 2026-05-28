import { useState, useMemo, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Search, X, Loader2, Check, Calendar as CalendarIcon, Minus, Plus } from 'lucide-react';
import { differenceInYears, differenceInMonths, parseISO, isValid } from 'date-fns';
import { getTypeInfo } from '../../utils/patientTypes';
import { SPECIALTY_CONFIG, getSpecialtyStyle, getArancel } from './therapyConstants';
import useStore from '../../store/useStore';

const TOTAL_SESSIONS = 8;

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function calcAgeShort(birthDate) {
  if (!birthDate) return null;
  const birth = parseISO(birthDate);
  if (!isValid(birth)) return null;
  const now = new Date();
  const years = differenceInYears(now, birth);
  if (years >= 2) return `${years}a`;
  const months = differenceInMonths(now, birth);
  return `${months}m`;
}

export default function PackageForm({ initial, onSubmit, onCancel, busy }) {
  const { patients, therapists } = useStore();

  // ── Patient search ─────────────────────────────────────────────────────────
  const [patSearch,    setPatSearch]    = useState(initial?.patientName ?? '');
  const [dropOpen,     setDropOpen]     = useState(false);
  const [selectedPat,  setSelectedPat]  = useState(
    initial?.patientId ? patients.find((p) => p.id === initial.patientId) ?? null : null
  );
  const dropRef = useRef(null);

  // ── Distribución de sesiones por especialidad ─────────────────────────────
  // distribution: [{ specialty: 'Fonoaudiología', count: 4 }, ...]
  const [distribution, setDistribution] = useState(() => {
    if (initial?.serviceDistribution?.length) return initial.serviceDistribution;
    // Reconstruir desde sesiones existentes (al editar)
    if (initial?.sessions?.length) {
      const counts = {};
      for (const s of initial.sessions) {
        if (!s.specialty) continue;
        counts[s.specialty] = (counts[s.specialty] ?? 0) + 1;
      }
      const arr = Object.entries(counts).map(([specialty, count]) => ({ specialty, count }));
      if (arr.length) return arr;
    }
    // Convertir desde services planos (paquetes legacy): distribuir equitativamente
    if (initial?.services?.length) {
      const base = Math.floor(TOTAL_SESSIONS / initial.services.length);
      const remainder = TOTAL_SESSIONS - base * initial.services.length;
      return initial.services.map((s, i) => ({
        specialty: s,
        count: base + (i < remainder ? 1 : 0),
      }));
    }
    return [];
  });

  const [conFactura, setConFactura] = useState(initial?.conFactura ?? false);

  const selectedServices = useMemo(() => distribution.map(d => d.specialty), [distribution]);
  const totalAssigned    = useMemo(() => distribution.reduce((acc, d) => acc + Number(d.count || 0), 0), [distribution]);
  const remainingSessions = TOTAL_SESSIONS - totalAssigned;

  const isExt = ['ext', 'external'].includes(selectedPat?.patientType);

  /* Precio sugerido: por sesión de cada especialidad × count / 8 (proporcional al paquete completo) */
  const suggestedTotal = useMemo(() => {
    if (!distribution.length || !selectedPat) return null;
    let total = 0;
    for (const { specialty, count } of distribution) {
      if (!count) continue;
      const fullPaquete = getArancel('paquete', specialty, selectedPat.patientType, conFactura);
      if (fullPaquete === null) return null;
      // Precio proporcional: count/8 del paquete completo
      total += (fullPaquete * count) / TOTAL_SESSIONS;
    }
    return Math.round(total * 100) / 100;
  }, [distribution, selectedPat, conFactura]);

  useEffect(() => {
    if (suggestedTotal !== null) setValue('precio', suggestedTotal);
  }, [suggestedTotal]);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filteredPats = useMemo(() => {
    const q = patSearch.toLowerCase().trim();
    if (!q) return patients;
    return patients.filter((p) =>
      p.fullName?.toLowerCase().includes(q) ||
      p.diagnosis?.toLowerCase().includes(q) ||
      (p.patientCode && p.patientCode.toLowerCase().includes(q))
    );
  }, [patients, patSearch]);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: initial ?? {
      patientId: '', startDate: '', therapist: '',
      precio: '', montoPagado: '', fechaPago: '', notes: '',
    },
  });

  const watchTherapist = watch('therapist');
  const watchStartDate = watch('startDate');

  /* ── Terapistas que coinciden con las especialidades seleccionadas ── */
  const matchingTherapists = useMemo(() => {
    if (selectedServices.length === 0) return [];
    return therapists.filter(t => selectedServices.includes(t.specialty));
  }, [therapists, selectedServices]);

  const selectedTherapist = useMemo(
    () => matchingTherapists.find(t => t.name === watchTherapist) ?? null,
    [matchingTherapists, watchTherapist]
  );

  const selectPat = (p) => {
    setSelectedPat(p);
    setPatSearch(p.fullName);
    setValue('patientId', p.id, { shouldValidate: true });
    setDropOpen(false);
  };
  const clearPat = () => { setSelectedPat(null); setPatSearch(''); setValue('patientId', ''); };

  /* ── Manipuladores de distribución ── */
  const toggleService = (key) => {
    setDistribution((prev) => {
      const existing = prev.find(d => d.specialty === key);
      if (existing) {
        // Quitar y redistribuir
        return prev.filter(d => d.specialty !== key);
      }
      // Agregar — sugerir count equilibrado entre todos
      const next = [...prev, { specialty: key, count: 0 }];
      const equal = Math.floor(TOTAL_SESSIONS / next.length);
      const rem   = TOTAL_SESSIONS - equal * next.length;
      return next.map((d, i) => ({ ...d, count: equal + (i < rem ? 1 : 0) }));
    });
  };

  const setServiceCount = (key, newCount) => {
    const clamped = Math.max(0, Math.min(TOTAL_SESSIONS, Number(newCount) || 0));
    setDistribution(prev => prev.map(d => d.specialty === key ? { ...d, count: clamped } : d));
  };

  const onFormSubmit = (data) => {
    if (totalAssigned !== TOTAL_SESSIONS) return; // protección extra
    const precio      = Number(data.precio)      || 0;
    const montoPagado = Number(data.montoPagado) || 0;
    onSubmit({
      ...data,
      services:            selectedServices,
      serviceDistribution: distribution.filter(d => d.count > 0),
      patientName:  selectedPat?.fullName    ?? '',
      patientType:  selectedPat?.patientType ?? 'ext',
      precio,
      montoPagado,
      conFactura,
      pagado: precio > 0 && montoPagado >= precio,
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">

      {/* ── Paciente ── */}
      <div ref={dropRef} className="relative">
        <input type="hidden" {...register('patientId', { required: 'Selecciona un paciente' })} />
        <label className="label">Paciente *</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text" value={patSearch} autoComplete="off"
            onChange={(e) => { setPatSearch(e.target.value); setDropOpen(true); if (!e.target.value) clearPat(); }}
            onFocus={() => setDropOpen(true)}
            placeholder="Buscar por nombre o código..."
            className={`input pl-9 pr-8 ${errors.patientId ? 'input-error' : ''}`}
          />
          {patSearch && (
            <button type="button" onClick={clearPat}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {dropOpen && filteredPats.length > 0 && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
            {filteredPats.map((p) => {
              const ti = getTypeInfo(p.patientType);
              const age = calcAgeShort(p.birthDate);
              return (
                <button key={p.id} type="button" onClick={() => selectPat(p)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-hm-secondary-100 text-left transition">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: ti.bg }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-hm-primary truncate">{p.fullName}</p>
                    <p className="text-xs text-gray-500 truncate">{p.diagnosis}{age ? ` · ${age}` : ''}</p>
                  </div>
                  <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0"
                    style={{ backgroundColor: ti.lightBg, color: ti.textColor }}>{ti.label}</span>
                </button>
              );
            })}
          </div>
        )}
        {errors.patientId && <p className="error-msg">{errors.patientId.message}</p>}
        {selectedPat && (
          <div className="mt-2 px-3 py-2 rounded-lg text-sm font-medium text-hm-primary"
            style={{ backgroundColor: 'rgba(9,214,212,0.07)', border: '1px solid rgba(9,214,212,0.3)' }}>
            {selectedPat.fullName}
            {selectedPat.diagnosis && <span className="text-gray-500 text-xs ml-2">· {selectedPat.diagnosis}</span>}
          </div>
        )}
      </div>

      {/* ── Servicios incluidos ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="label mb-0">Servicios del paquete *</label>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border
            ${totalAssigned === TOTAL_SESSIONS
              ? 'bg-green-50 text-green-700 border-green-200'
              : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
            {totalAssigned}/{TOTAL_SESSIONS} sesiones
          </span>
        </div>

        {/* Selector de especialidades */}
        <div className="flex flex-wrap gap-2 mb-3">
          {SPECIALTY_CONFIG.filter(s => s.key !== 'Otro').map(({ key, color, light }) => {
            const active = selectedServices.includes(key);
            return (
              <button
                key={key} type="button"
                onClick={() => toggleService(key)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-all"
                style={{
                  backgroundColor: active ? color  : light,
                  color:           active ? '#fff' : color,
                  borderColor:     active ? color  : 'transparent',
                }}
              >
                {active && <Check className="w-3 h-3" />}
                {key}
              </button>
            );
          })}
        </div>

        {/* Contadores de sesiones por especialidad */}
        {distribution.length > 0 && (
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 space-y-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              Distribuye las 8 sesiones entre los servicios
            </p>
            {distribution.map(({ specialty, count }) => {
              const style = getSpecialtyStyle(specialty);
              return (
                <div key={specialty} className="flex items-center gap-2">
                  <span className="flex-1 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: style.color }} />
                    <span className="text-gray-700">{specialty}</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setServiceCount(specialty, count - 1)}
                      disabled={count <= 0}
                      className="w-6 h-6 rounded-md border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 flex items-center justify-center transition"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <input
                      type="number"
                      min="0"
                      max={TOTAL_SESSIONS}
                      value={count}
                      onChange={(e) => setServiceCount(specialty, e.target.value)}
                      className="w-10 h-6 text-center text-xs font-bold border border-gray-200 rounded-md bg-white text-gray-800 focus:outline-none focus:border-purple-400"
                    />
                    <button
                      type="button"
                      onClick={() => setServiceCount(specialty, count + 1)}
                      disabled={totalAssigned >= TOTAL_SESSIONS}
                      className="w-6 h-6 rounded-md border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 flex items-center justify-center transition"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
            {totalAssigned !== TOTAL_SESSIONS && (
              <p className="text-[11px] text-amber-600 mt-1">
                {remainingSessions > 0
                  ? `Faltan ${remainingSessions} sesión${remainingSessions > 1 ? 'es' : ''} por distribuir.`
                  : `Hay ${-remainingSessions} sesión${-remainingSessions > 1 ? 'es' : ''} de más.`}
              </p>
            )}
          </div>
        )}

        {selectedServices.length === 0 && (
          <p className="text-xs text-red-500 mt-1">Selecciona al menos un servicio</p>
        )}
      </div>

      {/* ── Terapeuta (filtrado por servicios) + Fecha inicio ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group mb-0">
          <label className="label">Terapeuta *</label>
          {matchingTherapists.length > 0 ? (
            <div className="space-y-1.5">
              {matchingTherapists.map((t) => {
                const active = watchTherapist === t.name;
                const dayLabel = (t.schedule ?? []).map(s =>
                  `${s.dayName} (${s.shifts.map(sh => sh === 'mañana' ? 'M' : 'T').join('+')})`
                ).join(' · ');
                return (
                  <button
                    key={t.id ?? t.name}
                    type="button"
                    onClick={() => setValue('therapist', active ? '' : t.name, { shouldValidate: true })}
                    className={`w-full text-left rounded-lg border px-3 py-2 text-xs transition-all
                      ${active
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50'}`}
                  >
                    <div className="font-semibold">{t.name}</div>
                    <div className={`text-[10px] mt-0.5 ${active ? 'text-purple-200' : 'text-gray-400'}`}>
                      {t.specialty} · {dayLabel}
                    </div>
                  </button>
                );
              })}
              <input type="hidden" {...register('therapist', { required: 'Requerido' })} />
            </div>
          ) : (
            <>
              <input
                className={`input ${errors.therapist ? 'input-error' : ''}`}
                placeholder={selectedServices.length === 0 ? 'Selecciona servicios primero' : 'Nombre del terapeuta'}
                {...register('therapist', { required: 'Requerido' })}
              />
              {selectedServices.length > 0 && (
                <p className="text-[11px] text-amber-600 mt-1">
                  No hay terapistas registrados para estas especialidades. Ingresa el nombre manualmente.
                </p>
              )}
            </>
          )}
          {errors.therapist && <p className="error-msg">{errors.therapist.message}</p>}
        </div>
        <div className="form-group mb-0">
          <label className="label">Fecha de inicio *</label>
          <input type="date" className={`input ${errors.startDate ? 'input-error' : ''}`}
            {...register('startDate', { required: 'Requerido' })} />
          {errors.startDate && <p className="error-msg">{errors.startDate.message}</p>}

          {/* Aviso si el día seleccionado no coincide con disponibilidad */}
          {selectedTherapist && watchStartDate && (() => {
            const dow = new Date(watchStartDate + 'T12:00').getDay();
            const available = (selectedTherapist.schedule ?? []).some(s => s.day === dow);
            if (available) {
              return (
                <p className="text-[11px] text-green-600 mt-1 flex items-center gap-1">
                  <Check className="w-3 h-3" /> {selectedTherapist.name} atiende este día
                </p>
              );
            }
            return (
              <p className="text-[11px] text-amber-600 mt-1">
                ⚠ {selectedTherapist.name} no tiene horario registrado en {DAY_NAMES[dow]}
              </p>
            );
          })()}
        </div>
      </div>

      {/* ── Panel de disponibilidad ── */}
      {selectedServices.length > 0 && matchingTherapists.length > 0 && (
        <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-bold text-purple-700 uppercase tracking-wide mb-2">
            <CalendarIcon className="w-3.5 h-3.5" /> Disponibilidad para estos servicios
          </p>
          <div className="grid grid-cols-5 gap-1">
            {[1, 2, 3, 4, 5].map((dow) => {
              const therapistsForDay = matchingTherapists.filter(t =>
                (t.schedule ?? []).some(s => s.day === dow)
              );
              const has = therapistsForDay.length > 0;
              return (
                <div
                  key={dow}
                  className={`text-center rounded p-1.5 text-[10px] border
                    ${has ? 'bg-white border-purple-200' : 'bg-gray-50 border-gray-200 opacity-50'}`}
                >
                  <p className="font-bold text-gray-700">{DAY_NAMES[dow].slice(0, 3)}</p>
                  <p className={`text-[9px] mt-0.5 ${has ? 'text-purple-600' : 'text-gray-400'}`}>
                    {has ? `${therapistsForDay.length} terapista${therapistsForDay.length > 1 ? 's' : ''}` : '—'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Cobro ── */}
      <div className="border-t border-gray-100 pt-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Cobro del paquete</p>
          {suggestedTotal !== null && (
            <span className="text-[10px] font-semibold text-teal-600 bg-teal-50 border border-teal-100 px-1.5 py-0.5 rounded">
              Arancel: Bs. {suggestedTotal}
            </span>
          )}
        </div>

        {/* Toggle con factura — solo para pacientes externos */}
        {isExt && selectedServices.length > 0 && (
          <label className="flex items-center gap-2 cursor-pointer select-none w-fit">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-teal-600"
              checked={conFactura}
              onChange={(e) => setConFactura(e.target.checked)}
            />
            <span className="text-sm text-gray-600 font-medium">Con factura</span>
            {conFactura && (
              <span className="text-xs text-gray-400">(precio externo c/f)</span>
            )}
          </label>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="form-group mb-0">
            <label className="label flex items-center justify-between">
              <span>Arancel (Bs.)</span>
              {suggestedTotal !== null && (
                <span className="text-[10px] text-teal-500 font-medium normal-case tracking-normal">
                  Según aranceles
                </span>
              )}
            </label>
            <input type="number" min="0" step="0.5" className="input"
              placeholder="0.00" {...register('precio')} />
          </div>
          <div className="form-group mb-0">
            <label className="label">Monto pagado (Bs.)</label>
            <input type="number" min="0" step="0.5" className="input"
              placeholder="0.00" {...register('montoPagado')} />
          </div>
          <div className="form-group mb-0">
            <label className="label">Fecha de pago</label>
            <input type="date" className="input" {...register('fechaPago')} />
          </div>
        </div>
      </div>

      {/* ── Notas ── */}
      <div className="form-group mb-0">
        <label className="label">Observaciones</label>
        <textarea rows={2} className="input resize-none" {...register('notes')} />
      </div>

      {/* ── Acciones ── */}
      <div className="flex gap-3 justify-end pt-2 border-t border-gray-100">
        <button type="button" onClick={onCancel} className="btn-secondary btn">Cancelar</button>
        <button
          type="submit"
          disabled={busy || selectedServices.length === 0 || totalAssigned !== TOTAL_SESSIONS}
          className="btn-primary btn"
          title={totalAssigned !== TOTAL_SESSIONS ? `Asigna las 8 sesiones (actualmente ${totalAssigned})` : undefined}
        >
          {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : initial?.id ? 'Guardar cambios' : 'Crear paquete'}
        </button>
      </div>
    </form>
  );
}