import logo2Img from '../../LOGO 2.jpg';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';
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

function mapDiagnosis(d) {
  if (!d) return '';
  const u = d.toUpperCase();
  if (u.includes('BILATERAL') && u.includes('FLAP')) return 'FLAP Bilateral';
  if (u.includes('FLAP')) return 'FLAP Unilateral';
  if (u.includes('BILATERAL') && u.includes('FL')) return 'FL Bilateral';
  if (u.includes('FLA') || (u.includes('FL') && !u.includes('FLAP'))) return 'FL Unilateral';
  if (u.includes('PALAT') || u === 'FP') return 'FP';
  return '';
}

export async function printFichaSocial(patient) {
  const logo2        = await getLogoBase64(logo2Img);
  const typeInfo     = getTypeInfo(patient?.patientType);
  const hcCode       = patient?.patientCode ? `${typeInfo.label}-${patient.patientCode}` : '';
  const patientName  = patient?.fullName       || '';
  const birthDateISO = patient?.birthDate      || '';
  const ageObj       = calcAge(patient?.birthDate);
  const ageStr       = ageObj ? (() => {
    const parts = [];
    if (ageObj.years  > 0) parts.push(`${ageObj.years} año${ageObj.years  !== 1 ? 's' : ''}`);
    if (ageObj.months > 0) parts.push(`${ageObj.months} mes${ageObj.months !== 1 ? 'es' : ''}`);
    if (parts.length === 0) parts.push(`${ageObj.days} días`);
    return parts.join(' ');
  })() : '';
  const sexo          = patient?.sex === 'masculino' ? 'MASCULINO' : patient?.sex === 'femenino' ? 'FEMENINO' : '';
  const diagnostico   = patient?.diagnosis || '';
  const domicilio     = patient?.address        || '';
  const guardian      = patient?.guardian       || '';
  const guardianPhone = patient?.guardianPhone  || '';
  const today         = new Date().toISOString().slice(0, 10);

  const pd       = JSON.stringify({ patientId: patient?.id ?? '', nroHC:hcCode, nombrePaciente:patientName, fechaNacimiento:birthDateISO, edad:ageStr, sexo, diagnostico, domicilio, nombreMadre:guardian, celMadre:guardianPhone, fechaEvaluacion:today });
  const logoJson = JSON.stringify(logo2 || '');

  const html = `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Ficha Social — ${patientName}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
:root{
  --teal:#4FC3C2;--teal-dark:#1F3A5F;--teal-soft:#e7f6f5;
  --amber:#f4b73c;--cream:#fffaf0;--ink:#1c2a2a;--ink-soft:#4a5a5a;
  --line:#dde6e6;--bg:#f0f4f8;
  --green:#2e9968;--green-soft:#e3f6ec;
  --yellow:#d49100;--yellow-soft:#fdf3d8;
  --red:#c0392b;--red-soft:#fbe5e2;
  --r:12px;--rs:8px;
  --sh:0 4px 16px rgba(20,60,60,.06)
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--ink);-webkit-font-smoothing:antialiased}
.app{max-width:1100px;margin:0 auto;padding-bottom:48px}
.hdr{background:#1F3A5F;padding:12px 28px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;position:relative;overflow:hidden}
.hdr::after{content:'';position:absolute;right:-40px;top:-40px;width:180px;height:180px;background:var(--amber);border-radius:50%;opacity:.12}
.riesgo-hdr{display:flex;flex-direction:column;gap:1px;align-items:flex-end;padding:10px 16px;border-radius:10px;min-width:120px;z-index:1}
.riesgo-hdr .rl{font-size:10px;opacity:.85;text-transform:uppercase;letter-spacing:1px;color:#fff}
.riesgo-hdr .rv{font-size:20px;font-weight:800;color:#fff}
.riesgo-hdr .rs{font-size:11px;opacity:.9;color:#fff}
.rh-verde{background:rgba(46,153,104,.80)}
.rh-amarillo{background:rgba(212,145,0,.85)}
.rh-rojo{background:rgba(192,57,43,.85)}
.print-bar{display:flex;gap:10px;justify-content:flex-end;padding:8px 16px;background:#e8e8e8}
.print-bar button{background:#1F3A5F;color:#fff;border:none;padding:7px 16px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit}
.print-bar button.clr{background:#666}
.print-bar button.compact{background:#2a8c87}
.tabs{display:flex;gap:4px;padding:8px 16px;background:#fff;box-shadow:var(--sh);overflow-x:auto;position:sticky;top:0;z-index:10}
.tab{flex:1;border:none;background:transparent;padding:9px 12px;border-radius:8px;font-size:12.5px;font-weight:600;color:var(--ink-soft);cursor:pointer;white-space:nowrap;transition:all .15s;font-family:inherit}
.tab:hover{background:var(--teal-soft);color:var(--teal-dark)}
.tab.active{background:var(--teal-dark);color:#fff;box-shadow:0 2px 8px rgba(31,58,95,.3)}
.panel{background:#fff;border-radius:var(--r);padding:24px;margin:14px 16px;box-shadow:var(--sh)}
.panel.off{display:none}
.panel h2{font-size:17px;color:var(--teal-dark);padding:0 0 10px 12px;margin-bottom:16px;border-bottom:2px solid var(--teal-soft);border-left:4px solid var(--teal)}
.panel h3{font-size:12px;color:var(--ink);text-transform:uppercase;letter-spacing:.6px;font-weight:700;border-bottom:1px solid var(--line);padding-bottom:4px;margin:20px 0 10px}
.panel h4{font-size:13px;color:var(--ink);font-weight:600;margin-bottom:8px}
.panel h5{font-size:12px;color:var(--ink-soft);margin:10px 0 6px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px 16px}
@media(max-width:720px){.grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.grid{grid-template-columns:1fr}}
.field{display:flex;flex-direction:column;gap:4px}
.field.full{grid-column:1 / -1}
.lbl{font-size:11px;font-weight:600;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.4px}
.field input,.field select,.field textarea{padding:8px 10px;border:1.5px solid var(--line);border-radius:var(--rs);background:#fff;font-size:13.5px;font-family:inherit;color:var(--ink);transition:border-color .15s,box-shadow .15s}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--teal);box-shadow:0 0 0 3px var(--teal-soft)}
.block{margin-bottom:18px}
.sub-block{margin-top:10px;padding-left:12px;border-left:3px solid var(--teal-soft)}
.hint{color:var(--ink-soft);font-size:12px;margin:3px 0 8px}
.chips{display:flex;flex-wrap:wrap;gap:7px}
.chips-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:7px}
@media(max-width:600px){.chips-grid{grid-template-columns:1fr}}
.chip{display:inline-flex;align-items:center;gap:7px;padding:8px 13px;border:1.5px solid var(--line);border-radius:999px;font-size:12.5px;cursor:pointer;background:#fff;color:var(--ink-soft);transition:all .15s;user-select:none;font-family:inherit}
.chip:hover{border-color:var(--teal);color:var(--teal-dark)}
.chip input{display:none}
.chip.active{background:var(--teal-dark);color:#fff;border-color:var(--teal-dark);box-shadow:0 2px 6px rgba(31,58,95,.25)}
.chips-grid .chip{border-radius:var(--rs);justify-content:flex-start}
.services{width:100%;border-collapse:collapse;border-radius:var(--rs);overflow:hidden;font-size:13px}
.services th,.services td{padding:8px 12px;text-align:center;border-bottom:1px solid var(--line)}
.services th{background:var(--teal-soft);color:var(--teal-dark);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.4px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.services td:first-child,.services th:first-child{text-align:left}
.services tr:last-child td{border-bottom:none}
.services .total td{background:var(--cream);border-top:2px solid var(--amber)}
.semaforo{margin-top:14px;display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:var(--rs);border-left:5px solid}
.semaforo strong{font-size:14px}
.semaforo span{font-size:12px}
.s-verde{background:var(--green-soft);border-color:var(--green);color:#1a5e3f}
.s-amarillo{background:var(--yellow-soft);border-color:var(--yellow);color:#7a5400}
.s-rojo{background:var(--red-soft);border-color:var(--red);color:#8b1f15}
.alert-box{margin-top:14px;padding:12px 16px;background:var(--red-soft);border-left:5px solid var(--red);border-radius:var(--rs);color:#8b1f15;font-size:13px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.warn{margin-top:8px;padding:9px 12px;background:var(--yellow-soft);border-left:4px solid var(--yellow);border-radius:var(--rs);color:#7a5400;font-size:12.5px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.rcard{padding:18px 22px;border-radius:var(--r);color:#fff;margin-bottom:18px;box-shadow:var(--sh);-webkit-print-color-adjust:exact;print-color-adjust:exact}
.rcard.rv{background:linear-gradient(135deg,#2e9968,#1a7d51)}
.rcard.ra{background:linear-gradient(135deg,#e8a91e,#c48205)}
.rcard.rr{background:linear-gradient(135deg,#d34c3a,#a32a1d)}
.rc-h{display:flex;justify-content:space-between;align-items:baseline}
.rc-l{font-size:11px;opacity:.9;text-transform:uppercase;letter-spacing:1.2px}
.rc-n{font-size:28px;font-weight:800;letter-spacing:-.5px}
.rc-s{font-size:13px;opacity:.95;margin-top:3px}
.rc-a{margin:12px 0 0;font-size:13px;opacity:.95;line-height:1.5}
.legend{list-style:none;padding:0;margin:0;display:grid;gap:6px}
.legend li{padding:8px 12px;border-radius:var(--rs);font-size:13px;font-weight:500;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.lv{background:var(--green-soft);color:#1a5e3f;border-left:4px solid var(--green)}
.la{background:var(--yellow-soft);color:#7a5400;border-left:4px solid var(--yellow)}
.lr{background:var(--red-soft);color:#8b1f15;border-left:4px solid var(--red)}
.bullets{margin:6px 0 0;padding-left:18px}
.bullets li{padding:3px 0;font-size:13px;color:var(--ink-soft)}
.btn-limpiar{margin-top:16px;padding:9px 18px;border:1.5px solid var(--line);background:#fff;border-radius:var(--rs);font-size:13px;font-weight:600;cursor:pointer;color:var(--ink-soft);font-family:inherit;transition:all .15s}
.btn-limpiar:hover{background:var(--red-soft);color:var(--red);border-color:var(--red)}
.foot{margin:16px 16px 0;padding:12px 4px;display:flex;justify-content:space-between;font-size:11px;color:var(--ink-soft)}
.bot{height:5px;background:var(--teal)}
@media print{
  body{background:#fff}
  .print-bar,.tabs,.btn-limpiar,.foot{display:none!important}
  .panel{display:block!important;box-shadow:none;margin:0 0 6px;padding:16px;border-radius:0;border-bottom:1px solid var(--line)}
  .panel.off{display:block!important}
  .app{max-width:100%;padding-bottom:0}
  .hdr{box-shadow:none}
  .bot{display:none}
  input,select,textarea{background:transparent!important}
  .services th{background:var(--teal-soft)!important}
}
</style></head><body>
<div id="root"></div>
<script>
window.__pd   = ${pd};
window.__logo = ${logoJson};
</script>
<script type="importmap">{"imports":{"react":"https://esm.sh/react@18.3.1","react-dom/client":"https://esm.sh/react-dom@18.3.1/client"}}</script>
<script type="module">
import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
const e = React.createElement;
const LOGO = window.__logo || '';

const BASE = {
  fechaIngreso:'',nroHC:'',nombrePaciente:'',fechaNacimiento:'',edad:'',sexo:'',gradoInstruccion:'',
  nombrePadre:'',celPadre:'',ocupacionPadre:'',edadPadre:'',instruccionPadre:'',profesionPadre:'',
  nombreMadre:'',celMadre:'',ocupacionMadre:'',edadMadre:'',instruccionMadre:'',profesionMadre:'',
  domicilio:'',departamento:'LA PAZ',provincia:'MURILLO',nroHermanos:'',antecedenteFisuraFamiliar:'',
  diagnostico:'',observaciones:'',ingresoMensual:'',
  distanciaHospital:'',medioTransporte:'',dificultadEconomica:'',
  acompanante:'',disponibilidadCuidador:'',controlesPerdidos:'',motivoPerdida:[],
  tipoVivienda:'',tipoViviendaOtro:'',materialVivienda:'',
  servicios:{aguaPotable:null,alcantarillado:null,electricidad:null,internet:null,gasDomiciliario:null},
  personasHogar:'',habitacionesDormir:'',
  alertas:[],criteriosActivacion:[],
  aspectoNino:'',interaccionFamiliar:'',
  comprension:{importanciaControles:'',cirugiasMultiples:'',cuidadosPostquirurgicos:'',importanciaTerapias:''},
  profesional:'',fechaEvaluacion:new Date().toISOString().slice(0,10),
};

const OPT_ALERTAS = [
  'Ingreso insuficiente para tratamiento','Sospecha de negligencia','Inasistencia recurrente',
  'Nino no escolarizado','Violencia intrafamiliar','Consumo problematico de alcohol/drogas en hogar',
  'Madre/padre adolescente','Abandono familiar','Desnutricion aparente','Riesgo psicologico familiar',
  'Falta de documentacion','Vivienda precaria','Discapacidad adicional','Paciente en situacion de abandono'
];
const OPT_CRIT = [
  'Riesgo de abandono terapeutico','Vulnerabilidad economica severa','Violencia/negligencia sospechada',
  'Problemas psicologicos familiares','Dificultad grave de acceso','Desnutricion',
  'Falta de adherencia','Solicitud institucional'
];

const Field = ({label,children,full}) =>
  e('div',{className:'field'+(full?' full':'')},
    e('span',{className:'lbl'},label),children);

const Radio = ({name,value,current,onChange,children}) =>
  e('label',{className:'chip'+(current===value?' active':'')},
    e('input',{type:'radio',name,checked:current===value,onChange:()=>onChange(value)}),
    e('span',null,children));

const Check = ({checked,onChange,children}) =>
  e('label',{className:'chip'+(checked?' active':'')},
    e('input',{type:'checkbox',checked,onChange}),
    e('span',null,children));

function FichaSocial() {
  const [data, setData] = useState({...BASE, ...(window.__pd||{})});
  const [tab, setTab] = useState('generales');

  const set  = (k,v) => setData(d => ({...d,[k]:v}));
  const setN = (g,k,v) => setData(d => ({...d,[g]:{...d[g],[k]:v}}));
  const tog  = (key,val) => setData(d => {
    const a = d[key]||[];
    return {...d,[key]:a.includes(val)?a.filter(x=>x!==val):[...a,val]};
  });

  const riesgo = useMemo(() => {
    let s=0; const det=[];
    const ing=parseFloat(data.ingresoMensual);
    if(!isNaN(ing)&&ing>0&&ing<2500){s+=1;det.push({f:'Ingreso bajo (<2500 Bs)',p:1});}
    if(data.distanciaHospital==='>3 horas'){s+=1;det.push({f:'Distancia >3 horas',p:1});}
    const ph=parseInt(data.personasHogar,10),hh=parseInt(data.habitacionesDormir,10);
    if(ph>0&&hh>0&&ph/hh>3){s+=1;det.push({f:'Hacinamiento ('+(ph/hh).toFixed(1)+' pers/hab)',p:1});}
    if(data.controlesPerdidos==='Si'){s+=2;det.push({f:'Controles perdidos',p:2});}
    if(data.alertas.includes('Violencia intrafamiliar')){s+=3;det.push({f:'Violencia sospechada',p:3});}
    if(data.alertas.includes('Desnutricion aparente')||data.aspectoNino==='Sospecha de desnutricion'){s+=2;det.push({f:'Desnutricion',p:2});}
    if(data.dificultadEconomica==='Grave'){s+=1;det.push({f:'Dificultad economica grave',p:1});}
    if(data.tipoVivienda==='Cedida'||data.materialVivienda==='Precario/improvisado'){s+=1;det.push({f:'Vivienda precaria',p:1});}
    let nivel,color,accion;
    if(s<=2){nivel='BAJO';color='verde';accion='Sin factores de riesgo relevantes. Seguimiento estandar.';}
    else if(s<=5){nivel='MODERADO';color='amarillo';accion='1-3 factores de vulnerabilidad. Considerar seguimiento social ampliado.';}
    else{nivel='ALTO';color='rojo';accion='4+ factores o riesgo grave. Ficha social integral OBLIGATORIA.';}
    return {score:s,nivel,color,accion,det};
  },[data]);

  const clsA = useMemo(() => {
    const n=data.alertas.length;
    if(n===0) return {color:'verde',label:'VERDE',desc:'Sin factores de riesgo relevantes'};
    if(n<=3)  return {color:'amarillo',label:'AMARILLO',desc:'1-3 factores de vulnerabilidad'};
    return {color:'rojo',label:'ROJO',desc:'4+ factores o riesgo grave'};
  },[data.alertas]);

  const debeActivar = riesgo.color==='rojo'||data.criteriosActivacion.length>0;

  function compactPrint() {
    var idx = parseInt(data.personasHogar,10), hdx = parseInt(data.habitacionesDormir,10);
    var hacIdx = (idx>0&&hdx>0) ? (idx/hdx).toFixed(2) : '—';
    var srvMap = {aguaPotable:'Agua potable',alcantarillado:'Alcantarillado',electricidad:'Electricidad',internet:'Internet',gasDomiciliario:'Gas domiciliario'};
    var srvLines = Object.entries(data.servicios).map(function(e){return (e[1]===true?'[✓] ':'[✗] ')+srvMap[e[0]];}).join('  ');
    var compMap = {importanciaControles:'Controles',cirugiasMultiples:'Cirs. múltiples',cuidadosPostquirurgicos:'Cuid. postqx',importanciaTerapias:'Terapias'};
    var compLines = Object.entries(data.comprension).map(function(e){return compMap[e[0]]+': '+(e[1]||'—');}).join('  |  ');
    var alertasStr = data.alertas.length>0 ? data.alertas.join(', ') : 'Ninguna';
    var criteriosStr = data.criteriosActivacion.length>0 ? data.criteriosActivacion.join(', ') : 'Ninguno';
    var motivoStr = data.motivoPerdida.length>0 ? data.motivoPerdida.join(', ') : '';
    var rcColor = riesgo.color==='verde'?'#1a5e3f':riesgo.color==='amarillo'?'#7a5400':'#8b1f15';
    var rcBg = riesgo.color==='verde'?'#e3f6ec':riesgo.color==='amarillo'?'#fdf3d8':'#fbe5e2';
    var rcBorder = riesgo.color==='verde'?'#2e9968':riesgo.color==='amarillo'?'#d49100':'#c0392b';

    function row(label, val) {
      return '<div class="fr"><span class="fl">'+label+'</span><span class="fv">'+(val||'—')+'</span></div>';
    }
    function sec(num, title) {
      return '<div class="sec"><span class="sn">'+num+'</span><span class="st">'+title+'</span></div>';
    }

    var h = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>';
    h += '<title>Ficha Social Compacta — '+data.nombrePaciente+'</title>';
    h += '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"/>';
    h += '<style>';
    h += '@page{size:letter portrait;margin:12mm 14mm}';
    h += '*{box-sizing:border-box;margin:0;padding:0}';
    h += 'body{font-family:Inter,Arial,sans-serif;font-size:8.5pt;color:#1c2a2a;background:#fff}';
    h += '.toolbar{display:flex;justify-content:flex-end;gap:8px;padding:8px 12px;background:#f0f4f8;border-bottom:1px solid #dde}';
    h += '.toolbar button{background:#1F3A5F;color:#fff;border:none;padding:6px 14px;border-radius:4px;font-size:8.5pt;font-weight:700;cursor:pointer;font-family:inherit}';
    h += '.hdr{background:#1F3A5F;color:#fff;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;padding:8px 14px;border-bottom:4px solid #4FC3C2;margin-bottom:6px;-webkit-print-color-adjust:exact;print-color-adjust:exact}';
    h += '.hdr-logo{background:#fff;padding:4px 8px;border-radius:5px;display:flex;align-items:center;flex-shrink:0}';
    h += '.hdr-logo img{height:34px;width:auto;object-fit:contain}';
    h += '.hdr-logo span{font-size:13px;font-weight:900;color:#1F3A5F;letter-spacing:2px}';
    h += '.hdr-center{text-align:center}';
    h += '.hdr-sup{font-size:7pt;opacity:.85;text-transform:uppercase;letter-spacing:1.2px;color:#fff}';
    h += '.hdr-name{font-size:14pt;font-weight:800;letter-spacing:3px;color:#4FC3C2}';
    h += '.hdr-tag{font-size:7pt;opacity:.8;color:#fff;margin-top:1px}';
    h += '.hdr-right{text-align:right}';
    h += '.hdr-doc{font-size:9pt;font-weight:700;color:#fff;letter-spacing:.3px;text-transform:uppercase}';
    h += '.hdr-meta{font-size:7pt;color:#a0b4c4;margin-top:2px}';
    h += '.badge{padding:3px 8px;border-radius:4px;font-size:8.5pt;font-weight:700;color:#fff;display:inline-block;margin-top:3px;-webkit-print-color-adjust:exact;print-color-adjust:exact}';
    h += '.bv{background:#2e9968}.ba{background:#d49100}.br{background:#c0392b}';
    h += '.sec{display:flex;align-items:center;gap:6px;margin:6px 0 4px;padding:2px 0 2px 6px;border-left:3px solid #4FC3C2;background:#f5fbfb}';
    h += '.sn{font-size:7.5pt;font-weight:700;color:#4FC3C2;min-width:14px}';
    h += '.st{font-size:8pt;font-weight:700;color:#1F3A5F;text-transform:uppercase;letter-spacing:.4px}';
    h += '.g2{display:grid;grid-template-columns:1fr 1fr;gap:1px 10px}';
    h += '.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px 10px}';
    h += '.fr{display:flex;align-items:baseline;gap:4px;padding:1.5px 0;border-bottom:1px dotted #e0e8e8}';
    h += '.fl{font-weight:600;font-size:7.8pt;color:#4a5a5a;white-space:nowrap;min-width:0}';
    h += '.fv{font-size:8.5pt;color:#1c2a2a;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}';
    h += '.fullrow{grid-column:1/-1}';
    h += '.obs{font-size:8pt;color:#1c2a2a;padding:2px 4px;background:#f9fafa;border-radius:2px;line-height:1.4;margin-top:2px;word-break:break-word}';
    h += '.risk-box{border-radius:6px;padding:8px 12px;margin:6px 0;border-left:4px solid '+rcBorder+';background:'+rcBg+';color:'+rcColor+'}';
    h += '.risk-box .rn{font-size:14pt;font-weight:800;letter-spacing:-.3px}';
    h += '.risk-box .rs{font-size:8pt;opacity:.9;margin-left:8px}';
    h += '.risk-box .ra{font-size:8pt;margin-top:3px;font-style:italic}';
    h += 'table.ft{width:100%;border-collapse:collapse;font-size:8pt;margin-top:3px}';
    h += 'table.ft th{background:#e7f6f5;color:#1F3A5F;font-size:7.5pt;padding:3px 6px;text-align:left;border:1px solid #cde}';
    h += 'table.ft td{padding:3px 6px;border:1px solid #dde;vertical-align:top}';
    h += 'table.ft tr.tot td{background:#fffaf0;font-weight:700;border-top:2px solid #f4b73c}';
    h += '.alerts-list{display:grid;grid-template-columns:1fr 1fr;gap:1px 10px;margin-top:3px}';
    h += '.al{font-size:8pt;padding:1.5px 0;color:#8b1f15}';
    h += '.firmas{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:14px}';
    h += '.firma{text-align:center;font-size:8pt}';
    h += '.firma .lin{border-top:1px solid #1c2a2a;margin-bottom:3px;margin-top:70px}';
    h += '.firma .fn{font-weight:700;font-size:8.5pt}';
    h += '.firma-pac{font-size:8pt}';
    h += '.fp-title{font-size:7pt;font-weight:700;color:#1F3A5F;text-transform:uppercase;letter-spacing:.4px;margin-bottom:7px;padding-bottom:3px;border-bottom:1px dotted #4FC3C2}';
    h += '.fp-row{display:flex;align-items:flex-end;gap:5px;margin-bottom:5px}';
    h += '.fp-lbl{font-weight:600;font-size:7.5pt;color:#4a5a5a;white-space:nowrap}';
    h += '.fp-line{flex:1;border-bottom:1px solid #1c2a2a;min-height:1.1em}';
    h += '.fp-short{flex:0 0 28mm!important}';
    h += '.pie{text-align:center;font-size:7pt;color:#888;margin-top:10px;border-top:1px solid #dde;padding-top:4px}';
    h += '@media print{.toolbar{display:none!important}body{font-size:8pt}}';
    h += '</style></head><body>';

    h += '<div class="toolbar"><button onclick="window.print()">Imprimir / PDF</button></div>';

    var logoHdrHtml = LOGO ? '<div class="hdr-logo"><img src="'+LOGO+'"/></div>' : '<div class="hdr-logo"><span>MUNAY</span></div>';
    h += '<div class="hdr">';
    h += logoHdrHtml;
    h += '<div class="hdr-center"><div class="hdr-sup">Centro Médico Quirúrgico</div>';
    h += '<div class="hdr-name">MUNAY</div>';
    h += '<div class="hdr-tag">Trabajo Social · La Paz, Bolivia</div></div>';
    h += '<div class="hdr-right"><div class="hdr-doc">Ficha de Evaluación Social</div>';
    h += '<span class="badge b'+riesgo.color[0]+'">'+riesgo.nivel+' — Score '+riesgo.score+'</span>';
    h += '<div class="hdr-meta">'+( data.profesional||'—')+'</div>';
    h += '<div class="hdr-meta">'+( data.fechaEvaluacion||'—')+'</div></div>';
    h += '</div>';

    h += sec('1','Datos generales del paciente');
    h += '<div class="g3">';
    h += row('N° HC', data.nroHC);
    h += row('F. ingreso', data.fechaIngreso);
    h += row('Diagnóstico', data.diagnostico);
    h += '<div class="fr fullrow"><span class="fl">Nombre completo:</span><span class="fv" style="white-space:normal">'+(data.nombrePaciente||'—')+'</span></div>';
    h += row('F. nacimiento', data.fechaNacimiento);
    h += row('Edad', data.edad);
    h += row('Sexo', data.sexo);
    h += row('Grado instrucción', data.gradoInstruccion);
    h += row('Fam. con fisura', data.antecedenteFisuraFamiliar);
    h += row('Ingreso familiar (Bs.)', data.ingresoMensual);
    h += '</div>';

    h += '<div class="g2" style="margin-top:3px">';
    h += '<div>';
    h += '<div style="font-size:7.5pt;font-weight:700;color:#1F3A5F;margin:3px 0 2px;border-bottom:1px dotted #4FC3C2">PADRE</div>';
    h += '<div class="g2">';
    h += row('Nombre', data.nombrePadre);
    h += row('Celular', data.celPadre);
    h += row('Edad', data.edadPadre);
    h += row('Ocupación', data.ocupacionPadre);
    h += row('Instrucción', data.instruccionPadre);
    h += row('Profesión', data.profesionPadre);
    h += '</div></div>';
    h += '<div>';
    h += '<div style="font-size:7.5pt;font-weight:700;color:#1F3A5F;margin:3px 0 2px;border-bottom:1px dotted #4FC3C2">MADRE / RESPONSABLE</div>';
    h += '<div class="g2">';
    h += row('Nombre', data.nombreMadre);
    h += row('Celular', data.celMadre);
    h += row('Edad', data.edadMadre);
    h += row('Ocupación', data.ocupacionMadre);
    h += row('Instrucción', data.instruccionMadre);
    h += row('Profesión', data.profesionMadre);
    h += '</div></div>';
    h += '</div>';

    h += '<div class="g3" style="margin-top:3px">';
    h += row('Domicilio', data.domicilio);
    h += row('Departamento', data.departamento);
    h += row('Provincia', data.provincia);
    h += row('N° hermanos', data.nroHermanos);
    h += '</div>';
    if (data.observaciones) {
      h += '<div class="obs">Observaciones: '+data.observaciones+'</div>';
    }

    h += sec('2','Acceso al servicio y adherencia');
    h += '<div class="g3">';
    h += row('Distancia hospital', data.distanciaHospital);
    h += row('Transporte', data.medioTransporte);
    h += row('Dificultad económica', data.dificultadEconomica);
    h += row('Acompañante habitual', data.acompanante);
    h += row('Disp. cuidador controles', data.disponibilidadCuidador);
    h += row('Perdió controles', data.controlesPerdidos+(motivoStr?' ('+motivoStr+')':''));
    h += '</div>';

    h += sec('3','Vivienda, servicios básicos y hacinamiento');
    h += '<div class="g3">';
    h += row('Tipo vivienda', data.tipoVivienda+(data.tipoViviendaOtro?' ('+data.tipoViviendaOtro+')':''));
    h += row('Material', data.materialVivienda);
    h += row('Personas hogar / Hab. dormir', (data.personasHogar||'—')+' / '+(data.habitacionesDormir||'—')+' → Índice: '+hacIdx);
    h += '</div>';
    h += '<div class="obs" style="margin-top:3px">'+srvLines+'</div>';

    h += sec('4','Alertas y criterios de activación');
    if (data.alertas.length > 0) {
      h += '<div class="alerts-list">';
      data.alertas.forEach(function(a){ h += '<div class="al">⚠ '+a+'</div>'; });
      h += '</div>';
    } else {
      h += '<div class="obs">Sin alertas marcadas.</div>';
    }
    if (data.criteriosActivacion.length > 0) {
      h += '<div class="obs" style="margin-top:3px;color:#8b1f15"><strong>Criterios activación:</strong> '+criteriosStr+'</div>';
    }

    h += sec('5','Observación profesional');
    h += '<div class="g2">';
    h += row('Aspecto del niño', data.aspectoNino);
    h += row('Interacción familiar', data.interaccionFamiliar);
    h += '</div>';
    h += '<div class="obs" style="margin-top:3px">Comprensión familiar — '+compLines+'</div>';

    h += sec('6','Clasificación de riesgo');
    h += '<div class="risk-box">';
    h += '<span class="rn">'+riesgo.nivel+'</span><span class="rs">Score '+riesgo.score+' — '+riesgo.accion+'</span>';
    h += '</div>';
    if (riesgo.det.length > 0) {
      h += '<table class="ft"><thead><tr><th>Factor de riesgo</th><th style="width:60px;text-align:center">Puntaje</th></tr></thead><tbody>';
      riesgo.det.forEach(function(d){ h += '<tr><td>'+d.f+'</td><td style="text-align:center">'+d.p+'</td></tr>'; });
      h += '<tr class="tot"><td>Total</td><td style="text-align:center">'+riesgo.score+'</td></tr>';
      h += '</tbody></table>';
    }

    h += '<div class="firmas">';
    h += '<div class="firma"><div class="lin"></div><div class="fn">'+(data.profesional||'___________________________')+'</div><div>Profesional de Trabajo Social</div></div>';
    h += '<div class="firma-pac">';
    h += '<div class="fp-title">Firma del Paciente / Responsable</div>';
    h += '<div class="fp-row"><span class="fp-lbl">Nombre completo:</span><span class="fp-line"></span></div>';
    h += '<div class="fp-row"><span class="fp-lbl">Relación con el paciente:</span><span class="fp-line"></span></div>';
    h += '<div class="fp-row"><span class="fp-lbl">C.I.:</span><span class="fp-line fp-short"></span></div>';
    h += '<div style="border-top:1px solid #1c2a2a;margin-top:20px;margin-bottom:3px"></div>';
    h += '<div style="font-size:7.5pt;text-align:center;color:#4a5a5a">Firma</div>';
    h += '</div>';
    h += '</div>';

    h += '<div class="pie">Centro Médico Quirúrgico MUNAY · La Paz, Bolivia · Trabajo Social</div>';
    h += '</body></html>';

    var win = window.open('', '_blank', 'width=820,height=1060');
    win.document.write(h);
    win.document.close();
    win.focus();
  }

  const TABS=[['generales','1. Generales'],['acceso','2. Acceso'],['vivienda','3. Vivienda'],['alertas','4. Alertas'],['observacion','5. Observacion'],['resumen','6. Resumen']];

  const logoEl = LOGO
    ? e('div',{style:{background:'#FFF',padding:'5px 10px',borderRadius:'6px',display:'flex',alignItems:'center',flexShrink:0}},
        e('img',{src:LOGO,style:{height:'46px',width:'auto',objectFit:'contain'}}))
    : e('div',{style:{background:'#FFF',padding:'5px 10px',borderRadius:'6px',flexShrink:0}},
        e('span',{style:{fontSize:'14px',fontWeight:'900',color:'#1F3A5F',letterSpacing:'2px'}},'MUNAY'));

  const p = (id) => 'panel'+(tab!==id?' off':'');

  return e('div',{className:'app'},

    e('header',{className:'hdr'},
      logoEl,
      e('div',{style:{textAlign:'center',color:'#FFF',zIndex:1}},
        e('div',{style:{fontSize:'12px',fontWeight:'700',letterSpacing:'2.5px',textTransform:'uppercase',opacity:.85}},'Centro Medico Quirurgico'),
        e('div',{style:{fontSize:'20px',fontWeight:'900',letterSpacing:'5px',color:'#4FC3C2',marginTop:'2px'}},'MUNAY'),
        e('div',{style:{fontSize:'11px',opacity:.85,marginTop:'1px'}},'Trabajo Social')),
      e('div',{className:'riesgo-hdr rh-'+riesgo.color},
        e('span',{className:'rl'},'Riesgo'),
        e('span',{className:'rv'},riesgo.nivel),
        e('span',{className:'rs'},'Score '+riesgo.score))),

    e('div',{className:'print-bar'},
      e('button',{className:'clr',onClick:()=>{if(confirm('Limpiar el formulario?'))setData(BASE);}},'Limpiar'),
      e('button',{className:'compact',onClick:()=>compactPrint()},'Imprimir compacto'),
      e('button',{onClick:()=>{if(window.opener&&!window.opener.closed){window.opener.postMessage({type:'MUNAY_PRINT_FICHA_SOCIAL',patientId:data.patientId||'',clinicalData:data},'*');}window.print();}},'Imprimir completo')),

    e('nav',{className:'tabs'},
      TABS.map(([id,lbl])=>e('button',{key:id,className:'tab'+(tab===id?' active':''),onClick:()=>setTab(id)},lbl))),

    e('main',null,

      e('section',{className:p('generales')},
        e('h2',null,'1. Datos generales del paciente'),
        e('div',{className:'grid'},
          e(Field,{label:'N.° HC'},e('input',{value:data.nroHC,onChange:ev=>set('nroHC',ev.target.value)})),
          e(Field,{label:'Fecha de ingreso'},e('input',{type:'date',value:data.fechaIngreso,onChange:ev=>set('fechaIngreso',ev.target.value)})),
          e(Field,{label:'Nombre completo',full:true},e('input',{value:data.nombrePaciente,onChange:ev=>set('nombrePaciente',ev.target.value)})),
          e(Field,{label:'Fecha de nacimiento'},e('input',{type:'date',value:data.fechaNacimiento,onChange:ev=>set('fechaNacimiento',ev.target.value)})),
          e(Field,{label:'Edad'},e('input',{value:data.edad,onChange:ev=>set('edad',ev.target.value),placeholder:'5 anios 0 meses'})),
          e(Field,{label:'Sexo'},e('select',{value:data.sexo,onChange:ev=>set('sexo',ev.target.value)},
            e('option',{value:''},'—'),e('option',null,'MASCULINO'),e('option',null,'FEMENINO'))),
          e(Field,{label:'Grado de instruccion'},e('input',{value:data.gradoInstruccion,onChange:ev=>set('gradoInstruccion',ev.target.value),placeholder:'Kinder, Primaria...'})),
          e(Field,{label:'Diagnostico'},e('input',{value:data.diagnostico,onChange:ev=>set('diagnostico',ev.target.value),placeholder:'Diagnóstico del paciente'}))),
        e('h3',null,'Padre'),
        e('div',{className:'grid'},
          e(Field,{label:'Nombre',full:true},e('input',{value:data.nombrePadre,onChange:ev=>set('nombrePadre',ev.target.value)})),
          e(Field,{label:'Celular'},e('input',{value:data.celPadre,onChange:ev=>set('celPadre',ev.target.value)})),
          e(Field,{label:'Edad'},e('input',{value:data.edadPadre,onChange:ev=>set('edadPadre',ev.target.value)})),
          e(Field,{label:'Ocupacion'},e('input',{value:data.ocupacionPadre,onChange:ev=>set('ocupacionPadre',ev.target.value)})),
          e(Field,{label:'Grado instruccion'},e('input',{value:data.instruccionPadre,onChange:ev=>set('instruccionPadre',ev.target.value)})),
          e(Field,{label:'Profesion'},e('input',{value:data.profesionPadre,onChange:ev=>set('profesionPadre',ev.target.value)}))),
        e('h3',null,'Madre / Responsable'),
        e('div',{className:'grid'},
          e(Field,{label:'Nombre',full:true},e('input',{value:data.nombreMadre,onChange:ev=>set('nombreMadre',ev.target.value)})),
          e(Field,{label:'Celular'},e('input',{value:data.celMadre,onChange:ev=>set('celMadre',ev.target.value)})),
          e(Field,{label:'Edad'},e('input',{value:data.edadMadre,onChange:ev=>set('edadMadre',ev.target.value)})),
          e(Field,{label:'Ocupacion'},e('input',{value:data.ocupacionMadre,onChange:ev=>set('ocupacionMadre',ev.target.value)})),
          e(Field,{label:'Grado instruccion'},e('input',{value:data.instruccionMadre,onChange:ev=>set('instruccionMadre',ev.target.value)})),
          e(Field,{label:'Profesion'},e('input',{value:data.profesionMadre,onChange:ev=>set('profesionMadre',ev.target.value)}))),
        e('h3',null,'Domicilio y contexto familiar'),
        e('div',{className:'grid'},
          e(Field,{label:'Domicilio',full:true},e('input',{value:data.domicilio,onChange:ev=>set('domicilio',ev.target.value)})),
          e(Field,{label:'Departamento'},e('input',{value:data.departamento,onChange:ev=>set('departamento',ev.target.value)})),
          e(Field,{label:'Provincia'},e('input',{value:data.provincia,onChange:ev=>set('provincia',ev.target.value)})),
          e(Field,{label:'N.° de hermanos'},e('input',{type:'number',value:data.nroHermanos,onChange:ev=>set('nroHermanos',ev.target.value)})),
          e(Field,{label:'Familiares con fisura'},e('select',{value:data.antecedenteFisuraFamiliar,onChange:ev=>set('antecedenteFisuraFamiliar',ev.target.value)},
            e('option',{value:''},'—'),e('option',null,'SI'),e('option',null,'NO'))),
          e(Field,{label:'Ingreso mensual familiar (Bs.)'},e('input',{type:'number',value:data.ingresoMensual,onChange:ev=>set('ingresoMensual',ev.target.value)})),
          e(Field,{label:'Observaciones',full:true},e('textarea',{rows:2,value:data.observaciones,onChange:ev=>set('observaciones',ev.target.value)})))),

      e('section',{className:p('acceso')},
        e('h2',null,'2. Acceso al servicio y adherencia'),
        e('div',{className:'block'},
          e('h4',null,'Distancia al hospital'),
          e('div',{className:'chips'},['<30 min','30 min - 1 hora','1-3 horas','>3 horas'].map(o=>
            e(Radio,{key:o,name:'dist',value:o,current:data.distanciaHospital,onChange:v=>set('distanciaHospital',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Medio de transporte'),
          e('div',{className:'chips'},['Publico','Bus','Propio','Caminando','Vuelo','Otro'].map(o=>
            e(Radio,{key:o,name:'transp',value:o,current:data.medioTransporte,onChange:v=>set('medioTransporte',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Dificultad economica para asistir'),
          e('div',{className:'chips'},['Ninguna','Ocasional','Frecuente','Grave'].map(o=>
            e(Radio,{key:o,name:'difEcon',value:o,current:data.dificultadEconomica,onChange:v=>set('dificultadEconomica',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Quien acompana habitualmente al paciente'),
          e('div',{className:'chips'},['Madre','Padre','Abuelos','Otro'].map(o=>
            e(Radio,{key:o,name:'acomp',value:o,current:data.acompanante,onChange:v=>set('acompanante',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'El cuidador tiene disponibilidad para controles frecuentes'),
          e('div',{className:'chips'},['Si','Parcial','No'].map(o=>
            e(Radio,{key:o,name:'dispCuid',value:o,current:data.disponibilidadCuidador,onChange:v=>set('disponibilidadCuidador',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'El paciente perdio controles anteriormente'),
          e('div',{className:'chips'},['No','Si'].map(o=>
            e(Radio,{key:o,name:'controles',value:o,current:data.controlesPerdidos,onChange:v=>set('controlesPerdidos',v)},o))),
          data.controlesPerdidos==='Si'&&e('div',{className:'sub-block'},
            e('h5',null,'Motivo (puede seleccionar varios)'),
            e('div',{className:'chips'},['Economico','Transporte','Trabajo','Desconocimiento','Otro'].map(o=>
              e(Check,{key:o,checked:data.motivoPerdida.includes(o),onChange:()=>tog('motivoPerdida',o)},o)))))),

      e('section',{className:p('vivienda')},
        e('h2',null,'3. Vivienda, servicios basicos y hacinamiento'),
        e('div',{className:'block'},
          e('h4',null,'Tipo de vivienda'),
          e('div',{className:'chips'},['Propia','Alquilada','Anticretico','Cedida','Otro'].map(o=>
            e(Radio,{key:o,name:'tipoViv',value:o,current:data.tipoVivienda,onChange:v=>set('tipoVivienda',v)},o))),
          data.tipoVivienda==='Otro'&&e('div',{className:'sub-block',style:{marginTop:'8px'}},
            e(Field,{label:'Describir'},e('input',{value:data.tipoViviendaOtro,onChange:ev=>set('tipoViviendaOtro',ev.target.value),placeholder:'Describa el tipo de vivienda'})))),
        e('div',{className:'block'},
          e('h4',null,'Material predominante'),
          e('div',{className:'chips'},['Ladrillo','Adobe','Madera','Precario/improvisado'].map(o=>
            e(Radio,{key:o,name:'matViv',value:o,current:data.materialVivienda,onChange:v=>set('materialVivienda',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Servicios basicos'),
          e('table',{className:'services'},
            e('thead',null,e('tr',null,e('th',null,'Servicio'),e('th',null,'Si'),e('th',null,'No'))),
            e('tbody',null,
              [['aguaPotable','Agua potable'],['alcantarillado','Alcantarillado'],['electricidad','Electricidad'],['internet','Internet'],['gasDomiciliario','Gas domiciliario']].map(([k,lbl])=>
                e('tr',{key:k},
                  e('td',null,lbl),
                  e('td',null,e('input',{type:'radio',name:'srv-'+k,checked:data.servicios[k]===true,onChange:()=>setN('servicios',k,true)})),
                  e('td',null,e('input',{type:'radio',name:'srv-'+k,checked:data.servicios[k]===false,onChange:()=>setN('servicios',k,false)}))))))),
        e('div',{className:'block'},
          e('h4',null,'Hacinamiento'),
          e('p',{className:'hint'},'Indicador clave de riesgo social. Se calcula automaticamente.'),
          e('div',{className:'grid'},
            e(Field,{label:'Personas en el hogar'},e('input',{type:'number',min:'1',value:data.personasHogar,onChange:ev=>set('personasHogar',ev.target.value)})),
            e(Field,{label:'Habitaciones para dormir'},e('input',{type:'number',min:'1',value:data.habitacionesDormir,onChange:ev=>set('habitacionesDormir',ev.target.value)})),
            e(Field,{label:'Indice (pers./hab.)'},e('input',{readOnly:true,style:{background:'#f5f5f5'},value:data.personasHogar&&data.habitacionesDormir?(parseInt(data.personasHogar,10)/parseInt(data.habitacionesDormir,10)).toFixed(2):''}))),
          data.personasHogar&&data.habitacionesDormir&&parseInt(data.personasHogar,10)/parseInt(data.habitacionesDormir,10)>3&&
            e('div',{className:'warn'},'Hacinamiento: mas de 3 personas por habitacion de dormir.'))),

      e('section',{className:p('alertas')},
        e('h2',null,'4. Checklist de alerta y criterios de activacion'),
        e('div',{className:'block'},
          e('h4',null,'Checklist de alerta social'),
          e('p',{className:'hint'},'Marque todas las que apliquen.'),
          e('div',{className:'chips chips-grid'},OPT_ALERTAS.map(o=>
            e(Check,{key:o,checked:data.alertas.includes(o),onChange:()=>tog('alertas',o)},o))),
          e('div',{className:'semaforo s-'+clsA.color},
            e('strong',null,clsA.label+': '),
            e('span',null,clsA.desc))),
        e('div',{className:'block'},
          e('h4',null,'Criterios para activar Ficha Social Integral'),
          e('p',{className:'hint'},'Activar si existe alguno de los siguientes:'),
          e('div',{className:'chips chips-grid'},OPT_CRIT.map(o=>
            e(Check,{key:o,checked:data.criteriosActivacion.includes(o),onChange:()=>tog('criteriosActivacion',o)},o))),
          debeActivar&&e('div',{className:'alert-box'},
            '🚨 ',e('strong',null,'Activacion recomendada de Ficha Social Integral.'),
            ' Coordinar con Trabajo Social y Psicologia del Centro.'))),

      e('section',{className:p('observacion')},
        e('h2',null,'5. Observacion profesional'),
        e('div',{className:'block'},
          e('h4',null,'Aspecto del nino'),
          e('div',{className:'chips'},['Adecuado','Descuidado','Sospecha de desnutricion','Ansiedad/miedo marcado'].map(o=>
            e(Radio,{key:o,name:'aspecto',value:o,current:data.aspectoNino,onChange:v=>set('aspectoNino',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'Interaccion familiar'),
          e('div',{className:'chips'},['Adecuada','Sobreprotectora','Hostil','Desinteres aparente'].map(o=>
            e(Radio,{key:o,name:'interac',value:o,current:data.interaccionFamiliar,onChange:v=>set('interaccionFamiliar',v)},o)))),
        e('div',{className:'block'},
          e('h4',null,'La familia comprende:'),
          e('table',{className:'services'},
            e('thead',null,e('tr',null,e('th',null,'Tema'),e('th',null,'Si'),e('th',null,'Parcial'),e('th',null,'No'))),
            e('tbody',null,
              [
                ['importanciaControles','Importancia de controles'],
                ['cirugiasMultiples','Necesidad de cirugias multiples'],
                ['cuidadosPostquirurgicos','Cuidados postquirurgicos'],
                ['importanciaTerapias','Importancia de terapias']
              ].map(([k,lbl])=>
                e('tr',{key:k},
                  e('td',null,lbl),
                  ['Si','Parcial','No'].map(v=>
                    e('td',{key:v},e('input',{type:'radio',name:'comp-'+k,checked:data.comprension[k]===v,onChange:()=>setN('comprension',k,v)})))))))),
        e('div',{className:'grid',style:{marginTop:'16px'}},
          e(Field,{label:'Profesional evaluador'},e('input',{value:data.profesional,onChange:ev=>set('profesional',ev.target.value)})),
          e(Field,{label:'Fecha de evaluacion'},e('input',{type:'date',value:data.fechaEvaluacion,onChange:ev=>set('fechaEvaluacion',ev.target.value)})))),

      e('section',{className:p('resumen')},
        e('h2',null,'6. Resumen y clasificacion de riesgo'),
        e('div',{className:'rcard r'+riesgo.color[0]},
          e('div',{className:'rc-h'},
            e('span',{className:'rc-l'},'Nivel de riesgo'),
            e('span',{className:'rc-n'},riesgo.nivel)),
          e('div',{className:'rc-s'},'Puntaje total: '+riesgo.score),
          e('p',{className:'rc-a'},riesgo.accion)),
        e('div',{className:'block'},
          e('h4',null,'Factores de riesgo detectados'),
          riesgo.det.length===0
            ? e('p',{className:'hint'},'No se detectaron factores de riesgo cuantificables.')
            : e('table',{className:'services'},
                e('thead',null,e('tr',null,e('th',null,'Factor'),e('th',null,'Puntos'))),
                e('tbody',null,
                  riesgo.det.map((d,i)=>e('tr',{key:i},e('td',null,d.f),e('td',null,d.p))),
                  e('tr',{className:'total'},e('td',null,e('strong',null,'Total')),e('td',null,e('strong',null,riesgo.score)))))),
        e('div',{className:'block'},
          e('h4',null,'Escala de interpretacion'),
          e('ul',{className:'legend'},
            e('li',{className:'lv'},'0-2 — Riesgo bajo'),
            e('li',{className:'la'},'3-5 — Riesgo moderado'),
            e('li',{className:'lr'},'6+ — Riesgo alto — Ficha integral obligatoria'))),
        data.alertas.length>0&&e('div',{className:'block'},
          e('h4',null,'Alertas marcadas ('+data.alertas.length+')'),
          e('ul',{className:'bullets'},data.alertas.map(a=>e('li',{key:a},a)))),
        data.criteriosActivacion.length>0&&e('div',{className:'block'},
          e('h4',null,'Criterios de activacion marcados'),
          e('ul',{className:'bullets'},data.criteriosActivacion.map(a=>e('li',{key:a},a)))),
        e('button',{className:'btn-limpiar',onClick:()=>{if(confirm('Limpiar el formulario?'))setData(BASE);}},'Limpiar formulario'))),

    e('div',{className:'bot'}),
    e('footer',{className:'foot'},
      e('span',null,'Centro Medico Quirurgico MUNAY — La Paz, Bolivia — Trabajo Social'),
      e('span',null,'v1.0 — '+data.fechaEvaluacion)));
}

ReactDOM.createRoot(document.getElementById('root')).render(e(FichaSocial));
</script>
</body></html>`;

  const win = window.open('', '_blank', 'width=1100,height=860');
  win.document.write(html);
  win.document.close();
  win.focus();
}
