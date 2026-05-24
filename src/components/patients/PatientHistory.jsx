import { useState } from 'react';
import { format, differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, HeartPulse, FileText, Clock, FolderOpen, ExternalLink } from 'lucide-react';
import Badge from '../ui/Badge';
import useStore from '../../store/useStore';
import { getTypeInfo } from '../../utils/patientTypes';
import {
  usePatientDocuments,
  PatientTimeline,
} from '../../modules/documents/index';

function calcAge(birthDate) {
  if (!birthDate) return null;
  const birth = parseISO(birthDate);
  if (!isValid(birth)) return null;
  const now = new Date();
  const years = differenceInYears(now, birth);
  const afterYears = new Date(birth.getFullYear() + years, birth.getMonth(), birth.getDate());
  const months = differenceInMonths(now, afterYears);
  const afterMonths = new Date(afterYears.getFullYear(), afterYears.getMonth() + months, afterYears.getDate());
  const days = differenceInDays(now, afterMonths);
  return { years, months, days };
}

function fmtAge(age) {
  if (!age) return '-';
  const parts = [];
  if (age.years > 0)  parts.push(`${age.years}a`);
  if (age.months > 0) parts.push(`${age.months}m`);
  if (age.days > 0 || parts.length === 0) parts.push(`${age.days}d`);
  return parts.join(' ');
}

const TABS = [
  { id: 'datos',    label: 'Datos',    Icon: FileText   },
  { id: 'historial',label: 'Historial',Icon: FolderOpen },
  { id: 'timeline', label: 'Timeline', Icon: Clock      },
];

const DOC_SURGERY_LABELS = {
  consentimiento:        'Consentimiento',
  epicrisis:             'Epicrisis',
  historia_quirurgica:   'Historia Clínica Quirúrgica',
  control_postoperatorio:'Control Postoperatorio',
  ficha_social:          'Ficha Social',
};

const DOC_PATIENT_LABELS = {
  historia_clinica: 'Historia Clínica',
  ficha_social:     'Ficha Social',
  consentimiento:   'Consentimiento',
  evolucion:        'Evolución',
};

