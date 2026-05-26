import logo2Img from '../../LOGO 2.jpg';
import { getTypeInfo } from './patientTypes';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid, format } from 'date-fns';

async function getLogoBase64(src) {
  try {
    const r = await fetch(src);
    const blob = await r.blob();
    return new Promise((res) => {
      const rd = new FileReader();
      rd.onloadend = () => res(rd.result);
      rd.readAsDataURL(blob);
    });
  } catch { return null; }
}

export async function printHistoriaClinicaQx(surgery, patient) {
  const logo2    = await getLogoBase64(logo2Img);
  const typeInfo = getTypeInfo(patient?.patientType);
  const hcCode   = patient?.patientCode ? `${typeInfo.label}-${patient.patientCode}` : '';

  const patientName   = patient?.fullName    || surgery?.patientName || '';
  const guardian      = patient?.guardian    || '';
  const guardianPhone = patient?.guardianPhone || '';
  const address       = patient?.address     || '';
  const diagRaw       = (patient?.diagnosis  || '').toUpperCase();
  const diagDisplay   = patient?.diagnosis   || '';
  const sex           = patient?.sex === 'masculino' ? 'M' : patient?.sex === 'femenino' ? 'F' : '';

  let ageStr = '';
  if (patient?.birthDate) {
    const birth = parseISO(patient.birthDate);
    if (isValid(birth)) {
      const now = new Date();
      const y  = differenceInYears(now, birth);
      const ay = new Date(birth.getFullYear() + y, birth.getMonth(), birth.getDate());
      const mo = differenceInMonths(now, ay);
      const am = new Date(ay.getFullYear(), ay.getMonth() + mo, ay.getDate());
      const d  = differenceInDays(now, am);
      const parts = [];
      if (y  > 0)             parts.push(`${y}a`);
      if (mo > 0)             parts.push(`${mo}m`);
      if (d  > 0 || !parts.length) parts.push(`${d}d`);
      ageStr = parts.join(' ');
    }
  }

  const surgDateFmt = surgery?.date ? format(new Date(surgery.date + 'T12:00'), 'dd/MM/yyyy') : '';
  const surgType    = surgery?.surgeryType   || '';
  const surgeon     = surgery?.surgeon       || '';
  const fastingInfo = surgery?.fastingTime   || (surgery?.fastingHours ? `${surgery.fastingHours} h` : '');
  const pesoVal     = surgery?.peso  ? String(surgery.peso)  : '';
  const tallaVal    = surgery?.talla ? String(surgery.talla) : '';

  const cx = (cond) => cond ? ' checked' : '';
  const sl = surgType.toLowerCase();
  const isFLAP      = diagRaw.includes('FLAP');
  const isBilateral = isFLAP || diagRaw.includes('BILATERAL') || diagRaw.includes('FLB');
  const isUnilateral = !isBilateral && (diagRaw.includes('FL') || diagRaw.includes('LABIO'));
  const isPaladar   = diagRaw.includes('FP') || diagRaw.includes('PALAT');
  const isQueilPrim = sl.includes('queil') && !sl.includes('secund');
  const isQueilSec  = sl.includes('queil') &&  sl.includes('secund');
  const isPalatQx   = sl.includes('palat');
  const otroSurg    = surgType && !isQueilPrim && !isQueilSec && !isPalatQx ? surgType : '';

  let yrAge = -1;
  if (patient?.birthDate) {
    const birth = parseISO(patient.birthDate);
    if (isValid(birth)) yrAge = differenceInYears(new Date(), birth);
  }
  const showRN          = yrAge < 0 || yrAge < 2;
  const showPreescolar  = yrAge < 0 || (yrAge >= 2 && yrAge <= 11);
  const showAdolescente = yrAge < 0 || (yrAge >= 12 && yrAge <= 18);

  const now      = new Date();
  const todayStr = now.getDate().toString().padStart(2,'0') + '/' +
                   (now.getMonth()+1).toString().padStart(2,'0') + '/' + now.getFullYear();

  const logoHtml = logo2
    ? `<div class="hdr-logo"><img src="${logo2}" alt="MUNAY"/></div>`
    : `<div class="hdr-logo"><span class="hdr-logo-text">MUNAY</span></div>`;

  const hdr = (sheet, name) => `
    <div class="page-hdr">
      ${logoHtml}
      <div class="hdr-center">
        <div class="inst-name">MUNAY</div>
        <div class="inst-sub">Centro Médico Quirúrgico · Centro del Niño con Fisura · La Paz, Bolivia</div>
        <div class="doc-title">Historia Clínica Quirúrgica — Fisura Labio Alveolo Palatina</div>
      </div>
      <div class="hdr-right">
        ${name ? `<div class="patient-name">${name}</div>` : ''}
        <div class="hc-code">${hcCode || 'HC-QX ______'}</div>
        <div>${surgDateFmt || todayStr} · Hoja ${sheet}/2</div>
      </div>
    </div>`;

  const html = `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>HC-QX · MUNAY · ${patientName}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
:root {
  --navy: #163A5F;
  --navy-mid: #2F5D8A;
  --navy-soft: #EBF2FA;
  --rule: #CBD5E0;
  --rule-light: #E2E8F0;
  --bg: #EDF2F7;
  --white: #FFFFFF;
  --ink: #1A202C;
  --ink-2: #4A5568;
  --ink-3: #718096;
  --amber: #B7791F;
  --amber-bg: #FEFCE8;
  --danger: #C53030;
  --success: #276749;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: var(--bg); font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; color: var(--ink); font-size: 8.5pt; line-height: 1.35; }

/* ── Document wrapper ── */
.doc { width: 215.9mm; min-height: 279.4mm; margin: 12px auto; padding: 0 9mm 7mm; background: var(--white); box-shadow: 0 2px 16px rgba(0,0,0,.10); }

/* ── Page 2 separator ── */
.p2 { margin-top: 24px; padding-top: 14px; border-top: 3px dashed var(--rule-light); }

/* ── Toolbar ── */
.toolbar { position: sticky; top: 0; z-index: 100; background: var(--white); border-bottom: 2px solid var(--navy); padding: 7px 16px; display: flex; align-items: center; gap: 10px; box-shadow: 0 2px 8px rgba(22,58,95,.10); print-color-adjust: exact; }
.toolbar-brand { font-size: 9.5pt; font-weight: 700; color: var(--navy); letter-spacing: .3px; flex: 1; }
.toolbar-brand span { font-weight: 400; color: var(--ink-2); font-size: 8.5pt; }
.toolbar button { border: none; padding: 5px 13px; font-family: inherit; font-size: 8.5pt; font-weight: 600; cursor: pointer; border-radius: 5px; transition: opacity .15s; }
.btn-print { background: var(--navy); color: #fff; }
.btn-save { background: #276749; color: #fff; }
.btn-save:disabled { background: #888; cursor: not-allowed; }
.btn-clear { background: transparent; color: var(--ink-2); border: 1px solid var(--rule) !important; }

/* ── Page Header ── */
.page-hdr { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px; padding: 8px 12px; margin-bottom: 6px; border-radius: 7px; background: linear-gradient(135deg, #0C1F35 0%, #163A5F 35%, #2F5D8A 70%, #3A7BBF 100%); print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.hdr-logo { background: rgba(255,255,255,0.12); border-radius: 5px; padding: 3px; }
.hdr-logo img { height: 40px; width: auto; display: block; border-radius: 3px; }
.hdr-logo-text { font-size: 14pt; font-weight: 800; color: #fff; letter-spacing: 3px; }
.hdr-center { text-align: center; }
.hdr-center .inst-name { font-size: 13pt; font-weight: 800; color: #fff; letter-spacing: 2px; line-height: 1; }
.hdr-center .inst-sub  { font-size: 7.5pt; color: rgba(255,255,255,0.80); margin-top: 2px; }
.hdr-center .doc-title { font-size: 8pt; font-weight: 600; color: rgba(255,255,255,0.92); margin-top: 3px; letter-spacing: .5px; text-transform: uppercase; }
.hdr-right { text-align: right; font-size: 7.5pt; color: rgba(255,255,255,0.85); line-height: 1.5; }
.hdr-right .hc-code { font-size: 10pt; font-weight: 700; color: #fff; font-family: 'Courier New', monospace; }
.hdr-right .patient-name { font-size: 8.5pt; font-weight: 600; color: #fff; }

/* ── Legend badges ── */
.badge { display: inline-block; font-size: 5.5pt; font-weight: 700; padding: 1px 4px; border-radius: 3px; vertical-align: middle; letter-spacing: .3px; }
.badge-obl  { background: #C53030; color: #fff; }
.badge-edad { background: #B7791F; color: #fff; }
.badge-crit { background: #111; color: #fff; }

/* ── Section card ── */
.section-card { margin: 4px 0; border: 1px solid var(--rule-light); border-radius: 6px; overflow: hidden; }
.section-card + .section-card { margin-top: 4px; }
h3.section { background: var(--navy-soft); color: var(--navy); font-size: 8pt; font-weight: 700; letter-spacing: .4px; text-transform: uppercase; padding: 4px 10px 4px 13px; border-left: 4px solid var(--navy); display: flex; align-items: center; gap: 6px; }
h3.section.crit-hdr { background: #FFF5F5; color: var(--danger); border-left-color: var(--danger); }
.section-body { padding: 5px 10px; }

/* Sub-headings */
h4.sub { font-size: 7.5pt; font-weight: 600; color: var(--navy-mid); text-transform: uppercase; letter-spacing: .3px; margin: 3px 0 2px; border-bottom: 1px solid var(--rule-light); padding-bottom: 1px; }

/* ── Field row ── */
.field-row { display: flex; align-items: baseline; gap: 4px; }
.lbl { font-size: 6.8pt; font-weight: 600; color: var(--ink-2); text-transform: uppercase; letter-spacing: .3px; white-space: nowrap; }
.val { border: none; border-bottom: 1px solid var(--rule); min-width: 60px; min-height: 13px; padding: 0px 3px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); outline: none; flex: 1; }
.val.wide { min-width: 110px; }
.val.xwide { min-width: 180px; }
.val.full  { min-width: 100%; width: 100%; }
.val.sm    { min-width: 38px; }
[contenteditable="true"] { outline: none; cursor: text; }
[contenteditable="true"]:focus { background: #EBF8FF; }

/* ── Grid layouts ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; }
.three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px 10px; }
.three-col-asym { display: grid; grid-template-columns: 2fr 1.1fr 1.5fr; gap: 4px 10px; }
.fg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px 8px; }
.fg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 8px; }
.fg-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px 8px; }
.fg-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 3px 8px; }

/* ── Checkboxes ── */
.checklist { display: grid; gap: 1px 8px; margin: 2px 0; }
.cl-2 { grid-template-columns: repeat(2, 1fr); }
.cl-3 { grid-template-columns: repeat(3, 1fr); }
.cl-4 { grid-template-columns: repeat(4, 1fr); }
.cl-inline { display: flex; flex-wrap: wrap; gap: 2px 10px; align-items: center; }
.chk { display: flex; align-items: center; gap: 5px; font-size: 7.8pt; line-height: 1.25; cursor: pointer; user-select: none; padding: 1px 0; }
.chk .box { display: inline-flex; align-items: center; justify-content: center; width: 10px; height: 10px; border: 1.5px solid var(--rule); border-radius: 2px; flex-shrink: 0; background: var(--white); font-size: 0; transition: all .1s; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.chk.checked .box { background: var(--navy); border-color: var(--navy); font-size: 7pt; color: #fff; font-weight: 900; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.chk.checked .box::after { content: "✓"; color: #fff; font-size: 7pt; line-height: 1; }

/* Other-line */
.other-line { display: inline-block; border-bottom: 1px solid var(--rule); min-width: 50px; padding: 0 2px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); min-height: 10px; }

/* ── Narrative ── */
.narrative { border: 1px solid var(--rule-light); border-radius: 4px; background: #FAFBFC; padding: 3px 6px; min-height: 14px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 500; line-height: 1.35; color: var(--navy); margin: 2px 0; }
.narrative.tall  { min-height: 18px; }
.narrative.xtall { min-height: 55px; }

/* ── Metrics strip ── */
.metrics-strip { display: flex; flex-wrap: wrap; gap: 3px 12px; background: var(--navy-soft); border: 1px solid var(--rule-light); border-radius: 5px; padding: 3px 8px; margin: 2px 0; }
.metric { display: flex; align-items: baseline; gap: 3px; }
.metric .lbl { font-size: 7pt; font-weight: 700; color: var(--navy); }
.metric .val { border-bottom: 1px solid var(--navy-mid); min-width: 40px; }
.metric .unit { font-size: 6.5pt; color: var(--ink-3); }

/* ── Number input ── */
.val-input { border: none; border-bottom: 1px solid var(--rule); background: transparent; width: 50px; padding: 0 3px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); outline: none; }
.val-input:focus { background: #EBF8FF; }
.val-input.imc-auto { background: var(--navy-soft); font-weight: 700; color: var(--navy); width: 55px; }
.val-input::-webkit-outer-spin-button, .val-input::-webkit-inner-spin-button { -webkit-appearance: none; }
.val-input[type="number"] { -moz-appearance: textfield; }

/* ── Add row button ── */
.add-row-btn { background: var(--navy-soft); color: var(--navy); border: 1px solid var(--rule); padding: 1px 7px; font-size: 6.8pt; font-weight: 600; cursor: pointer; border-radius: 3px; margin-left: 8px; font-family: inherit; }

/* ── Tables ── */
table.clinical { width: 100%; border-collapse: collapse; margin: 4px 0; font-size: 7.5pt; border-radius: 5px; overflow: hidden; }
table.clinical thead tr { background: var(--navy-soft); }
table.clinical th { padding: 4px 7px; text-align: left; font-size: 7pt; font-weight: 700; color: var(--navy); border: 1px solid var(--rule-light); }
table.clinical td { border: 1px solid var(--rule-light); padding: 2px 6px; vertical-align: top; }
table.clinical td.fillable { min-height: 14px; height: 14px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); }

table.edu { width: 100%; border-collapse: collapse; font-size: 7.8pt; margin: 4px 0; }
table.edu thead tr { background: var(--navy-soft); }
table.edu th { padding: 4px 8px; text-align: center; font-size: 7pt; font-weight: 700; color: var(--navy); border: 1px solid var(--rule-light); }
table.edu td { border: 1px solid var(--rule-light); padding: 3px 8px; }
table.edu td.tema { font-weight: 500; }
table.edu td.cell-chk { text-align: center; width: 13%; }
table.edu td.cell-chk .chk { justify-content: center; }

/* ── Age blocks ── */
.age-block { border-left: 3px solid var(--amber); background: var(--amber-bg); padding: 2px 8px; margin: 2px 0; border-radius: 0 4px 4px 0; display: flex; flex-wrap: wrap; gap: 1px 8px; align-items: center; }
.age-label { display: inline-block; background: var(--amber); color: #fff; font-size: 6.5pt; font-weight: 700; padding: 1px 6px; border-radius: 3px; margin-right: 6px; text-transform: uppercase; letter-spacing: .3px; print-color-adjust: exact; -webkit-print-color-adjust: exact; flex-shrink: 0; }

/* ── Critical box ── */
.crit-box { border: 1.5px solid var(--danger); background: #FFF5F5; padding: 5px 8px; border-radius: 4px; margin: 3px 0; }

/* ── Kernahan ── */
.kernahan-container { display: grid; grid-template-columns: 1fr auto 1fr; gap: 6px; align-items: center; padding: 3px; background: var(--navy-soft); border: 1px solid var(--rule-light); border-radius: 5px; margin: 2px 0; }
.kernahan-legend { font-size: 6.3pt; line-height: 1.3; font-style: italic; color: var(--ink-2); }
.kernahan-legend.left { text-align: right; }
.kernahan-legend.right { text-align: left; }
.kernahan-legend strong { font-style: normal; color: var(--navy); }
.kernahan-svg { cursor: pointer; }
.kern-zone { fill: #fff; stroke: var(--ink); stroke-width: 1; transition: fill .15s; }
.kern-zone:hover { fill: #ffe9a8; }
.kern-zone.active { fill: var(--navy); print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.kern-num { font-size: 6pt; font-family: 'Inter', 'Helvetica Neue', sans-serif; fill: var(--ink); pointer-events: none; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
.kernahan-extra { grid-column: 1/-1; text-align: center; font-size: 6.3pt; font-style: italic; padding-top: 2px; border-top: 1px dashed var(--rule-light); margin-top: 2px; color: var(--ink-2); }
.kernahan-extra strong { font-style: normal; color: var(--navy); }

/* ── Signature ── */
.firma-section { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px; }
.firma-box { border: 1px solid var(--rule-light); border-radius: 5px; padding: 6px 10px 5px; text-align: center; background: #FAFBFC; }
.firma-line { border-bottom: 1px solid var(--ink); min-height: 30px; margin: 0 auto 3px; width: 75%; }
.firma-label { font-size: 7pt; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; color: var(--ink-3); }

/* ── Page footer ── */
.footer { margin-top: 6px; padding-top: 4px; border-top: 1px solid var(--rule-light); font-size: 6.5pt; color: var(--ink-3); display: flex; justify-content: space-between; font-style: italic; }

/* ── Print ── */
@page { size: letter; margin: 5mm 7mm; }
@media print {
  html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
  .toolbar { display: none !important; }
  .doc { box-shadow: none !important; margin: 0 !important; padding: 5mm 7mm !important; width: 100% !important; min-height: 0 !important; }
  .p2 { page-break-before: always !important; break-before: page !important; border-top: none !important; margin-top: 0 !important; padding-top: 0 !important; }
  .section-card { break-inside: avoid; page-break-inside: avoid; }
  .narrative.xtall { min-height: 18px !important; }
  .add-row-btn { display: none !important; }
  .page-hdr { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  .kern-zone.active { fill: var(--navy) !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  [contenteditable="true"]:focus { background: transparent !important; }
}

/* ── PDF capture mode ── */
body.pdf-mode .toolbar { display: none !important; }
body.pdf-mode { font-size: 7.8pt !important; }
body.pdf-mode .doc { box-shadow: none !important; margin: 0 auto !important; padding: 5mm 7mm !important; width: 215.9mm !important; min-height: 0 !important; }
body.pdf-mode .p2 { border-top: none !important; margin-top: 0 !important; padding-top: 0 !important; }
body.pdf-mode .section-card { margin: 2px 0 !important; }
body.pdf-mode .section-card + .section-card { margin-top: 2px !important; }
body.pdf-mode .section-body { padding: 3px 8px !important; }
body.pdf-mode h3.section { padding: 3px 10px 3px 12px !important; font-size: 7pt !important; }
body.pdf-mode h4.sub { margin: 2px 0 1px !important; font-size: 7pt !important; }
body.pdf-mode .page-hdr { padding: 5px 10px !important; margin-bottom: 4px !important; }
body.pdf-mode .hdr-logo img { height: 32px !important; }
body.pdf-mode .hdr-center .inst-name { font-size: 11pt !important; }
body.pdf-mode .metrics-strip { padding: 2px 6px !important; margin: 1px 0 !important; gap: 2px 10px !important; }
body.pdf-mode .age-block { padding: 1px 6px !important; margin: 1px 0 !important; }
body.pdf-mode .fg-3, body.pdf-mode .fg-2, body.pdf-mode .fg-4, body.pdf-mode .fg-5 { gap: 2px 6px !important; }
body.pdf-mode .two-col, body.pdf-mode .three-col, body.pdf-mode .three-col-asym { gap: 3px 10px !important; }
body.pdf-mode .cl-inline { gap: 1px 8px !important; }
body.pdf-mode .checklist { gap: 1px 6px !important; }
body.pdf-mode .chk { padding: 0 !important; font-size: 7.3pt !important; }
body.pdf-mode .field-row { gap: 3px !important; }
body.pdf-mode .narrative.xtall { min-height: 14px !important; }
body.pdf-mode .narrative.tall  { min-height: 11px !important; }
body.pdf-mode .narrative       { min-height: 8px !important; padding: 2px 5px !important; }
body.pdf-mode .firma-section { margin-top: 4px !important; }
body.pdf-mode .firma-line { min-height: 22px !important; }
body.pdf-mode .add-row-btn { display: none !important; }
body.pdf-mode .footer { margin-top: 3px !important; padding-top: 2px !important; font-size: 6pt !important; }
body.pdf-mode table.clinical { font-size: 7pt !important; }
body.pdf-mode table.clinical td, body.pdf-mode table.clinical th { padding: 2px 5px !important; }
body.pdf-mode .kernahan-container { padding: 2px !important; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head><body>

<div class="toolbar">
  <div class="toolbar-brand">MUNAY <span>· Historia Clínica Quirúrgica</span></div>
  <button class="btn-save" onclick="guardarEnSistema(this)">&#128190; Guardar en sistema</button>
  <button class="btn-print" onclick="window.print()">🖨 Imprimir / PDF</button>
  <button class="btn-clear" onclick="resetForm()">✕ Limpiar</button>
</div>

<div class="doc">
  ${hdr('1', '')}

  <!-- ── IDENTIFICACIÓN ── -->
  <div class="section-card">
    <h3 class="section">Identificación <span class="badge badge-obl">OBL</span>
      <span style="font-size:6pt;font-weight:400;text-transform:none;letter-spacing:0;color:var(--ink-3);margin-left:4px">
        <span class="badge badge-obl">OBL</span> Obligatorio &nbsp;
        <span class="badge badge-edad">EDAD</span> Por edad &nbsp;
        <span class="badge badge-crit">CRIT</span> Crítico
      </span>
    </h3>
    <div class="section-body">
      <div class="fg-5" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">N.º HC:</span><span class="val" contenteditable="true">${hcCode}</span></div>
        <div class="field-row"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${surgDateFmt || todayStr}</span></div>
        <div class="field-row"><span class="lbl">Hora:</span><span class="val" contenteditable="true">${surgery?.admissionTime || ''}</span></div>
        <div class="field-row"><span class="lbl">Servicio:</span><span class="val" contenteditable="true">Qx FLAP/FLP</span></div>
        <div class="field-row"><span class="lbl">Médico:</span><span class="val xwide" contenteditable="true">${surgeon}</span></div>
      </div>
      <div class="fg-3" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Nombre:</span><span class="val xwide" contenteditable="true">${patientName}</span></div>
        <div class="field-row"><span class="lbl">Edad:</span><span class="val" contenteditable="true">${ageStr}</span></div>
        <div class="field-row"><span class="lbl">Sexo:</span><span class="val sm" contenteditable="true">${sex}</span></div>
      </div>
      <div class="fg-3" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Procedencia:</span><span class="val wide" contenteditable="true">${address}</span></div>
        <div class="field-row"><span class="lbl">Responsable:</span><span class="val wide" contenteditable="true">${guardian}</span></div>
        <div class="field-row"><span class="lbl">Tel.:</span><span class="val" contenteditable="true">${guardianPhone}</span></div>
      </div>
    </div>
  </div>

  <!-- ── 1 · CIRUGÍA ACTUAL ── -->
  <div class="section-card">
    <h3 class="section">1 · Cirugía Actual <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="three-col">
        <!-- Procedimiento programado -->
        <div>
          <h4 class="sub">Procedimiento programado</h4>
          <div class="two-col" style="gap:1px 8px">
            <div style="display:flex;flex-direction:column;gap:1px">
              <div class="chk${cx(isQueilPrim)}"><span class="box"></span>Queiloplastia prim.</div>
              <div class="chk${cx(isQueilSec)}"><span class="box"></span>Queiloplastia sec.</div>
              <div class="chk${cx(isPalatQx)}"><span class="box"></span>Palatoplastia</div>
              <div class="chk"><span class="box"></span>Rinoplastia prim.</div>
              <div class="chk"><span class="box"></span>Rinoplastia sec.</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:1px">
              <div class="chk"><span class="box"></span>Gingivoperioplastia</div>
              <div class="chk"><span class="box"></span>Injerto alveolar</div>
              <div class="chk"><span class="box"></span>Fistulorrafia</div>
              <div class="chk"><span class="box"></span>Revisión cicatricial</div>
              <div class="chk"><span class="box"></span>Colgajo faríngeo</div>
            </div>
          </div>
          <div class="chk" style="margin-top:3px"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true">${otroSurg}</span></div>
        </div>
        <!-- Lado afectado -->
        <div>
          <h4 class="sub">Lado afectado</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk${cx(isUnilateral)}"><span class="box"></span>Derecho</div>
            <div class="chk"><span class="box"></span>Izquierdo</div>
            <div class="chk${cx(isBilateral)}"><span class="box"></span>Bilateral</div>
            <div class="chk${cx(!isUnilateral && !isBilateral)}"><span class="box"></span>No aplica</div>
          </div>
        </div>
        <!-- Tipo de cirugía -->
        <div>
          <h4 class="sub">Tipo de cirugía</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk${cx(isQueilPrim || (isPalatQx && !isQueilSec))}"><span class="box"></span>Primaria</div>
            <div class="chk${cx(isQueilSec)}"><span class="box"></span>Secundaria</div>
            <div class="chk"><span class="box"></span>Reconstructiva</div>
            <div class="chk"><span class="box"></span>Correctiva</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 2 · EVOLUCIÓN PREVIA ── -->
  <div class="section-card">
    <h3 class="section">2 · Evolución Quirúrgica Previa
      <button type="button" class="add-row-btn" onclick="addRow('tbl-evol-qx',4)">+ fila</button>
    </h3>
    <div class="section-body" id="sec2">
      <table class="clinical" id="tbl-evol-qx">
        <thead><tr><th style="width:13%">Fecha</th><th style="width:36%">Procedimiento</th><th style="width:22%">Centro</th><th>Complicaciones</th></tr></thead>
        <tbody>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        </tbody>
      </table>
      <div class="cl-inline" style="margin-top:3px">
        <span class="lbl">Complicaciones previas:</span>
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>Dehiscencia</div>
        <div class="chk"><span class="box"></span>Fístula</div>
        <div class="chk"><span class="box"></span>Sangrado</div>
        <div class="chk"><span class="box"></span>Infección</div>
        <div class="chk"><span class="box"></span>Mala cicatrización</div>
        <div class="chk"><span class="box"></span>C. anestésicas</div>
        <div class="chk"><span class="box"></span>Reintervención</div>
        <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
      </div>
    </div>
  </div>

  <!-- ── 3 · NUTRICIÓN ── -->
  <div class="section-card">
    <h3 class="section">3 · Evaluación Nutricional Prequirúrgica <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <div class="metrics-strip">
            <div class="metric"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" value="${pesoVal}" oninput="calcIMC()"/><span class="unit">kg</span></div>
            <div class="metric"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" value="${tallaVal}" oninput="calcIMC()"/><span class="unit">cm</span></div>
            <div class="metric"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly/><span class="unit">kg/m²</span></div>
          </div>
          <div class="cl-inline" style="margin-top:3px">
            <span class="lbl">Estado:</span>
            <div class="chk"><span class="box"></span>Adecuado</div>
            <div class="chk"><span class="box"></span>Riesgo leve</div>
            <div class="chk"><span class="box"></span>Desnutrición mod.</div>
            <div class="chk"><span class="box"></span>Desnutrición sev.</div>
            <div class="chk"><span class="box"></span>Sobrepeso</div>
            <div class="chk"><span class="box"></span>Obesidad</div>
          </div>
        </div>
        <div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Signos alarma:</span>
            <div class="chk"><span class="box"></span>Palidez</div>
            <div class="chk"><span class="box"></span>Edema</div>
            <div class="chk"><span class="box"></span>Pérdida musc.</div>
            <div class="chk"><span class="box"></span>Deshidratación</div>
            <div class="chk"><span class="box"></span>Mala alimentación</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Hb disponible:</span>
            <div class="chk"><span class="box"></span>Sí</div>
            <div class="chk"><span class="box"></span>No</div>
            <div class="field-row" style="margin-left:6px"><span class="lbl">Resultado:</span><span class="val wide" contenteditable="true"></span></div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Apto nutricionalmente:</span>
            <div class="chk"><span class="box"></span>Sí</div>
            <div class="chk"><span class="box"></span>Requiere optimización</div>
            <div class="chk"><span class="box"></span>No apto</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 4 · INFECCIÓN ── -->
  <div class="section-card">
    <h3 class="section">4 · Evaluación Infecciosa</h3>
    <div class="section-body">
      <div class="cl-inline">
        <span class="lbl">Infecciones actuales:</span>
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>IRA</div>
        <div class="chk"><span class="box"></span>Otitis</div>
        <div class="chk"><span class="box"></span>Faringitis</div>
        <div class="chk"><span class="box"></span>Lesiones cutáneas</div>
        <div class="chk"><span class="box"></span>GI</div>
        <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
        <span class="lbl" style="margin-left:10px">Antibióticos recientes:</span>
        <div class="chk" id="chk-antibio-si"><span class="box"></span>Sí</div>
        <div class="chk"><span class="box"></span>No</div>
        <span class="lbl" style="margin-left:10px">Vacunación al día:</span>
        <div class="chk"><span class="box"></span>Sí</div>
        <div class="chk"><span class="box"></span>No</div>
        <div class="chk"><span class="box"></span>Desconoce</div>
      </div>
      <div id="antibio-desc" style="display:none;margin-top:3px">
        <div class="field-row"><span class="lbl">Describir antibiótico:</span><span class="val full" contenteditable="true"></span></div>
      </div>
    </div>
  </div>

  <!-- ── 5 · EVALUACIÓN FLAP ── -->
  <div class="section-card">
    <h3 class="section">5 · Evaluación Específica FLAP <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="three-col">
        <!-- LABIO + ALVÉOLO -->
        <div>
          <h4 class="sub" style="margin-top:0">Labio</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <div class="chk${cx(isUnilateral)}"><span class="box"></span>Unilateral</div>
            <div class="chk${cx(isBilateral)}"><span class="box"></span>Bilateral</div>
            <div class="chk${cx(isFLAP)}"><span class="box"></span>Completa</div>
            <div class="chk${cx(!isFLAP && isUnilateral)}"><span class="box"></span>Incompleta</div>
          </div>
          <h4 class="sub">Hallazgos labio</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
            <div class="chk"><span class="box"></span>Asimetría nasal</div>
            <div class="chk"><span class="box"></span>Retracción</div>
            <div class="chk"><span class="box"></span>Dehiscencia</div>
            <div class="chk"><span class="box"></span>Adherencias</div>
            <div class="chk"><span class="box"></span>Buena evolución</div>
          </div>
          <h4 class="sub" style="margin-top:4px">Alvéolo</h4>
          <div class="cl-inline">
            <div class="chk"><span class="box"></span>Comprometido</div>
            <div class="chk"><span class="box"></span>No comprometido</div>
          </div>
        </div>
        <!-- PALADAR + NARIZ -->
        <div>
          <h4 class="sub" style="margin-top:0">Paladar</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk${cx(isPaladar)}"><span class="box"></span>Fisura residual</div>
            <div class="chk"><span class="box"></span>Fístula</div>
            <div class="chk"><span class="box"></span>Paladar corto</div>
            <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
            <div class="chk"><span class="box"></span>Cicatriz tensa</div>
          </div>
          <h4 class="sub" style="margin-top:4px">Nariz</h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk"><span class="box"></span>Colapso nasal</div>
            <div class="chk"><span class="box"></span>Asimetría</div>
            <div class="chk"><span class="box"></span>Punta deprimida</div>
            <div class="chk"><span class="box"></span>Desviación septal</div>
          </div>
        </div>
        <!-- DENTICIÓN -->
        <div>
          <h4 class="sub" style="margin-top:0">Dentición / Ortodoncia <span class="badge badge-edad">EDAD</span></h4>
          <div style="display:flex;flex-direction:column;gap:1px">
            <div class="chk"><span class="box"></span>Caries</div>
            <div class="chk"><span class="box"></span>Mala higiene</div>
            <div class="chk"><span class="box"></span>Apiñamiento</div>
            <div class="chk"><span class="box"></span>Expansión maxilar</div>
            <div class="chk"><span class="box"></span>Orto. en curso</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>

  <!-- ═══════════════ PÁGINA 2 ═══════════════ -->
  <div class="p2">
    ${hdr('2', patientName)}
  </div>

  <!-- ── 6 · EXAMEN FÍSICO ── -->
  <div class="section-card" id="sec6">
    <h3 class="section">6 · Examen Físico Quirúrgico <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline" style="margin-bottom:3px">
        <span class="lbl">Estado general:</span>
        <div class="chk"><span class="box"></span>Bueno</div>
        <div class="chk"><span class="box"></span>Regular</div>
        <div class="chk"><span class="box"></span>Malo</div>
        <div class="metrics-strip" style="margin-left:10px;flex:none">
          <div class="metric"><span class="lbl">FC:</span><span class="val sm" contenteditable="true"></span><span class="unit">lpm</span></div>
          <div class="metric"><span class="lbl">FR:</span><span class="val sm" contenteditable="true"></span><span class="unit">rpm</span></div>
          <div class="metric"><span class="lbl">SatO₂:</span><span class="val sm" contenteditable="true"></span><span class="unit">%</span></div>
          <div class="metric"><span class="lbl">Temp:</span><span class="val sm" contenteditable="true"></span><span class="unit">°C</span></div>
          <div class="metric"><span class="lbl">PA:</span><span class="val" contenteditable="true"></span><span class="unit">mmHg</span></div>
        </div>
      </div>
      <div class="narrative xtall" contenteditable="true"></div>
    </div>
  </div>

  <!-- ── 7 · POR EDAD ── -->
  <div class="section-card" id="sec7">
    <h3 class="section">7 · Evaluación según Edad <span class="badge badge-edad">EDAD</span></h3>
    <div class="section-body">
      ${showRN ? `<div class="age-block">
        <span class="age-label">RN / Lactantes</span>
        <span class="lbl">Alimentación:</span>
        <div class="chk"><span class="box"></span>L. materna</div>
        <div class="chk"><span class="box"></span>Fórmula especial</div>
        <div class="chk"><span class="box"></span>Dif. succión</div>
        <div class="chk"><span class="box"></span>Regurg. nasal</div>
        <span class="lbl" style="margin-left:8px">Peso apto para Qx:</span>
        <div class="chk"><span class="box"></span>Sí</div>
        <div class="chk"><span class="box"></span>No</div>
      </div>` : ''}
      ${showPreescolar ? `<div class="age-block">
        <span class="age-label">Preescolar / Escolar</span>
        <span class="lbl">Lenguaje:</span>
        <div class="chk"><span class="box"></span>Adecuado</div>
        <div class="chk"><span class="box"></span>Hipernasalidad</div>
        <div class="chk"><span class="box"></span>Dif. articulatoria</div>
        <span class="lbl" style="margin-left:8px">Conducta:</span>
        <div class="chk"><span class="box"></span>Colaborador</div>
        <div class="chk"><span class="box"></span>Ansioso</div>
        <div class="chk"><span class="box"></span>Poco colaborador</div>
      </div>` : ''}
      ${showAdolescente ? `<div class="age-block">
        <span class="age-label">Adolescentes</span>
        <span class="lbl">Aspecto psicosocial:</span>
        <div class="chk"><span class="box"></span>Buena adaptación</div>
        <div class="chk"><span class="box"></span>Ansiedad estética</div>
        <div class="chk"><span class="box"></span>Baja autoestima</div>
        <div class="chk"><span class="box"></span>Bullying</div>
      </div>` : ''}
    </div>
  </div>

  <!-- ── 8 · DOC. CLÍNICA + IMPRESIÓN DIAGNÓSTICA ── -->
  <div class="section-card">
    <h3 class="section">8 · Doc. Clínica &nbsp;·&nbsp; Impresión Diagnóstica <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col" style="gap:4px 12px">
        <div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Adjuntos:</span>
            <div class="chk"><span class="box"></span>Labs.</div>
            <div class="chk"><span class="box"></span>Rx</div>
            <div class="chk"><span class="box"></span>TC</div>
            <div class="chk"><span class="box"></span>Audiometría</div>
            <div class="chk"><span class="box"></span>Interconsultas</div>
          </div>
          <h4 class="sub">Diagnóstico principal</h4>
          <div class="narrative" contenteditable="true">${diagDisplay}</div>
        </div>
        <div>
          <h4 class="sub">Diagnósticos asociados</h4>
          <div class="narrative tall" contenteditable="true"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 9 · CONDUCTA ── -->
  <div class="section-card">
    <h3 class="section">9 · Conducta <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline">
        <div class="chk"><span class="box"></span>Apto para cirugía</div>
        <div class="chk"><span class="box"></span>Requiere optim. nutricional</div>
        <div class="chk"><span class="box"></span>Requiere valoración anestésica adicional</div>
        <div class="chk"><span class="box"></span>Reprogramar cirugía</div>
        <div class="chk"><span class="box"></span>Suspender temporalmente</div>
      </div>
    </div>
  </div>

  <!-- ── KERNAHAN ── -->
  <div class="section-card">
    <h3 class="section">Anexo 1 · Clasificación de Kernahan — Esquema Anatómico FLAP</h3>
    <div class="section-body">
      <div class="kernahan-container">
        <div class="kernahan-legend left">
          <strong>1:</strong> Fosa nasal derecha<br>
          <strong>2.1:</strong> Labio 1/3 &nbsp;<strong>2.2:</strong> 2/3 &nbsp;<strong>2.3:</strong> 3/3<br>
          <strong>3:</strong> Alvéolo derecho<br>
          <strong>4:</strong> Paladar óseo ant. derecho
        </div>
        <svg class="kernahan-svg" viewBox="0 0 220 280" width="148" height="188" xmlns="http://www.w3.org/2000/svg">
          <polygon class="kern-zone" data-zone="1" points="55,5 95,5 92,35 60,35"/><text class="kern-num" x="75" y="22">1</text>
          <rect class="kern-zone" data-zone="2.1" x="60" y="35" width="32" height="28"/><text class="kern-num" x="76" y="51">2.1</text>
          <rect class="kern-zone" data-zone="2.2" x="60" y="63" width="32" height="28"/><text class="kern-num" x="76" y="79">2.2</text>
          <rect class="kern-zone" data-zone="2.3" x="60" y="91" width="32" height="28"/><text class="kern-num" x="76" y="107">2.3</text>
          <polygon class="kern-zone" data-zone="3" points="60,119 92,119 90,142 70,142"/><text class="kern-num" x="76" y="132">3</text>
          <polygon class="kern-zone" data-zone="4" points="70,142 105,142 105,165 80,165"/><text class="kern-num" x="88" y="155">4</text>
          <polygon class="kern-zone" data-zone="5" points="125,5 165,5 160,35 128,35"/><text class="kern-num" x="145" y="22">5</text>
          <rect class="kern-zone" data-zone="6.1" x="128" y="35" width="32" height="28"/><text class="kern-num" x="144" y="51">6.1</text>
          <rect class="kern-zone" data-zone="6.2" x="128" y="63" width="32" height="28"/><text class="kern-num" x="144" y="79">6.2</text>
          <rect class="kern-zone" data-zone="6.3" x="128" y="91" width="32" height="28"/><text class="kern-num" x="144" y="107">6.3</text>
          <polygon class="kern-zone" data-zone="7" points="128,119 160,119 150,142 130,142"/><text class="kern-num" x="144" y="132">7</text>
          <polygon class="kern-zone" data-zone="8" points="115,142 150,142 140,165 115,165"/><text class="kern-num" x="132" y="155">8</text>
          <rect class="kern-zone" data-zone="9" x="80" y="165" width="60" height="32"/><text class="kern-num" x="110" y="183">9</text>
          <rect class="kern-zone" data-zone="10" x="80" y="197" width="60" height="32"/><text class="kern-num" x="110" y="215">10</text>
          <rect class="kern-zone" data-zone="11" x="80" y="229" width="60" height="32"/><text class="kern-num" x="110" y="247">11</text>
        </svg>
        <div class="kernahan-legend right">
          <strong>5:</strong> Fosa nasal izquierda<br>
          <strong>6.1:</strong> Labio 1/3 &nbsp;<strong>6.2:</strong> 2/3 &nbsp;<strong>6.3:</strong> 3/3<br>
          <strong>7:</strong> Alvéolo izquierdo<br>
          <strong>8:</strong> Paladar óseo ant. izquierdo
        </div>
        <div class="kernahan-extra">
          <strong>9:</strong> Paladar óseo post. parcial &nbsp;·&nbsp; <strong>9+10:</strong> total &nbsp;·&nbsp; <strong>11:</strong> Paladar blando / fisura submucosa
          <span style="display:block;margin-top:1px;font-size:5.8pt;color:var(--ink-3)">Haga clic en cada zona para marcar las áreas comprometidas</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 10 · FIRMA ── -->
  <div class="section-card">
    <h3 class="section">10 · Firma y Validación</h3>
    <div class="section-body">
      <div class="firma-section" style="grid-template-columns:1fr;max-width:260px">
        <div class="firma-box">
          <div class="firma-line"></div>
          <div class="firma-label" contenteditable="true"></div>
          <div style="font-size:6.5pt;color:var(--ink-3);margin-top:2px">Firma y Sello del Médico &nbsp;·&nbsp; Matrícula:&nbsp;<span contenteditable="true" style="display:inline-block;min-width:26mm;border-bottom:1px solid var(--rule)"></span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 2 de 2</span>
  </div>
</div>

<script>
var PATIENT_NAME = ${JSON.stringify(patientName)};
var HC_CODE = ${JSON.stringify(hcCode)};
var SURGERY_ID = '${surgery?.id ?? ''}';
var PATIENT_ID = '${surgery?.patientId ?? ''}';

/* ── SAVE TO SYSTEM ── */
async function guardarEnSistema(btn) {
  if (!window.opener || window.opener.closed) {
    alert('La ventana principal ya no está disponible. Imprima el formulario para conservarlo.');
    return;
  }
  btn.disabled = true;
  btn.textContent = '⏳ Generando PDF...';
  try {
    document.body.classList.add('pdf-mode');
    await new Promise(function(r) { requestAnimationFrame(function() { setTimeout(r, 80); }); });
    var SCALE = 1.5;
    var docEl = document.querySelector('.doc');
    var p2El  = docEl.querySelector('.p2');
    var canvas = await html2canvas(docEl, {
      scale: SCALE, useCORS: true, allowTaint: true, backgroundColor: '#ffffff', logging: false,
    });
    var docRect = docEl.getBoundingClientRect();
    var splitPx = p2El
      ? Math.round((p2El.getBoundingClientRect().top - docRect.top) * SCALE)
      : Math.round(canvas.height / 2);
    splitPx = Math.max(10, Math.min(splitPx, canvas.height - 10));
    var PDF    = window.jspdf.jsPDF;
    var pdfDoc = new PDF({ unit: 'mm', format: 'letter', orientation: 'portrait' });
    var pW     = pdfDoc.internal.pageSize.getWidth();
    function makeSlice(startPx, endPx) {
      var h   = endPx - startPx;
      var tmp = document.createElement('canvas');
      tmp.width  = canvas.width;
      tmp.height = h;
      tmp.getContext('2d').drawImage(canvas, 0, startPx, canvas.width, h, 0, 0, canvas.width, h);
      return { dataUrl: tmp.toDataURL('image/jpeg', 0.92), h: h };
    }
    var p1 = makeSlice(0, splitPx);
    pdfDoc.addImage(p1.dataUrl, 'JPEG', 0, 0, pW, pW * (p1.h / canvas.width), '', 'FAST');
    pdfDoc.addPage();
    var p2 = makeSlice(splitPx, canvas.height);
    pdfDoc.addImage(p2.dataUrl, 'JPEG', 0, 0, pW, pW * (p2.h / canvas.width), '', 'FAST');
    window.opener.postMessage({
      type: 'MUNAY_SAVE_SURGERY_DOC', docType: 'historia_quirurgica',
      surgeryId: SURGERY_ID, patientId: PATIENT_ID, savedAt: new Date().toISOString(),
      pdfBase64: pdfDoc.output('datauristring'),
    }, '*');
    btn.textContent = '✓ Guardado';
    btn.style.background = '#276749';
  } catch (err) {
    btn.disabled = false;
    btn.textContent = '💾 Guardar en sistema';
    alert('Error al generar el PDF: ' + (err.message || String(err)));
  } finally {
    document.body.classList.remove('pdf-mode');
  }
}

/* ── CHECKBOXES ── */
document.querySelectorAll('.chk').forEach(function(chk) {
  chk.addEventListener('click', function(e) {
    if (e.target.classList.contains('other-line')) return;
    if (e.target.isContentEditable) return;
    chk.classList.toggle('checked');
  });
});

/* ── Antibióticos recientes: mostrar descripción si Sí ── */
(function() {
  var antibioSi = document.getElementById('chk-antibio-si');
  var antibioDesc = document.getElementById('antibio-desc');
  if (antibioSi && antibioDesc) {
    antibioSi.addEventListener('click', function() {
      antibioDesc.style.display = antibioSi.classList.contains('checked') ? 'block' : 'none';
    });
  }
})();

/* ── KERNAHAN ── */
document.querySelectorAll('.kern-zone').forEach(function(zone) {
  zone.addEventListener('click', function() {
    zone.classList.toggle('active');
    var num = zone.nextElementSibling;
    if (num && num.classList.contains('kern-num')) {
      num.style.fill = zone.classList.contains('active') ? 'white' : '';
    }
  });
});

/* ── PRINT: expand all section bodies ── */
window.onbeforeprint = function() {
  document.querySelectorAll('.section-body').forEach(function(b) {
    if (b.style.display === 'none') {
      b.style.display = '';
      b.dataset.wasHidden = '1';
    }
  });
};
window.onafterprint = function() {
  document.querySelectorAll('.section-body[data-was-hidden]').forEach(function(b) {
    b.style.display = 'none';
    delete b.dataset.wasHidden;
  });
};

/* ── IMC ── */
function calcIMC() {
  var peso = parseFloat(document.getElementById('peso-nut').value);
  var tallaCm = parseFloat(document.getElementById('talla-nut').value);
  var imcEl = document.getElementById('imc-nut');
  if (peso > 0 && tallaCm > 0) {
    var m = tallaCm / 100;
    imcEl.value = (peso / (m * m)).toFixed(2);
  } else { imcEl.value = ''; }
}
calcIMC();

/* ── TABLE ROWS ── */
function addRow(tableId, numCols) {
  var tabla = document.getElementById(tableId);
  if (!tabla) return;
  var tbody = tabla.querySelector('tbody');
  var tr = document.createElement('tr');
  for (var i = 0; i < numCols; i++) {
    var td = document.createElement('td');
    td.className = 'fillable';
    td.setAttribute('contenteditable', 'true');
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

/* ── KERNAHAN INIT ── */
(function initKernahan() {
  var dx = ${JSON.stringify(diagRaw)};
  function mark(zoneId) {
    var zone = document.querySelector('[data-zone="' + zoneId + '"]');
    if (!zone) return;
    zone.classList.add('active');
    var num = zone.nextElementSibling;
    if (num && num.classList.contains('kern-num')) num.style.fill = 'white';
  }
  if (dx.includes('FLAP') || dx.includes('BILATERAL') || dx.includes('FLB')) {
    ['2.1','2.2','2.3','6.1','6.2','6.3'].forEach(mark);
    if (dx.includes('FLAP')) ['1','5'].forEach(mark);
  } else if (dx.includes('FL') || dx.includes('LABIO')) {
    ['2.1','2.2','2.3'].forEach(mark);
  }
  if (dx.includes('FP') || dx.includes('PALAT')) ['9','10','11'].forEach(mark);
})();

/* ── RESET ── */
function resetForm() {
  if (!confirm('¿Limpiar todo el formulario?')) return;
  document.querySelectorAll('.chk.checked').forEach(function(c) { c.classList.remove('checked'); });
  document.querySelectorAll('[contenteditable="true"]').forEach(function(el) { el.textContent = ''; });
  document.querySelectorAll('.val-input').forEach(function(el) { el.value = ''; });
  document.querySelectorAll('.kern-zone.active').forEach(function(z) {
    z.classList.remove('active');
    var num = z.nextElementSibling;
    if (num && num.classList.contains('kern-num')) num.style.fill = '';
  });
}

/* ── COMPACT PRINT ── */
function compactPrint() {
  function collectItems(root, items) {
    root.querySelectorAll('.chk.checked').forEach(function(chk) {
      var cl = chk.cloneNode(true);
      var other = cl.querySelector('.other-line');
      var otherTxt = other ? other.textContent.trim() : '';
      cl.querySelectorAll('.box,.other-line').forEach(function(s) { s.remove(); });
      var txt = cl.textContent.trim();
      if (otherTxt) txt += ' ' + otherTxt;
      if (txt) items.push({type:'check', text: txt});
    });
    root.querySelectorAll('.field-row').forEach(function(row) {
      var lbl = row.querySelector('.lbl');
      var val = row.querySelector('[contenteditable="true"]');
      if (lbl && val && val.textContent.trim()) {
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: val.textContent.trim()});
      }
    });
    root.querySelectorAll('.metric').forEach(function(m) {
      var lbl = m.querySelector('.lbl');
      var inp = m.querySelector('input.val-input');
      var ve  = m.querySelector('[contenteditable="true"]');
      var unitEl = m.querySelector('.unit');
      var unit = unitEl ? ' ' + unitEl.textContent.trim() : '';
      if (lbl && inp && inp.value.trim())
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: inp.value + unit});
      if (lbl && ve && ve.textContent.trim())
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: ve.textContent.trim() + unit});
    });
    root.querySelectorAll('.narrative').forEach(function(n) {
      var txt = n.textContent.trim();
      if (txt && txt.length > 5) items.push({type:'narrative', text: txt});
    });
    var tbls = Array.from(root.querySelectorAll('table:not(svg table)'));
    tbls.forEach(function(tbl) {
      if (tbl.closest('svg')) return;
      var hdrs = Array.from(tbl.querySelectorAll('thead th')).map(function(th) { return th.textContent.trim(); });
      var rows = [];
      tbl.querySelectorAll('tbody tr').forEach(function(tr) {
        var cells = Array.from(tr.querySelectorAll('td')).map(function(td) { return td.textContent.trim(); });
        if (cells.some(function(c) { return c; })) rows.push(cells);
      });
      if (rows.length) items.push({type:'table', headers: hdrs, rows: rows});
    });
  }

  var sections = [];
  var activeZones = Array.from(document.querySelectorAll('.kern-zone.active')).map(function(z) { return z.dataset.zone; });
  if (activeZones.length) {
    sections.push({title: 'Diagrama de Kernahan', items: [{type:'field', label: 'Zonas activas', value: activeZones.join(', ')}]});
  }
  document.querySelectorAll('.section-card').forEach(function(card) {
    var h3 = card.querySelector('h3.section');
    if (!h3) return;
    var cl = h3.cloneNode(true);
    cl.querySelectorAll('span,button').forEach(function(s) { s.remove(); });
    var title = cl.textContent.trim();
    var items = [];
    var body = card.querySelector('.section-body') || card;
    collectItems(body, items);
    if (items.length) sections.push({title: title, items: items});
  });

  if (!sections.length) { alert('No hay datos positivos registrados.'); return; }

  var body = '';
  sections.forEach(function(sec) {
    body += '<div class="sh">' + sec.title + '</div><div class="sb">';
    sec.items.forEach(function(it) {
      if (it.type === 'check') {
        body += '<div class="it ck"><span class="tk">&#10003;</span><span>' + it.text + '</span></div>';
      } else if (it.type === 'field') {
        body += '<div class="it fd"><span class="fl">' + it.label + '</span><span class="fv">' + it.value + '</span></div>';
      } else if (it.type === 'narrative') {
        body += '<div class="it nv">' + it.text + '</div>';
      } else if (it.type === 'table') {
        body += '<table class="ct"><thead><tr>' + it.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>';
        it.rows.forEach(function(r) { body += '<tr>' + r.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; });
        body += '</tbody></table>';
      }
    });
    body += '</div>';
  });

  var css = 'body{font-family:Arial,sans-serif;font-size:9pt;color:#1a1a2e;background:#f0f2f5;margin:0;padding:14px}' +
    '.hdr{background:#163A5F;color:#fff;padding:8px 16px;border-radius:5px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}' +
    '.hdr h1{margin:0;font-size:10.5pt;letter-spacing:.2px}.hdr p{margin:0;font-size:7.5pt;opacity:.75;white-space:nowrap}' +
    '.tb{text-align:center;margin-bottom:10px}.tb button{background:#B7791F;color:#fff;border:none;padding:5px 16px;font-size:9pt;font-weight:700;cursor:pointer;border-radius:3px}' +
    '.sh{background:#163A5F;color:#fff;padding:3px 10px;font-size:8pt;font-weight:700;letter-spacing:.3px;border-left:4px solid #B7791F;margin-top:9px;border-radius:0 3px 3px 0}' +
    '.sb{padding:4px 8px 5px;background:#fff;border:1px solid #e2e4e8;border-top:none;border-radius:0 0 3px 3px}' +
    '.it{padding:2px 0;display:flex;align-items:baseline;gap:5px;border-bottom:1px solid #f3f4f6}.it:last-child{border-bottom:none}' +
    '.ck .tk{color:#B7791F;font-weight:900;font-size:10pt;flex-shrink:0;line-height:1}' +
    '.fd .fl{font-size:7pt;font-weight:700;color:#163A5F;text-transform:uppercase;letter-spacing:.3px;white-space:nowrap;flex-shrink:0}' +
    '.fd .fv{font-family:"Courier New",monospace;font-size:9pt;color:#111;font-weight:600}' +
    '.nv{border-left:3px solid #2F5D8A;padding:2px 0 2px 8px;font-style:italic;color:#374151;font-size:8.5pt;width:100%;box-sizing:border-box}' +
    '.ct{width:100%;border-collapse:collapse;font-size:7.5pt;margin:3px 0}.ct th{background:#e5e7eb;font-weight:700;text-align:left;padding:2px 5px;border:1px solid #d1d5db}.ct td{padding:2px 5px;border:1px solid #e5e7eb}' +
    '@media print{body{background:#fff;padding:0}.tb{display:none}.sh{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';

  var pName = (typeof PATIENT_NAME !== 'undefined') ? PATIENT_NAME : '';
  var pCode = (typeof HC_CODE !== 'undefined') ? HC_CODE : '';
  var dateStr = new Date().toLocaleDateString('es-BO');
  var titleStr = 'Historia Cl&#237;nica Quir&#250;rgica &#8212; Vista Compacta' + (pName ? ' &middot; ' + pName : '') + (pCode ? ' (' + pCode + ')' : '');

  var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>HC-QX Compacta</title><style>' + css + '</style></head><body>' +
    '<div class="hdr"><h1>' + titleStr + '</h1><p>MUNAY &middot; ' + dateStr + '</p></div>' +
    '<div class="tb"><button onclick="window.print()">Imprimir / Guardar PDF</button></div>' +
    body + '</body></html>';

  var w = window.open('', '_blank', 'width=900,height=850');
  w.document.write(html);
  w.document.close();
  w.focus();

}
</script>
</body></html>`;

  const win = window.open('', '_blank', 'width=960,height=920');
  win.document.write(html);
  win.document.close();
  win.focus();
}
