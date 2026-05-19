const variants = {
  mny:          'bg-blue-100   text-blue-800   ring-blue-200',
  jwi:          'bg-orange-100 text-orange-800 ring-orange-200',
  ext:          'bg-green-100  text-green-800  ring-green-200',
  flap:         'bg-blue-100   text-blue-800   ring-blue-200',
  external:     'bg-green-100  text-green-800  ring-green-200',
  activo:       'bg-emerald-100 text-emerald-800 ring-emerald-200',
  inactivo:     'bg-gray-100   text-gray-600   ring-gray-200',
  // therapy statuses
  programado:   'bg-slate-100  text-slate-700  ring-slate-200',
  confirmado:   'bg-blue-100   text-blue-700   ring-blue-200',
  asistio:      'bg-green-100  text-green-700  ring-green-200',
  no_asistio:   'bg-red-100    text-red-700    ring-red-200',
  reprogramado: 'bg-amber-100  text-amber-700  ring-amber-200',
  cancelado:    'bg-rose-100   text-rose-700   ring-rose-200',
  llego_tarde:  'bg-orange-100 text-orange-700 ring-orange-200',
  en_espera:    'bg-violet-100 text-violet-700 ring-violet-200',
  completada:   'bg-cyan-100   text-cyan-700   ring-cyan-200',
  parcial:      'bg-teal-100   text-teal-700   ring-teal-200',
  derivado:     'bg-purple-100 text-purple-700 ring-purple-200',
  suspendido:   'bg-amber-200  text-amber-800  ring-amber-300',
  realizado:    'bg-emerald-100 text-emerald-700 ring-emerald-200',
};

const labels = {
  mny:          'MNY',
  jwi:          'JWI',
  ext:          'EXT',
  flap:         'MNY',
  external:     'EXT',
  activo:       'Activo',
  inactivo:     'Inactivo',
  programado:   'Programado',
  confirmado:   'Confirmado',
  asistio:      'Asistió',
  no_asistio:   'No asistió',
  reprogramado: 'Reprogramado',
  cancelado:    'Cancelado',
  llego_tarde:  'Llegó tarde',
  en_espera:    'En espera',
  completada:   'Completada',
  parcial:      'Parcial',
  derivado:     'Derivado',
  suspendido:   'Suspendido',
  realizado:    'Realizado',
};

export default function Badge({ variant, label, className = '' }) {
  const cls = variants[variant] ?? 'bg-gray-100 text-gray-700 ring-gray-200';
  const txt = label ?? labels[variant] ?? variant;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ring-1 ring-inset ${cls} ${className}`}
    >
      {txt}
    </span>
  );
}