/* ── Datos tab (original content) ───────────────────── */
function DatosTab({ patient, surgeries, therapies }) {
  const ptSurgeries = surgeries
    .filter(s => s.patientId === patient.id)
    .sort((a, b) => b.date.localeCompare(a.date));

  const ptTherapies = therapies
    .filter(t => t.patientId === patient.id)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-6">
      {/* Patient summary */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        {[
          ['Diagnóstico',     patient.diagnosis],
          ['Tipo',            getTypeInfo(patient.patientType).longLabel],
          ['Fecha de nac.',   patient.birthDate ? format(parseISO(patient.birthDate), 'dd/MM/yyyy') : '-'],
          ['Edad',            fmtAge(calcAge(patient.birthDate))],
          ['CI paciente',     patient.idNumber || '-'],
          ['Sexo',            patient.sex === 'masculino' ? 'Masculino' : patient.sex === 'femenino' ? 'Femenino' : '-'],
          ['Responsable',     patient.guardian || '-'],
          ['CI responsable',  patient.guardianIdNumber || '-'],
          ['Tel. responsable',patient.guardianPhone || '-'],
          ['Dirección',       patient.address || '-'],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-xs text-gray-400 uppercase font-medium">{k}</p>
            <p className="text-gray-800 font-medium">{v}</p>
          </div>
        ))}
      </div>

      {patient.allergies && (
        <div>
          <p className="text-xs text-gray-400 uppercase font-medium mb-1">Alergias / Medicamentos</p>
          <p className="text-sm text-gray-700 bg-amber-50 rounded-lg p-3">{patient.allergies}</p>
        </div>
      )}

      {patient.clinicalHistory && (
        <div>
          <p className="text-xs text-gray-400 uppercase font-medium mb-1">Historial clínico</p>
          <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{patient.clinicalHistory}</p>
        </div>
      )}

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
          <Calendar className="w-4 h-4 text-teal-600" />
          Cirugías ({ptSurgeries.length})
        </h3>
        {ptSurgeries.length === 0 ? (
          <p className="text-sm text-gray-400">Sin cirugías registradas.</p>
        ) : (
          <ul className="space-y-2">
            {ptSurgeries.map(s => (
              <li key={s.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm">
                <div>
                  <p className="font-medium text-gray-800">{s.surgeryType}</p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(s.date + 'T12:00'), "d MMM yyyy", { locale: es })} · {s.startTime} · {s.surgeon || '—'}
                  </p>
                </div>
                <Badge variant={s.status} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
          <HeartPulse className="w-4 h-4 text-purple-600" />
          Terapias ({ptTherapies.length})
        </h3>
        {ptTherapies.length === 0 ? (
          <p className="text-sm text-gray-400">Sin terapias registradas.</p>
        ) : (
          <ul className="space-y-2">
            {ptTherapies.map(t => (
              <li key={t.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm">
                <div>
                  <p className="font-medium text-gray-800">{t.therapyType}</p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(t.date + 'T12:00'), "d MMM yyyy", { locale: es })} · {t.startTime} · {t.therapist || '—'}
                  </p>
                </div>
                <Badge variant={t.status ?? 'programado'} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

/* ── Historial tab ───────────────────────────────────── */
function HistorialTab({ patient }) {
  const { documents, loading } = usePatientDocuments(patient.id);
  const { surgeries } = useStore();

  const completedSurgeries = surgeries
    .filter((s) => s.patientId === patient.id && s.status === 'realizado')
    .sort((a, b) => b.date.localeCompare(a.date));

  const standaloneDocs = documents
    .filter((d) => !d.surgeryId)
    .sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));

  const docsBySurgery = {};
  for (const doc of documents) {
    if (!doc.surgeryId) continue;
    if (!docsBySurgery[doc.surgeryId]) docsBySurgery[doc.surgeryId] = [];
    docsBySurgery[doc.surgeryId].push(doc);
  }

  if (loading) {
    return <p className="text-sm text-gray-400">Cargando historial…</p>;
  }

  if (completedSurgeries.length === 0 && standaloneDocs.length === 0) {
    return <p className="text-sm text-gray-400 italic">Sin historial registrado.</p>;
  }

  return (
    <div className="space-y-4">
      {/* ── Standalone patient documents (e.g. Historia Clínica) ── */}
      {standaloneDocs.length > 0 && (
        <div className="border border-indigo-100 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-indigo-50 border-b border-indigo-100">
            <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
            <p className="text-sm font-bold text-indigo-800 uppercase">Documentos del Paciente</p>
          </div>
          <div className="px-4 py-3">
            <ul className="space-y-1.5">
              {standaloneDocs.map((doc) => {
                const label = DOC_PATIENT_LABELS[doc.documentType] ?? doc.documentType;
                const dateStr = doc.createdAt?.seconds
                  ? format(new Date(doc.createdAt.seconds * 1000), 'dd/MM/yyyy · HH:mm', { locale: es })
                  : null;
                return (
                  <li key={doc.id} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg text-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-gray-700 font-medium truncate">{label}</p>
                        {dateStr && <p className="text-[11px] text-gray-400">{dateStr}</p>}
                      </div>
                    </div>
                    {doc.pdf?.url ? (
                      <a
                        href={doc.pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition shrink-0 ml-2"
                      >
                        <ExternalLink className="w-3 h-3" /> Ver PDF
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400 italic shrink-0 ml-2">Sin PDF</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {completedSurgeries.map((surgery) => {
        const surgDocs = docsBySurgery[surgery.id] ?? [];
        const dateStr = format(new Date(surgery.date + 'T12:00'), "dd/MM/yyyy", { locale: es });

        return (
          <div key={surgery.id} className="border border-blue-100 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border-b border-blue-100">
              <FolderOpen className="w-4 h-4 text-blue-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-blue-800 uppercase truncate">
                  CIRUGÍA: {surgery.surgeryType}
                </p>
                <p className="text-xs text-blue-500">{dateStr} · {surgery.surgeon || '—'}</p>
              </div>
            </div>
            <div className="px-4 py-3">
              {surgDocs.length === 0 ? (
                <p className="text-xs text-gray-400 italic">Sin documentos guardados para esta cirugía.</p>
              ) : (
                <ul className="space-y-1.5">
                  {surgDocs.map((doc) => {
                    const baseLabel = DOC_SURGERY_LABELS[doc.documentType] ?? doc.documentType;
                    let label = baseLabel;
                    if (doc.documentType === 'consentimiento') {
                      if (doc.clinicalData?.consentType === 'cirugia')    label = 'Consentimiento de Cirugía';
                      else if (doc.clinicalData?.consentType === 'anestesia') label = 'Consentimiento de Anestesia';
                      else if (doc.clinicalData?.consentType === 'fotos')     label = 'Autorización de Fotografías';
                    }
                    const docDateStr = doc.createdAt?.seconds
                      ? format(new Date(doc.createdAt.seconds * 1000), 'dd/MM/yyyy · HH:mm', { locale: es })
                      : null;
                    return (
                      <li key={doc.id} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2 min-w-0">
                          <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-gray-700 font-medium truncate">{label}</p>
                            {docDateStr && <p className="text-[11px] text-gray-400">{docDateStr}</p>}
                          </div>
                        </div>
                        {doc.pdf?.url ? (
                          <a
                            href={doc.pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition shrink-0 ml-2"
                          >
                            <ExternalLink className="w-3 h-3" /> Ver PDF
                          </a>
                        ) : (
                          <span className="text-xs text-gray-400 italic shrink-0 ml-2">Sin PDF</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Timeline tab ───────────────────────────────────── */
function TimelineTab({ patient }) {
  const { documents, loading }  = usePatientDocuments(patient.id);
  const { surgeries, therapies } = useStore();

  const ptSurgeries = surgeries.filter(s => s.patientId === patient.id);
  const ptTherapies = therapies.filter(t => t.patientId === patient.id);

  return (
    <PatientTimeline
      documents={documents}
      surgeries={ptSurgeries}
      therapies={ptTherapies}
      loading={loading}
    />
  );
}

/* ── Main component ──────────────────────────────────── */
export default function PatientHistory({ patient }) {
  const { surgeries, therapies } = useStore();
  const [activeTab, setActiveTab] = useState('datos');

  return (
    <div className="space-y-0">
      {/* Tab bar */}
      <div className="flex gap-0 -mx-1 mb-4 border-b border-gray-100">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors
              ${activeTab === id
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-400 hover:text-gray-700'}`}>
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'datos'     && <DatosTab patient={patient} surgeries={surgeries} therapies={therapies} />}
      {activeTab === 'historial' && <HistorialTab patient={patient} />}
      {activeTab === 'timeline'  && <TimelineTab patient={patient} />}
    </div>
  );
}
