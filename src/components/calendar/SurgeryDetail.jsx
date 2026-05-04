import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { differenceInYears, parseISO, isValid } from 'date-fns';
import {
  User, Users, DollarSign, History,
  Printer, Bell, XCircle, X, Pencil,
  CheckCircle, AlertCircle
} from 'lucide-react';
import useStore      from '../../store/useStore';
import Badge         from '../ui/Badge';
import logoImg       from '../../../LOGO.jpg';
import { getTypeInfo } from '../../utils/patientTypes';

// ── Helpers ──────────────────────────────────────────────────────────────────

function calcAge(birthDate) {
  if (!birthDate) return null;
  const d = parseISO(birthDate);
  return isValid(d) ? differenceInYears(new Date(), d) : null;
}

function fmt(n) {
  return Number(n || 0).toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
}

// ── Print helpers ─────────────────────────────────────────────────────────────

function buildFichaFields(surgery, patient) {
  const age     = calcAge(patient?.birthDate);
  const dateStr = surgery.date
    ? format(new Date(surgery.date + 'T12:00'), "dd/MM/yyyy")
    : '—';
  const left = [
    { label: 'Nombre',               value: surgery.patientName ?? '—' },
    { label: 'Diagnóstico',          value: patient?.diagnosis ?? '—' },
    { label: 'Cirugía',              value: surgery.surgeryType ?? '—' },
    { label: 'Fecha de internación', value: dateStr },
    { label: 'Hora de internación',  value: surgery.admissionTime || '—' },
  ];
  const right = [
    { label: 'Hora de ayuno', value: surgery.fastingTime || (surgery.fastingHours ? `${surgery.fastingHours} h` : '—') },
    { label: 'Peso',          value: surgery.peso  ? `${surgery.peso} kg`  : '—' },
    { label: 'Talla',         value: surgery.talla ? `${surgery.talla} cm` : '—' },
    { label: 'Edad',          value: age !== null  ? `${age} años`          : '—' },
  ];
  return { left, right };
}

async function getLogoBase64(src) {
  try {
    const r    = await fetch(src);
    const blob = await r.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch { return ''; }
}

async function printSurgeryFicha(surgery, patient) {
  const logo = await getLogoBase64(logoImg);
  const { left, right } = buildFichaFields(surgery, patient);
  const now  = format(new Date(), "dd/MM/yyyy HH:mm");

  const tdStyle = 'border-bottom:1px solid #eef2f7; padding:5px 0; vertical-align:top;';
  const mkRows  = (fields) => fields.map(({ label, value }) =>
    `<tr>
      <td style="${tdStyle} width:48%; font-size:10px; color:#72A0C1; font-weight:600; padding-right:6px;">${label}</td>
      <td style="${tdStyle} font-size:11px; font-weight:700; color:#1A365D;">${value}</td>
    </tr>`
  ).join('');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <title>Ficha Quirúrgica — ${surgery.patientName}</title>
  <style>
    @page { size: 8.5in 5.5in landscape; margin: 0; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 8.5in; height: 5.5in;
      font-family: Arial, sans-serif;
      display: flex; flex-direction: column;
      overflow: hidden; background: #fff;
    }
    table { border-collapse: collapse; width: 100%; }
  </style>
</head>
<body>
  <!-- Header navy -->
  <div style="background:#1A365D; padding:14px 28px; display:flex; align-items:center; gap:16px; flex-shrink:0;">
    ${logo ? `<img src="${logo}" style="height:52px; width:auto; background:white; border-radius:6px; padding:4px 6px; object-fit:contain;" />` : ''}
    <div style="flex:1;">
      <div style="color:white; font-size:16px; font-weight:800;">Hospital Munay</div>
      <div style="color:#72A0C1; font-size:10px; margin-top:3px;">Centro del Niño con Fisura</div>
    </div>
    <div style="text-align:right;">
      <div style="color:white; font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:.06em;">Ficha Quirúrgica</div>
      <div style="color:#72A0C1; font-size:10px; margin-top:3px;">${now}</div>
    </div>
  </div>
  <!-- Cyan accent -->
  <div style="height:4px; background:#09D6D4; flex-shrink:0;"></div>

  <!-- Content -->
  <div style="flex:1; padding:16px 28px; overflow:hidden;">
    <div style="margin-bottom:12px; padding-bottom:10px; border-bottom:2px solid #e8f0f7;">
      <div style="font-size:20px; font-weight:800; color:#1A365D;">${surgery.patientName ?? '—'}</div>
      <div style="font-size:11px; color:#72A0C1; font-weight:600; margin-top:3px;">${surgery.surgeryType ?? '—'}</div>
    </div>

    <div style="display:flex; gap:20px;">
      <table style="flex:1;"><tbody>${mkRows(left)}</tbody></table>
      <div style="width:1px; background:#d1dde8; flex-shrink:0;"></div>
      <table style="flex:1;"><tbody>${mkRows(right)}</tbody></table>
    </div>
  </div>

  <!-- Footer -->
  <div style="flex-shrink:0;">
    <div style="height:3px; background:#09D6D4;"></div>
    <div style="background:#1A365D; padding:7px 28px; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:9px; color:#72A0C1; font-weight:700; text-transform:uppercase; letter-spacing:.05em;">Hospital Munay · Centro del Niño con Fisura</span>
      <span style="font-size:9px; color:#72A0C1;">Generada: ${now}</span>
    </div>
  </div>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=816,height=528');
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 500);
}

