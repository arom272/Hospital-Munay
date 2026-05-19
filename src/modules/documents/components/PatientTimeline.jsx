import { useMemo } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { getDocumentTypeConfig } from '../utils/documentUtils';
import { DOCUMENT_STATUS_CONFIG } from '../types/documentStatus';

/* ── Event builders ─────────────────────────────────── */
function fromDocument(doc) {
  const cfg = getDocumentTypeConfig(doc.documentType);
  const ts  = doc.createdAt?.toDate ? doc.createdAt.toDate() : new Date();
  return {
    id:         `doc_${doc.id}`,
    date:       ts,
    dateIso:    ts.toISOString().slice(0, 10),
    type:       'document',
    icon:       cfg.icon,
    title:      cfg.label,
    subtitle:   cfg.specialty,
    by:         doc.createdBy?.name ?? '',
    statusTw:   DOCUMENT_STATUS_CONFIG[doc.status]?.tw ?? '',
    statusLabel:DOCUMENT_STATUS_CONFIG[doc.status]?.label ?? '',
    color:      cfg.color,
  };
}

function fromSurgery(s) {
  const STATUS_COLORS = {
    programado: '#64748b', confirmado: '#2563eb',
    realizado: '#16a34a', cancelado: '#dc2626',
  };
  return {
    id:         `surg_${s.id}`,
    date:       new Date(s.date + 'T' + (s.startTime ?? '08:00')),
    dateIso:    s.date,
    type:       'surgery',
    icon:       '🔬',
    title:      s.surgeryType,
    subtitle:   'Cirugía · ' + (s.startTime ?? ''),
    by:         s.surgeon ?? '',
    statusTw:   '',
    statusLabel:s.status,
    color:      STATUS_COLORS[s.status] ?? '#64748b',
  };
}

function fromTherapy(t) {
  const SPEC_COLORS = {
    Fonoaudiología: '#7c3aed', Kinesiología: '#0891b2',
    Psicología: '#db2777', Psicomotricidad: '#16a34a',
    Psicopedagogía: '#0f766e', default: '#64748b',
  };
  return {
    id:         `ther_${t.id}`,
    date:       new Date(t.date + 'T' + (t.startTime ?? '08:00')),
    dateIso:    t.date,
    type:       'therapy',
    icon:       '🩺',
    title:      t.therapyType,
    subtitle:   t.startTime ? `${t.startTime}${t.therapist ? ' · ' + t.therapist : ''}` : (t.therapist ?? ''),
    by:         t.therapist ?? '',
    statusTw:   '',
    statusLabel:t.status,
    color:      SPEC_COLORS[t.therapyType] ?? SPEC_COLORS.default,
  };
}

/* ── Day group header ───────────────────────────────── */
function DayHeader({ dateIso }) {
  const d = new Date(dateIso + 'T12:00');
  return (
    <div className="flex items-center gap-3 my-3 first:mt-0">
      <div className="shrink-0 text-center bg-gray-900 text-white rounded-xl px-3 py-1.5 min-w-[56px]">
        <p className="text-[10px] uppercase tracking-wide opacity-70 leading-none">
          {format(d, 'MMM', { locale: es })}
        </p>
        <p className="text-lg font-bold leading-none mt-0.5">{format(d, 'd')}</p>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-700 capitalize">
          {format(d, "EEEE", { locale: es })}
        </p>
        <p className="text-[10px] text-gray-400">{format(d, "yyyy")}</p>
      </div>
    </div>
  );
}

/* ── Single event card ──────────────────────────────── */
function EventCard({ event }) {
  return (
    <div className="flex gap-3 ml-2 pb-3 last:pb-0">
      {/* vertical line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-7 h-7 rounded-xl flex items-center justify-center text-sm shadow-sm border border-white"
             style={{ background: event.color + '22', borderColor: event.color + '44' }}>
          {event.icon}
        </div>
        <div className="w-px flex-1 mt-1" style={{ background: event.color + '33' }} />
      </div>

      {/* content */}
      <div className="flex-1 min-w-0 pb-3">
        <div className="bg-white rounded-xl border border-gray-100 px-3 py-2.5 shadow-sm hover:border-gray-200 transition-colors">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-gray-800 leading-tight truncate"
                 style={{ color: event.color }}>
                {event.title}
              </p>
              {event.subtitle && (
                <p className="text-[11px] text-gray-500 mt-0.5 truncate">{event.subtitle}</p>
              )}
              {event.by && (
                <p className="text-[10px] text-gray-400 mt-0.5">{event.by}</p>
              )}
            </div>
            {event.statusLabel && (
              <span className={`text-[9px] font-bold px-1.5 py-px rounded-full border shrink-0 ${event.statusTw || 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                {event.statusLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────── */
export default function PatientTimeline({
  documents  = [],
  surgeries  = [],
  therapies  = [],
  loading    = false,
}) {
  const events = useMemo(() => {
    const all = [
      ...documents.map(fromDocument),
      ...surgeries.map(fromSurgery),
      ...therapies.map(fromTherapy),
    ].sort((a, b) => b.date - a.date);
    return all;
  }, [documents, surgeries, therapies]);

  /* group by dateIso */
  const grouped = useMemo(() => {
    const map = {};
    for (const ev of events) {
      if (!map[ev.dateIso]) map[ev.dateIso] = [];
      map[ev.dateIso].push(ev);
    }
    return Object.entries(map).sort(([a], [b]) => b.localeCompare(a));
  }, [events]);

  if (loading) {
    return (
      <div className="flex justify-center py-12 text-gray-300">
        <div className="animate-pulse text-4xl">⏳</div>
      </div>
    );
  }

  if (grouped.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-gray-400">
        <div className="text-4xl mb-3">🗓</div>
        <p className="text-sm font-medium text-gray-500">Sin eventos registrados</p>
        <p className="text-xs mt-1 text-gray-400">Las cirugías, terapias y documentos aparecerán aquí.</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {grouped.map(([dateIso, evs]) => (
        <div key={dateIso}>
          <DayHeader dateIso={dateIso} />
          <div>
            {evs.map(ev => <EventCard key={ev.id} event={ev} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
