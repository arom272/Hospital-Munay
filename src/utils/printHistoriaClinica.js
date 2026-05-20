import logo2Img from '../../LOGO 2.jpg';
import { getTypeInfo } from './patientTypes';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';

async function getLogoBase64(src) {
  try {
    const r    = await fetch(src);
    const blob = await r.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch { return null; }
}

function calcAge(bd) {
  if (!bd) return null;
  const birth = parseISO(bd);
  if (!isValid(birth)) return null;
  const now   = new Date();
  const years = differenceInYears(now, birth);
  const ay    = new Date(birth.getFullYear() + years, birth.getMonth(), birth.getDate());
  const months = differenceInMonths(now, ay);
  const am    = new Date(ay.getFullYear(), ay.getMonth() + months, ay.getDate());
  const days  = differenceInDays(now, am);
  return { years, months, days };
}

function fmtDate(iso) {
  if (!iso) return '';
  try {
    const d = parseISO(iso);
    if (!isValid(d)) return iso;
    return d.getDate().toString().padStart(2,'0') + '/' +
           (d.getMonth()+1).toString().padStart(2,'0') + '/' + d.getFullYear();
  } catch { return iso; }
}

export async function printHistoriaClinica(patient) {
  const logo2         = await getLogoBase64(logo2Img);
  const typeInfo      = getTypeInfo(patient?.patientType);
  const hcCode        = patient?.patientCode ? `${typeInfo.label}-${patient.patientCode}` : '';
  const patientName   = patient?.fullName     || '';
  const birthDateFmt  = fmtDate(patient?.birthDate || '');
  const ageObj        = calcAge(patient?.birthDate);
  const ageStr        = ageObj ? (() => {
    const p = [];
    if (ageObj.years  > 0) p.push(ageObj.years  + ' a');
    if (ageObj.months > 0) p.push(ageObj.months + ' m');
    if (p.length === 0)    p.push(ageObj.days   + ' d');
    return p.join(' ');
  })() : '';

  const yrAge          = ageObj ? ageObj.years : -1;
  const showRN         = yrAge < 0 || yrAge < 2;
  const showPreescolar = yrAge < 0 || (yrAge >= 2 && yrAge <= 11);
  const showAdolescente= yrAge < 0 || (yrAge >= 12 && yrAge <= 18);

  const sex           = patient?.sex === 'masculino' ? 'MASCULINO' : patient?.sex === 'femenino' ? 'FEMENINO' : '';
  const address       = patient?.address      || '';
  const guardian      = patient?.guardian     || '';
  const guardianPhone = patient?.guardianPhone|| '';
  const diagRaw       = patient?.diagnosis    || '';
  const diagUp        = diagRaw.toUpperCase();

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
        <div class="doc-title">Historia Clínica Integral — Fisura Labio Alveolo Palatina</div>
      </div>
      <div class="hdr-right">
        ${name ? `<div class="patient-name">${name}</div>` : ''}
        <div class="hc-code">${hcCode || 'HC ______'}</div>
        <div>Hoja ${sheet} / 2 · ${todayStr}</div>
      </div>
    </div>`;

  const html = `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Historia Clínica — ${patientName}</title>
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

/* ── Document wrapper (single sheet on screen) ── */
.doc { width: 215.9mm; min-height: 279.4mm; margin: 12px auto; padding: 0 9mm 7mm; background: var(--white); box-shadow: 0 2px 16px rgba(0,0,0,.10); }

/* ── Page 2 separator (screen) / page-break trigger (print) ── */
.p2 { margin-top: 24px; padding-top: 14px; border-top: 3px dashed var(--rule-light); }

/* ── Toolbar ── */
.toolbar { position: sticky; top: 0; z-index: 100; background: var(--white); border-bottom: 2px solid var(--navy); padding: 7px 16px; display: flex; align-items: center; gap: 10px; box-shadow: 0 2px 8px rgba(22,58,95,.10); print-color-adjust: exact; }
.toolbar-brand { font-size: 9.5pt; font-weight: 700; color: var(--navy); letter-spacing: .3px; flex: 1; }
.toolbar-brand span { font-weight: 400; color: var(--ink-2); font-size: 8.5pt; }
.toolbar button { border: none; padding: 5px 13px; font-family: inherit; font-size: 8.5pt; font-weight: 600; cursor: pointer; border-radius: 5px; transition: opacity .15s; }
.btn-print { background: var(--navy); color: #fff; }
.btn-save  { background: var(--success); color: #fff; }
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
.badge-clin { background: #276749; color: #fff; }
.legend { display: inline-flex; gap: 8px; font-size: 6.5pt; color: var(--ink-3); margin-left: 8px; font-weight: 400; text-transform: none; letter-spacing: 0; }
.legend-item { display: inline-flex; align-items: center; gap: 3px; }

/* ── Section card ── */
.section-card { margin: 4px 0; border: 1px solid var(--rule-light); border-radius: 6px; overflow: hidden; }
.section-card + .section-card { margin-top: 4px; }
h3.section { background: var(--navy-soft); color: var(--navy); font-size: 8pt; font-weight: 700; letter-spacing: .4px; text-transform: uppercase; padding: 4px 10px 4px 13px; border-left: 4px solid var(--navy); display: flex; align-items: center; gap: 6px; }
.section-body { padding: 5px 10px; }

/* Sub-headings */
h4.sub { font-size: 7.5pt; font-weight: 600; color: var(--navy-mid); text-transform: uppercase; letter-spacing: .3px; margin: 3px 0 2px; border-bottom: 1px solid var(--rule-light); padding-bottom: 1px; }

/* ── Field grid ── */
.fg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px 8px; }
.fg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 8px; }
.fg-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px 8px; }
.fg-auto { display: flex; flex-wrap: wrap; gap: 3px 10px; align-items: baseline; }
.field { display: flex; flex-direction: column; gap: 1px; }
.field-row { display: flex; align-items: baseline; gap: 4px; }
.lbl { font-size: 6.8pt; font-weight: 600; color: var(--ink-2); text-transform: uppercase; letter-spacing: .3px; white-space: nowrap; }
.val { border: none; border-bottom: 1px solid var(--rule); min-width: 60px; min-height: 13px; padding: 0px 3px; font-family: 'Calibri', 'Gill Sans MT', 'Trebuchet MS', Arial, sans-serif; font-size: 8.5pt; font-weight: 600; color: var(--navy); outline: none; flex: 1; }
.val.wide { min-width: 110px; }
.val.xwide { min-width: 180px; }
.val.full  { min-width: 100%; width: 100%; }
.val.sm    { min-width: 38px; }
[contenteditable="true"] { outline: none; cursor: text; }
[contenteditable="true"]:focus { background: #EBF8FF; }

/* ── Two-col layout ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; }
.two-col-3-2 { display: grid; grid-template-columns: 3fr 2fr; gap: 4px 12px; }

/* ── Checkboxes ── */
.checklist { display: grid; gap: 1px 8px; margin: 2px 0; }
.cl-2 { grid-template-columns: repeat(2, 1fr); }
.cl-3 { grid-template-columns: repeat(3, 1fr); }
.cl-4 { grid-template-columns: repeat(4, 1fr); }
.cl-5 { grid-template-columns: repeat(5, 1fr); }
.cl-auto { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
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
.narrative.xtall { min-height: 22px; }

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

/* ── Cesarea motivo ── */
.cesarea-motivo { display: none; flex-wrap: wrap; gap: 2px 8px; margin: 3px 0 0 16px; padding: 4px 8px; background: var(--amber-bg); border-left: 3px solid var(--amber); border-radius: 0 4px 4px 0; align-items: center; }

/* ── Signature ── */
.firma-section { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px; }
.firma-box { border: 1px solid var(--rule-light); border-radius: 5px; padding: 6px 10px 5px; text-align: center; background: #FAFBFC; }
.firma-line { border-bottom: 1px solid var(--ink); min-height: 30px; margin: 0 auto 3px; width: 75%; }
.firma-label { font-size: 7pt; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; color: var(--ink-3); }

/* ── Page footer ── */
.footer { margin-top: 6px; padding-top: 4px; border-top: 1px solid var(--rule-light); font-size: 6.5pt; color: var(--ink-3); display: flex; justify-content: space-between; font-style: italic; }

/* ── Print ── */
@page { size: letter; margin: 8mm 9mm 7mm; }
@media print {
  html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
  .toolbar { display: none !important; }
  /* Single wrapper: no fixed height, let content flow naturally */
  .doc {
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    min-height: 0 !important;
  }
  /* Page 2 marker: force physical page break, hide visual separator */
  .p2 {
    page-break-before: always !important;
    break-before: page !important;
    border-top: none !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  .section-card { break-inside: avoid; page-break-inside: avoid; }
  .narrative.xtall { min-height: 18px !important; }
  .narrative.tall  { min-height: 14px !important; }
  .narrative       { min-height: 10px !important; }
  [contenteditable="true"]:focus { background: transparent !important; }
  .add-row-btn { display: none !important; }
  .page-hdr { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  .footer { margin-top: 4px !important; }
}
</style></head><body>

<div class="toolbar">
  <div class="toolbar-brand">MUNAY <span>· Historia Clínica Integral FLAP</span></div>
  <button class="btn-print" onclick="window.print()">🖨 Imprimir / PDF</button>
  <button class="btn-save" id="btn-guardar" onclick="saveToFirestore(this)">💾 Guardar en sistema</button>
  <button class="btn-clear" onclick="resetForm()">✕ Limpiar</button>
</div>

<div class="doc">
  ${hdr('1', '')}

  <!-- Sección 1 -->
  <div class="section-card">
    <h3 class="section">1 · Identificación y Datos Administrativos
      <span class="legend">
        <span class="legend-item"><span class="badge badge-obl">OBL</span> Obligatorio</span>
        <span class="legend-item"><span class="badge badge-edad">EDAD</span> Por edad</span>
        <span class="legend-item"><span class="badge badge-clin">CLÍN</span> Pertinencia clínica</span>
      </span>
    </h3>
    <div class="section-body">
      <div class="fg-4" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${todayStr}</span></div>
        <div class="field-row"><span class="lbl">Hora:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Sexo:</span><span class="val sm" contenteditable="true">${sex}</span></div>
        <div class="field-row"><span class="lbl">Edad:</span><span class="val" contenteditable="true">${ageStr}</span></div>
      </div>
      <div class="fg-2" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Nombre completo:</span><span class="val xwide" contenteditable="true">${patientName}</span></div>
        <div class="fg-2">
          <div class="field-row"><span class="lbl">F. Nacimiento:</span><span class="val" contenteditable="true">${birthDateFmt}</span></div>
          <div class="field-row"><span class="lbl">Lugar de nac.:</span><span class="val" contenteditable="true"></span></div>
        </div>
      </div>
      <div class="fg-3" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Dirección:</span><span class="val wide" contenteditable="true">${address}</span></div>
        <div class="field-row"><span class="lbl">Procedencia:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Tel. principal:</span><span class="val" contenteditable="true">${guardianPhone}</span></div>
      </div>
      <div class="fg-4" style="margin-bottom:4px">
        <div class="field-row"><span class="lbl">Persona responsable:</span><span class="val wide" contenteditable="true">${guardian}</span></div>
        <div class="field-row"><span class="lbl">Parentesco:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Tel. alternativo:</span><span class="val" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Código CI:</span><span class="val" contenteditable="true"></span></div>
      </div>
      <div class="cl-inline">
        <span class="lbl" style="margin-right:4px">Tipo ingreso:</span>
        <div class="chk"><span class="box"></span>Nuevo</div>
        <div class="chk"><span class="box"></span>Reingreso</div>
        <div class="chk"><span class="box"></span>Transferido</div>
        <span class="lbl" style="margin-left:12px;margin-right:4px">Referido por:</span>
        <div class="chk"><span class="box"></span>Hospital</div>
        <div class="chk"><span class="box"></span>Redes sociales</div>
        <div class="chk"><span class="box"></span>Fundación</div>
        <div class="chk"><span class="box"></span>Campaña</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
    </div>
  </div>

  <!-- Sección 2 -->
  <div class="section-card">
    <h3 class="section">2 · Motivo de Ingreso y Diagnóstico de Referencia <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Motivo principal</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Evaluación inicial FLAP</div>
            <div class="chk"><span class="box"></span>Cirugía primaria</div>
            <div class="chk"><span class="box"></span>Seguimiento</div>
            <div class="chk"><span class="box"></span>Segunda opinión</div>
            <div class="chk"><span class="box"></span>Complicación</div>
            <div class="chk"><span class="box"></span>Tratamiento integral</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
        </div>
        <div>
          <h4 class="sub">Diagnóstico inicial de referencia</h4>
          <div class="checklist cl-2">
            <div class="chk" data-dx="labio-uni"><span class="box"></span>Labio hendido unilateral</div>
            <div class="chk" data-dx="labio-bi"><span class="box"></span>Labio hendido bilateral</div>
            <div class="chk" data-dx="paladar"><span class="box"></span>Paladar hendido</div>
            <div class="chk" data-dx="flap"><span class="box"></span>FLAP completo</div>
            <div class="chk"><span class="box"></span>Fisura submucosa</div>
            <div class="chk"><span class="box"></span>Anomalía craneofacial</div>
            <div class="chk"><span class="box"></span>Sospecha sindrómica</div>
            <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true">${diagRaw}</span></div>
          </div>
          <div class="field-row" style="margin-top:3px"><span class="lbl">Especificar:</span><span class="val full" contenteditable="true"></span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 3 -->
  <div class="section-card">
    <h3 class="section">3 · Historia de la Enfermedad Actual <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline" style="margin-bottom:3px">
        <span class="lbl">Dx prenatal:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
        <span class="lbl" style="margin-left:10px">Atención previa:</span>
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>Hosp. público</div>
        <div class="chk"><span class="box"></span>Privado</div>
        <div class="chk"><span class="box"></span>Fundación</div>
      </div>
      <div class="field-row" style="margin-bottom:3px"><span class="lbl">Especificar atención previa:</span><span class="val full" contenteditable="true"></span></div>
      <div class="narrative xtall" contenteditable="true">Narrativa libre: relato de la madre/responsable sobre el origen, evolución y manejo previo del cuadro...</div>
      <h4 class="sub" style="margin-top:5px">Tratamientos / cirugías previas <span class="badge badge-clin">CLÍN</span>
        <button type="button" class="add-row-btn" onclick="addRow('tbl-cir',4)">+ Agregar fila</button>
      </h4>
      <table class="clinical" id="tbl-cir">
        <thead><tr><th style="width:10%">Edad</th><th style="width:38%">Procedimiento</th><th style="width:22%">Lugar</th><th>Complicaciones</th></tr></thead>
        <tbody>
          <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Sección 4 -->
  <div class="section-card">
    <h3 class="section">4 · Antecedentes Prenatales y Perinatales <span class="badge badge-edad">EDAD</span></h3>
    <div class="section-body">
      <div class="fg-3" style="margin-bottom:3px">
        <div class="field-row"><span class="lbl">N.º embarazo:</span><span class="val sm" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Controles prenatales:</span><span class="val sm" contenteditable="true"></span></div>
        <div class="field-row"><span class="lbl">Semanas gestación:</span><span class="val sm" contenteditable="true"></span></div>
      </div>
      <div class="cl-inline" style="margin-bottom:3px">
        <span class="lbl">Tipo de parto:</span>
        <div class="chk" id="chk-eutocico"><span class="box"></span>Eutócico</div>
        <div class="chk" id="chk-distocico"><span class="box"></span>Distócico</div>
        <div class="chk" id="chk-cesarea-parto"><span class="box"></span>Cesárea</div>
      </div>
      <div class="cesarea-motivo" id="cesarea-motivo-parto">
        <span class="lbl" style="margin-right:6px">Motivo cesárea:</span>
        <div class="chk"><span class="box"></span>Sufrimiento fetal</div>
        <div class="chk"><span class="box"></span>Desproporción cefalopélvica</div>
        <div class="chk"><span class="box"></span>Presentación anormal</div>
        <div class="chk"><span class="box"></span>Cesárea anterior</div>
        <div class="chk"><span class="box"></span>Electiva</div>
        <div class="chk"><span class="box"></span>Otra: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="cl-inline" style="margin-bottom:3px">
        <div class="field-row"><span class="lbl">Peso nac.:</span><span class="val sm" contenteditable="true"></span></div>
        <div class="field-row" style="margin-left:10px"><span class="lbl">Talla nac.:</span><span class="val sm" contenteditable="true"></span></div>
        <span class="lbl" style="margin-left:12px">Incubadora:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
        <span class="lbl" style="margin-left:8px">Reanimación:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
        <span class="lbl" style="margin-left:8px">Tamizaje neonatal:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
      </div>
      <div>
        <span class="lbl">Exposiciones en embarazo:</span>
        <div class="checklist cl-5" style="margin-top:2px">
          <div class="chk"><span class="box"></span>Alcohol</div>
          <div class="chk"><span class="box"></span>Tabaco</div>
          <div class="chk"><span class="box"></span>Medicamentos teratogénicos</div>
          <div class="chk"><span class="box"></span>Infecciones</div>
          <div class="chk"><span class="box"></span>Diabetes gestacional</div>
          <div class="chk"><span class="box"></span>Hipertensión</div>
          <div class="chk"><span class="box"></span>Violencia</div>
          <div class="chk"><span class="box"></span>Desnutrición</div>
          <div class="chk"><span class="box"></span>Ninguna relevante</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 5 -->
  <div class="section-card">
    <h3 class="section">5 · Antecedentes Personales y Familiares <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Personales patológicos</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Ninguna</div>
            <div class="chk"><span class="box"></span>Respiratorias recurrentes</div>
            <div class="chk"><span class="box"></span>Cardiopatía</div>
            <div class="chk"><span class="box"></span>Convulsiones</div>
            <div class="chk"><span class="box"></span>Anemia</div>
            <div class="chk"><span class="box"></span>Desnutrición</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Hospitalizaciones: <span class="other-line" contenteditable="true"></span></div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
          <div class="cl-inline" style="margin-top:4px">
            <span class="lbl">Alergias:</span>
            <div class="chk"><span class="box"></span>No refiere</div>
            <div class="chk"><span class="box"></span>Medicamentos</div>
            <div class="chk"><span class="box"></span>Alimentos</div>
            <div class="chk"><span class="box"></span>Látex</div>
            <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
          <div class="field-row" style="margin-top:3px"><span class="lbl">Medicación actual:</span><span class="val full" contenteditable="true"></span></div>
        </div>
        <div>
          <h4 class="sub">Antecedentes familiares</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Historia familiar FLAP:</span>
            <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Familiar afectado:</span>
            <div class="chk"><span class="box"></span>Padre</div><div class="chk"><span class="box"></span>Madre</div>
            <div class="chk"><span class="box"></span>Hermanos</div><div class="chk"><span class="box"></span>Tíos</div>
            <div class="chk"><span class="box"></span>Primos</div>
            <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Antec. genéticos/sindrómicos:</span>
            <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Sospecha</div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Consanguinidad:</span>
            <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 6 -->
  <div class="section-card">
    <h3 class="section">6 · Desarrollo y Crecimiento <span class="badge badge-edad">EDAD</span></h3>
    <div class="section-body">
      ${showRN ? `<div class="age-block">
        <span class="age-label">RN / Lactantes</span>
        <span class="lbl">Alimentación:</span>
        <div class="chk"><span class="box"></span>LME</div>
        <div class="chk"><span class="box"></span>Mixta</div>
        <div class="chk"><span class="box"></span>Fórmula especial</div>
        <div class="chk"><span class="box"></span>Dificultad succión</div>
        <div class="chk"><span class="box"></span>Regurgitación nasal</div>
        <span class="lbl" style="margin-left:8px">Desarrollo:</span>
        <div class="chk"><span class="box"></span>Sostén cefálico</div>
        <div class="chk"><span class="box"></span>Sonrisa social</div>
        <div class="chk"><span class="box"></span>Sedestación</div>
        <div class="chk"><span class="box"></span>Gateo</div>
      </div>` : ''}
      ${showPreescolar ? `<div class="age-block">
        <span class="age-label">Preescolar / Escolar</span>
        <span class="lbl">Psicomotor:</span>
        <div class="chk"><span class="box"></span>Normal</div>
        <div class="chk"><span class="box"></span>Retraso leve</div>
        <div class="chk"><span class="box"></span>Moderado</div>
        <div class="chk"><span class="box"></span>Severo</div>
        <span class="lbl" style="margin-left:6px">Lenguaje:</span>
        <div class="chk"><span class="box"></span>Adecuado</div>
        <div class="chk"><span class="box"></span>Retraso</div>
        <div class="chk"><span class="box"></span>Hipernasalidad</div>
        <div class="chk"><span class="box"></span>Dif. articulatoria</div>
        <span style="display:inline-flex;align-items:baseline;gap:3px;margin-left:6px"><span class="lbl">Curso:</span><span class="val sm" contenteditable="true"></span></span>
        <span class="lbl" style="margin-left:6px">Rendimiento:</span>
        <div class="chk"><span class="box"></span>Bueno</div>
        <div class="chk"><span class="box"></span>Regular</div>
        <div class="chk"><span class="box"></span>Bajo</div>
      </div>` : ''}
      ${showAdolescente ? `<div class="age-block">
        <span class="age-label">Adolescentes</span>
        <span class="lbl">Adaptación social:</span>
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Aislamiento</div>
        <div class="chk"><span class="box"></span>Bullying</div>
        <div class="chk"><span class="box"></span>Baja autoestima</div>
        <div class="chk"><span class="box"></span>Ansiedad social</div>
      </div>` : ''}
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>

  <div class="p2">
    ${hdr('2', patientName)}
  </div>

  <!-- Sección 7+8 -->
  <div class="section-card">
    <h3 class="section">7 · Evaluación Nutricional · 8 · Inmunizaciones</h3>
    <div class="section-body">
      <div class="metrics-strip">
        <div class="metric"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" oninput="calcIMC()"/><span class="unit">kg</span></div>
        <div class="metric"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" oninput="calcIMC()"/><span class="unit">cm</span></div>
        <div class="metric"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly/><span class="unit">kg/m²</span></div>
        <span class="lbl" style="margin-left:8px">Riesgo nutricional:</span>
        <div class="chk"><span class="box"></span>Sin riesgo</div>
        <div class="chk"><span class="box"></span>Leve</div>
        <div class="chk"><span class="box"></span>Moderado</div>
        <div class="chk"><span class="box"></span>Alto</div>
      </div>
      <div class="cl-inline" style="margin-top:4px">
        <span class="lbl">Alimentación actual:</span>
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Selectiva</div>
        <div class="chk"><span class="box"></span>Déficit proteico</div>
        <div class="chk"><span class="box"></span>Predominio CHO</div>
        <div class="chk"><span class="box"></span>Baja frecuencia</div>
        <span class="lbl" style="margin-left:14px">Inmunizaciones:</span>
        <div class="chk"><span class="box"></span>Completo</div>
        <div class="chk"><span class="box"></span>Incompleto</div>
        <div class="chk"><span class="box"></span>Desconoce</div>
      </div>
    </div>
  </div>

  <!-- Sección 9+10 -->
  <div class="section-card">
    <h3 class="section">9 · Audición y ORL · 10 · Odontología y Ortodoncia</h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Historia auditiva</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Sin alteraciones</div>
            <div class="chk"><span class="box"></span>Otitis recurrente</div>
            <div class="chk"><span class="box"></span>Hipoacusia</div>
            <div class="chk"><span class="box"></span>Tubos de ventilación</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Evaluación ORL previa</div>
          </div>
        </div>
        <div>
          <h4 class="sub">Odontología</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Dentición:</span>
            <div class="chk"><span class="box"></span>Temporal</div>
            <div class="chk"><span class="box"></span>Mixta</div>
            <div class="chk"><span class="box"></span>Permanente</div>
          </div>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Caries</div>
            <div class="chk"><span class="box"></span>Maloclusión</div>
            <div class="chk"><span class="box"></span>Higiene deficiente</div>
            <div class="chk"><span class="box"></span>Fístula alveolar</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Edentulía fisiológica</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 11+12 -->
  <div class="section-card">
    <h3 class="section">11 · Tamizaje Psicológico · 12 · Evaluación Social</h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Conducta del paciente</h4>
          <div class="checklist cl-3">
            <div class="chk"><span class="box"></span>Adecuada</div>
            <div class="chk"><span class="box"></span>Ansioso</div>
            <div class="chk"><span class="box"></span>Temor marcado</div>
            <div class="chk"><span class="box"></span>Irritable</div>
            <div class="chk"><span class="box"></span>Retraído</div>
          </div>
          <h4 class="sub" style="margin-top:5px">Dinámica familiar</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Adecuada</div>
            <div class="chk"><span class="box"></span>Sobreprotectora</div>
            <div class="chk"><span class="box"></span>Negligencia sospechada</div>
            <div class="chk"><span class="box"></span>Hostilidad</div>
            <div class="chk" style="grid-column:span 2"><span class="box"></span>Ansiedad parental elevada</div>
          </div>
        </div>
        <div>
          <h4 class="sub">Vivienda y servicios</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Vivienda:</span>
            <div class="chk"><span class="box"></span>Propia</div>
            <div class="chk"><span class="box"></span>Alquilada</div>
            <div class="chk"><span class="box"></span>Prestada</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Servicios básicos:</span>
            <div class="chk"><span class="box"></span>Agua</div>
            <div class="chk"><span class="box"></span>Luz</div>
            <div class="chk"><span class="box"></span>Alcantarillado</div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Riesgo social:</span>
            <div class="chk"><span class="box"></span>Bajo</div>
            <div class="chk"><span class="box"></span>Moderado</div>
            <div class="chk"><span class="box"></span>Alto</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 13 -->
  <div class="section-card">
    <h3 class="section">13 · Examen Físico General <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="cl-inline" style="margin-bottom:4px">
        <span class="lbl">Estado general:</span>
        <div class="chk"><span class="box"></span>Bueno</div>
        <div class="chk"><span class="box"></span>Regular</div>
        <div class="chk"><span class="box"></span>Malo</div>
      </div>
      <div class="metrics-strip">
        <div class="metric"><span class="lbl">FC:</span><span class="val sm" contenteditable="true"></span><span class="unit">lpm</span></div>
        <div class="metric"><span class="lbl">FR:</span><span class="val sm" contenteditable="true"></span><span class="unit">rpm</span></div>
        <div class="metric"><span class="lbl">SatO₂:</span><span class="val sm" contenteditable="true"></span><span class="unit">%</span></div>
        <div class="metric"><span class="lbl">Temp:</span><span class="val sm" contenteditable="true"></span><span class="unit">°C</span></div>
        <div class="metric"><span class="lbl">PA:</span><span class="val" contenteditable="true"></span><span class="unit">mmHg</span></div>
        <div class="metric"><span class="lbl">Peso:</span><span class="val sm" contenteditable="true"></span><span class="unit">kg</span></div>
        <div class="metric"><span class="lbl">Talla:</span><span class="val sm" contenteditable="true"></span><span class="unit">cm</span></div>
      </div>
      <div class="cl-inline" style="margin:3px 0">
        <span class="lbl">Hallazgos:</span>
        <div class="chk"><span class="box"></span>Desnutrición</div>
        <div class="chk"><span class="box"></span>Infección respiratoria</div>
        <div class="chk"><span class="box"></span>Mala higiene</div>
        <div class="chk"><span class="box"></span>Anomalías asociadas</div>
      </div>
      <div class="narrative xtall" contenteditable="true">Examen físico segmentario — cabeza/cuello, cardiovascular, respiratorio, abdomen, genitourinario, extremidades, neurológico...</div>
    </div>
  </div>

  <!-- Sección 14+15 -->
  <div class="section-card">
    <h3 class="section">14 · Evaluación Craneofacial Específica <span class="badge badge-obl">OBL</span> · 15 · Sospecha Sindrómica <span class="badge badge-clin">CLÍN</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Tipo de fisura</h4>
          <div class="checklist cl-auto">
            <div class="chk"><span class="box"></span>Labio unilateral</div>
            <div class="chk"><span class="box"></span>Labio bilateral</div>
            <div class="chk"><span class="box"></span>Paladar hendido</div>
            <div class="chk"><span class="box"></span>FLAP completo</div>
            <div class="chk"><span class="box"></span>Submucoso</div>
          </div>
          <h4 class="sub" style="margin-top:5px">Hallazgos específicos</h4>
          <div class="checklist cl-2">
            <div class="chk"><span class="box"></span>Fístula</div>
            <div class="chk"><span class="box"></span>Colapso nasal</div>
            <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
            <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
            <div class="chk"><span class="box"></span>Paladar corto</div>
          </div>
        </div>
        <div>
          <h4 class="sub">Sospecha sindrómica</h4>
          <div class="cl-inline" style="margin-bottom:3px">
            <div class="chk"><span class="box"></span>No aparente</div>
            <div class="chk"><span class="box"></span>Leve</div>
            <div class="chk"><span class="box"></span>Alta sospecha</div>
          </div>
          <div class="cl-inline" style="margin-bottom:3px">
            <span class="lbl">Hallazgos:</span>
            <div class="chk"><span class="box"></span>Auriculares</div>
            <div class="chk"><span class="box"></span>Oculares</div>
            <div class="chk"><span class="box"></span>Cardiopatía</div>
            <div class="chk"><span class="box"></span>Extremidades</div>
            <div class="chk"><span class="box"></span>Neurológicas</div>
          </div>
          <div class="cl-inline">
            <span class="lbl">Derivación genética:</span>
            <div class="chk"><span class="box"></span>Sí</div>
            <div class="chk"><span class="box"></span>No</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sección 16 -->
  <div class="section-card">
    <h3 class="section">16 · Impresión Diagnóstica y Conducta <span class="badge badge-obl">OBL</span></h3>
    <div class="section-body">
      <div class="two-col">
        <div>
          <h4 class="sub">Impresión diagnóstica integral</h4>
          <div class="narrative xtall" contenteditable="true"></div>
        </div>
        <div>
          <h4 class="sub">Conducta y plan terapéutico inicial</h4>
          <div class="narrative xtall" contenteditable="true"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="firma-section" style="grid-template-columns:1fr;max-width:240px">
    <div class="firma-box">
      <div class="firma-line"></div>
      <div class="firma-label">Firma y Sello del Médico</div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 2 de 2</span>
  </div>
</div>

<script>
  var DIAG = ${JSON.stringify(diagUp)};
  var PATIENT_NAME = ${JSON.stringify(patientName)};
  var HC_CODE = ${JSON.stringify(hcCode)};
  var PATIENT_ID = ${JSON.stringify(patient?.id || '')};

  document.querySelectorAll('.chk').forEach(function(chk) {
    chk.addEventListener('click', function(e) {
      if (e.target.classList.contains('other-line')) return;
      if (e.target.isContentEditable) return;
      chk.classList.toggle('checked');
    });
  });

  document.getElementById('chk-cesarea-parto').addEventListener('click', function() {
    var motivo = document.getElementById('cesarea-motivo-parto');
    motivo.style.display = this.classList.contains('checked') ? 'flex' : 'none';
  });

  (function initDiag() {
    document.querySelectorAll('[data-dx]').forEach(function(el) {
      var dx = el.dataset.dx;
      if      (dx === 'flap'      && DIAG.includes('FLAP')) el.classList.add('checked');
      else if (dx === 'labio-bi'  && DIAG.includes('BILATERAL') && !DIAG.includes('FLAP')) el.classList.add('checked');
      else if (dx === 'labio-uni' && DIAG.includes('FL') && !DIAG.includes('BILATERAL') && !DIAG.includes('FLAP')) el.classList.add('checked');
      else if (dx === 'paladar'   && (DIAG.includes('FP') || DIAG.includes('PALAT') || DIAG.includes('FLP'))) el.classList.add('checked');
    });
  })();

  function calcIMC() {
    var p = parseFloat(document.getElementById('peso-nut').value);
    var t = parseFloat(document.getElementById('talla-nut').value);
    var el = document.getElementById('imc-nut');
    el.value = (p > 0 && t > 0) ? (p / Math.pow(t/100, 2)).toFixed(2) : '';
  }

  function addRow(id, cols) {
    var tbody = document.getElementById(id).querySelector('tbody');
    var tr = document.createElement('tr');
    for (var i = 0; i < cols; i++) {
      var td = document.createElement('td');
      td.className = 'fillable';
      td.setAttribute('contenteditable', 'true');
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  function resetForm() {
    if (!confirm('¿Limpiar todo el formulario?')) return;
    document.querySelectorAll('.chk.checked').forEach(function(c) { c.classList.remove('checked'); });
    document.querySelectorAll('[contenteditable="true"]').forEach(function(el) { el.textContent = ''; });
    document.querySelectorAll('.val-input').forEach(function(el) { el.value = ''; });
    document.getElementById('cesarea-motivo-parto').style.display = 'none';
  }

  function collectFormData() {
    function gatherItems(root, items) {
      root.querySelectorAll('.chk.checked').forEach(function(chk) {
        var cl = chk.cloneNode(true);
        var otherEl = cl.querySelector('.other-line');
        var otherTxt = otherEl ? otherEl.textContent.trim() : '';
        cl.querySelectorAll('.box,.other-line').forEach(function(s) { s.remove(); });
        var txt = cl.textContent.trim();
        if (otherTxt) txt += ' – ' + otherTxt;
        if (txt) items.push({ tipo: 'check', texto: txt });
      });
      root.querySelectorAll('.field-row, .inline').forEach(function(row) {
        var lbl = row.querySelector('.lbl');
        var val = row.querySelector('[contenteditable="true"]');
        if (lbl && val && val.textContent.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: val.textContent.trim() });
      });
      root.querySelectorAll('.metric').forEach(function(m) {
        var lbl = m.querySelector('.lbl');
        var inp = m.querySelector('input.val-input');
        var ve  = m.querySelector('[contenteditable="true"]');
        var unit = m.querySelector('.unit');
        var unitTxt = unit ? ' ' + unit.textContent.trim() : '';
        if (lbl && inp && inp.value.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: inp.value + unitTxt });
        if (lbl && ve && ve.textContent.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: ve.textContent.trim() + unitTxt });
      });
      root.querySelectorAll('.narrative').forEach(function(n) {
        var txt = n.textContent.trim();
        if (txt && txt.indexOf('relato de la madre') === -1 && txt.indexOf('Examen físico segmentario') === -1 && txt.indexOf('Narrativa libre') === -1)
          items.push({ tipo: 'narrativa', texto: txt });
      });
      var tbls = Array.from(root.querySelectorAll('table.clinical'));
      tbls.forEach(function(tbl) {
        var hdrs = Array.from(tbl.querySelectorAll('thead th')).map(function(th) { return th.textContent.trim(); });
        var rows = [];
        tbl.querySelectorAll('tbody tr').forEach(function(tr) {
          var cells = Array.from(tr.querySelectorAll('td')).map(function(td) { return td.textContent.trim(); });
          if (cells.some(function(c) { return c; })) rows.push(cells);
        });
        if (rows.length) items.push({ tipo: 'tabla', encabezados: hdrs, filas: rows });
      });
    }

    var data = {};
    document.querySelectorAll('.section-card').forEach(function(card) {
      var h3 = card.querySelector('h3.section');
      if (!h3) return;
      var cl = h3.cloneNode(true);
      cl.querySelectorAll('span').forEach(function(s) { s.remove(); });
      var title = cl.textContent.trim();
      var items = [];
      var body = card.querySelector('.section-body') || card;
      gatherItems(body, items);
      if (items.length) data[title] = items;
    });
    return data;
  }

  function saveToFirestore(btn) {
    var formData = collectFormData();
    if (!Object.keys(formData).length) {
      alert('No hay datos registrados para guardar. Complete al menos un campo del formulario.');
      return;
    }
    if (!window.opener || window.opener.closed) {
      alert('La ventana principal ya no está disponible. Imprima el formulario para conservarlo.');
      return;
    }
    window.opener.postMessage({
      type:         'MUNAY_SAVE_HC',
      patientId:    PATIENT_ID,
      patientName:  PATIENT_NAME,
      patientCode:  HC_CODE,
      clinicalData: formData,
      savedAt:      new Date().toISOString(),
    }, '*');
    btn.textContent = '✓ Guardado';
    btn.style.background = '#276749';
    btn.disabled = true;
  }
</script>
</body></html>`;

  const win = window.open('', '_blank', 'width=1060,height=900');
  win.document.write(html);
  win.document.close();
  win.focus();
}