// ── Component ─────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'info',       label: 'Información',  icon: User },
  { id: 'financiero', label: 'Financiero',   icon: DollarSign },
  { id: 'historial',  label: 'Historial',    icon: History },
];

export default function SurgeryDetail({
  surgery,
  onEdit,
  onClose,
  onCancelSurgery,
  isAdmin,
}) {
  const [activeTab,        setActiveTab]        = useState('info');
  const [printPreviewOpen, setPrintPreviewOpen] = useState(false);
  const { patients, surgeries: allSurgeries, therapies } = useStore();

  if (!surgery) return null;

  const patient     = patients.find((p) => p.id === surgery.patientId);
  const age         = calcAge(patient?.birthDate);
  const fichaFields = buildFichaFields(surgery, patient);
  const dateStr  = surgery.date
    ? format(new Date(surgery.date + 'T12:00'), "EEEE d 'de' MMMM yyyy", { locale: es })
    : '—';

  const pending    = Math.max(0, Number(surgery.quotation || 0) - Number(surgery.amountPaid || 0));
  const isCancelled = surgery.status === 'cancelado';

  // Patient history
  const prevSurgeries = allSurgeries
    .filter((s) => s.patientId === surgery.patientId && s.id !== surgery.id)
    .sort((a, b) => b.date.localeCompare(a.date));
  const prevTherapies = therapies
    .filter((t) => t.patientId === surgery.patientId)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col relative" style={{ maxHeight: '85vh' }}>
      {/* ── Modal header ── */}
      <div className="px-6 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-extrabold text-hm-primary truncate">{surgery.patientName}</h2>
            <p className="text-sm text-gray-500 mt-0.5 capitalize">{surgery.surgeryType} · {dateStr}</p>
          </div>
          <button onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2 mt-3">
          <StatusPill status={surgery.status} />
          {surgery.paymentComplete && (
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
              <CheckCircle className="w-3 h-3" /> Completado
            </span>
          )}
          {surgery.surgeryType && (
            <span className="inline-flex px-3 py-0.5 rounded-full text-xs font-bold bg-pink-100 text-pink-800 border border-pink-200">
              {surgery.surgeryType}
            </span>
          )}
          {(() => {
            const ti = getTypeInfo(surgery.patientType);
            return (
              <span className="inline-flex px-3 py-0.5 rounded-full text-xs font-bold border"
                style={{ backgroundColor: ti.lightBg, color: ti.textColor, borderColor: ti.border }}>
                {ti.label} · {ti.longLabel}
              </span>
            );
          })()}
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mt-4 border-b border-gray-100 -mb-px">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === id
                  ? 'border-hm-tertiary text-hm-primary'
                  : 'border-transparent text-gray-400 hover:text-hm-primary'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab content ── */}
      <div className="flex-1 overflow-y-auto px-6 py-4">

        {/* ── Información tab ── */}
        {activeTab === 'info' && (
          <div className="space-y-5">
            {/* Patient data */}
            <section>
              <SectionTitle icon={User} label="Datos del paciente" />
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <DataRow label="Nombre completo"   value={surgery.patientName ?? '—'} />
                <DataRow
                  label="Edad / Peso / Talla"
                  value={[
                    age !== null ? `${age} años` : null,
                    surgery.peso  ? `${surgery.peso} kg`  : null,
                    surgery.talla ? `${surgery.talla} cm` : null,
                  ].filter(Boolean).join(' · ') || '—'}
                />
                <DataRow label="Diagnóstico"     value={patient?.diagnosis ?? surgery.patientName ?? '—'} />
                <DataRow label="Tipo de cirugía" value={surgery.surgeryType ?? '—'} />
                <DataRow label="Hora de inicio"  value={surgery.startTime ?? '—'} />
                {surgery.admissionTime && (
                  <DataRow label="Hora de internación" value={surgery.admissionTime} />
                )}
                {(surgery.fastingTime || surgery.fastingHours) && (
                  <DataRow label="Hora de ayuno" value={surgery.fastingTime || `${surgery.fastingHours} horas`} />
                )}
                <DataRow label="Teléfono" value={patient?.phone || '—'} />
                {patient?.guardian && (
                  <DataRow
                    label="Responsable"
                    value={`${patient.guardian}${patient.guardianPhone ? ` — ${patient.guardianPhone}` : ''}`}
                  />
                )}
                {surgery.notes && (
                  <div className="px-4 py-3 bg-gray-50">
                    <p className="text-xs text-gray-400 mb-1">Notas clínicas</p>
                    <p className="text-sm text-gray-700">{surgery.notes}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Surgical team */}
            <section>
              <SectionTitle icon={Users} label="Equipo quirúrgico" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <TeamCard role="Cirujano principal" name={surgery.surgeon} />
                <TeamCard role="Anestesiólogo"      name={surgery.anesthesiologist} />
                <TeamCard role="Instrumentadora"    name={surgery.scrubNurse} />
              </div>
            </section>
          </div>
        )}

        {/* ── Financiero tab ── */}
        {activeTab === 'financiero' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <FinCard label="Cotización" value={fmt(surgery.quotation)} color="primary" />
              <FinCard label="Pagado"     value={fmt(surgery.amountPaid)} color="green" />
              <FinCard label="Pendiente"  value={pending > 0 ? fmt(pending) : '—'} color={pending > 0 ? 'red' : 'gray'} />
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <DataRow
                label="Estado de pago"
                value={
                  surgery.paymentComplete
                    ? <span className="flex items-center gap-1 text-green-700 font-bold"><CheckCircle className="w-4 h-4"/>Pago completo</span>
                    : <span className="flex items-center gap-1 text-red-500 font-bold"><AlertCircle className="w-4 h-4"/>Pendiente de pago</span>
                }
              />
              <DataRow
                label="Ayuda social"
                value={surgery.socialAid
                  ? <span className="text-purple-700 font-bold">{surgery.socialAidAmount ? fmt(surgery.socialAidAmount) : 'Sí'}</span>
                  : 'No'}
              />
              {surgery.adminNotes && (
                <DataRow label="Observaciones" value={surgery.adminNotes} />
              )}
            </div>
          </div>
        )}

        {/* ── Historial tab ── */}
        {activeTab === 'historial' && (
          <div className="space-y-5">
            <section>
              <p className="text-xs font-bold text-hm-primary uppercase mb-2">
                Cirugías anteriores ({prevSurgeries.length})
              </p>
              {prevSurgeries.length === 0 ? (
                <p className="text-sm text-gray-400 italic">Sin cirugías previas registradas.</p>
              ) : (
                <ul className="space-y-2">
                  {prevSurgeries.map((s) => (
                    <li key={s.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm">
                      <div>
                        <p className="font-semibold text-hm-primary">{s.surgeryType}</p>
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
              <p className="text-xs font-bold text-hm-primary uppercase mb-2">
                Terapias ({prevTherapies.length})
              </p>
              {prevTherapies.length === 0 ? (
                <p className="text-sm text-gray-400 italic">Sin terapias registradas.</p>
              ) : (
                <ul className="space-y-2">
                  {prevTherapies.map((t) => (
                    <li key={t.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm">
                      <div>
                        <p className="font-semibold text-hm-primary">{t.therapyType}</p>
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
        )}
      </div>

      {/* ── Footer actions ── */}
      <div className="px-6 py-4 border-t border-gray-100 flex flex-wrap gap-2 items-center">
        {/* Left: action buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setPrintPreviewOpen(true)}
            className="btn btn-sm border border-gray-200 text-gray-600 hover:bg-gray-50 gap-1.5"
          >
            <Printer className="w-4 h-4" />
            Imprimir ficha
          </button>
          <button
            onClick={() => alert('Función de alertas próximamente')}
            className="btn btn-sm text-hm-tertiary-600 border border-hm-secondary-200 hover:bg-hm-secondary-100 gap-1.5"
          >
            <Bell className="w-4 h-4" />
            Generar alertas
          </button>
          {isAdmin && !isCancelled && (
            <button onClick={onCancelSurgery}
              className="btn btn-sm text-red-600 border border-red-200 hover:bg-red-50 gap-1.5">
              <XCircle className="w-4 h-4" />
              Cancelar cirugía
            </button>
          )}
        </div>

        {/* Right: close + edit */}
        <div className="flex gap-2 ml-auto">
          <button onClick={onClose} className="btn-secondary btn btn-sm">Cerrar</button>
          {isAdmin && (
            <button onClick={onEdit} className="btn-primary btn btn-sm">
              <Pencil className="w-4 h-4" /> Editar
            </button>
          )}
        </div>
      </div>

      {/* ── Print preview overlay ── */}
      {printPreviewOpen && (
        <div className="absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Printer className="w-4 h-4 text-hm-primary" />
              <p className="text-sm font-bold text-hm-primary">Vista previa de impresión</p>
            </div>
            <button onClick={() => setPrintPreviewOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Paper area — grey background like a print dialog */}
          <div className="flex-1 overflow-y-auto flex items-center justify-center p-5" style={{ backgroundColor: '#c8d0da' }}>
            <div style={{ width: '100%', maxWidth: 620, fontFamily: 'Arial, sans-serif', boxShadow: '0 6px 24px rgba(0,0,0,0.3)', overflow: 'hidden', backgroundColor: 'white' }}>

              {/* Header — navy */}
              <div style={{ backgroundColor: '#1A365D', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ backgroundColor: 'white', borderRadius: 6, padding: '3px 6px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  <img src={logoImg} alt="Logo" style={{ height: 46, width: 'auto', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontSize: 15, fontWeight: 800 }}>Hospital Munay</div>
                  <div style={{ color: '#72A0C1', fontSize: 10, marginTop: 2 }}>Centro del Niño con Fisura</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'white', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ficha Quirúrgica</div>
                  <div style={{ color: '#72A0C1', fontSize: 10, marginTop: 2 }}>{format(new Date(), "dd/MM/yyyy HH:mm")}</div>
                </div>
              </div>

              {/* Cyan stripe */}
              <div style={{ height: 4, backgroundColor: '#09D6D4' }} />

              {/* Content */}
              <div style={{ padding: '16px 24px 18px' }}>
                {/* Patient name */}
                <div style={{ marginBottom: 12, paddingBottom: 10, borderBottom: '2px solid #e8f0f7' }}>
                  <div style={{ fontSize: 19, fontWeight: 800, color: '#1A365D', lineHeight: 1.2 }}>{surgery.patientName ?? '—'}</div>
                  <div style={{ fontSize: 11, color: '#72A0C1', fontWeight: 600, marginTop: 3 }}>{surgery.surgeryType ?? '—'}</div>
                </div>

                {/* 2-column data — matches print layout */}
                <div style={{ display: 'flex', gap: 20 }}>
                  <div style={{ flex: 1 }}>
                    {fichaFields.left.map(({ label, value }) => (
                      <div key={label} style={{ display: 'flex', borderBottom: '1px solid #eef2f7', padding: '5px 0' }}>
                        <span style={{ fontSize: 10, color: '#72A0C1', fontWeight: 600, width: '50%', flexShrink: 0 }}>{label}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#1A365D' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ width: 1, backgroundColor: '#d1dde8', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    {fichaFields.right.map(({ label, value }) => (
                      <div key={label} style={{ display: 'flex', borderBottom: '1px solid #eef2f7', padding: '5px 0' }}>
                        <span style={{ fontSize: 10, color: '#72A0C1', fontWeight: 600, width: '50%', flexShrink: 0 }}>{label}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#1A365D' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer — navy */}
              <div>
                <div style={{ height: 3, backgroundColor: '#09D6D4' }} />
                <div style={{ backgroundColor: '#1A365D', padding: '7px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 9, color: '#72A0C1', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hospital Munay · Centro del Niño con Fisura</span>
                  <span style={{ fontSize: 9, color: '#72A0C1' }}>Generada: {format(new Date(), "dd/MM/yyyy")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0">
            <button onClick={() => setPrintPreviewOpen(false)} className="btn-secondary btn btn-sm">
              Cancelar
            </button>
            <button
              onClick={() => { setPrintPreviewOpen(false); printSurgeryFicha(surgery, patient); }}
              className="btn-primary btn btn-sm"
            >
              <Printer className="w-4 h-4" /> Imprimir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function StatusPill({ status }) {
  const map = {
    programado: 'bg-hm-secondary-100 text-hm-primary border-hm-secondary-200',
    confirmado: 'bg-blue-100 text-blue-800 border-blue-200',
    realizado:  'bg-green-100 text-green-800 border-green-200',
    cancelado:  'bg-red-100 text-red-700 border-red-200',
  };
  const label = { programado: 'Programada', confirmado: 'Confirmada', realizado: 'Realizada', cancelado: 'Cancelada' };
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold border ${map[status] ?? 'bg-gray-100 text-gray-700 border-gray-200'}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block opacity-60" />
      {label[status] ?? status}
    </span>
  );
}

function SectionTitle({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(26,54,93,0.08)' }}>
        <Icon className="w-4 h-4 text-hm-primary" />
      </div>
      <p className="text-sm font-bold text-hm-primary">{label}</p>
    </div>
  );
}

function DataRow({ label, value }) {
  return (
    <div className="flex items-start justify-between px-4 py-3 border-b border-gray-50 last:border-b-0">
      <span className="text-sm text-gray-400 shrink-0 w-40">{label}</span>
      <span className="text-sm font-semibold text-hm-primary text-right flex-1 ml-4">{value ?? '—'}</span>
    </div>
  );
}

function TeamCard({ role, name }) {
  return (
    <div className="border border-gray-100 rounded-xl p-3 bg-gray-50">
      <p className="text-xs text-gray-400 mb-1">{role}</p>
      <p className="text-sm font-bold text-hm-primary">{name || '—'}</p>
    </div>
  );
}

function PreviewRow({ label, value }) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <span className="text-xs text-gray-400 w-40 shrink-0">{label}</span>
      <span className="text-sm font-semibold text-hm-primary text-right flex-1 ml-4">{value ?? '—'}</span>
    </div>
  );
}

function FinCard({ label, value, color }) {
  const colors = {
    primary: 'text-hm-primary',
    green:   'text-green-700',
    red:     'text-red-600',
    gray:    'text-gray-300',
  };
  return (
    <div className="border border-gray-100 rounded-xl p-4 text-center bg-gray-50">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className={`text-base font-extrabold ${colors[color]}`}>{value}</p>
    </div>
  );
}
