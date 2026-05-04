// Central config for all three patient types + backwards-compat aliases.
export const TYPES = {
  mny:      { label: 'MNY', longLabel: 'Hospital Munay', bg: '#1e40af', lightBg: '#dbeafe', textColor: '#1d4ed8', border: '#93c5fd' },
  jwi:      { label: 'JWI', longLabel: 'JIWAQUI',        bg: '#ea580c', lightBg: '#ffedd5', textColor: '#c2410c', border: '#fdba74' },
  ext:      { label: 'EXT', longLabel: 'Externo',        bg: '#16a34a', lightBg: '#dcfce7', textColor: '#15803d', border: '#86efac' },
  // legacy values — mapped to nearest new type
  flap:     { label: 'MNY', longLabel: 'Hospital Munay', bg: '#1e40af', lightBg: '#dbeafe', textColor: '#1d4ed8', border: '#93c5fd' },
  external: { label: 'EXT', longLabel: 'Externo',        bg: '#16a34a', lightBg: '#dcfce7', textColor: '#15803d', border: '#86efac' },
};

export function getTypeInfo(patientType) {
  return TYPES[patientType] ?? TYPES.ext;
}

// Calendar event colors for FullCalendar
export const CAL_COLORS = {
  mny:      { backgroundColor: '#1e40af', borderColor: '#1d4ed8', textColor: '#fff' },
  jwi:      { backgroundColor: '#ea580c', borderColor: '#c2410c', textColor: '#fff' },
  ext:      { backgroundColor: '#16a34a', borderColor: '#15803d', textColor: '#fff' },
  flap:     { backgroundColor: '#1e40af', borderColor: '#1d4ed8', textColor: '#fff' },
  external: { backgroundColor: '#16a34a', borderColor: '#15803d', textColor: '#fff' },
};
