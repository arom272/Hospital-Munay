export const SPECIALTY_CONFIG = [
  { key: 'Cirugía Pediátrica',    color: '#dc2626', light: '#fee2e2' },
  { key: 'Electroterapia',        color: '#d97706', light: '#fef3c7' },
  { key: 'Fonoaudiología',        color: '#7c3aed', light: '#ede9fe' },
  { key: 'Psicología',            color: '#db2777', light: '#fce7f3' },
  { key: 'Kinesiología',          color: '#0891b2', light: '#cffafe' },
  { key: 'Nutrición',             color: '#ea580c', light: '#ffedd5' },
  { key: 'Psicomotricidad',       color: '#16a34a', light: '#dcfce7' },
  { key: 'Psicopedagogía',        color: '#0f766e', light: '#ccfbf1' },
  { key: 'Odontopediatría',       color: '#0d9488', light: '#ccfbf1' },
  { key: 'Ortopedia y Ortodoncia',color: '#6d28d9', light: '#ede9fe' },
  { key: 'Enfermería',            color: '#be185d', light: '#fce7f3' },
  { key: 'Pediatría',             color: '#1d4ed8', light: '#dbeafe' },
  { key: 'Terapia Ocupacional',   color: '#15803d', light: '#dcfce7' },
  { key: 'Otro',                  color: '#64748b', light: '#f1f5f9' },
];

export const SPECIALTY_MAP = Object.fromEntries(SPECIALTY_CONFIG.map(s => [s.key, s]));

export const STATUS_CONFIG = {
  programado:   { label: 'Programado',   short: 'PROG', icon: '○', tw: 'bg-slate-100 text-slate-700 border-slate-300',    hex: '#64748b' },
  confirmado:   { label: 'Confirmado',   short: 'CONF', icon: '●', tw: 'bg-blue-100 text-blue-700 border-blue-300',       hex: '#2563eb' },
  asistio:      { label: 'Asistió',      short: 'ASIS', icon: '✓', tw: 'bg-green-100 text-green-700 border-green-300',    hex: '#16a34a' },
  no_asistio:   { label: 'No asistió',   short: 'AUS',  icon: '✗', tw: 'bg-red-100 text-red-700 border-red-300',          hex: '#dc2626' },
  reprogramado: { label: 'Reprogramado', short: 'REPR', icon: '↻', tw: 'bg-amber-100 text-amber-700 border-amber-300',    hex: '#d97706' },
  cancelado:    { label: 'Cancelado',    short: 'CANC', icon: '⊘', tw: 'bg-rose-100 text-rose-700 border-rose-300',       hex: '#e11d48' },
  llego_tarde:  { label: 'Llegó tarde',  short: 'TARD', icon: '⌛', tw: 'bg-orange-100 text-orange-700 border-orange-300', hex: '#ea580c' },
  en_espera:    { label: 'En espera',    short: 'ESP',  icon: '⏳', tw: 'bg-violet-100 text-violet-700 border-violet-300', hex: '#7c3aed' },
  completada:   { label: 'Completada',   short: 'COMP', icon: '✔', tw: 'bg-cyan-100 text-cyan-700 border-cyan-300',       hex: '#0891b2' },
  parcial:      { label: 'Parcial',      short: 'PARC', icon: '◑', tw: 'bg-teal-100 text-teal-700 border-teal-300',       hex: '#0d9488' },
  derivado:     { label: 'Derivado',     short: 'DER',  icon: '→', tw: 'bg-purple-100 text-purple-700 border-purple-300', hex: '#9333ea' },
  suspendido:   { label: 'Suspendido',   short: 'SUSP', icon: '⏸', tw: 'bg-amber-200 text-amber-800 border-amber-400',   hex: '#b45309' },
  realizado:    { label: 'Realizado',    short: 'REAL', icon: '✔', tw: 'bg-emerald-100 text-emerald-700 border-emerald-300', hex: '#059669' },
};

export const ALL_STATUSES = [
  'programado','confirmado','asistio','no_asistio','llego_tarde','en_espera',
  'completada','parcial','reprogramado','cancelado','derivado','suspendido',
];

export const ALL_SPECIALTY_KEYS = SPECIALTY_CONFIG.map(s => s.key);

export const ATTENDED_STATUSES    = ['asistio', 'completada', 'llego_tarde', 'parcial', 'realizado'];
export const ABSENT_STATUSES      = ['no_asistio'];
export const RESCHEDULED_STATUSES = ['reprogramado', 'cancelado', 'derivado', 'suspendido'];
export const PENDING_STATUSES     = ['programado', 'confirmado', 'en_espera'];

export const TIME_SLOTS = [];
for (let h = 7; h < 20; h++) {
  TIME_SLOTS.push(`${String(h).padStart(2,'0')}:00`);
  TIME_SLOTS.push(`${String(h).padStart(2,'0')}:30`);
}

export function getSpecialtyStyle(key) {
  return SPECIALTY_MAP[key] ?? { color: '#64748b', light: '#f1f5f9' };
}

export function getStatusConfig(status) {
  return STATUS_CONFIG[status] ?? STATUS_CONFIG.programado;
}

export function slotKey(startTime) {
  if (!startTime) return '07:00';
  const [h, m] = startTime.split(':').map(Number);
  return `${String(h).padStart(2,'0')}:${m < 30 ? '00' : '30'}`;
}

export function calcAge(birthDate) {
  if (!birthDate) return '';
  const birth = new Date(birthDate);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  if (months < 0) { years--; months += 12; }
  if (years >= 2) return `${years}a`;
  if (years === 1) return `1a ${months}m`;
  return `${months}m`;
}

