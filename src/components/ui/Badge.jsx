const variants = {
  mny:         'bg-blue-100   text-blue-800   ring-blue-200',
  jwi:         'bg-orange-100 text-orange-800 ring-orange-200',
  ext:         'bg-green-100  text-green-800  ring-green-200',
  // legacy aliases
  flap:        'bg-blue-100   text-blue-800   ring-blue-200',
  external:    'bg-green-100  text-green-800  ring-green-200',
  programado:  'bg-yellow-100 text-yellow-800 ring-yellow-200',
  confirmado:  'bg-blue-100   text-blue-800   ring-blue-200',
  realizado:   'bg-green-100  text-green-800  ring-green-200',
  cancelado:   'bg-red-100    text-red-700    ring-red-200',
  activo:      'bg-emerald-100 text-emerald-800 ring-emerald-200',
  inactivo:    'bg-gray-100   text-gray-600   ring-gray-200',
};

const labels = {
  mny:        'MNY',
  jwi:        'JWI',
  ext:        'EXT',
  flap:       'MNY',
  external:   'EXT',
  programado: 'Programado',
  confirmado: 'Confirmado',
  realizado:  'Realizado',
  cancelado:  'Cancelado',
  activo:     'Activo',
  inactivo:   'Inactivo',
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
