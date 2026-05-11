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

export async function printHistoriaClinicaQx(surgery, patient, savedData = null) {
  const logo2    = await getLogoBase64(logo2Img);
  const patientId = patient?.id   || '';
  const surgeryId = surgery?.id   || '';
  const typeInfo = getTypeInfo(patient?.patientType);
  const hcCode   = patient?.patientCode ? `${typeInfo.label}-${patient.patientCode}` : '';

  const patientName   = patient?.fullName    || surgery?.patientName || '';
  const guardian      = patient?.guardian    || '';
  const guardianPhone = patient?.guardianPhone || '';
  const guardianCI    = patient?.guardianIdNumber || patient?.idNumber || '';
  const address       = patient?.address     || '';
  const diagRaw       = (patient?.diagnosis  || '').toUpperCase();
  const diagDisplay   = patient?.diagnosis   || '';
  const allergies     = patient?.allergies   || '';
  const sex           = patient?.sex === 'masculino' ? 'M' : patient?.sex === 'femenino' ? 'F' : '';

  let ageStr = '', birthDateFmt = '';
  if (patient?.birthDate) {
    const birth = parseISO(patient.birthDate);
    if (isValid(birth)) {
      birthDateFmt = format(birth, 'dd/MM/yyyy');
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

  const surgDateFmt      = surgery?.date ? format(new Date(surgery.date + 'T12:00'), 'dd/MM/yyyy') : '';
  const surgType         = surgery?.surgeryType   || '';
  const surgeon          = surgery?.surgeon       || '';
  const anesthesiologist = surgery?.anesthesiologist || '';
  const fastingInfo      = surgery?.fastingTime   || (surgery?.fastingHours ? `${surgery.fastingHours} h` : '');
  const pesoVal          = surgery?.peso  ? String(surgery.peso)  : '';
  const tallaVal         = surgery?.talla ? String(surgery.talla) : '';

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
    ? `<div style="background:#fff;padding:5px 10px;border-radius:6px;display:flex;align-items:center;flex-shrink:0"><img src="${logo2}" style="height:44px;width:auto;object-fit:contain;display:block"/></div>`
    : `<div style="background:#fff;padding:5px 10px;border-radius:6px;display:flex;align-items:center"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>`;

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
<title>Historia Clínica Quirúrgica · MUNAY · ${patientName}</title>
<style>
:root{--ink:#1a1d24;--ink-soft:#3a3f4a;--rule-soft:#b8bdc7;--paper:#ffffff;--munay-blue:#1F3A5F;--munay-orange:#F4B73C;--section-bg:#eef4f9;--highlight:#fef9c3;--warn-bg:#fdecec;--warn-border:#c93232}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#e8e9ec;font-family:"Helvetica Neue","Arial",sans-serif;color:var(--ink);font-size:8pt;line-height:1.22}
.page{width:215.9mm;height:279.4mm;margin:14px auto;padding:8mm 11mm;background:var(--paper);box-shadow:0 2px 14px rgba(0,0,0,.12);position:relative;overflow:hidden}
.page::before{content:"";position:absolute;top:0;right:0;width:55%;height:16mm;background:linear-gradient(115deg,transparent 0%,#1F3A5F 25%,#4FC3C2 70%,transparent 100%);opacity:.85;clip-path:polygon(15% 0%,100% 0%,100% 60%,0% 100%);z-index:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.header{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;padding-bottom:3px;border-bottom:2px solid var(--munay-blue);margin-bottom:4px}
.logo-block{display:flex;align-items:center;gap:8px}
.brand h1{font-size:10.5pt;margin:0;color:var(--munay-blue);font-weight:bold;letter-spacing:.3px}
.brand h2{font-size:7.2pt;margin:1px 0 0;color:var(--ink-soft);font-style:italic;font-weight:normal}
.doc-id{text-align:right;font-family:"Courier New",monospace;font-size:7.2pt;color:var(--ink-soft);line-height:1.3;background:white;padding:2px 6px;border:1px solid var(--rule-soft)}
.main-title{text-align:center;font-size:10pt;font-weight:bold;color:var(--ink);margin:2px 0 4px;letter-spacing:.5px;text-transform:uppercase}
h3.section{background:var(--munay-blue);color:white;padding:2px 7px;margin:4px 0 2px;font-size:7.8pt;font-weight:bold;letter-spacing:.5px;text-transform:uppercase;border-left:4px solid var(--munay-orange)}
h3.section.crit{background:var(--warn-border);border-left-color:#ffb800}
h4.sub{margin:3px 0 1px;font-size:7.3pt;font-weight:bold;color:var(--munay-blue);text-transform:uppercase;letter-spacing:.3px}
.add-row-btn{background:var(--munay-orange);color:white;border:none;padding:1px 7px;font-size:6.6pt;font-weight:bold;cursor:pointer;border-radius:2px;margin-left:8px;font-family:inherit}
.add-row-btn:hover{background:#c8960d}
@media print{.add-row-btn{display:none}}
.inline-fields{display:flex;flex-wrap:wrap;gap:1px 10px;margin:1px 0;align-items:center}
.inline{display:inline-flex;align-items:baseline;gap:3px;font-size:7.8pt}
.inline .lbl{font-weight:bold;color:var(--ink);white-space:nowrap}
.inline .val{border-bottom:1px solid var(--ink-soft);min-width:60px;min-height:12px;padding:0 3px;font-family:"Courier New",monospace;font-size:7.8pt;flex:1}
.inline .val.wide{min-width:110px}
.inline .val.xwide{min-width:180px}
.val-input{border:none;border-bottom:1px solid var(--ink-soft);background:transparent;width:48px;min-height:11px;padding:0 3px;font-family:"Courier New",monospace;font-size:7.8pt;color:var(--ink);outline:none}
.val-input:focus{background:var(--highlight)}
.val-input.imc-auto{background:var(--section-bg);font-weight:bold;color:var(--munay-blue);width:52px}
.val-input::-webkit-outer-spin-button,.val-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.val-input[type="number"]{-moz-appearance:textfield}
[contenteditable="true"]{outline:none;cursor:text}
[contenteditable="true"]:focus{background:var(--highlight)}
.narrative{border:1px solid var(--rule-soft);background:#fbfcfd;padding:2px 5px;min-height:22px;font-family:"Courier New",monospace;font-size:7.6pt;line-height:1.3;margin:1px 0}
.narrative.short{min-height:16px}
.checklist{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1px 10px;margin:1px 0}
.checklist.cols-2{grid-template-columns:repeat(2,1fr)}
.chk{display:flex;align-items:center;gap:4px;font-size:7.6pt;line-height:1.2;cursor:pointer;user-select:none}
.chk .box{display:inline-block;width:9px;height:9px;border:1px solid var(--ink);flex-shrink:0;background:white;position:relative;transition:background .1s}
.chk.checked .box{background:var(--munay-blue);border-color:var(--munay-blue)}
.chk.checked .box::after{content:"✓";position:absolute;top:-4px;left:0;color:white;font-size:7pt;font-weight:bold;line-height:1}
.req{display:inline-block;font-size:5.8pt;font-weight:bold;padding:0 3px;border-radius:2px;margin-left:4px;vertical-align:middle;letter-spacing:.3px;color:white}
.req.obl{background:#c93232}
.req.opt-edad{background:#d4a017}
.req.crit{background:#000}
table.clinical{width:100%;border-collapse:collapse;margin:2px 0;font-size:7.4pt}
table.clinical th,table.clinical td{border:1px solid var(--ink-soft);padding:1px 4px;text-align:left;vertical-align:top}
table.clinical th{background:var(--section-bg);font-weight:bold;font-size:7pt;color:var(--ink)}
table.clinical td.fillable{min-height:16px;height:16px;font-family:"Courier New",monospace}
.other-line{display:inline-block;border-bottom:1px solid var(--ink-soft);min-width:45px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.6pt;min-height:10px}
.metrics-inline{display:flex;flex-wrap:wrap;gap:1px 10px;padding:2px 5px;background:var(--section-bg);border:1px solid var(--rule-soft);font-size:7.8pt;margin:1px 0;align-items:center}
.metrics-inline .m{display:inline-flex;align-items:baseline;gap:3px}
.metrics-inline .m .lbl{font-weight:bold;font-size:7.3pt}
.metrics-inline .m .val{border-bottom:1px solid var(--ink-soft);min-width:38px;min-height:11px;padding:0 3px;font-family:"Courier New",monospace}
table.edu{width:100%;border-collapse:collapse;font-size:7.4pt;margin:1px 0}
table.edu th,table.edu td{border:1px solid var(--ink-soft);padding:1px 4px}
table.edu th{background:var(--section-bg);font-size:7pt}
table.edu td.tema{width:60%}
table.edu td.cell-chk{text-align:center;width:13.33%}
table.edu td.cell-chk-sn{text-align:center;width:20%}
table.edu td.cell-chk .chk,table.edu td.cell-chk-sn .chk{justify-content:center}
.age-row{border-left:3px solid var(--munay-orange);padding-left:5px;margin:1px 0}
.age-row .age-label{display:inline-block;background:var(--munay-orange);color:white;font-size:6.3pt;font-weight:bold;padding:1px 5px;margin-right:5px;text-transform:uppercase;letter-spacing:.3px}
.critical-box{border:1.5px solid var(--warn-border);background:var(--warn-bg);padding:3px 6px;margin:2px 0}
.firma-box{padding:4px 6px 3px;border:1px solid var(--ink-soft);text-align:center;background:#fbfcfd;margin-top:4px;max-width:50%;margin-left:auto;margin-right:auto}
.firma-line{border-bottom:1px solid var(--ink);min-height:34px;margin:0 auto 2px;width:80%}
.firma-label{font-size:7.3pt;font-weight:bold;text-transform:uppercase;letter-spacing:.5px;color:var(--ink-soft)}
.firma-sublabel{font-size:6.8pt;color:var(--ink-soft);margin-top:1px}
.legend{display:inline-flex;gap:10px;font-size:6.5pt;color:var(--ink-soft);margin-left:6px}
.legend-item{display:inline-flex;align-items:center;gap:3px}
.footer{position:absolute;bottom:4mm;left:11mm;right:11mm;padding-top:3px;border-top:1px solid var(--rule-soft);font-size:6.3pt;color:var(--ink-soft);display:flex;justify-content:space-between;font-style:italic}
.toolbar{position:sticky;top:0;background:#1F3A5F;color:white;padding:8px 20px;text-align:center;font-family:"Helvetica Neue",sans-serif;z-index:100;box-shadow:0 2px 6px rgba(0,0,0,.2)}
.toolbar button{background:#F4B73C;color:white;border:none;padding:5px 14px;margin:0 4px;font-family:inherit;font-size:9pt;font-weight:bold;cursor:pointer;border-radius:3px}
.toolbar button:hover{background:#c8960d}
.toolbar span{margin-right:12px;font-size:9.5pt;opacity:.95}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:4px 12px}
.kernahan-container{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;padding:4px;background:var(--section-bg);border:1px solid var(--rule-soft);margin:2px 0}
.kernahan-legend{font-size:6.8pt;line-height:1.4;font-style:italic}
.kernahan-legend.left{text-align:right}
.kernahan-legend.right{text-align:left}
.kernahan-legend strong{font-style:normal;color:var(--munay-blue)}
.kernahan-svg{cursor:pointer}
.kern-zone{fill:white;stroke:var(--ink);stroke-width:1;transition:fill .15s}
.kern-zone:hover{fill:#ffe9a8}
.kern-zone.active{fill:#1F3A5F}
.kern-num{font-size:6pt;font-family:"Helvetica Neue",sans-serif;fill:var(--ink);pointer-events:none;text-anchor:middle;dominant-baseline:middle;font-weight:bold}
.kernahan-extra{grid-column:1 / -1;text-align:center;font-size:6.8pt;font-style:italic;padding-top:3px;border-top:1px dashed var(--rule-soft);margin-top:2px}
.kernahan-extra strong{font-style:normal;color:var(--munay-blue)}
@page{size:letter;margin:0}
@media print{
  body{background:white}
  .toolbar{display:none}
  .page{box-shadow:none;margin:0;page-break-after:always;width:215.9mm;height:279.4mm}
  .page:last-child{page-break-after:auto}
  [contenteditable="true"]:focus{background:transparent}
  .kern-zone:hover{fill:white}
  .kern-zone.active:hover{fill:#1F3A5F}
}
</style>
</head>
<body>

<div class="toolbar">
  <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · ${patientName}</span>
  <button onclick="window.print()">Imprimir / PDF</button>
  <button onclick="guardarDatos()">Guardar</button>
  <button onclick="resetForm()">Limpiar</button>
</div>

<!-- ====================== PÁGINA 1 ====================== -->
<div class="page">
  ${hdrBlock}
    <div class="doc-id">
      HC-QX N.º <span contenteditable="true" style="display:inline-block;min-width:60px;">${hcCode}</span><br>
      Folio: <span contenteditable="true" style="display:inline-block;min-width:50px;"></span> · Hoja 1/2
    </div>
  </div>

  <div class="main-title">Historia Clínica Quirúrgica</div>

  <h3 class="section">Portada · Identificación
    <span class="legend">
      <span class="legend-item"><span class="req obl">OBL</span> Obligatorio</span>
      <span class="legend-item"><span class="req opt-edad">EDAD</span> Por edad</span>
      <span class="legend-item"><span class="req crit">CRIT</span> Crítico</span>
    </span>
  </h3>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">N.º HC:</span><span class="val" contenteditable="true">${hcCode}</span></span>
    <span class="inline"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${surgDateFmt}</span></span>
    <span class="inline"><span class="lbl">Hora:</span><span class="val" contenteditable="true">${surgery?.admissionTime || ''}</span></span>
    <span class="inline"><span class="lbl">Servicio:</span><span class="val wide" contenteditable="true">Cirugía FLAP/FLP</span></span>
    <span class="inline"><span class="lbl">Profesional responsable:</span><span class="val wide" contenteditable="true">${surgeon}</span></span>
  </div>
  <div class="inline-fields">
    <span class="inline" style="flex:1 1 50%;"><span class="lbl">Nombre:</span><span class="val xwide" contenteditable="true">${patientName}</span></span>
    <span class="inline"><span class="lbl">Edad:</span><span class="val" style="min-width:70px;" contenteditable="true">${ageStr}</span></span>
    <span class="inline"><span class="lbl">Sexo:</span><span class="val" style="min-width:35px;" contenteditable="true">${sex}</span></span>
  </div>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Procedencia:</span><span class="val wide" contenteditable="true">${address}</span></span>
    <span class="inline"><span class="lbl">Responsable:</span><span class="val wide" contenteditable="true">${guardian}</span></span>
    <span class="inline"><span class="lbl">Teléfono:</span><span class="val" contenteditable="true">${guardianPhone}</span></span>
  </div>

  <h3 class="section">1 · Cirugía Actual <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Procedimiento programado</h4>
      <div class="checklist cols-2">
        <div class="chk${cx(isQueilPrim)}"><span class="box"></span>Queiloplastia primaria</div>
        <div class="chk${cx(isQueilSec)}"><span class="box"></span>Queiloplastia secundaria</div>
        <div class="chk${cx(isPalatQx)}"><span class="box"></span>Palatoplastia</div>
        <div class="chk"><span class="box"></span>Rinoplastia primaria</div>
        <div class="chk"><span class="box"></span>Rinoplastia secundaria</div>
        <div class="chk"><span class="box"></span>Gingivoperioplastia</div>
        <div class="chk"><span class="box"></span>Injerto alveolar</div>
        <div class="chk"><span class="box"></span>Fistulorrafia</div>
        <div class="chk"><span class="box"></span>Revisión cicatricial</div>
        <div class="chk"><span class="box"></span>Colgajo faríngeo</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Otro: <span class="other-line" contenteditable="true">${otroSurg}</span></div>
      </div>
    </div>
    <div>
      <h4 class="sub">Lado afectado</h4>
      <div class="checklist cols-2">
        <div class="chk${cx(isUnilateral)}"><span class="box"></span>Derecho</div>
        <div class="chk"><span class="box"></span>Izquierdo</div>
        <div class="chk${cx(isBilateral)}"><span class="box"></span>Bilateral</div>
        <div class="chk${cx(!isUnilateral && !isBilateral)}"><span class="box"></span>No aplica</div>
      </div>
      <h4 class="sub">Tipo de cirugía</h4>
      <div class="checklist cols-2">
        <div class="chk${cx(isQueilPrim || (isPalatQx && !isQueilSec))}"><span class="box"></span>Primaria</div>
        <div class="chk${cx(isQueilSec)}"><span class="box"></span>Secundaria</div>
        <div class="chk"><span class="box"></span>Reconstructiva</div>
        <div class="chk"><span class="box"></span>Correctiva</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Reintervención</div>
      </div>
      <h4 class="sub">Motivo quirúrgico actual</h4>
      <div class="narrative short" contenteditable="true">${diagDisplay}</div>
    </div>
  </div>

  <h3 class="section">2 · Evolución Quirúrgica Previa
    <button type="button" class="add-row-btn" onclick="addRow('tbl-evol-qx',4)">+ Agregar fila</button>
  </h3>
  <table class="clinical" id="tbl-evol-qx">
    <thead><tr><th style="width:14%">Fecha</th><th style="width:36%">Procedimiento</th><th style="width:22%">Centro</th><th style="width:28%">Complicaciones</th></tr></thead>
    <tbody>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
    </tbody>
  </table>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.3pt">Complicaciones quirúrgicas previas:</span>
    <div class="chk"><span class="box"></span>Ninguna</div>
    <div class="chk"><span class="box"></span>Dehiscencia</div>
    <div class="chk"><span class="box"></span>Fístula</div>
    <div class="chk"><span class="box"></span>Sangrado</div>
    <div class="chk"><span class="box"></span>Infección</div>
    <div class="chk"><span class="box"></span>Mala cicatrización</div>
    <div class="chk"><span class="box"></span>C. anestésicas</div>
    <div class="chk"><span class="box"></span>Reintervención</div>
    <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
  </div>

  <h3 class="section crit">3 · Evaluación Preanestésica Rápida <span class="req crit">CRIT</span></h3>
  <div class="critical-box">
    <div class="two-col">
      <div>
        <div class="inline-fields">
          <span style="font-weight:bold;font-size:7.3pt">Estado actual:</span>
          <div class="chk"><span class="box"></span>Afebril</div>
          <div class="chk"><span class="box"></span>IRA reciente</div>
          <div class="chk"><span class="box"></span>Tos</div>
          <div class="chk"><span class="box"></span>Rinorrea</div>
          <div class="chk"><span class="box"></span>Fiebre</div>
          <div class="chk"><span class="box"></span>Dificultad respiratoria</div>
        </div>
        <div class="inline-fields">
          <span style="font-weight:bold;font-size:7.3pt">Antec. anestésicos:</span>
          <div class="chk"><span class="box"></span>Sin complicaciones</div>
          <div class="chk"><span class="box"></span>Intubación difícil</div>
          <div class="chk"><span class="box"></span>Reacción anestésica</div>
          <div class="chk"><span class="box"></span>Náuseas/vómitos severos</div>
          <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
        </div>
      </div>
      <div>
        <div class="inline-fields">
          <span style="font-weight:bold;font-size:7.3pt">Ayuno:</span>
          <span class="inline"><span class="lbl">Líq. claros:</span><span class="val" style="min-width:35px" contenteditable="true">${fastingInfo}</span></span>
          <span class="inline"><span class="lbl">Lactancia:</span><span class="val" style="min-width:35px" contenteditable="true"></span></span>
          <span class="inline"><span class="lbl">Fórmula:</span><span class="val" style="min-width:35px" contenteditable="true"></span></span>
          <span class="inline"><span class="lbl">Sólidos:</span><span class="val" style="min-width:35px" contenteditable="true"></span></span>
        </div>
        <div class="inline-fields">
          <span style="font-weight:bold;font-size:7.3pt">ASA:</span>
          <div class="chk"><span class="box"></span>I</div>
          <div class="chk"><span class="box"></span>II</div>
          <div class="chk"><span class="box"></span>III</div>
          <div class="chk"><span class="box"></span>IV</div>
          <span style="font-weight:bold;font-size:7.3pt;margin-left:10px">Riesgo anestésico:</span>
          <div class="chk"><span class="box"></span>Bajo</div>
          <div class="chk"><span class="box"></span>Moderado</div>
          <div class="chk"><span class="box"></span>Alto</div>
        </div>
      </div>
    </div>
  </div>

  <h3 class="section">4 · Evaluación Nutricional Prequirúrgica <span class="req obl">OBL</span></h3>
  <div class="metrics-inline">
    <span class="m"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" value="${pesoVal}" oninput="calcIMC()"><span style="font-size:7pt">kg</span></span>
    <span class="m"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" value="${tallaVal}" oninput="calcIMC()"><span style="font-size:7pt">cm</span></span>
    <span class="m"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly><span style="font-size:7pt">kg/m²</span></span>
    <span class="m"><span class="lbl">Percentil:</span><span class="val" contenteditable="true"></span></span>
    <span class="m"><span class="lbl">Z-score:</span><span class="val" contenteditable="true"></span></span>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.3pt">Estado nutricional:</span>
    <div class="chk"><span class="box"></span>Adecuado</div>
    <div class="chk"><span class="box"></span>Riesgo leve</div>
    <div class="chk"><span class="box"></span>Desnutrición moderada</div>
    <div class="chk"><span class="box"></span>Desnutrición severa</div>
    <div class="chk"><span class="box"></span>Sobrepeso</div>
    <div class="chk"><span class="box"></span>Obesidad</div>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.3pt">Signos clínicos de alarma:</span>
    <div class="chk"><span class="box"></span>Palidez</div>
    <div class="chk"><span class="box"></span>Edema</div>
    <div class="chk"><span class="box"></span>Pérdida muscular</div>
    <div class="chk"><span class="box"></span>Deshidratación</div>
    <div class="chk"><span class="box"></span>Mala alimentación</div>
    <span style="font-weight:bold;font-size:7.3pt;margin-left:8px">Hb disponible:</span>
    <div class="chk"><span class="box"></span>Sí</div>
    <div class="chk"><span class="box"></span>No</div>
    <span class="inline"><span class="lbl">Resultado:</span><span class="val" style="min-width:60px" contenteditable="true"></span></span>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.3pt">Apto nutricionalmente:</span>
    <div class="chk"><span class="box"></span>Sí</div>
    <div class="chk"><span class="box"></span>Requiere optimización</div>
    <div class="chk"><span class="box"></span>No apto temporalmente</div>
  </div>

  <h3 class="section">5 · Evaluación Infecciosa</h3>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.3pt">Infecciones actuales:</span>
    <div class="chk"><span class="box"></span>Ninguna</div>
    <div class="chk"><span class="box"></span>IRA</div>
    <div class="chk"><span class="box"></span>Otitis</div>
    <div class="chk"><span class="box"></span>Faringitis</div>
    <div class="chk"><span class="box"></span>Lesiones cutáneas</div>
    <div class="chk"><span class="box"></span>Gastrointestinal</div>
    <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.3pt">Antibióticos recientes:</span>
    <div class="chk"><span class="box"></span>Sí</div>
    <div class="chk"><span class="box"></span>No</div>
    <span style="font-weight:bold;font-size:7.3pt;margin-left:14px">Vacunación al día:</span>
    <div class="chk"><span class="box"></span>Sí</div>
    <div class="chk"><span class="box"></span>No</div>
    <div class="chk"><span class="box"></span>Desconoce</div>
  </div>

  <h3 class="section">6 · Evaluación Específica FLAP <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.3pt">LABIO:</span>
        <div class="chk${cx(isUnilateral)}"><span class="box"></span>Unilateral</div>
        <div class="chk${cx(isBilateral)}"><span class="box"></span>Bilateral</div>
        <div class="chk${cx(isFLAP)}"><span class="box"></span>Completa</div>
        <div class="chk${cx(!isFLAP && isUnilateral)}"><span class="box"></span>Incompleta</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.3pt">Hallazgos labio:</span>
        <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
        <div class="chk"><span class="box"></span>Asimetría nasal</div>
        <div class="chk"><span class="box"></span>Retracción</div>
        <div class="chk"><span class="box"></span>Dehiscencia</div>
        <div class="chk"><span class="box"></span>Adherencias</div>
        <div class="chk"><span class="box"></span>Buena evolución</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.3pt">ALVÉOLO:</span>
        <div class="chk"><span class="box"></span>Comprometido</div>
        <div class="chk"><span class="box"></span>No comprometido</div>
      </div>
    </div>
    <div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.3pt">PALADAR:</span>
        <div class="chk${cx(isPaladar)}"><span class="box"></span>Fisura residual</div>
        <div class="chk"><span class="box"></span>Fístula</div>
        <div class="chk"><span class="box"></span>Paladar corto</div>
        <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
        <div class="chk"><span class="box"></span>Cicatriz tensa</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.3pt">NARIZ:</span>
        <div class="chk"><span class="box"></span>Colapso nasal</div>
        <div class="chk"><span class="box"></span>Asimetría</div>
        <div class="chk"><span class="box"></span>Punta deprimida</div>
        <div class="chk"><span class="box"></span>Desviación septal</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.3pt">Dentición/Ortodoncia <span class="req opt-edad">EDAD</span>:</span>
        <div class="chk"><span class="box"></span>Caries</div>
        <div class="chk"><span class="box"></span>Mala higiene</div>
        <div class="chk"><span class="box"></span>Apiñamiento</div>
        <div class="chk"><span class="box"></span>Expansión maxilar</div>
        <div class="chk"><span class="box"></span>Orto. en curso</div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>
</div>

<!-- ====================== PÁGINA 2 ====================== -->
<div class="page">
  ${hdrBlock}
    <div class="doc-id">
      HC-QX N.º <span contenteditable="true" style="display:inline-block;min-width:60px;">${hcCode}</span><br>
      Paciente: <span contenteditable="true" style="display:inline-block;min-width:80px;">${patientName}</span> · Hoja 2/2
    </div>
  </div>

  <div class="main-title">Continuación · Examen Físico y Plan Quirúrgico</div>

  <h3 class="section">7 · Examen Físico Quirúrgico <span class="req obl">OBL</span></h3>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.3pt">Estado general:</span>
    <div class="chk"><span class="box"></span>Bueno</div>
    <div class="chk"><span class="box"></span>Regular</div>
    <div class="chk"><span class="box"></span>Malo</div>
  </div>
  <div class="metrics-inline">
    <span class="m"><span class="lbl">FC:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">lpm</span></span>
    <span class="m"><span class="lbl">FR:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">rpm</span></span>
    <span class="m"><span class="lbl">SatO₂:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">%</span></span>
    <span class="m"><span class="lbl">Temp:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">°C</span></span>
    <span class="m"><span class="lbl">PA:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">mmHg</span></span>
  </div>
  <table class="clinical">
    <thead><tr><th style="width:30%">Sistema</th><th>Descripción / Hallazgos</th></tr></thead>
    <tbody>
      <tr><td style="font-weight:bold">Cabeza y Cuello</td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td style="font-weight:bold">Sistema Cardiovascular</td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td style="font-weight:bold">Sistema Respiratorio</td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td style="font-weight:bold">Abdomen</td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td style="font-weight:bold">Genitourinario</td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td style="font-weight:bold">Extremidades y Columna</td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td style="font-weight:bold">Neurológico</td><td class="fillable" contenteditable="true"></td></tr>
    </tbody>
  </table>

  <h3 class="section">8 · Evaluación según Edad <span class="req opt-edad">EDAD</span></h3>
  <div class="age-row">
    <span class="age-label">RN / Lactantes</span>
    <span style="font-size:7pt;font-weight:bold">Alimentación:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>L. materna</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Fórmula especial</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. succión</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Regurgitación nasal</div>
    <span style="font-size:7pt;font-weight:bold;margin-left:8px">Peso adecuado para Qx:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Sí</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>No</div>
  </div>
  <div class="age-row">
    <span class="age-label">Preescolar/Escolar</span>
    <span style="font-size:7pt;font-weight:bold">Lenguaje:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Adecuado</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Hipernasalidad</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. articulatoria</div>
    <span style="font-size:7pt;font-weight:bold;margin-left:8px">Conducta:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Colaborador</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Ansioso</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Poco colaborador</div>
  </div>
  <div class="age-row">
    <span class="age-label">Adolescentes</span>
    <span style="font-size:7pt;font-weight:bold">Aspecto psicosocial:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Buena adaptación</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Ansiedad estética</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Baja autoestima</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Bullying</div>
  </div>

  <div class="two-col">
    <div>
      <h3 class="section">9 · Educación y Comprensión Familiar</h3>
      <table class="edu">
        <thead><tr><th class="tema">La familia comprende:</th><th>Sí</th><th>Parcial</th><th>No</th></tr></thead>
        <tbody>
          <tr><td class="tema">Objetivo de cirugía</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
          <tr><td class="tema">Riesgos</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
          <tr><td class="tema">Cuidados postoperatorios</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
          <tr><td class="tema">Alimentación posterior</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
          <tr><td class="tema">Necesidad de seguimiento</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3 class="section">10 · Documentación Clínica</h3>
      <h4 class="sub">Adjuntos</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Laboratorios</div>
        <div class="chk"><span class="box"></span>Radiografías</div>
        <div class="chk"><span class="box"></span>Tomografía</div>
        <div class="chk"><span class="box"></span>Audiometría</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Interconsultas</div>
      </div>
      <h3 class="section" style="margin-top:6px">11 · Impresión Diagnóstica <span class="req obl">OBL</span></h3>
      <h4 class="sub">Diagnóstico principal</h4>
      <div class="narrative short" contenteditable="true">${diagDisplay}</div>
      <h4 class="sub">Diagnósticos asociados</h4>
      <div class="narrative short" contenteditable="true"></div>
    </div>
  </div>

  <h3 class="section">12 · Conducta <span class="req obl">OBL</span></h3>
  <div class="inline-fields">
    <div class="chk"><span class="box"></span>Apto para cirugía</div>
    <div class="chk"><span class="box"></span>Requiere optimización nutricional</div>
    <div class="chk"><span class="box"></span>Requiere valoración anestésica adicional</div>
    <div class="chk"><span class="box"></span>Reprogramar cirugía</div>
    <div class="chk"><span class="box"></span>Suspender temporalmente</div>
  </div>

  <h3 class="section">Anexo 1 · Esquema Anatómico FLAP — Clasificación de Kernahan</h3>
  <div class="kernahan-container">
    <div class="kernahan-legend left">
      <strong>1:</strong> Fosa nasal derecha<br>
      <strong>2.1:</strong> Labio fisurado 1/3<br>
      <strong>2.2:</strong> Labio fisurado 2/3<br>
      <strong>2.3:</strong> Labio fisurado 3/3<br>
      <strong>3:</strong> Alvéolo derecho (mm ampl.)<br>
      <strong>4:</strong> Paladar óseo anterior derecho
    </div>
    <svg class="kernahan-svg" viewBox="0 0 220 280" width="180" height="230" xmlns="http://www.w3.org/2000/svg">
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
      <strong>6.1:</strong> Labio fisurado 1/3<br>
      <strong>6.2:</strong> Labio fisurado 2/3<br>
      <strong>6.3:</strong> Labio fisurado 3/3<br>
      <strong>7:</strong> Alvéolo izquierdo (mm ampl.)<br>
      <strong>8:</strong> Paladar óseo anterior izquierdo
    </div>
    <div class="kernahan-extra">
      <strong>9:</strong> Paladar óseo posterior parcial &nbsp;·&nbsp;
      <strong>9 + 10:</strong> Paladar óseo posterior total &nbsp;·&nbsp;
      <strong>11:</strong> Paladar blando o fisura submucosa
      <span style="display:block;margin-top:2px;color:var(--ink-soft)">Haga clic en cada zona para marcar las áreas comprometidas</span>
    </div>
  </div>

  <h3 class="section">13 · Firma y Validación</h3>
  <div class="firma-box">
    <div class="firma-line"></div>
    <div class="firma-label" contenteditable="true">${surgeon}</div>
    <div class="firma-sublabel">Firma y Sello del Médico</div>
    <div style="font-size:7pt;color:var(--ink-soft);margin-top:2px">Matrícula: <span contenteditable="true" style="display:inline-block;min-width:32mm;border-bottom:1px solid var(--ink-soft)"></span></div>
  </div>

  <div class="footer">
    <span>Historia Clínica Quirúrgica · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 2 de 2</span>
  </div>
</div>

<script>
  var __patientId = ${JSON.stringify(patientId)};
  var __surgeryId = ${JSON.stringify(surgeryId)};
  var __savedData = ${JSON.stringify(savedData)};

document.querySelectorAll('.chk').forEach(function(chk) {
  chk.addEventListener('click', function(e) {
    if (e.target.classList.contains('other-line')) return;
    if (e.target.isContentEditable) return;
    chk.classList.toggle('checked');
  });
});

document.querySelectorAll('.kern-zone').forEach(function(zone) {
  zone.addEventListener('click', function() {
    zone.classList.toggle('active');
    var num = zone.nextElementSibling;
    if (num && num.classList.contains('kern-num')) {
      num.style.fill = zone.classList.contains('active') ? 'white' : '';
    }
  });
});

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

function recopilarDatos() {
  var ce = [];
  document.querySelectorAll('[contenteditable="true"]').forEach(function(el) { ce.push(el.textContent); });
  var chks = [];
  document.querySelectorAll('.chk').forEach(function(el, i) { if (el.classList.contains('checked')) chks.push(i); });
  var vals = {};
  document.querySelectorAll('.val-input').forEach(function(el) { if (el.id) vals[el.id] = el.value; });
  var kerns = [];
  document.querySelectorAll('.kern-zone').forEach(function(z) { if (z.classList.contains('active')) kerns.push(z.dataset.zone); });
  return { ce: ce, chks: chks, vals: vals, kerns: kerns };
}

function restaurarDatos(data) {
  if (!data) return;
  var els = document.querySelectorAll('[contenteditable="true"]');
  (data.ce || []).forEach(function(v, i) { if (els[i]) els[i].textContent = v; });
  var chkEls = document.querySelectorAll('.chk');
  (data.chks || []).forEach(function(i) { if (chkEls[i]) chkEls[i].classList.add('checked'); });
  Object.keys(data.vals || {}).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = data.vals[id];
  });
  (data.kerns || []).forEach(function(z) {
    var zone = document.querySelector('[data-zone="' + z + '"]');
    if (!zone) return;
    zone.classList.add('active');
    var num = zone.nextElementSibling;
    if (num && num.classList.contains('kern-num')) num.style.fill = 'white';
  });
}

function guardarDatos() {
  if (!window.opener || !window.opener.__munay_saveDoc) {
    alert('No se puede guardar: ventana principal no disponible');
    return;
  }
  var datos = recopilarDatos();
  window.opener.__munay_saveDoc(__patientId, 'hc_qx', datos, __surgeryId)
    .then(function() { alert('Guardado correctamente'); })
    .catch(function(err) { alert('Error al guardar: ' + (err && err.message || err)); });
}

if (__savedData) { restaurarDatos(__savedData); }
</script>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=920,height=900');
  win.document.write(html);
  win.document.close();
  win.focus();
}
