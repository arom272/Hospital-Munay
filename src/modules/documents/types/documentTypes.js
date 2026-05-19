export const DOCUMENT_TYPES = {
  HISTORIA_CLINICA:    'historia_clinica',
  EPICRISIS:           'epicrisis',
  FICHA_SOCIAL:        'ficha_social',
  HISTORIA_QUIRURGICA: 'historia_quirurgica',
  EVOLUCION:           'evolucion',
  CONSENTIMIENTO:      'consentimiento',
};

export const DOCUMENT_TYPE_CONFIG = {
  historia_clinica: {
    label:     'Historia Clínica',
    specialty: 'Medicina',
    icon:      '📋',
    color:     '#2563eb',
    light:     '#dbeafe',
  },
  epicrisis: {
    label:     'Epicrisis',
    specialty: 'Cirugía',
    icon:      '📄',
    color:     '#7c3aed',
    light:     '#ede9fe',
  },
  ficha_social: {
    label:     'Ficha Social',
    specialty: 'Trabajo Social',
    icon:      '👥',
    color:     '#0891b2',
    light:     '#cffafe',
  },
  historia_quirurgica: {
    label:     'Historia Quirúrgica',
    specialty: 'Cirugía',
    icon:      '🔬',
    color:     '#dc2626',
    light:     '#fee2e2',
  },
  evolucion: {
    label:     'Evolución',
    specialty: 'Medicina',
    icon:      '📝',
    color:     '#16a34a',
    light:     '#dcfce7',
  },
  consentimiento: {
    label:     'Consentimiento',
    specialty: 'Medicina',
    icon:      '✍️',
    color:     '#d97706',
    light:     '#fef3c7',
  },
};

export const DOCUMENT_TYPE_OPTIONS = Object.entries(DOCUMENT_TYPE_CONFIG).map(
  ([value, cfg]) => ({ value, ...cfg })
);