export function getWeekDates(referenceDate) {
  const d = new Date(referenceDate + 'T12:00');
  const dow = d.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(d);
  monday.setDate(d.getDate() + diff);
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const dt = new Date(monday);
    dt.setDate(monday.getDate() + i);
    dates.push(dt.toISOString().slice(0, 10));
  }
  return dates;
}

export function isoAddDays(iso, days) {
  const d = new Date(iso + 'T12:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function fmtShortDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T12:00');
  return d.toLocaleDateString('es', { weekday: 'short', day: 'numeric', month: 'short' });
}

export const TODAY_ISO = new Date().toISOString().slice(0, 10);

export const TURNO_MAÑANA_CUTOFF = 13;

// ── Therapist directory ───────────────────────────────────
// day: 1=Lunes … 5=Viernes  |  shifts: 'mañana' | 'tarde'
export const THERAPISTS_CONFIG = [
  {
    id: 'arroyo',
    name: 'Lic. Gabriel Arroyo',
    specialty: 'Fonoaudiología',
    schedule: [
      { day: 1, dayName: 'Lunes',   shifts: ['mañana']            },
      { day: 2, dayName: 'Martes',  shifts: ['mañana', 'tarde']   },
      { day: 4, dayName: 'Jueves',  shifts: ['tarde']              },
      { day: 5, dayName: 'Viernes', shifts: ['mañana']             },
    ],
  },
];

export function getTherapistsBySpecialty(specialty) {
  if (!specialty) return THERAPISTS_CONFIG;
  return THERAPISTS_CONFIG.filter(t => t.specialty === specialty);
}

// ── Daily specialty schedule ──────────────────────────────
// day: 0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb
// Each day lists the specialties available per shift (in display order)
// ── Tabla de aranceles ────────────────────────────────────
// mny = Paciente MUNAY / JWI
// ext = Paciente externo sin factura
// extF = Paciente externo con factura
export const ARANCELES = {
  sesion: {
    'Fonoaudiología':  { mny: 55,  ext: 60,  extF: 70  },
    'Kinesiología':    { mny: 55,  ext: 60,  extF: 70  },
    'Psicopedagogía':  { mny: 55,  ext: 60,  extF: 70  },
    'Psicología':      { mny: 55,  ext: 60,  extF: 70  },
    'Electroterapia':  { mny: 60,  ext: 65,  extF: 80  },
    'Psicomotricidad': { mny: 55,  ext: 60,  extF: 70  },
  },
  paquete: {
    'Fonoaudiología':        { mny: 360, ext: 440, extF: 510 },
    'Kinesiología':          { mny: 360, ext: 440, extF: 510 },
    'Psicopedagogía':        { mny: 360, ext: 440, extF: 510 },
    'Psicología':            { mny: 360, ext: 440, extF: 510 },
    'Electroterapia':        { mny: 480, ext: 500, extF: 580 },
    'Psicomotricidad':       { mny: 360, ext: 440, extF: 510 },
    'Estimulación temprana': { mny: 360, ext: 440, extF: 510 },
  },
  evaluacion: {
    'Fonoaudiología':  { mny: 60,  ext: 85,  extF: 110 },
    'Kinesiología':    { mny: 60,  ext: 85,  extF: 110 },
    'Psicopedagogía':  { mny: 60,  ext: 85,  extF: 110 },
    'Psicología':      { mny: 60,  ext: 85,  extF: 110 },
    'Electroterapia':  { mny: 66,  ext: 96,  extF: 120 },
    'Psicomotricidad': { mny: 60,  ext: 85,  extF: 110 },
  },
};

export function getArancel(tipoServicio, specialty, patientType, conFactura = false) {
  const row = ARANCELES[tipoServicio]?.[specialty];
  if (!row) return null;
  const isMunay = ['mny', 'jwi', 'flap'].includes(patientType ?? '');
  if (isMunay) return row.mny;
  return conFactura ? row.extF : row.ext;
}

export const DAY_SCHEDULE_CONFIG = {
  1: { // Lunes — Arroyo: mañana
    mañana: ['Fonoaudiología', 'Kinesiología', 'Electroterapia', 'Psicología', 'Psicomotricidad'],
    tarde:  ['Cirugía Pediátrica', 'Psicomotricidad', 'Kinesiología', 'Psicopedagogía', 'Ortopedia y Ortodoncia', 'Psicología'],
  },
  2: { // Martes — Arroyo: mañana + tarde
    mañana: ['Psicomotricidad', 'Psicopedagogía', 'Fonoaudiología', 'Kinesiología', 'Psicología', 'Pediatría', 'Odontopediatría'],
    tarde:  ['Psicomotricidad', 'Fonoaudiología', 'Electroterapia', 'Ortopedia y Ortodoncia', 'Kinesiología'],
  },
  3: { // Miércoles
    mañana: ['Psicomotricidad', 'Psicología', 'Kinesiología', 'Electroterapia', 'Psicopedagogía', 'Fonoaudiología'],
    tarde:  ['Fonoaudiología', 'Psicomotricidad', 'Kinesiología', 'Psicopedagogía', 'Odontopediatría'],
  },
  4: { // Jueves — Arroyo: tarde
    mañana: ['Fonoaudiología'],
    tarde:  ['Fonoaudiología', 'Psicomotricidad', 'Psicopedagogía', 'Ortopedia y Ortodoncia', 'Kinesiología'],
  },
  5: { // Viernes — Arroyo: mañana
    mañana: ['Psicopedagogía', 'Psicomotricidad', 'Fonoaudiología', 'Kinesiología', 'Electroterapia', 'Psicología'],
    tarde:  ['Ortopedia y Ortodoncia', 'Psicopedagogía', 'Fonoaudiología', 'Odontopediatría'],
  },
  6: { // Sábado
    mañana: [],
    tarde:  [],
  },
  0: { // Domingo
    mañana: [],
    tarde:  [],
  },
};
