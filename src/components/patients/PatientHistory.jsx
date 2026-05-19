import { useState } from 'react';
import { format, differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, HeartPulse, FileText, Clock } from 'lucide-react';
import Badge from '../ui/Badge';
import useStore from '../../store/useStore';
import { getTypeInfo } from '../../utils/patientTypes';
import {
  usePatientDocuments,
  DocumentTable,
  DocumentViewer,
  DocumentFormModal,
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
  { id: 'datos',      label: 'Datos',       Icon: FileText   },
  { id: 'documentos', label: 'Documentos',  Icon: FileText   },
  { id: 'timeline',   label: 'Timeline',    Icon: Clock      },
];

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

/* ── Documents tab ───────────────────────────────────── */
function DocumentosTab({ patient }) {
  const { documents, loading }   = usePatientDocuments(patient.id);
  const [viewDoc,  setViewDoc]   = useState(null);
  const [editDoc,  setEditDoc]   = useState(null);
  const [formOpen, setFormOpen]  = useState(false);

  return (
    <>
      <DocumentTable
        documents={documents}
        loading={loading}
        patientId={patient.id}
        onView={setViewDoc}
        onEdit={(doc) => { setEditDoc(doc); setFormOpen(true); }}
        onNew={() => { setEditDoc(null); setFormOpen(true); }}
      />

      {viewDoc && (
        <DocumentViewer
          document={viewDoc}
          patientId={patient.id}
          onClose={() => setViewDoc(null)}
          onEdit={(doc) => { setViewDoc(null); setEditDoc(doc); setFormOpen(true); }}
        />
      )}

      <DocumentFormModal
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditDoc(null); }}
        patientId={patient.id}
        document={editDoc}
      />
    </>
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

      {activeTab === 'datos'      && <DatosTab patient={patient} surgeries={surgeries} therapies={therapies} />}
      {activeTab === 'documentos' && <DocumentosTab patient={patient} />}
      {activeTab === 'timeline'   && <TimelineTab patient={patient} />}
    </div>
  );
}
