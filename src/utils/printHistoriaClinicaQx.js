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

  const logoHtml = logo2
    ? `<div style="background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center;flex-shrink:0"><img src="${logo2}" style="height:38px;width:auto;object-fit:contain;display:block"/></div>`
    : `<div style="background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center"><span style="font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>`;

  const hdrBlock = `
    <div class="header">
      <div class="logo-block">
        ${logoHtml}
        <div class="brand">
          <h1>Centro Médico Quirúrgico MUNAY</h1>
          <h2>Centro del Niño con Fisura · La Paz, Bolivia</h2>
        </div>
      </div>`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>HC-QX · MUNAY · ${patientName}</title>
<style>
/* ── TOKENS ── */
:root{--ink:#1a1d24;--soft:#4a5568;--rule:#c4cad4;--blue:#1F3A5F;--orange:#F4B73C;--teal:#4FC3C2;--bg:#eef4f9;--hi:#fef9c3;--err-bg:#fdecec;--err:#c93232}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#dde1e7;font-family:"Helvetica Neue",Arial,sans-serif;color:var(--ink);font-size:7.5pt;line-height:1.18}

/* ── PAGE ── */
.page{width:215.9mm;height:279.4mm;margin:10px auto;padding:5mm 9mm 7mm;background:#fff;box-shadow:0 2px 18px rgba(0,0,0,.15);position:relative;overflow:hidden}
.page::before{content:"";position:absolute;top:0;right:0;width:52%;height:13mm;background:linear-gradient(115deg,transparent 0%,#1F3A5F 28%,#4FC3C2 72%,transparent 100%);opacity:.8;clip-path:polygon(16% 0%,100% 0%,100% 60%,0% 100%);z-index:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}

/* ── HEADER ── */
.header{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;padding-bottom:2px;border-bottom:2px solid var(--blue);margin-bottom:2px}
.logo-block{display:flex;align-items:center;gap:7px}
.brand h1{font-size:10pt;margin:0;color:var(--blue);font-weight:bold;letter-spacing:.2px}
.brand h2{font-size:6.8pt;margin:0;color:var(--soft);font-style:italic;font-weight:normal}
.doc-id{font-family:"Courier New",monospace;font-size:6.8pt;color:var(--soft);background:#fff;padding:2px 5px;border:1px solid var(--rule);text-align:right;line-height:1.3}
.main-title{text-align:center;font-size:9pt;font-weight:bold;color:var(--ink);margin:1px 0 2px;letter-spacing:.3px;text-transform:uppercase}

/* ── SECTION HEADERS (collapsible & fixed) ── */
h3.section{background:var(--blue);color:#fff;padding:2px 7px;margin:2px 0 0;font-size:7.5pt;font-weight:bold;letter-spacing:.4px;text-transform:uppercase;border-left:4px solid var(--orange);-webkit-print-color-adjust:exact;print-color-adjust:exact;display:flex;justify-content:space-between;align-items:center}
h3.section.crit{background:var(--err);border-left-color:#ffb800}
h3.section.collapsible{cursor:pointer}
h3.section .toggle-icon{font-size:6pt;opacity:.75;margin-left:6px;font-weight:normal}

/* ── SECTION BODY ── */
.sec-body{padding:1px 0 2px}
.sec-body.collapsed{display:none}

/* ── SUB LABELS ── */
.slbl{font-size:6.8pt;font-weight:bold;color:var(--blue);text-transform:uppercase;letter-spacing:.3px;padding-bottom:1px;border-bottom:1px solid #d4dce6;margin-bottom:2px;margin-top:3px}
.slbl:first-child{margin-top:0}

/* ── BADGES ── */
.req{display:inline-block;font-size:5.5pt;font-weight:bold;padding:0 3px;border-radius:2px;margin-left:3px;vertical-align:middle;letter-spacing:.3px;color:#fff}
.req.obl{background:#c93232}.req.opt-edad{background:#d4a017}.req.crit{background:#111}
.legend-inline{font-size:6pt;font-weight:normal;text-transform:none;letter-spacing:0;opacity:.85;margin-left:8px}

/* ── GRID SYSTEM ── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:2px 8px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px 8px}
.g3a{display:grid;grid-template-columns:2fr 1.15fr 1.6fr;gap:2px 8px}
.gcol{display:flex;flex-direction:column;gap:1px}
.gcol2{display:grid;grid-template-columns:1fr 1fr;gap:1px 6px}

/* ── ID GRID ── */
.id-row{display:grid;gap:1px 5px;margin:1px 0}
.id-row.r1{grid-template-columns:1fr 1fr 1fr 1fr 2fr}
.id-row.r2{grid-template-columns:2fr 1fr 1fr 1.2fr 1.2fr 1fr}

/* ── INLINE FIELDS (label + underline value) ── */
.inline{display:inline-flex;align-items:baseline;gap:3px;font-size:7.5pt}
.inline .lbl{font-weight:bold;color:var(--ink);white-space:nowrap}
.inline .val{border-bottom:1px solid var(--soft);min-width:50px;min-height:11px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.5pt;flex:1}
.inline .val.wide{min-width:90px}.inline .val.xwide{min-width:150px}

/* ── ROW (flexible horizontal strip) ── */
.row{display:flex;flex-wrap:wrap;gap:1px 7px;align-items:center;margin:1px 0}
.f{font-weight:bold;font-size:7pt;white-space:nowrap;color:var(--ink);flex-shrink:0}

/* ── INPUTS ── */
[contenteditable="true"]{outline:none;cursor:text}
[contenteditable="true"]:focus{background:var(--hi)}
.val-input{border:none;border-bottom:1px solid var(--soft);background:transparent;width:42px;min-height:10px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.5pt;color:var(--ink);outline:none}
.val-input:focus{background:var(--hi)}
.val-input.imc-auto{background:var(--bg);font-weight:bold;color:var(--blue);width:46px}
.val-input::-webkit-outer-spin-button,.val-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.val-input[type="number"]{-moz-appearance:textfield}
.other-line{display:inline-block;border-bottom:1px solid var(--soft);min-width:38px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.3pt;min-height:9px}

/* ── NARRATIVE ── */
.narrative{border:1px solid var(--rule);background:#fafbfc;padding:2px 4px;min-height:15px;font-family:"Courier New",monospace;font-size:7.3pt;line-height:1.25;margin:1px 0}

/* ── CHECKBOXES ── */
.chk{display:flex;align-items:center;gap:3px;font-size:7.3pt;line-height:1.18;cursor:pointer;user-select:none}
.chk .box{display:inline-block;width:8px;height:8px;border:1px solid var(--ink);flex-shrink:0;background:#fff;position:relative;transition:background .1s}
.chk.checked .box{background:var(--blue);border-color:var(--blue)}
.chk.checked .box::after{content:"✓";position:absolute;top:-4px;left:0;color:#fff;font-size:6.5pt;font-weight:bold;line-height:1}
.cv{display:flex;flex-direction:column;gap:1px}
.ch{display:flex;flex-wrap:wrap;gap:1px 7px}
.checklist-v{display:flex;flex-direction:column;gap:1px}

/* ── METRICS BAR ── */
.metrics-inline{display:flex;flex-wrap:wrap;gap:1px 9px;padding:1px 4px;background:var(--bg);border:1px solid var(--rule);margin:0;align-items:center}
.metrics-inline .m{display:inline-flex;align-items:baseline;gap:2px}
.metrics-inline .m .lbl{font-weight:bold;font-size:7pt}
.metrics-inline .m .val{border-bottom:1px solid var(--soft);min-width:32px;min-height:10px;padding:0 2px;font-family:"Courier New",monospace}

/* ── AGE ROWS ── */
.age-row{border-left:3px solid var(--orange);padding-left:5px;margin:1px 0}
.age-row .age-label{display:inline-block;background:var(--orange);color:#fff;font-size:5.8pt;font-weight:bold;padding:1px 4px;margin-right:5px;text-transform:uppercase;letter-spacing:.2px;-webkit-print-color-adjust:exact;print-color-adjust:exact}

/* ── CRITICAL BOX ── */
.crit-box{border:1.5px solid var(--err);background:var(--err-bg);padding:2px 5px;margin:1px 0}

/* ── TABLES ── */
table.clinical{width:100%;border-collapse:collapse;margin:1px 0;font-size:7.2pt}
table.clinical th,table.clinical td{border:1px solid var(--rule);padding:1px 3px;text-align:left;vertical-align:top}
table.clinical th{background:var(--bg);font-weight:bold;font-size:6.8pt}
table.clinical td.fillable{height:12px;font-family:"Courier New",monospace}
table.edu{width:100%;border-collapse:collapse;font-size:7.2pt;margin:1px 0}
table.edu th,table.edu td{border:1px solid var(--rule);padding:1px 3px}
table.edu th{background:var(--bg);font-size:6.8pt}
table.edu td.tema{width:60%}
table.edu td.cell-chk{text-align:center;width:13%}
table.edu td.cell-chk .chk{justify-content:center}
.add-row-btn{background:var(--orange);color:#fff;border:none;padding:1px 6px;font-size:6.3pt;font-weight:bold;cursor:pointer;border-radius:2px;margin-left:6px;font-family:inherit;vertical-align:middle}

/* ── KERNAHAN ── */
.kernahan-container{display:grid;grid-template-columns:1fr auto 1fr;gap:6px;align-items:center;padding:3px;background:var(--bg);border:1px solid var(--rule);margin:1px 0}
.kernahan-legend{font-size:6.3pt;line-height:1.3;font-style:italic}
.kernahan-legend.left{text-align:right}.kernahan-legend.right{text-align:left}
.kernahan-legend strong{font-style:normal;color:var(--blue)}
.kernahan-svg{cursor:pointer}
.kern-zone{fill:#fff;stroke:var(--ink);stroke-width:1;transition:fill .15s}
.kern-zone:hover{fill:#ffe9a8}
.kern-zone.active{fill:var(--blue)}
.kern-num{font-size:6pt;font-family:"Helvetica Neue",sans-serif;fill:var(--ink);pointer-events:none;text-anchor:middle;dominant-baseline:middle;font-weight:bold}
.kernahan-extra{grid-column:1/-1;text-align:center;font-size:6.3pt;font-style:italic;padding-top:2px;border-top:1px dashed var(--rule);margin-top:2px}
.kernahan-extra strong{font-style:normal;color:var(--blue)}

/* ── SIGNATURE ── */
.firma-box{padding:3px 6px 2px;border:1px solid var(--soft);text-align:center;background:#fafbfc;margin-top:3px;max-width:50%;margin-left:auto;margin-right:auto}
.firma-line{border-bottom:1px solid var(--ink);min-height:24px;margin:0 auto 2px;width:80%}
.firma-label{font-size:7pt;font-weight:bold;text-transform:uppercase;letter-spacing:.5px;color:var(--soft)}

/* ── FOOTER ── */
.footer{position:absolute;bottom:3mm;left:9mm;right:9mm;padding-top:2px;border-top:1px solid var(--rule);font-size:6pt;color:var(--soft);display:flex;justify-content:space-between;font-style:italic}

/* ── TOOLBAR ── */
.toolbar{position:sticky;top:0;background:var(--blue);color:#fff;padding:6px 16px;text-align:center;z-index:100;box-shadow:0 2px 6px rgba(0,0,0,.22);font-family:inherit}
.toolbar button{background:var(--orange);color:#fff;border:none;padding:4px 12px;margin:0 3px;font-family:inherit;font-size:8.5pt;font-weight:bold;cursor:pointer;border-radius:3px}
.toolbar button:hover{opacity:.85}
.toolbar span{margin-right:10px;font-size:9pt;opacity:.9}

/* ── PRINT ── */
@page{size:letter;margin:0}
@media print{
  body{background:#fff}
  .toolbar,.add-row-btn{display:none}
  .page{box-shadow:none;margin:0;page-break-after:always;width:215.9mm;height:279.4mm}
  .page:last-child{page-break-after:auto}
  [contenteditable="true"]:focus{background:transparent}
  .kern-zone:hover{fill:#fff}
  .kern-zone.active:hover{fill:var(--blue)}
  .sec-body.collapsed{display:block!important}
  h3.section .toggle-icon{display:none}
}
</style>
</head>
<body>

<div class="toolbar">
  <span>Historia Clínica Quirúrgica · MUNAY · ${patientName}</span>
  <button onclick="window.print()">Imprimir / PDF</button>
  <button onclick="compactPrint()" style="background:#4a6fa5">Vista compacta</button>
  <button onclick="resetForm()">Limpiar</button>
</div>

<!-- ═══════════════ PÁGINA 1 ═══════════════ -->
<div class="page">
  ${hdrBlock}
    <div class="doc-id">
      HC-QX&nbsp;<span contenteditable="true" style="display:inline-block;min-width:50px">${hcCode}</span>
      &nbsp;·&nbsp;Folio&nbsp;<span contenteditable="true" style="display:inline-block;min-width:35px"></span>&nbsp;·&nbsp;Hoja&nbsp;1/2
    </div>
  </div>

  <div class="main-title">Historia Clínica Quirúrgica</div>

  <!-- ── IDENTIFICACIÓN ── -->
  <h3 class="section">Identificación <span class="req obl">OBL</span>
    <span class="legend-inline"><span class="req obl">OBL</span> Obligatorio &nbsp;<span class="req opt-edad">EDAD</span> Por edad &nbsp;<span class="req crit">CRIT</span> Crítico</span>
  </h3>
  <div class="sec-body">
    <div class="id-row r1">
      <span class="inline"><span class="lbl">N.º HC:</span><span class="val" contenteditable="true">${hcCode}</span></span>
      <span class="inline"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${surgDateFmt}</span></span>
      <span class="inline"><span class="lbl">Hora:</span><span class="val" contenteditable="true">${surgery?.admissionTime || ''}</span></span>
      <span class="inline"><span class="lbl">Servicio:</span><span class="val" contenteditable="true">Qx FLAP/FLP</span></span>
      <span class="inline"><span class="lbl">Médico:</span><span class="val xwide" contenteditable="true">${surgeon}</span></span>
    </div>
    <div class="id-row r2">
      <span class="inline"><span class="lbl">Nombre:</span><span class="val xwide" contenteditable="true">${patientName}</span></span>
      <span class="inline"><span class="lbl">Edad:</span><span class="val" style="min-width:52px" contenteditable="true">${ageStr}</span></span>
      <span class="inline"><span class="lbl">Sexo:</span><span class="val" style="min-width:24px" contenteditable="true">${sex}</span></span>
      <span class="inline"><span class="lbl">Procedencia:</span><span class="val wide" contenteditable="true">${address}</span></span>
      <span class="inline"><span class="lbl">Responsable:</span><span class="val wide" contenteditable="true">${guardian}</span></span>
      <span class="inline"><span class="lbl">Tel.:</span><span class="val" contenteditable="true">${guardianPhone}</span></span>
    </div>
  </div>

  <!-- ── 1 · CIRUGÍA ACTUAL ── -->
  <h3 class="section">1 · Cirugía Actual <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="g3a">
      <!-- Procedimiento programado -->
      <div class="gcol">
        <div class="slbl">Procedimiento programado</div>
        <div class="gcol2">
          <div class="cv">
            <div class="chk${cx(isQueilPrim)}"><span class="box"></span>Queiloplastia prim.</div>
            <div class="chk${cx(isQueilSec)}"><span class="box"></span>Queiloplastia sec.</div>
            <div class="chk${cx(isPalatQx)}"><span class="box"></span>Palatoplastia</div>
            <div class="chk"><span class="box"></span>Rinoplastia prim.</div>
            <div class="chk"><span class="box"></span>Rinoplastia sec.</div>
          </div>
          <div class="cv">
            <div class="chk"><span class="box"></span>Gingivoperioplastia</div>
            <div class="chk"><span class="box"></span>Injerto alveolar</div>
            <div class="chk"><span class="box"></span>Fistulorrafia</div>
            <div class="chk"><span class="box"></span>Revisión cicatricial</div>
            <div class="chk"><span class="box"></span>Colgajo faríngeo</div>
          </div>
        </div>
        <div class="chk" style="margin-top:2px"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true">${otroSurg}</span></div>
      </div>
      <!-- Lado + Tipo -->
      <div class="gcol">
        <div class="slbl">Lado afectado</div>
        <div class="cv">
          <div class="chk${cx(isUnilateral)}"><span class="box"></span>Derecho</div>
          <div class="chk"><span class="box"></span>Izquierdo</div>
          <div class="chk${cx(isBilateral)}"><span class="box"></span>Bilateral</div>
          <div class="chk${cx(!isUnilateral && !isBilateral)}"><span class="box"></span>No aplica</div>
        </div>
        <div class="slbl">Tipo de cirugía</div>
        <div class="cv">
          <div class="chk${cx(isQueilPrim || (isPalatQx && !isQueilSec))}"><span class="box"></span>Primaria</div>
          <div class="chk${cx(isQueilSec)}"><span class="box"></span>Secundaria</div>
          <div class="chk"><span class="box"></span>Reconstructiva</div>
          <div class="chk"><span class="box"></span>Correctiva</div>
          <div class="chk"><span class="box"></span>Reintervención</div>
        </div>
      </div>
      <!-- Motivo -->
      <div class="gcol">
        <div class="slbl">Motivo quirúrgico actual</div>
        <div class="narrative" style="flex:1;min-height:55px" contenteditable="true">${diagDisplay}</div>
      </div>
    </div>
  </div>

  <!-- ── 2 · EVOLUCIÓN PREVIA (colapsable) ── -->
  <h3 class="section collapsible" data-body="sec2">2 · Evolución Quirúrgica Previa
    <span style="font-weight:normal;font-size:6.8pt;text-transform:none;letter-spacing:0"><button type="button" class="add-row-btn" onclick="addRow('tbl-evol-qx',4);event.stopPropagation()">+ fila</button></span>
    <span class="toggle-icon">▾</span>
  </h3>
  <div id="sec2" class="sec-body collapsed">
    <table class="clinical" id="tbl-evol-qx">
      <thead><tr><th style="width:13%">Fecha</th><th style="width:36%">Procedimiento</th><th style="width:22%">Centro</th><th>Complicaciones</th></tr></thead>
      <tbody>
        <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      </tbody>
    </table>
    <div class="row" style="margin-top:1px">
      <span class="f">Complicaciones previas:</span>
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

  <!-- ── 3 · PREANESTÉSICA (CRIT) ── -->
  <h3 class="section crit">3 · Evaluación Preanestésica Rápida <span class="req crit">CRIT</span></h3>
  <div class="sec-body">
    <div class="crit-box">
      <div class="g3">
        <div class="gcol">
          <div class="slbl" style="margin-top:0">Estado actual</div>
          <div class="cv">
            <div class="chk"><span class="box"></span>Afebril</div>
            <div class="chk"><span class="box"></span>IRA reciente</div>
            <div class="chk"><span class="box"></span>Tos activa</div>
            <div class="chk"><span class="box"></span>Rinorrea</div>
            <div class="chk"><span class="box"></span>Fiebre</div>
            <div class="chk"><span class="box"></span>Dif. respiratoria</div>
          </div>
        </div>
        <div class="gcol">
          <div class="slbl" style="margin-top:0">Antecedentes anestésicos</div>
          <div class="cv">
            <div class="chk"><span class="box"></span>Sin complicaciones</div>
            <div class="chk"><span class="box"></span>Intubación difícil</div>
            <div class="chk"><span class="box"></span>Reacción anestésica</div>
            <div class="chk"><span class="box"></span>Náuseas/vómitos severos</div>
            <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
          </div>
        </div>
        <div class="gcol">
          <div class="slbl" style="margin-top:0">Ayuno</div>
          <div class="row"><span class="f" style="min-width:58px">Líq. claros:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true">${fastingInfo}</span></span></div>
          <div class="row"><span class="f" style="min-width:58px">Lactancia:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true"></span></span></div>
          <div class="row"><span class="f" style="min-width:58px">Fórmula:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true"></span></span></div>
          <div class="row"><span class="f" style="min-width:58px">Sólidos:</span><span class="inline"><span class="val" style="min-width:26px" contenteditable="true"></span></span></div>
          <div class="slbl">ASA</div>
          <div class="row">
            <div class="chk"><span class="box"></span>I</div>
            <div class="chk"><span class="box"></span>II</div>
            <div class="chk"><span class="box"></span>III</div>
            <div class="chk"><span class="box"></span>IV</div>
          </div>
          <div class="slbl">Riesgo anestésico</div>
          <div class="row">
            <div class="chk"><span class="box"></span>Bajo</div>
            <div class="chk"><span class="box"></span>Moderado</div>
            <div class="chk"><span class="box"></span>Alto</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 4 · NUTRICIÓN ── -->
  <h3 class="section">4 · Evaluación Nutricional Prequirúrgica <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="g2">
      <div class="gcol">
        <div class="metrics-inline">
          <span class="m"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" value="${pesoVal}" oninput="calcIMC()"><span style="font-size:6.5pt">kg</span></span>
          <span class="m"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" value="${tallaVal}" oninput="calcIMC()"><span style="font-size:6.5pt">cm</span></span>
          <span class="m"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly><span style="font-size:6.5pt">kg/m²</span></span>
          <span class="m"><span class="lbl">Percentil:</span><span class="val" contenteditable="true" style="min-width:28px"></span></span>
          <span class="m"><span class="lbl">Z-score:</span><span class="val" contenteditable="true" style="min-width:28px"></span></span>
        </div>
        <div class="row" style="margin-top:1px">
          <span class="f">Estado:</span>
          <div class="chk"><span class="box"></span>Adecuado</div>
          <div class="chk"><span class="box"></span>Riesgo leve</div>
          <div class="chk"><span class="box"></span>Desnutrición mod.</div>
          <div class="chk"><span class="box"></span>Desnutrición sev.</div>
          <div class="chk"><span class="box"></span>Sobrepeso</div>
          <div class="chk"><span class="box"></span>Obesidad</div>
        </div>
      </div>
      <div class="gcol">
        <div class="row">
          <span class="f">Signos alarma:</span>
          <div class="chk"><span class="box"></span>Palidez</div>
          <div class="chk"><span class="box"></span>Edema</div>
          <div class="chk"><span class="box"></span>Pérdida musc.</div>
          <div class="chk"><span class="box"></span>Deshidratación</div>
          <div class="chk"><span class="box"></span>Mala alimentación</div>
        </div>
        <div class="row">
          <span class="f">Hb disponible:</span>
          <div class="chk"><span class="box"></span>Sí</div>
          <div class="chk"><span class="box"></span>No</div>
          <span class="inline"><span class="lbl">Resultado:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
        </div>
        <div class="row">
          <span class="f">Apto nutricionalmente:</span>
          <div class="chk"><span class="box"></span>Sí</div>
          <div class="chk"><span class="box"></span>Requiere optimización</div>
          <div class="chk"><span class="box"></span>No apto</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── 5 · INFECCIÓN ── -->
  <h3 class="section">5 · Evaluación Infecciosa</h3>
  <div class="sec-body">
    <div class="row">
      <span class="f">Infecciones actuales:</span>
      <div class="chk"><span class="box"></span>Ninguna</div>
      <div class="chk"><span class="box"></span>IRA</div>
      <div class="chk"><span class="box"></span>Otitis</div>
      <div class="chk"><span class="box"></span>Faringitis</div>
      <div class="chk"><span class="box"></span>Lesiones cutáneas</div>
      <div class="chk"><span class="box"></span>GI</div>
      <div class="chk"><span class="box"></span>Otro:&nbsp;<span class="other-line" contenteditable="true"></span></div>
      <span class="f" style="margin-left:10px">Antibióticos recientes:</span>
      <div class="chk"><span class="box"></span>Sí</div>
      <div class="chk"><span class="box"></span>No</div>
      <span class="f" style="margin-left:10px">Vacunación al día:</span>
      <div class="chk"><span class="box"></span>Sí</div>
      <div class="chk"><span class="box"></span>No</div>
      <div class="chk"><span class="box"></span>Desconoce</div>
    </div>
  </div>

  <!-- ── 6 · EVALUACIÓN FLAP ── -->
  <h3 class="section">6 · Evaluación Específica FLAP <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="g3">
      <!-- LABIO + ALVÉOLO -->
      <div class="gcol">
        <div class="slbl" style="margin-top:0">Labio</div>
        <div class="ch">
          <div class="chk${cx(isUnilateral)}"><span class="box"></span>Unilateral</div>
          <div class="chk${cx(isBilateral)}"><span class="box"></span>Bilateral</div>
          <div class="chk${cx(isFLAP)}"><span class="box"></span>Completa</div>
          <div class="chk${cx(!isFLAP && isUnilateral)}"><span class="box"></span>Incompleta</div>
        </div>
        <div class="slbl">Hallazgos labio</div>
        <div class="cv">
          <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
          <div class="chk"><span class="box"></span>Asimetría nasal</div>
          <div class="chk"><span class="box"></span>Retracción</div>
          <div class="chk"><span class="box"></span>Dehiscencia</div>
          <div class="chk"><span class="box"></span>Adherencias</div>
          <div class="chk"><span class="box"></span>Buena evolución</div>
        </div>
        <div class="slbl">Alvéolo</div>
        <div class="ch">
          <div class="chk"><span class="box"></span>Comprometido</div>
          <div class="chk"><span class="box"></span>No comprometido</div>
        </div>
      </div>
      <!-- PALADAR + NARIZ -->
      <div class="gcol">
        <div class="slbl" style="margin-top:0">Paladar</div>
        <div class="cv">
          <div class="chk${cx(isPaladar)}"><span class="box"></span>Fisura residual</div>
          <div class="chk"><span class="box"></span>Fístula</div>
          <div class="chk"><span class="box"></span>Paladar corto</div>
          <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
          <div class="chk"><span class="box"></span>Cicatriz tensa</div>
        </div>
        <div class="slbl">Nariz</div>
        <div class="cv">
          <div class="chk"><span class="box"></span>Colapso nasal</div>
          <div class="chk"><span class="box"></span>Asimetría</div>
          <div class="chk"><span class="box"></span>Punta deprimida</div>
          <div class="chk"><span class="box"></span>Desviación septal</div>
        </div>
      </div>
      <!-- DENTICIÓN -->
      <div class="gcol">
        <div class="slbl" style="margin-top:0">Dentición / Ortodoncia <span class="req opt-edad">EDAD</span></div>
        <div class="cv">
          <div class="chk"><span class="box"></span>Caries</div>
          <div class="chk"><span class="box"></span>Mala higiene</div>
          <div class="chk"><span class="box"></span>Apiñamiento</div>
          <div class="chk"><span class="box"></span>Expansión maxilar</div>
          <div class="chk"><span class="box"></span>Orto. en curso</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>
</div>

<!-- ═══════════════ PÁGINA 2 ═══════════════ -->
<div class="page">
  ${hdrBlock}
    <div class="doc-id">
      HC-QX&nbsp;<span contenteditable="true" style="display:inline-block;min-width:50px">${hcCode}</span>
      &nbsp;·&nbsp;${patientName}&nbsp;·&nbsp;Hoja&nbsp;2/2
    </div>
  </div>

  <div class="main-title">Continuación · Examen Físico y Plan Quirúrgico</div>

  <!-- ── 7 · EXAMEN FÍSICO (colapsable) ── -->
  <h3 class="section collapsible" data-body="sec7">7 · Examen Físico Quirúrgico <span class="req obl">OBL</span> <span class="toggle-icon">▾</span></h3>
  <div id="sec7" class="sec-body collapsed">
    <div class="row" style="margin:1px 0">
      <span class="f">Estado general:</span>
      <div class="chk"><span class="box"></span>Bueno</div>
      <div class="chk"><span class="box"></span>Regular</div>
      <div class="chk"><span class="box"></span>Malo</div>
      <span style="flex:1"></span>
      <div class="metrics-inline" style="flex:none">
        <span class="m"><span class="lbl">FC:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">lpm</span></span>
        <span class="m"><span class="lbl">FR:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">rpm</span></span>
        <span class="m"><span class="lbl">SatO₂:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">%</span></span>
        <span class="m"><span class="lbl">Temp:</span><span class="val" contenteditable="true" style="min-width:26px"></span><span style="font-size:6.5pt">°C</span></span>
        <span class="m"><span class="lbl">PA:</span><span class="val" contenteditable="true" style="min-width:36px"></span><span style="font-size:6.5pt">mmHg</span></span>
      </div>
    </div>
    <table class="clinical">
      <thead><tr><th style="width:28%">Sistema</th><th>Hallazgos</th></tr></thead>
      <tbody>
        <tr><td style="font-weight:bold;font-size:7pt">Cabeza y cuello</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Cardiovascular</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Respiratorio</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Abdomen</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Genitourinario</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Extremidades</td><td class="fillable" contenteditable="true"></td></tr>
        <tr><td style="font-weight:bold;font-size:7pt">Neurológico</td><td class="fillable" contenteditable="true"></td></tr>
      </tbody>
    </table>
  </div>

  <!-- ── 8 · POR EDAD (colapsable) ── -->
  <h3 class="section collapsible" data-body="sec8">8 · Evaluación según Edad <span class="req opt-edad">EDAD</span> <span class="toggle-icon">▾</span></h3>
  <div id="sec8" class="sec-body collapsed">
    <div class="age-row">
      <span class="age-label">RN / Lactantes</span>
      <span class="f">Alimentación:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>L. materna</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Fórmula especial</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. succión</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Regurg. nasal</div>
      <span class="f" style="margin-left:8px">Peso apto para Qx:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Sí</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>No</div>
    </div>
    <div class="age-row">
      <span class="age-label">Preescolar / Escolar</span>
      <span class="f">Lenguaje:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Adecuado</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Hipernasalidad</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. articulatoria</div>
      <span class="f" style="margin-left:8px">Conducta:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Colaborador</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Ansioso</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Poco colaborador</div>
    </div>
    <div class="age-row">
      <span class="age-label">Adolescentes</span>
      <span class="f">Aspecto psicosocial:</span>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Buena adaptación</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Ansiedad estética</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Baja autoestima</div>
      <div class="chk" style="display:inline-flex"><span class="box"></span>Bullying</div>
    </div>
  </div>

  <!-- ── 9 · 10 · 11 — dos columnas ── -->
  <div class="g2">
    <div>
      <h3 class="section">9 · Educación y Comprensión Familiar</h3>
      <div class="sec-body">
        <table class="edu">
          <thead><tr><th class="tema">La familia comprende:</th><th>Sí</th><th>Parcial</th><th>No</th></tr></thead>
          <tbody>
            <tr><td class="tema">Objetivo de la cirugía</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Riesgos</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Cuidados postoperatorios</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Alimentación posterior</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
            <tr><td class="tema">Necesidad de seguimiento</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <h3 class="section">10 · Doc. Clínica &nbsp;·&nbsp; 11 · Impresión Diagnóstica <span class="req obl">OBL</span></h3>
      <div class="sec-body">
        <div class="row">
          <span class="f">Adjuntos:</span>
          <div class="chk"><span class="box"></span>Labs.</div>
          <div class="chk"><span class="box"></span>Rx</div>
          <div class="chk"><span class="box"></span>TC</div>
          <div class="chk"><span class="box"></span>Audiometría</div>
          <div class="chk"><span class="box"></span>Interconsultas</div>
        </div>
        <div class="slbl">Diagnóstico principal</div>
        <div class="narrative" contenteditable="true">${diagDisplay}</div>
        <div class="slbl">Diagnósticos asociados</div>
        <div class="narrative" contenteditable="true"></div>
      </div>
    </div>
  </div>

  <!-- ── 12 · CONDUCTA ── -->
  <h3 class="section">12 · Conducta <span class="req obl">OBL</span></h3>
  <div class="sec-body">
    <div class="row">
      <div class="chk"><span class="box"></span>Apto para cirugía</div>
      <div class="chk"><span class="box"></span>Requiere optim. nutricional</div>
      <div class="chk"><span class="box"></span>Requiere valoración anestésica adicional</div>
      <div class="chk"><span class="box"></span>Reprogramar cirugía</div>
      <div class="chk"><span class="box"></span>Suspender temporalmente</div>
    </div>
  </div>

  <!-- ── KERNAHAN ── -->
  <h3 class="section">Anexo 1 · Clasificación de Kernahan — Esquema Anatómico FLAP</h3>
  <div class="sec-body">
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
        <span style="display:block;margin-top:1px;font-size:5.8pt;color:var(--soft)">Haga clic en cada zona para marcar las áreas comprometidas</span>
      </div>
    </div>
  </div>

  <!-- ── 13 · FIRMA ── -->
  <h3 class="section">13 · Firma y Validación</h3>
  <div class="sec-body">
    <div class="firma-box">
      <div class="firma-line"></div>
      <div class="firma-label" contenteditable="true">${surgeon}</div>
      <div style="font-size:6.5pt;color:var(--soft);margin-top:1px">Firma y Sello del Médico &nbsp;·&nbsp; Matrícula:&nbsp;<span contenteditable="true" style="display:inline-block;min-width:26mm;border-bottom:1px solid var(--soft)"></span></div>
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

/* ── CHECKBOXES ── */
document.querySelectorAll('.chk').forEach(function(chk) {
  chk.addEventListener('click', function(e) {
    if (e.target.classList.contains('other-line')) return;
    if (e.target.isContentEditable) return;
    chk.classList.toggle('checked');
  });
});

/* ── COLLAPSIBLE SECTIONS ── */
document.querySelectorAll('h3.section.collapsible').forEach(function(h3) {
  var icon = h3.querySelector('.toggle-icon');
  h3.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-row-btn')) return;
    var bodyEl = document.getElementById(h3.dataset.body);
    if (!bodyEl) return;
    bodyEl.classList.toggle('collapsed');
    if (icon) icon.textContent = bodyEl.classList.contains('collapsed') ? '▾' : '▴';
  });
});

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

/* ── PRINT: expand all collapsed sections ── */
window.onbeforeprint = function() {
  document.querySelectorAll('.sec-body.collapsed').forEach(function(b) {
    b.classList.remove('collapsed');
    b.dataset.wasCollapsed = '1';
  });
};
window.onafterprint = function() {
  document.querySelectorAll('.sec-body[data-was-collapsed]').forEach(function(b) {
    b.classList.add('collapsed');
    delete b.dataset.wasCollapsed;
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
  document.querySelectorAll('.sec-body').forEach(function(b) { b.classList.add('collapsed'); });
  document.querySelectorAll('h3.section.collapsible .toggle-icon').forEach(function(i) { i.textContent = '▾'; });
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
    root.querySelectorAll('.inline').forEach(function(inl) {
      var lbl = inl.querySelector('.lbl');
      var val = inl.querySelector('[contenteditable="true"]');
      if (lbl && val && val.textContent.trim()) {
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: val.textContent.trim()});
      }
    });
    root.querySelectorAll('.m').forEach(function(m) {
      var lbl = m.querySelector('.lbl');
      var inp = m.querySelector('input.val-input');
      if (lbl && inp && inp.value.trim()) {
        var unitEl = inp.nextElementSibling;
        var unit = unitEl ? ' ' + unitEl.textContent.trim() : '';
        items.push({type:'field', label: lbl.textContent.replace(/:$/, '').trim(), value: inp.value + unit});
      }
    });
    if (root.classList && root.classList.contains('narrative')) {
      var txt = root.textContent.trim();
      if (txt && txt.length > 5) items.push({type:'narrative', text: txt});
    }
    var tbls = (root.tagName === 'TABLE') ? [root] : Array.from(root.querySelectorAll('table:not(svg table)'));
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
  document.querySelectorAll('h3.section').forEach(function(h3) {
    var cl = h3.cloneNode(true);
    cl.querySelectorAll('span,button').forEach(function(s) { s.remove(); });
    var title = cl.textContent.trim();
    var items = [];
    var node = h3.nextElementSibling;
    while (node && node.tagName !== 'H3') { collectItems(node, items); node = node.nextElementSibling; }
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
    '.hdr{background:#1F3A5F;color:#fff;padding:8px 16px;border-radius:5px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}' +
    '.hdr h1{margin:0;font-size:10.5pt;letter-spacing:.2px}.hdr p{margin:0;font-size:7.5pt;opacity:.75;white-space:nowrap}' +
    '.tb{text-align:center;margin-bottom:10px}.tb button{background:#F4B73C;color:#1F3A5F;border:none;padding:5px 16px;font-size:9pt;font-weight:700;cursor:pointer;border-radius:3px}' +
    '.sh{background:#1F3A5F;color:#fff;padding:3px 10px;font-size:8pt;font-weight:700;letter-spacing:.3px;border-left:4px solid #F4B73C;margin-top:9px;border-radius:0 3px 3px 0}' +
    '.sb{padding:4px 8px 5px;background:#fff;border:1px solid #e2e4e8;border-top:none;border-radius:0 0 3px 3px}' +
    '.it{padding:2px 0;display:flex;align-items:baseline;gap:5px;border-bottom:1px solid #f3f4f6}.it:last-child{border-bottom:none}' +
    '.ck .tk{color:#F4B73C;font-weight:900;font-size:10pt;flex-shrink:0;line-height:1}' +
    '.fd .fl{font-size:7pt;font-weight:700;color:#1F3A5F;text-transform:uppercase;letter-spacing:.3px;white-space:nowrap;flex-shrink:0}' +
    '.fd .fv{font-family:"Courier New",monospace;font-size:9pt;color:#111;font-weight:600}' +
    '.nv{border-left:3px solid #20b2aa;padding:2px 0 2px 8px;font-style:italic;color:#374151;font-size:8.5pt;width:100%;box-sizing:border-box}' +
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
</body>
</html>`;

  const win = window.open('', '_blank', 'width=960,height=920');
  win.document.write(html);
  win.document.close();
  win.focus();
}
