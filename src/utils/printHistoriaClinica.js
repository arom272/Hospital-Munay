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
    ? `<div style="background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center;flex-shrink:0"><img src="${logo2}" style="height:38px;width:auto;object-fit:contain;display:block;"/></div>`
    : `<div style="background:#fff;padding:4px 8px;border-radius:5px"><span style="font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>`;

  const hdr = (sheet, name) => `
    <div class="page-hdr">
      ${logoHtml}
      <div style="text-align:center">
        <div style="font-size:9px;color:#fff;opacity:.85;text-transform:uppercase;letter-spacing:1.5px;font-weight:600">Centro Médico Quirúrgico</div>
        <div style="font-size:18px;font-weight:900;color:#4FC3C2;letter-spacing:4px;margin:2px 0">MUNAY</div>
        <div style="font-size:8px;color:#fff;opacity:.8;font-style:italic">Centro del Niño con Fisura · La Paz, Bolivia</div>
      </div>
      <div style="text-align:right;color:#fff">
        ${name ? `<div style="font-size:7.5pt;opacity:.85">${name}</div>` : ''}
        <div style="font-size:9pt;font-weight:700;font-family:monospace">${hcCode || 'HC ______'}</div>
        <div style="font-size:7.5pt;opacity:.85;margin-top:2px">Hoja ${sheet}/2 · ${todayStr}</div>
      </div>
    </div>`;

  const html = `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Historia Clínica — ${patientName}</title>
<style>
:root{--ink:#1a1d24;--ink-soft:#3a3f4a;--rule-soft:#b8bdc7;--navy:#1F3A5F;--teal:#4FC3C2;--amber:#F4B73C;--section-bg:#eef4f9;--hl:#fef9c3}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#e8e9ec;font-family:"Helvetica Neue",Arial,sans-serif;color:var(--ink);font-size:8pt;line-height:1.2}
.page{width:215.9mm;height:279.4mm;margin:14px auto;padding:0 10mm 8mm;background:#fff;box-shadow:0 2px 14px rgba(0,0,0,.12);position:relative;overflow:hidden}
.page-hdr{background:var(--navy);margin:0 -10mm 2mm;padding:7px 11px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;border-bottom:4px solid var(--teal);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.main-title{text-align:center;font-size:9pt;font-weight:bold;color:var(--navy);margin:1px 0 2px;letter-spacing:.5px;text-transform:uppercase;border-bottom:1.5px solid var(--teal);padding-bottom:1px}
h3.section{background:var(--navy);color:#fff;padding:2px 6px;margin:2px 0 1px;font-size:8pt;font-weight:bold;letter-spacing:.5px;text-transform:uppercase;border-left:4px solid var(--amber);-webkit-print-color-adjust:exact;print-color-adjust:exact}
h4.sub{margin:1px 0 0;font-size:7.5pt;font-weight:bold;color:var(--navy);text-transform:uppercase;letter-spacing:.3px}
.add-row-btn{background:var(--amber);color:#fff;border:none;padding:1px 7px;font-size:6.8pt;font-weight:bold;cursor:pointer;border-radius:2px;margin-left:8px;font-family:inherit}
@media print{.add-row-btn{display:none}}
.inline-fields{display:flex;flex-wrap:wrap;gap:1px 10px;margin:1px 0}
.inline{display:inline-flex;align-items:baseline;gap:3px;font-size:8pt}
.inline .lbl{font-weight:bold;color:var(--ink);white-space:nowrap}
.inline .val{border-bottom:1px solid var(--ink-soft);min-width:60px;min-height:13px;padding:0 3px;font-family:"Courier New",monospace;font-size:8pt;flex:1}
.inline .val.wide{min-width:120px}.inline .val.xwide{min-width:200px}.inline .val.full{min-width:100%}
[contenteditable="true"]{outline:none;cursor:text}
[contenteditable="true"]:focus{background:var(--hl)}
.narrative{border:1px solid var(--rule-soft);background:#fbfcfd;padding:2px 5px;min-height:20px;font-family:"Courier New",monospace;font-size:7.8pt;line-height:1.3;margin:1px 0}
.narrative.tall{min-height:26px}
.checklist{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:0px 8px;margin:0 0 1px}
.checklist.cols-2{grid-template-columns:repeat(2,1fr)}.checklist.cols-3{grid-template-columns:repeat(3,1fr)}
.checklist.cols-4{grid-template-columns:repeat(4,1fr)}.checklist.cols-5{grid-template-columns:repeat(5,1fr)}
.chk{display:flex;align-items:center;gap:4px;font-size:7.8pt;line-height:1.2;cursor:pointer;user-select:none}
.chk .box{display:inline-block;width:9px;height:9px;border:1px solid var(--ink);flex-shrink:0;background:#fff;position:relative}
.chk.checked .box{background:var(--navy);border-color:var(--navy);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.chk.checked .box::after{content:"✓";position:absolute;top:-4px;left:0;color:#fff;font-size:7pt;font-weight:bold;line-height:1}
.req{display:inline-block;font-size:6pt;font-weight:bold;padding:0 3px;border-radius:2px;margin-left:4px;vertical-align:middle;color:#fff}
.req.obl{background:#c93232}.req.opt-edad{background:#d4a017}.req.opt-clin{background:#5a7a3a}
table.clinical{width:100%;border-collapse:collapse;margin:2px 0;font-size:7.5pt}
table.clinical th,table.clinical td{border:1px solid var(--ink-soft);padding:1px 4px;text-align:left;vertical-align:top}
table.clinical th{background:var(--section-bg);font-weight:bold;font-size:7.2pt}
table.clinical td.fillable{min-height:13px;height:13px;font-family:"Courier New",monospace}
.other-line{display:inline-block;border-bottom:1px solid var(--ink-soft);min-width:50px;padding:0 2px;font-family:"Courier New",monospace;font-size:7.8pt;min-height:10px}
.metrics-inline{display:flex;flex-wrap:wrap;gap:1px 10px;padding:1px 4px;background:var(--section-bg);border:1px solid var(--rule-soft);font-size:8pt;margin:0}
.metrics-inline .m{display:inline-flex;align-items:baseline;gap:3px}
.metrics-inline .m .lbl{font-weight:bold;font-size:7.5pt}
.metrics-inline .m .val{border-bottom:1px solid var(--ink-soft);min-width:38px;min-height:11px;padding:0 3px;font-family:"Courier New",monospace}
.val-input{border:none;border-bottom:1px solid var(--ink-soft);background:transparent;width:50px;padding:0 3px;font-family:"Courier New",monospace;font-size:8pt;color:var(--ink);outline:none}
.val-input:focus{background:var(--hl)}.val-input.imc-auto{background:var(--section-bg);font-weight:bold;color:var(--navy);width:55px}
.val-input::-webkit-outer-spin-button,.val-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.val-input[type="number"]{-moz-appearance:textfield}
table.edu{width:100%;border-collapse:collapse;font-size:7.5pt;margin:1px 0}
table.edu th,table.edu td{border:1px solid var(--ink-soft);padding:1px 4px}
table.edu th{background:var(--section-bg);font-size:7pt}
table.edu td.tema{width:60%}
table.edu td.cell-chk{text-align:center;width:13.33%}
table.edu td.cell-chk .chk{justify-content:center}
.age-row{border-left:3px solid var(--amber);padding-left:6px;margin:0}
.age-row .age-label{display:inline-block;background:var(--amber);color:#fff;font-size:6.5pt;font-weight:bold;padding:1px 5px;margin-right:6px;text-transform:uppercase;letter-spacing:.3px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.firma-box{margin-top:3px;padding:4px 6px 3px;border:1px solid var(--ink-soft);text-align:center;background:#fbfcfd}
.firma-line{border-bottom:1px solid var(--ink);min-height:28px;margin:0 auto 2px;width:70%}
.firma-label{font-size:7.5pt;font-weight:bold;text-transform:uppercase;letter-spacing:.5px;color:var(--ink-soft)}
.footer{position:absolute;bottom:3mm;left:10mm;right:10mm;padding-top:2px;border-top:1px solid var(--rule-soft);font-size:6.5pt;color:var(--ink-soft);display:flex;justify-content:space-between;font-style:italic}
.legend{display:inline-flex;gap:10px;font-size:6.8pt;color:var(--ink-soft);margin-left:6px}
.legend-item{display:inline-flex;align-items:center;gap:3px}
.toolbar{position:sticky;top:0;background:var(--navy);color:#fff;padding:8px 20px;text-align:center;z-index:100;box-shadow:0 2px 6px rgba(0,0,0,.2);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.toolbar button{background:var(--amber);color:#fff;border:none;padding:5px 14px;margin:0 4px;font-family:inherit;font-size:9pt;font-weight:bold;cursor:pointer;border-radius:3px}
.toolbar span{margin-right:12px;font-size:9.5pt;opacity:.95}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px}
.cesarea-motivo{display:none;flex-wrap:wrap;gap:1px 8px;margin-left:14px;margin-top:1px;padding:2px 6px;background:#fef9c3;border-left:3px solid var(--amber)}
@page{size:letter;margin:0}
@media print{
  body{background:#fff}.toolbar{display:none}
  .page{box-shadow:none;margin:0;page-break-after:always}
  .page:last-child{page-break-after:auto}
  [contenteditable="true"]:focus{background:transparent}
}
</style></head><body>

<div class="toolbar">
  <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY</span>
  <button onclick="window.print()">Imprimir / Guardar PDF</button>
  <button id="btn-guardar" onclick="saveToFirestore(this)" style="background:#16a34a">💾 Guardar en sistema</button>
  <button onclick="resetForm()">Limpiar</button>
</div>

<!-- ===== PÁGINA 1 ===== -->
<div class="page">
  ${hdr('1', '')}
  <div class="main-title">Historia Clínica Integral</div>

  <h3 class="section">1 · Identificación y Datos Administrativos
    <span class="legend">
      <span class="legend-item"><span class="req obl">OBL</span>Obligatorio</span>
      <span class="legend-item"><span class="req opt-edad">EDAD</span>Por edad</span>
      <span class="legend-item"><span class="req opt-clin">CLÍN</span>Pertinencia clínica</span>
    </span>
  </h3>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Fecha:</span><span class="val" contenteditable="true">${todayStr}</span></span>
    <span class="inline"><span class="lbl">Hora:</span><span class="val" contenteditable="true"></span></span>
  </div>
  <div class="inline-fields">
    <span class="inline" style="flex:1 1 55%"><span class="lbl">Nombre completo:</span><span class="val xwide" contenteditable="true">${patientName}</span></span>
    <span class="inline"><span class="lbl">Sexo:</span><span class="val" style="min-width:30px" contenteditable="true">${sex}</span></span>
    <span class="inline"><span class="lbl">F. Nac.:</span><span class="val" contenteditable="true">${birthDateFmt}</span></span>
    <span class="inline"><span class="lbl">Edad:</span><span class="val" style="min-width:70px" contenteditable="true">${ageStr}</span></span>
  </div>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Lugar de nac.:</span><span class="val wide" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Procedencia:</span><span class="val wide" contenteditable="true"></span></span>
    <span class="inline" style="flex:1 1 40%"><span class="lbl">Dirección:</span><span class="val xwide" contenteditable="true">${address}</span></span>
  </div>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Persona responsable:</span><span class="val wide" contenteditable="true">${guardian}</span></span>
    <span class="inline"><span class="lbl">Parentesco:</span><span class="val" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Tel. principal:</span><span class="val" contenteditable="true">${guardianPhone}</span></span>
    <span class="inline"><span class="lbl">Tel. alternativo:</span><span class="val" contenteditable="true"></span></span>
  </div>
  <div class="inline-fields" style="margin-top:2px">
    <span style="font-weight:bold;font-size:7.5pt">Tipo:</span>
    <div class="chk"><span class="box"></span>Nuevo</div>
    <div class="chk"><span class="box"></span>Reingreso</div>
    <div class="chk"><span class="box"></span>Transferido</div>
    <span style="font-weight:bold;font-size:7.5pt;margin-left:14px">Referido por:</span>
    <div class="chk"><span class="box"></span>Hospital</div>
    <div class="chk"><span class="box"></span>Redes sociales</div>
    <div class="chk"><span class="box"></span>Fundación</div>
    <div class="chk"><span class="box"></span>Campaña</div>
    <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
  </div>

  <h3 class="section">2 · Motivo de Ingreso y Diagnóstico de Referencia <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Motivo principal</h4>
      <div class="checklist cols-2">
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
      <div class="checklist cols-2">
        <div class="chk" data-dx="labio-uni"><span class="box"></span>Labio hendido unilateral</div>
        <div class="chk" data-dx="labio-bi"><span class="box"></span>Labio hendido bilateral</div>
        <div class="chk" data-dx="paladar"><span class="box"></span>Paladar hendido</div>
        <div class="chk" data-dx="flap"><span class="box"></span>FLAP completo</div>
        <div class="chk"><span class="box"></span>Fisura submucosa</div>
        <div class="chk"><span class="box"></span>Anomalía craneofacial</div>
        <div class="chk"><span class="box"></span>Sospecha sindrómica</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true">${diagRaw}</span></div>
      </div>
      <div class="inline-fields" style="margin-top:2px">
        <span class="inline" style="flex:1"><span class="lbl">Especificar diagnóstico:</span><span class="val xwide" contenteditable="true"></span></span>
      </div>
    </div>
  </div>

  <h3 class="section">3 · Historia de la Enfermedad Actual <span class="req obl">OBL</span></h3>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Dx prenatal:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
    <span style="font-weight:bold;font-size:7.5pt;margin-left:8px">Atención previa:</span>
    <div class="chk"><span class="box"></span>Ninguna</div><div class="chk"><span class="box"></span>Hosp. público</div>
    <div class="chk"><span class="box"></span>Privado</div><div class="chk"><span class="box"></span>Fundación</div>
  </div>
  <div class="inline-fields" style="margin-top:2px">
    <span class="inline" style="flex:1"><span class="lbl">Especificar atención previa:</span><span class="val xwide" contenteditable="true"></span></span>
  </div>
  <div class="narrative" contenteditable="true">Narrativa libre: relato de la madre/responsable sobre el origen, evolución y manejo previo del cuadro...</div>
  <h4 class="sub">Tratamientos / cirugías previas <span class="req opt-clin">CLÍN</span>
    <button type="button" class="add-row-btn" onclick="addRow('tbl-cir',4)">+ Agregar fila</button>
  </h4>
  <table class="clinical" id="tbl-cir">
    <thead><tr><th style="width:10%">Edad</th><th style="width:38%">Procedimiento</th><th style="width:22%">Lugar</th><th>Complicaciones</th></tr></thead>
    <tbody>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
      <tr><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td><td class="fillable" contenteditable="true"></td></tr>
    </tbody>
  </table>

  <h3 class="section">4 · Antecedentes Prenatales y Perinatales <span class="req opt-edad">EDAD</span> <span style="font-weight:normal;font-style:italic;font-size:7pt;text-transform:none">(detallar en RN/lactantes · resumir en &gt;10 años)</span></h3>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">N.º embarazo:</span><span class="val" style="min-width:35px" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Controles prenatales:</span><span class="val" style="min-width:35px" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">SDG:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
    <span style="font-weight:bold;font-size:7.5pt">Tipo de parto:</span>
    <div class="chk" id="chk-eutocico"><span class="box"></span>Eutócico</div>
    <div class="chk" id="chk-distocico"><span class="box"></span>Distócico</div>
    <div class="chk" id="chk-cesarea-parto"><span class="box"></span>Cesárea</div>
  </div>
  <div class="cesarea-motivo" id="cesarea-motivo-parto">
    <span style="font-size:7.2pt;font-weight:bold">Motivo cesárea:</span>
    <div class="chk"><span class="box"></span>Sufrimiento fetal</div>
    <div class="chk"><span class="box"></span>Desproporción cefalopélvica</div>
    <div class="chk"><span class="box"></span>Presentación anormal</div>
    <div class="chk"><span class="box"></span>Cesárea anterior</div>
    <div class="chk"><span class="box"></span>Electiva</div>
    <div class="chk"><span class="box"></span>Otra: <span class="other-line" contenteditable="true"></span></div>
  </div>
  <div class="inline-fields">
    <span class="inline"><span class="lbl">Peso nac.:</span><span class="val" style="min-width:60px" contenteditable="true"></span></span>
    <span class="inline"><span class="lbl">Talla nac.:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
    <span style="font-weight:bold;font-size:7.5pt">Incubadora:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
    <span style="font-weight:bold;font-size:7.5pt">Reanimación:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
    <span style="font-weight:bold;font-size:7.5pt">Tamizaje neonatal:</span>
    <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
  </div>
  <div style="margin-top:2px">
    <span style="font-weight:bold;font-size:7.5pt">Exposiciones en embarazo:</span>
    <div class="checklist cols-5" style="margin-top:1px">
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

  <h3 class="section">5 · Antecedentes Personales y Familiares <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Personales patológicos</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Ninguna</div>
        <div class="chk"><span class="box"></span>Respiratorias recurrentes</div>
        <div class="chk"><span class="box"></span>Cardiopatía</div>
        <div class="chk"><span class="box"></span>Convulsiones</div>
        <div class="chk"><span class="box"></span>Anemia</div>
        <div class="chk"><span class="box"></span>Desnutrición</div>
        <div class="chk"><span class="box"></span>Hospitalizaciones previas: <span class="other-line" contenteditable="true"></span></div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="inline-fields" style="margin-top:2px">
        <span style="font-weight:bold;font-size:7.5pt">Alergias:</span>
        <div class="chk"><span class="box"></span>No refiere</div>
        <div class="chk"><span class="box"></span>Medicamentos</div>
        <div class="chk"><span class="box"></span>Alimentos</div>
        <div class="chk"><span class="box"></span>Látex</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="inline-fields">
        <span class="inline" style="flex:1"><span class="lbl">Medicación actual:</span><span class="val full" contenteditable="true"></span></span>
      </div>
    </div>
    <div>
      <h4 class="sub">Familiares</h4>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Historia familiar FLAP:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Desconoce</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Familiar afectado:</span>
        <div class="chk"><span class="box"></span>Padre</div><div class="chk"><span class="box"></span>Madre</div>
        <div class="chk"><span class="box"></span>Hermanos</div><div class="chk"><span class="box"></span>Tíos</div>
        <div class="chk"><span class="box"></span>Primos</div>
        <div class="chk"><span class="box"></span>Otro: <span class="other-line" contenteditable="true"></span></div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Antec. genéticos/sindrómicos:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div><div class="chk"><span class="box"></span>Sospecha</div>
        <span style="font-weight:bold;font-size:7.5pt;margin-left:8px">Consanguinidad:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
      </div>
    </div>
  </div>

  <h3 class="section">6 · Desarrollo y Crecimiento <span class="req opt-edad">EDAD</span> <span style="font-weight:normal;font-style:italic;font-size:7pt;text-transform:none">(completar bloque según edad)</span></h3>
  <div class="age-row">
    <span class="age-label">RN / Lactantes</span>
    <span style="font-size:7.2pt;font-weight:bold">Alimentación:</span>
    <div class="chk" style="display:inline-flex;margin-left:4px"><span class="box"></span>LME</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Mixta</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Fórmula especial</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Dificultad succión</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Regurgitación nasal</div>
    <span style="font-size:7.2pt;font-weight:bold;margin-left:8px">Desarrollo:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Sostén cefálico</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Sonrisa social</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Sedestación</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Gateo</div>
  </div>
  <div class="age-row">
    <span class="age-label">Preescolar/Escolar</span>
    <span style="font-size:7.2pt;font-weight:bold">Psicomotor:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Normal</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Retraso leve</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Moderado</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Severo</div>
    <span style="font-size:7.2pt;font-weight:bold;margin-left:6px">Lenguaje:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Adecuado</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Retraso</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Hipernasalidad</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Dif. articulatoria</div>
    <span class="inline" style="margin-left:6px"><span class="lbl">Curso:</span><span class="val" style="min-width:50px" contenteditable="true"></span></span>
    <span style="font-size:7.2pt;font-weight:bold">Rend.:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Bueno</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Regular</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Bajo</div>
  </div>
  <div class="age-row">
    <span class="age-label">Adolescentes</span>
    <span style="font-size:7.2pt;font-weight:bold">Adaptación social:</span>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Adecuada</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Aislamiento</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Bullying</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Baja autoestima</div>
    <div class="chk" style="display:inline-flex"><span class="box"></span>Ansiedad social</div>
  </div>

  <h3 class="section">7 · Evaluación Nutricional · 8 · Inmunizaciones</h3>
  <div class="metrics-inline">
    <span class="m"><span class="lbl">Peso:</span><input type="number" step="0.1" min="0" class="val-input" id="peso-nut" oninput="calcIMC()"/><span style="font-size:7pt">kg</span></span>
    <span class="m"><span class="lbl">Talla:</span><input type="number" step="0.1" min="0" class="val-input" id="talla-nut" oninput="calcIMC()"/><span style="font-size:7pt">cm</span></span>
    <span class="m"><span class="lbl">IMC:</span><input type="text" class="val-input imc-auto" id="imc-nut" readonly/><span style="font-size:7pt">kg/m²</span></span>
    <span style="font-size:7.5pt;font-weight:bold">Riesgo nutricional:</span>
    <div class="chk"><span class="box"></span>Sin riesgo</div>
    <div class="chk"><span class="box"></span>Leve</div>
    <div class="chk"><span class="box"></span>Moderado</div>
    <div class="chk"><span class="box"></span>Alto</div>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Alimentación actual:</span>
    <div class="chk"><span class="box"></span>Adecuada</div>
    <div class="chk"><span class="box"></span>Selectiva</div>
    <div class="chk"><span class="box"></span>Déficit proteico</div>
    <div class="chk"><span class="box"></span>Predominio CHO</div>
    <div class="chk"><span class="box"></span>Baja frecuencia</div>
    <span style="font-weight:bold;font-size:7.5pt;margin-left:14px">Inmunizaciones:</span>
    <div class="chk"><span class="box"></span>Completo</div>
    <div class="chk"><span class="box"></span>Incompleto</div>
    <div class="chk"><span class="box"></span>Desconoce</div>
  </div>

  <div class="footer">
    <span>Historia Clínica Integral · Centro Médico Quirúrgico MUNAY · La Paz, Bolivia</span>
    <span>Pág. 1 de 2</span>
  </div>
</div>

<!-- ===== PÁGINA 2 ===== -->
<div class="page">
  ${hdr('2', patientName)}
  <div class="main-title">Historia Clínica Integral · Continuación · Examen Físico</div>

  <h3 class="section">9 · Audición y ORL · 10 · Odontología y Ortodoncia</h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Historia auditiva</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Sin alteraciones</div>
        <div class="chk"><span class="box"></span>Otitis recurrente</div>
        <div class="chk"><span class="box"></span>Hipoacusia</div>
        <div class="chk"><span class="box"></span>Tubos de ventilación</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Evaluación ORL previa</div>
      </div>
    </div>
    <div>
      <h4 class="sub">Odontología</h4>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Dentición:</span>
        <div class="chk"><span class="box"></span>Temporal</div>
        <div class="chk"><span class="box"></span>Mixta</div>
        <div class="chk"><span class="box"></span>Permanente</div>
      </div>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Caries</div>
        <div class="chk"><span class="box"></span>Maloclusión</div>
        <div class="chk"><span class="box"></span>Higiene deficiente</div>
        <div class="chk"><span class="box"></span>Fístula alveolar</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Edentulía fisiológica</div>
      </div>
    </div>
  </div>

  <h3 class="section">11 · Tamizaje Psicológico · 12 · Evaluación Social</h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Conducta del paciente</h4>
      <div class="checklist cols-3">
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Ansioso</div>
        <div class="chk"><span class="box"></span>Temor marcado</div>
        <div class="chk"><span class="box"></span>Irritable</div>
        <div class="chk"><span class="box"></span>Retraído</div>
      </div>
      <h4 class="sub">Dinámica familiar</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Adecuada</div>
        <div class="chk"><span class="box"></span>Sobreprotectora</div>
        <div class="chk"><span class="box"></span>Negligencia sospechada</div>
        <div class="chk"><span class="box"></span>Hostilidad</div>
        <div class="chk" style="grid-column:span 2"><span class="box"></span>Ansiedad parental elevada</div>
      </div>
    </div>
    <div>
      <h4 class="sub">Vivienda y servicios</h4>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Vivienda:</span>
        <div class="chk"><span class="box"></span>Propia</div>
        <div class="chk"><span class="box"></span>Alquilada</div>
        <div class="chk"><span class="box"></span>Prestada</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Servicios básicos:</span>
        <div class="chk"><span class="box"></span>Agua</div>
        <div class="chk"><span class="box"></span>Luz</div>
        <div class="chk"><span class="box"></span>Alcantarillado</div>
      </div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.2pt">Riesgo social:</span>
        <div class="chk"><span class="box"></span>Bajo</div>
        <div class="chk"><span class="box"></span>Moderado</div>
        <div class="chk"><span class="box"></span>Alto</div>
      </div>
    </div>
  </div>

  <h3 class="section">13 · Examen Físico General <span class="req obl">OBL</span></h3>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Estado general:</span>
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
    <span class="m"><span class="lbl">Peso:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">kg</span></span>
    <span class="m"><span class="lbl">Talla:</span><span class="val" contenteditable="true"></span><span style="font-size:7pt">cm</span></span>
  </div>
  <div class="inline-fields">
    <span style="font-weight:bold;font-size:7.5pt">Hallazgos:</span>
    <div class="chk"><span class="box"></span>Desnutrición</div>
    <div class="chk"><span class="box"></span>Infección respiratoria</div>
    <div class="chk"><span class="box"></span>Mala higiene</div>
    <div class="chk"><span class="box"></span>Anomalías asociadas</div>
  </div>
  <div class="narrative" contenteditable="true">Examen físico segmentario — cabeza/cuello, cardiovascular, respiratorio, abdomen, genitourinario, extremidades, neurológico...</div>

  <h3 class="section">14 · Evaluación Craneofacial Específica <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <div class="inline-fields">
        <span style="font-weight:bold;font-size:7.5pt">Tipo de fisura:</span>
        <div class="chk"><span class="box"></span>Labio unilateral</div>
        <div class="chk"><span class="box"></span>Labio bilateral</div>
        <div class="chk"><span class="box"></span>Paladar</div>
        <div class="chk"><span class="box"></span>FLAP completo</div>
        <div class="chk"><span class="box"></span>Submucoso</div>
      </div>
    </div>
    <div>
      <h4 class="sub">Hallazgos específicos</h4>
      <div class="checklist cols-2">
        <div class="chk"><span class="box"></span>Fístula</div>
        <div class="chk"><span class="box"></span>Colapso nasal</div>
        <div class="chk"><span class="box"></span>Cicatriz hipertrófica</div>
        <div class="chk"><span class="box"></span>Insuf. velofaríngea</div>
        <div class="chk"><span class="box"></span>Paladar corto</div>
      </div>
      <h4 class="sub" style="margin-top:4px">15 · Sospecha sindrómica <span class="req opt-clin">CLÍN</span></h4>
      <div class="inline-fields">
        <div class="chk"><span class="box"></span>No aparente</div>
        <div class="chk"><span class="box"></span>Leve</div>
        <div class="chk"><span class="box"></span>Alta sospecha</div>
      </div>
      <div class="inline-fields">
        <span style="font-size:7pt;font-weight:bold">Hallazgos:</span>
        <div class="chk"><span class="box"></span>Auriculares</div>
        <div class="chk"><span class="box"></span>Oculares</div>
        <div class="chk"><span class="box"></span>Cardiopatía</div>
        <div class="chk"><span class="box"></span>Extremidades</div>
        <div class="chk"><span class="box"></span>Neurológicas</div>
        <span style="font-size:7pt;font-weight:bold;margin-left:6px">Deriv. genética:</span>
        <div class="chk"><span class="box"></span>Sí</div><div class="chk"><span class="box"></span>No</div>
      </div>
    </div>
  </div>

  <h3 class="section">18 · Educación Familiar <span class="req obl">OBL</span></h3>
  <table class="edu">
    <thead><tr><th class="tema">La familia comprende:</th><th>Sí</th><th>Parcial</th><th>No</th></tr></thead>
    <tbody>
      <tr><td class="tema">Naturaleza del FLAP</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
      <tr><td class="tema">Necesidad de múltiples cirugías</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
      <tr><td class="tema">Seguimiento prolongado</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
      <tr><td class="tema">Importancia de terapias</td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td><td class="cell-chk"><div class="chk"><span class="box"></span></div></td></tr>
    </tbody>
  </table>

  <h3 class="section">20 · Impresión Diagnóstica y Conducta <span class="req obl">OBL</span></h3>
  <div class="two-col">
    <div>
      <h4 class="sub">Impresión diagnóstica integral</h4>
      <div class="narrative tall" contenteditable="true"></div>
    </div>
    <div>
      <h4 class="sub">Conducta inicial</h4>
      <div class="narrative tall" contenteditable="true"></div>
    </div>
  </div>

  <div class="firma-box">
    <div class="firma-line"></div>
    <div class="firma-label">Firma y Sello del Médico</div>
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
      root.querySelectorAll('.inline').forEach(function(inl) {
        var lbl = inl.querySelector('.lbl');
        var val = inl.querySelector('[contenteditable="true"]');
        if (lbl && val && val.textContent.trim())
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: val.textContent.trim() });
      });
      root.querySelectorAll('.m').forEach(function(m) {
        var lbl = m.querySelector('.lbl');
        var inp = m.querySelector('input.val-input');
        if (lbl && inp && inp.value.trim()) {
          var unit = inp.nextElementSibling ? ' ' + inp.nextElementSibling.textContent.trim() : '';
          items.push({ tipo: 'campo', etiqueta: lbl.textContent.replace(/:$/, '').trim(), valor: inp.value + unit });
        }
      });
      if (root.classList && root.classList.contains('narrative')) {
        var txt = root.textContent.trim();
        if (txt && txt.indexOf('relato de la madre') === -1)
          items.push({ tipo: 'narrativa', texto: txt });
      }
      var tbls = (root.tagName === 'TABLE') ? [root] : Array.from(root.querySelectorAll('table'));
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
    document.querySelectorAll('h3.section').forEach(function(h3) {
      var cl = h3.cloneNode(true);
      cl.querySelectorAll('span').forEach(function(s) { s.remove(); });
      var title = cl.textContent.trim();
      var items = [];
      var node = h3.nextElementSibling;
      while (node && node.tagName !== 'H3') { gatherItems(node, items); node = node.nextElementSibling; }
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
      clinicalData: formData,
      savedAt:      new Date().toISOString(),
    }, '*');
    btn.textContent = '✓ Guardado';
    btn.style.background = '#15803d';
    btn.disabled = true;
  }
</script>
</body></html>`;

  const win = window.open('', '_blank', 'width=1060,height=900');
  win.document.write(html);
  win.document.close();
  win.focus();
}
