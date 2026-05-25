import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { getDocumentTypeConfig } from '../utils/documentUtils';
import { DOCUMENT_STATUS_CONFIG } from '../types/documentStatus';

/* ── Event builders ─────────────────────────────────── */
function fromDocument(doc) {
  const cfg   = getDocumentTypeConfig(doc.documentType);
  const rawTs = doc.updatedAt ?? doc.createdAt;
  const ts    = rawTs?.toDate ? rawTs.toDate() : new Date();
  const time  = format(ts, 'HH:mm', { locale: es });
  const subtitle = [time, cfg.specialty].filter(Boolean).join(' · ');
  return {
    id:              `doc_${doc.id}`,
    date:            ts,
    dateIso:         format(ts, 'yyyy-MM-dd'),
    type:            'document',
    icon:            cfg.icon,
    title:           cfg.label,
    subtitle,
    by:              doc.createdBy?.name ?? '',
    statusTw:        DOCUMENT_STATUS_CONFIG[doc.status]?.tw ?? '',
    statusLabel:     DOCUMENT_STATUS_CONFIG[doc.status]?.label ?? '',
    color:           cfg.color,
    pdfUrl:          doc.pdf?.url ?? null,
    linkedDocCount:  0,
    attachmentCount: 0,
    consentCount:    0,
  };
}

function fromSurgery(s, linkedDocCount = 0) {
  const STATUS_COLORS = {
    programado: '#64748b', confirmado: '#2563eb',
    realizado:  '#16a34a', cancelado:  '#dc2626',
    suspendido: '#d97706',
  };
  const ts = s.createdAt?.toDate ? s.createdAt.toDate() : new Date(s.date + 'T' + (s.startTime ?? '08:00'));
  const scheduledDate = s.date ? format(new Date(s.date + 'T12:00'), 'dd/MM/yyyy', { locale: es }) : '';
  const scheduledTime = s.startTime ?? '';
  return {
    id:              `surg_${s.id}`,
    date:            ts,
    dateIso:         format(ts, 'yyyy-MM-dd'),
    type:            'surgery',
    icon:            '🔬',
    title:           s.surgeryType,
    subtitle:        ['Cirugía', scheduledDate, scheduledTime].filter(Boolean).join(' · '),
    by:              s.surgeon ?? '',
    statusTw:        '',
    statusLabel:     s.status,
    color:           STATUS_COLORS[s.status] ?? '#64748b',
    pdfUrl:          null,
    linkedDocCount,
    attachmentCount: s.attachments?.length     ?? 0,
    consentCount:    s.signedConsents?.length   ?? 0,
  };
}

