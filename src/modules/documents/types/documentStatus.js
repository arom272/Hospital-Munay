export const DOCUMENT_STATUS = {
  DRAFT:       'draft',
  IN_PROGRESS: 'in_progress',
  COMPLETED:   'completed',
  SIGNED:      'signed',
  ARCHIVED:    'archived',
};

export const DOCUMENT_STATUS_CONFIG = {
  draft: {
    label: 'Borrador',
    tw:    'bg-slate-100 text-slate-700 border-slate-300',
    color: '#64748b',
  },
  in_progress: {
    label: 'En progreso',
    tw:    'bg-amber-100 text-amber-700 border-amber-300',
    color: '#d97706',
  },
  completed: {
    label: 'Completado',
    tw:    'bg-green-100 text-green-700 border-green-300',
    color: '#16a34a',
  },
  signed: {
    label: 'Firmado',
    tw:    'bg-blue-100 text-blue-700 border-blue-300',
    color: '#2563eb',
  },
  archived: {
    label: 'Archivado',
    tw:    'bg-gray-100 text-gray-500 border-gray-200',
    color: '#6b7280',
  },
};

export const DOCUMENT_STATUS_OPTIONS = Object.entries(DOCUMENT_STATUS_CONFIG).map(
  ([value, cfg]) => ({ value, label: cfg.label })
);
