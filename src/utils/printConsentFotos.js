import logo2Img from '../../LOGO 2.jpg';
import { getTypeInfo } from './patientTypes';

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

export async function printConsentFotos(patient) {
  const logo2       = await getLogoBase64(logo2Img);
  const typeInfo    = getTypeInfo(patient?.patientType);
  const hcCode      = patient?.patientCode ? `${typeInfo.label}-${patient.patientCode}` : '';
  const patientName = patient?.fullName          || '';
  const guardian    = patient?.guardian          || '';
  const guardianCI  = patient?.guardianIdNumber  || '';
  const address     = patient?.address           || '';
  const diagnosis   = patient?.diagnosis         || '';

  const patientId    = patient?.id ?? '';
  const clinicalJson = JSON.stringify({ consentType: 'fotos', nombre: patient?.fullName ?? '', ci: patient?.idNumber ?? '', responsable: patient?.guardian ?? '', diagnostico: patient?.diagnosis ?? '' });

  const now = new Date();
  const todayFormatted = String(now.getDate()).padStart(2,'0') + '/' +
    String(now.getMonth()+1).padStart(2,'0') + '/' + now.getFullYear();

  const logoHtml = logo2
    ? `<div style="background:#fff;padding:5px 10px;border-radius:6px;display:flex;align-items:center;flex-shrink:0"><img src="${logo2}" style="height:46px;width:auto;object-fit:contain;display:block;"/></div>`
    : `<div style="background:#fff;padding:5px 10px;border-radius:6px"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px">MUNAY</span></div>`;

  const html = `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Consentimiento Fotos — ${patientName}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
:root{--teal:#4FC3C2;--teal-dark:#1F3A5F;--amber:#F4B73C;--ink:#1c2a2a;--ink-soft:#4a5a5a;--line:#888}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#eef2f2;font-family:'Inter',Arial,sans-serif;color:var(--ink)}
.toolbar{position:sticky;top:0;z-index:10;background:#fff;border-bottom:1px solid #d8e0e0;padding:10px 20px;display:flex;gap:10px;justify-content:flex-end;align-items:center;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.toolbar .title{margin-right:auto;font-weight:600;color:var(--teal-dark);font-size:13px}
.btn{padding:8px 16px;border:1px solid #d0d8d8;background:#fff;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;color:var(--ink);transition:all .15s;font-family:inherit}
.btn:hover{border-color:var(--teal);color:var(--teal-dark)}
.btn.primary{background:var(--teal-dark);color:#fff;border-color:var(--teal-dark)}
.btn.primary:hover{background:#162e4d}
.sheet{width:210mm;min-height:297mm;margin:24px auto;background:#fff;box-shadow:0 8px 30px rgba(0,0,0,.08);display:flex;flex-direction:column}
.hdr{background:#1F3A5F;padding:14px 22px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;-webkit-print-color-adjust:exact;print-color-adjust:exact;position:relative;overflow:hidden}
.hdr::after{content:'';position:absolute;right:-40px;top:-40px;width:160px;height:160px;background:var(--amber);border-radius:50%;opacity:.12}
.hdr-center{text-align:center;z-index:1}
.hdr-sup{font-size:10px;color:#fff;opacity:.85;letter-spacing:1.5px;text-transform:uppercase;font-weight:600}
.hdr-name{font-size:22px;font-weight:900;color:#4FC3C2;letter-spacing:4px;margin:2px 0}
.hdr-tag{font-size:9px;color:#fff;opacity:.8;font-style:italic}
.hdr-right{text-align:right;z-index:1}
.hdr-nro{font-size:9px;color:#a0b4c4;letter-spacing:.3px}
.hdr-code{font-size:12px;font-weight:700;color:#fff;margin-top:2px}
.content{padding:10mm 22mm;flex:1;display:flex;flex-direction:column}
.doc-title{text-align:center;margin:0 0 2mm;font-size:16px;font-weight:700;letter-spacing:.5px;color:var(--teal-dark)}
.doc-subtitle{text-align:center;margin:0 0 8mm;font-size:12.5px;font-weight:600;letter-spacing:.3px;color:var(--ink)}
.data-block{font-size:12.5px;line-height:1.8}
.data-block .row{display:flex;align-items:flex-end;gap:6px;margin-bottom:2mm}
.data-block .label{font-weight:700;white-space:nowrap}
.data-block .blank{flex:1;border-bottom:1px solid var(--line);min-height:1em;padding:0 4px 1px}
.data-block .ci-row{display:flex;justify-content:flex-end;margin-bottom:1mm}
.data-block .ci-row .blank{flex:0 0 50mm}
.body-text{font-size:12px;line-height:1.65;text-align:justify;margin-top:4mm}
.body-text p{margin:0 0 3mm}
.diag-line{display:flex;align-items:flex-end;gap:8px;margin:3mm 0}
.diag-line .blank{flex:1;border-bottom:1px solid var(--line);min-height:1.4em;padding:0 4px 2px;text-align:center;font-weight:600}
.inline-blank{border-bottom:1px solid var(--line);padding:0 6px;min-width:55mm;display:inline-block;vertical-align:bottom;text-align:center}
.strong-line{font-weight:700;margin-top:3mm}
.fecha-line{display:flex;justify-content:flex-end;align-items:flex-end;gap:6px;margin-top:5mm;font-size:12px}
.fecha-line .label{font-weight:700}
.fecha-line .blank{border-bottom:1px solid var(--line);min-width:44mm;min-height:1.2em;padding:0 4px 1px}
.firma{margin:10mm auto 5mm;text-align:center;width:85mm}
.firma .linea{border-top:1px solid var(--ink);margin-top:26mm;margin-bottom:5px}
.firma .nombre{font-weight:700;font-size:12.5px;text-transform:uppercase;min-height:1.2em}
.firma .rol{font-size:10px;color:var(--ink-soft);margin-top:3px}
.firma .ci-firma{font-size:11.5px;margin-top:4px}
.firma .ci-firma .blank{display:inline-block;border-bottom:1px solid var(--line);min-width:32mm;min-height:1em;padding:0 4px;vertical-align:bottom}
.footer-bar{background:#1F3A5F;height:5px;margin-top:auto;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.editable{outline:none;cursor:text}
.editable:focus{background:#fffbe6}
.editable:empty::before{content:attr(data-placeholder);color:#b5bdbd;font-style:italic;font-weight:400}
@media print{
  html,body{background:#fff}
  .toolbar{display:none!important}
  .sheet{width:auto;min-height:auto;margin:0;box-shadow:none;page-break-after:always}
  @page{size:A4;margin:0}
}
</style></head><body>

<div class="toolbar">
  <span class="title">Consentimiento Informado — Toma de Imágenes y Video</span>
  <button class="btn" onclick="limpiar()">Limpiar</button>
  <button class="btn primary" onclick="imprimirYGuardar()">Imprimir / PDF</button>
</div>

<div class="sheet">

  <div class="hdr">
    <div>${logoHtml}</div>
    <div class="hdr-center">
      <div class="hdr-sup">Centro Médico Quirúrgico</div>
      <div class="hdr-name">MUNAY</div>
      <div class="hdr-tag">Centro del Niño con Fisura · La Paz, Bolivia</div>
    </div>
    <div class="hdr-right">
      ${hcCode ? `<div class="hdr-nro">N.° HC</div><div class="hdr-code">${hcCode}</div>` : ''}
    </div>
  </div>

  <div class="content">
    <h1 class="doc-title">CONSENTIMIENTO INFORMADO</h1>
    <h2 class="doc-subtitle">PARA LA TOMA DE IMÁGENES Y VIDEO CON FINES DE DIFUSIÓN</h2>

    <div class="data-block">
      <div class="ci-row">
        <span class="label">CI:&nbsp;</span>
        <span class="blank editable" contenteditable="true" data-placeholder="N.º de cédula">${guardianCI}</span>
      </div>
      <div class="row">
        <span class="label">Yo:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Nombre completo del representante legal">${guardian}</span>
      </div>
      <div class="row">
        <span class="label">Paciente/Representante Legal del paciente:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Nombre completo del paciente">${patientName}</span>
      </div>
      <div class="row">
        <span class="label">Domicilio:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="Zona, calle, número">${address}</span>
      </div>
    </div>

    <div class="body-text">
      <p><strong>CONFIRMO</strong> que se me ha informado y explicado detalladamente en palabras comprensibles para mí la importancia de recibir el tratamiento Quirúrgico y Terapias de Rehabilitación que serán de beneficio para su salud.</p>

      <p><strong>Siendo el DIAGNÓSTICO:</strong></p>

      <div class="diag-line">
        <span class="blank editable" contenteditable="true" data-placeholder="Ej. FLAP BILATERAL">${diagnosis}</span>
      </div>

      <p>Por lo que <strong>AUTORIZO</strong> al <span class="inline-blank editable" contenteditable="true" data-placeholder="Dr. ___________"></span> y a todo su equipo para que puedan tomar las fotografías, videos o imágenes necesarias antes, durante y después de las intervenciones quirúrgicas y Terapias de Rehabilitación con la finalidad de tener un Registro de la Evolución y Seguimiento del Paciente necesarias para su mejor tratamiento, así como para ser presentadas en medios de difusión escritos o televisivos nacionales o extranjeros, como medio de sensibilización a la comunidad, para la recaudación de recursos económicos que servirán para llevar atención integral a personas que tienen Malformaciones Congénitas Craneofaciales, como la Fisura Labio Palatina. Llegando así a pacientes de escasos recursos económicos y que no tienen la posibilidad de acceder a Centros Especializados tanto en La Paz como a nivel Nacional.</p>

      <p>Entendiendo que en cualquier caso no se identificará por su nombre preservando la privacidad de la misma.</p>

      <p class="strong-line">ESTOY SATISFECHO CON LA INFORMACIÓN RECIBIDA Y FIRMO AL PIE ACEPTANDO TODOS LOS ASPECTOS QUE ESTA AUTORIZACIÓN IMPLICA PARA MI PERSONA Y/O MI REPRESENTADO/A.</p>

      <div class="fecha-line">
        <span class="label">Fecha:</span>
        <span class="blank editable" contenteditable="true" data-placeholder="dd/mm/aaaa">${todayFormatted}</span>
      </div>
    </div>

    <div class="firma">
      <div class="linea"></div>
      <div class="nombre editable" contenteditable="true" data-placeholder="NOMBRE COMPLETO">${guardian || patientName}</div>
      <div class="rol">Representante legal / Paciente</div>
      <div class="ci-firma">C.I.: <span class="blank editable" contenteditable="true" data-placeholder="N.º">${guardianCI}</span></div>
    </div>
  </div>

  <div class="footer-bar"></div>
</div>

<script>
var __PID = '${patientId}';
var __CD  = ${clinicalJson};
function imprimirYGuardar(){
  var w = window.opener;
  if (w && !w.closed) { w.postMessage({ type: 'MUNAY_PRINT_CONSENT_FOTOS', patientId: __PID, clinicalData: __CD }, '*'); }
  window.print();
}
function limpiar(){
  if(!confirm('¿Limpiar todos los campos editables?')) return;
  document.querySelectorAll('.editable').forEach(el => el.textContent = '');
}
</script>
</body></html>`;

  const win = window.open('', '_blank', 'width=900,height=800');
  win.document.write(html);
  win.document.close();
  win.focus();
}