function fromTherapy(t, linkedDocCount = 0) {
  const SPEC_COLORS = {
    Fonoaudiología:  '#7c3aed', Kinesiología:  '#0891b2',
    Psicología:      '#db2777', Psicomotricidad: '#16a34a',
    Psicopedagogía:  '#0f766e', default: '#64748b',
  };
  const ts = t.createdAt?.toDate ? t.createdAt.toDate() : new Date(t.date + 'T' + (t.startTime ?? '08:00'));
  const scheduledDate = t.date ? format(new Date(t.date + 'T12:00'), 'dd/MM/yyyy', { locale: es }) : '';
  const scheduledTime = t.startTime ?? '';
  return {
    id:              `ther_${t.id}`,
    date:            ts,
    dateIso:         format(ts, 'yyyy-MM-dd'),
    type:            'therapy',
    icon:            '🩺',
    title:           t.therapyType,
    subtitle:        [scheduledDate, scheduledTime, t.therapist].filter(Boolean).join(' · '),
    by:              t.therapist ?? '',
    statusTw:        '',
    statusLabel:     t.status,
    color:           SPEC_COLORS[t.therapyType] ?? SPEC_COLORS.default,
    pdfUrl:          null,
    linkedDocCount,
    attachmentCount: t.attachments?.length ?? 0,
    consentCount:    0,
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
              <p className="text-sm font-bold leading-tight truncate" style={{ color: event.color }}>
                {event.title}
              </p>
              {event.subtitle && (
                <p className="text-[11px] text-gray-500 mt-0.5 truncate">{event.subtitle}</p>
              )}
              {event.by && (
                <p className="text-[10px] text-gray-400 mt-0.5">{event.by}</p>
              )}
            </div>

            <div className="flex flex-col items-end gap-1 shrink-0">
              {/* status */}
              {event.statusLabel && (
                <span className={`text-[9px] font-bold px-1.5 py-px rounded-full border ${event.statusTw || 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                  {event.statusLabel}
                </span>
              )}
              {/* PDF link for documents */}
              {event.pdfUrl && (
                <a
                  href={event.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="text-[9px] font-bold px-1.5 py-px rounded-full border bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 transition-colors"
                  title="Ver PDF"
                >
                  PDF
                </a>
              )}
              {/* linked clinical docs (surgery / therapy events) */}
              {event.linkedDocCount > 0 && (
                <span className="text-[9px] font-bold px-1.5 py-px rounded-full border bg-indigo-50 text-indigo-600 border-indigo-200"
                      title="Documentos clínicos vinculados">
                  {event.linkedDocCount} doc{event.linkedDocCount !== 1 ? 's' : ''}
                </span>
              )}
              {/* signed consents (surgery) */}
              {event.consentCount > 0 && (
                <span className="text-[9px] font-bold px-1.5 py-px rounded-full border bg-teal-50 text-teal-700 border-teal-200"
                      title="Consentimientos firmados">
                  {event.consentCount} cons.
                </span>
              )}
              {/* general attachments */}
              {event.attachmentCount > 0 && (
                <span className="text-[9px] font-bold px-1.5 py-px rounded-full border bg-gray-50 text-gray-500 border-gray-200"
                      title="Archivos adjuntos">
                  {event.attachmentCount} arch.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────── */
const FILTERS = [
  { id: 'all',      label: 'Todos'      },
  { id: 'surgery',  label: 'Cirugías'   },
  { id: 'therapy',  label: 'Terapias'   },
  { id: 'document', label: 'Documentos' },
];

export default function PatientTimeline({
  documents = [],
  surgeries = [],
  therapies = [],
  loading   = false,
}) {
  const [filter, setFilter] = useState('all');

  const events = useMemo(() => {
    // Build linked-doc count maps from already-loaded documents
    const surgDocCounts = {};
    const therDocCounts = {};
    for (const doc of documents) {
      if (doc.surgeryId) surgDocCounts[doc.surgeryId] = (surgDocCounts[doc.surgeryId] ?? 0) + 1;
      if (doc.therapyId) therDocCounts[doc.therapyId] = (therDocCounts[doc.therapyId] ?? 0) + 1;
    }

    return [
      ...documents.map(fromDocument),
      ...surgeries.map(s => fromSurgery(s, surgDocCounts[s.id] ?? 0)),
      ...therapies.map(t => fromTherapy(t, therDocCounts[t.id] ?? 0)),
    ].sort((a, b) => b.date - a.date);
  }, [documents, surgeries, therapies]);

  const counts = useMemo(() => ({
    all:      events.length,
    surgery:  events.filter(e => e.type === 'surgery').length,
    therapy:  events.filter(e => e.type === 'therapy').length,
    document: events.filter(e => e.type === 'document').length,
  }), [events]);

  const filtered = useMemo(
    () => filter === 'all' ? events : events.filter(e => e.type === filter),
    [events, filter]
  );

  const grouped = useMemo(() => {
    const map = {};
    for (const ev of filtered) {
      if (!map[ev.dateIso]) map[ev.dateIso] = [];
      map[ev.dateIso].push(ev);
    }
    return Object.entries(map).sort(([a], [b]) => b.localeCompare(a));
  }, [filtered]);

  if (loading) {
    return (
      <div className="flex justify-center py-12 text-gray-300">
        <div className="animate-pulse text-4xl">⏳</div>
      </div>
    );
  }

  return (
    <div>
      {/* Filter bar */}
      <div className="flex gap-1 mb-4 flex-wrap">
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition ${
              filter === id
                ? 'bg-hm-primary text-white border-hm-primary'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
            }`}
          >
            {label}
            <span className={`text-[10px] px-1 rounded-full ${
              filter === id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              {counts[id]}
            </span>
          </button>
        ))}
      </div>

      {grouped.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-14 text-gray-400">
          <div className="text-4xl mb-3">🗓</div>
          <p className="text-sm font-medium text-gray-500">Sin eventos registrados</p>
          <p className="text-xs mt-1 text-gray-400">Las cirugías, terapias y documentos aparecerán aquí.</p>
        </div>
      ) : (
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
      )}
    </div>
  );
}
