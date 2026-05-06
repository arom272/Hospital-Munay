import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, isValid } from 'date-fns';
import {
  User, Users, DollarSign, History,
  Printer, PauseCircle, XCircle, X, Pencil,
  CheckCircle, AlertCircle, CalendarClock, Loader2, FileText
} from 'lucide-react';
import useStore      from '../../store/useStore';
import Badge         from '../ui/Badge';
import logoImg       from '../../../LOGO.jpg';
import logo2Img      from '../../../LOGO 2.jpg';
import { getTypeInfo } from '../../utils/patientTypes';

// ── Helpers ──────────────────────────────────────────────────────────────────

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
  if (!age) return '—';
  const parts = [];
  if (age.years > 0)  parts.push(`${age.years}a`);
  if (age.months > 0) parts.push(`${age.months}m`);
  if (age.days > 0 || parts.length === 0) parts.push(`${age.days}d`);
  return parts.join(' ');
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
    { label: 'Diagnóstico',          value: patient?.diagnosis ?? '—' },
    { label: 'Fecha de internación', value: dateStr },
    { label: 'Hora de internación',  value: surgery.admissionTime || '—' },
  ];
  const right = [
    { label: 'Hora de ayuno', value: surgery.fastingTime || (surgery.fastingHours ? `${surgery.fastingHours} h` : '—') },
    { label: 'Peso',          value: surgery.peso  ? `${surgery.peso} kg`  : '—' },
    { label: 'Talla',         value: surgery.talla ? `${surgery.talla} cm` : '—' },
    { label: 'Edad',           value: fmtAge(age) },
    { label: 'Alergias/Med.', value: patient?.allergies ? patient.allergies.substring(0, 50) : '—' },
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
  const logo = await getLogoBase64(logo2Img);
  const { left, right } = buildFichaFields(surgery, patient);
  const now = format(new Date(), "dd/MM/yyyy HH:mm");

  // ─── Design 1: CLÍNICO ────────────────────────────────────────────────────
  const babySvg = `<svg style="width:68px;height:68px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="32" r="18" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><path d="M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z" fill="#3D7AAB" stroke="#1F3A5F" stroke-width="1.2"/><path d="M 32 32 Q 34 30 36 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M 44 32 Q 46 30 48 32" stroke="#1A2B42" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="28" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><circle cx="52" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/><path d="M 36 38 Q 40 41 44 38" stroke="#1A2B42" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M 25 50 Q 25 65 40 65 Q 55 65 55 50" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.8"/><ellipse cx="22" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(-20 22 52)"/><ellipse cx="58" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" stroke-width="1.5" transform="rotate(20 58 52)"/><path d="M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z" fill="#3D7AAB"/></svg>`;
  const logoWrapperHtml = logo
    ? `<div style="background:#FFFFFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;min-height:68px;flex-shrink:0;"><img src="${logo}" style="width:62px;height:62px;object-fit:contain;"/></div>`
    : `<div style="background:#FFFFFF;padding:6px 14px;border-radius:6px;min-height:68px;display:flex;align-items:center;flex-shrink:0;"><span style="font-size:16px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>`;
  const clin1LeftIcons = [
    '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>',
    '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ];
  const clin1RightIcons = [
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    '<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>',
    '<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>',
    '<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>',
    '<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>',
  ];
  const mkClin1Row = (fields, icons) => fields.map(({ label, value }, i) => {
    const bg = i % 2 === 1 ? '#F4F7FA' : '#FFFFFF';
    return `<div style="display:grid;grid-template-columns:50px 1fr 1fr;align-items:center;padding:10px 14px 10px 10px;border-bottom:1px solid #E5EBF2;background:${bg};"><div style="width:32px;height:32px;border-radius:50%;background:#2B5C8A;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 1px 3px rgba(43,92,138,0.25);"><svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:#FFFFFF;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;">${icons[i]}</svg></div><span style="font-size:12px;color:#5A6B82;font-weight:500;padding-left:4px;">${label}</span><span style="font-size:13px;font-weight:700;color:#1A2B42;max-width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${value}</span></div>`;
  }).join('');

  const card1 = `
    <div style="background:#1F3A5F;padding:14px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:4px solid #4FC3C2;">
      ${logoWrapperHtml}
      <div style="text-align:center;color:#FFFFFF;"><div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Centro Médico Quirúrgico</div><div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#4FC3C2;margin-top:2px;">MUNAY</div></div>
      <div style="text-align:right;color:#FFFFFF;"><div style="font-size:18px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;">Programación Quirúrgica</div><div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:3px;">${now}</div></div>
    </div>
    <div style="padding:14px 24px 10px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;flex-shrink:0;">
      <div><div style="font-size:22px;font-weight:700;color:#1F3A5F;letter-spacing:-0.3px;line-height:1.1;">${surgery.patientName ?? '—'}</div><div style="font-size:16px;font-weight:700;color:#3DA8A7;letter-spacing:0.5px;margin-top:5px;text-transform:uppercase;">${surgery.surgeryType ?? '—'}</div></div>
      ${babySvg}
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:0 24px 18px;overflow:hidden;">
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${mkClin1Row(left, clin1LeftIcons)}</div>
      <div style="border:1px solid #D5DEE8;border-radius:4px;overflow:hidden;">${mkClin1Row(right, clin1RightIcons)}</div>
    </div>
    <div style="height:6px;background:#4FC3C2;flex-shrink:0;"></div>`;

  // ─── Design 2: PEDIÁTRICO ─────────────────────────────────────────────────
  const bearSvg = `<svg style="width:65px;height:65px;flex-shrink:0;" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="22" r="10" fill="#C9A57B"/><circle cx="60" cy="22" r="10" fill="#C9A57B"/><circle cx="20" cy="22" r="6" fill="#E8C9A8"/><circle cx="60" cy="22" r="6" fill="#E8C9A8"/><ellipse cx="40" cy="38" rx="22" ry="20" fill="#D4B088"/><ellipse cx="40" cy="44" rx="12" ry="10" fill="#F0DAB8"/><rect x="22" y="55" width="36" height="18" rx="3" fill="#A8C5E8"/><path d="M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z" fill="#FFFFFF"/><ellipse cx="32" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><ellipse cx="48" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/><circle cx="32.8" cy="35" r="0.8" fill="#FFFFFF"/><circle cx="48.8" cy="35" r="0.8" fill="#FFFFFF"/><ellipse cx="40" cy="42" rx="2.5" ry="2" fill="#2A2A3E"/><path d="M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47" stroke="#2A2A3E" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="25" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/><circle cx="55" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/></svg>`;
  const logoCircleHtml = logo
    ? `<div style="width:74px;height:74px;background:linear-gradient(135deg,#E8DFFA 0%,#D4C5EC 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 10px rgba(107,95,191,0.2);overflow:hidden;"><img src="${logo}" style="width:68px;height:68px;object-fit:contain;" /></div>`
    : `<div style="width:74px;height:74px;background:linear-gradient(135deg,#E8DFFA 0%,#D4C5EC 100%);border-radius:50%;flex-shrink:0;"></div>`;
  const ped2LeftIcons = [
    { bg: '#C7B8E8', svg: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>' },
    { bg: '#A8DDDA', svg: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>' },
    { bg: '#F4C58A', svg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
  ];
  const ped2RightIcons = [
    { bg: '#F5D88A', svg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
    { bg: '#F0A8B8', svg: '<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>' },
    { bg: '#B5C9E8', svg: '<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>' },
    { bg: '#F0B5A8', svg: '<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>' },
    { bg: '#D4C5EC', svg: '<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>' },
  ];
  const mkPed2Row = (fields, icons) => fields.map(({ label, value }, i) => {
    const ic = icons[i] ?? { bg: '#D4C5EC', svg: '<circle cx="12" cy="12" r="6"/>' };
    return `<div style="display:grid;grid-template-columns:34px 1fr auto;align-items:center;gap:10px;padding:5px 0;border-bottom:1px dashed #EDE7F7;"><div style="width:32px;height:32px;border-radius:50%;background:${ic.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:#FFFFFF;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;">${ic.svg}</svg></div><span style="font-size:11px;color:#6B6B7E;font-weight:500;">${label}</span><span style="font-size:12px;font-weight:700;color:#2A2A3E;text-align:right;max-width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${value}</span></div>`;
  }).join('');

  const card2 = `
    <div style="background:linear-gradient(180deg,#FFFFFF 0%,#FBFAFE 100%);padding:14px 24px 10px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;flex-shrink:0;border-bottom:1px solid #E8E4F2;">
      <div style="display:flex;align-items:center;gap:10px;">${logoCircleHtml}<div><div style="font-size:11px;font-weight:700;color:#6B5FBF;text-transform:uppercase;letter-spacing:1px;">Centro Médico Quirúrgico</div><div style="font-size:19px;font-weight:900;color:#4A3F8C;letter-spacing:3px;margin-top:1px;">MUNAY</div></div></div>
      <div style="text-align:center;"><div style="font-size:19px;font-weight:700;color:#6B5FBF;letter-spacing:1.2px;text-transform:uppercase;">Orden de Internación</div><div style="font-size:10px;color:#5A5A6E;margin-top:2px;">${now}</div></div>
      ${bearSvg}
    </div>
    <div style="margin:8px 24px 10px;background:linear-gradient(90deg,#EFE9FA 0%,#F3EEFC 100%);border-radius:12px;padding:10px 18px;display:flex;align-items:center;gap:12px;flex-shrink:0;">
      <div style="flex:1;font-size:18px;font-weight:700;color:#5B4FB8;">${surgery.patientName ?? '—'}</div>
      <div style="width:1px;height:22px;background:linear-gradient(180deg,transparent,#C5B5E5,transparent);flex-shrink:0;"></div>
      <div style="font-size:16px;font-weight:700;color:#2A2A3E;white-space:nowrap;max-width:220px;overflow:hidden;text-overflow:ellipsis;">${surgery.surgeryType ?? '—'}</div>
    </div>
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 24px 12px;overflow:hidden;">
      <div style="background:#FBFAFE;border:1px solid #E8E4F2;border-radius:12px;padding:10px 14px;display:flex;flex-direction:column;gap:5px;overflow:hidden;">${mkPed2Row(left, ped2LeftIcons)}</div>
      <div style="background:#FBFAFE;border:1px solid #E8E4F2;border-radius:12px;padding:10px 14px;display:flex;flex-direction:column;gap:5px;overflow:hidden;">${mkPed2Row(right, ped2RightIcons)}</div>
    </div>
    <div style="height:28px;background:linear-gradient(180deg,transparent 0%,#E8F5E0 100%);flex-shrink:0;position:relative;overflow:hidden;"><div style="position:absolute;bottom:3px;left:0;right:0;font-size:10px;color:#F5B5C8;text-align:center;letter-spacing:20px;">✿ ❀ ✿ ❀</div></div>`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/>
<title>Programación Quirúrgica — ${surgery.patientName}</title>
<style>
  @page { size: 8.5in 11in portrait; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 8.5in; height: 11in; font-family: Arial, sans-serif; }
  .copy { height: 5.5in; display: flex; flex-direction: column; overflow: hidden; }
  hr.divider { border: none; border-top: 2px dashed #b0bec5; }
</style>
</head>
<body>
  <div class="copy">${card1}</div>
  <hr class="divider"/>
  <div class="copy">${card2}</div>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=816,height=1056');
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 500);
}

async function printConsentForm(surgery, patient) {
  const logo2       = await getLogoBase64(logo2Img);
  const surgeon     = surgery.surgeon     || '___________';
  const patientName = surgery.patientName || '___________';
  const guardian    = patient?.guardian   || '___________';
  const ci          = patient?.guardianIdNumber || patient?.idNumber || '___________';
  const address     = patient?.address    || '___________';
  const procedure   = surgery.surgeryType || '___________';
  const dateStr     = surgery.date
    ? format(new Date(surgery.date + 'T12:00'), 'dd/MM/yyyy')
    : '___________';

  const logoBoxHtml = logo2
    ? `<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${logo2}" style="height:60px;width:auto;object-fit:contain;"/></div>`
    : `<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>`;

  const hl = (t) => `<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${t}</span>`;

  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Consentimiento Informado — ${patientName}</title>
<style>
  @page{size:8.5in 11in portrait;margin:0}*{box-sizing:border-box;margin:0;padding:0}
  body{width:8.5in;height:11in;font-family:Arial,Helvetica,sans-serif;font-size:10pt;color:#1a1a1a;line-height:1.5;display:flex;flex-direction:column}
  .hdr{background:#1F3A5F;padding:12px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;flex-shrink:0}
  .pstrip{background:linear-gradient(90deg,#EBF4FF,#F4F7FA);padding:7px 24px;border-bottom:1px solid #D5DEE8;flex-shrink:0;display:flex;align-items:center}
  .pi{font-size:9pt;padding:0 12px;border-right:1px solid #C5D8EE}.pi:first-child{padding-left:0}.pi:last-child{border-right:none}
  .pi .lbl{color:#5A6B82}.pi strong{color:#1F3A5F}
  .content{flex:1;padding:14px 26px 10px;display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;flex-direction:column;gap:8px}
  .doc-title{text-align:center;font-size:12pt;font-weight:bold;color:#1F3A5F;text-transform:uppercase;border-bottom:2px solid #4FC3C2;padding-bottom:6px;margin-bottom:4px}
  .s{text-align:justify;font-size:10pt;line-height:1.5}.s strong{color:#1F3A5F}
  .rl{margin:4px 0 0 20px}.rl li{font-size:9.5pt;line-height:1.45;margin-bottom:3px}
  .banner{text-align:center;font-weight:bold;font-size:10pt;color:#1F3A5F;background:#EBF4FF;border:1px solid #C5D8EE;border-radius:4px;padding:7px 14px}
  .bottom{display:flex;flex-direction:column;gap:10px}
  .sigs{display:flex;gap:28px}.sig{flex:1;text-align:center}
  .stamp-box{border:1px dashed #8AAFC8;border-radius:6px;height:72px;display:flex;align-items:center;justify-content:center;color:#A0B8CC;font-size:9pt;letter-spacing:1px;margin-bottom:8px}
  .sig-line{border-top:1px solid #555;margin-bottom:5px}
  .sig-txt{font-size:9pt;line-height:1.6}
  .date-row{text-align:right;font-size:10pt;color:#1F3A5F;padding-right:2px}
  .bot{height:5px;background:#4FC3C2;flex-shrink:0}
</style></head><body>
<div class="hdr">
  ${logoBoxHtml}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:13px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;opacity:.85">Centro Médico Quirúrgico</div>
    <div style="font-size:24px;font-weight:900;letter-spacing:5px;color:#4FC3C2;margin-top:3px">MUNAY</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:14px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase">Consentimiento Informado</div>
    <div style="font-size:10px;opacity:.9;margin-top:3px">CIRUGÍA LABIO PALADAR HENDIDO</div>
  </div>
</div>
<div class="pstrip">
  <div class="pi"><span class="lbl">Paciente: </span><strong>${patientName}</strong></div>
  <div class="pi"><span class="lbl">Representante: </span><strong>${guardian}</strong></div>
  <div class="pi"><span class="lbl">CI: </span><strong>${ci}</strong></div>
  <div class="pi"><span class="lbl">Procedimiento: </span><strong style="color:#3DA8A7">${procedure}</strong></div>
</div>
<div class="content">
  <div class="top">
    <div class="doc-title">CONSENTIMIENTO INFORMADO PARA CIRUGÍA LABIO PALADAR HENDIDO</div>
    <div class="s">Yo, ${hl(guardian)}, PACIENTE O REPRESENTANTE LEGAL DE ${hl(patientName)}, CON CI ${hl(ci)} Y DOMICILIO EN: ${hl(address)}.</div>
    <div class="s"><strong>1.</strong> Por la presente <strong>AUTORIZO</strong> al ${hl(surgeon)} y a los asistentes que sean seleccionados y personal de salud, para que realice en mi persona (o en la de mi representante), el siguiente procedimiento o tratamiento: ${hl(procedure)}</div>
    <div class="s"><strong>2.</strong> Confirmo que el ${hl(surgeon)} me ha explicado detalladamente, en palabras comprensibles para mí, el efecto y la naturaleza de las operaciones a efectuar, incluyendo posibles riesgos, soluciones alternativas y molestias que se puedan sentir aun teniendo un postoperatorio normal.</div>
    <div class="s"><strong>3.</strong> Los <strong>RIESGOS</strong> de posibles complicaciones incluyen entre otras:<ul class="rl"><li>Estados temporales de inflamación y cambio de color natural de la piel.</li><li>Posibilidad de sangrado durante y después de la cirugía, seromas, infección o necrosis.</li><li>Trastornos temporales o permanentes de la sensibilidad y motilidad. Reacción alérgica a alguno de los medicamentos utilizados.</li><li>Intolerancia a materiales de sutura, implantes o apósitos. Imperfecciones e insatisfacción en los resultados.</li><li>Mala cicatrización: quedará una cicatriz permanente. El proceso de maduración puede tardar más de un año.</li></ul></div>
    <div class="s"><strong>4.</strong> Doy el <strong>CONSENTIMIENTO</strong> para la administración de los anestésicos necesarios o aconsejables. Comprendo que cualquier forma de anestesia entraña riesgos de complicaciones, lesiones y a veces muerte.</div>
    <div class="s"><strong>5.</strong> <strong>RECONOZCO</strong> que pueden darse condiciones imprevistas que necesiten procedimientos diferentes. <strong>AUTORIZO</strong> al cirujano y a sus asistentes a realizarlos en el ejercicio de su juicio profesional. En caso de complicaciones, <strong>AUTORIZO</strong> al ${hl(surgeon)} a solicitar la ayuda de otros especialistas.</div>
    <div class="s"><strong>6.</strong> <strong>COMPRENDO</strong> que el fin de la intervención es <strong>MEJORAR LA APARIENCIA</strong>, pudiendo persistir alguna imperfección. La Medicina y la Cirugía no son ciencias exactas. <strong>RECONOZCO QUE NO SE ME HA DADO GARANTÍA ABSOLUTA.</strong></div>
    <div class="s"><strong>7.</strong> He sido informado(a) que podrá ser necesario el uso de injertos, trasplantes o <strong>IMPLANTES DE MATERIAS ESPECIALES MÉDICAS</strong> y material de sutura permanente.</div>
    <div class="s"><strong>8.</strong> <strong>CONSIENTO</strong> el ser fotografiado o filmado antes, durante y después del tratamiento para uso médico y educativo. <strong>NUNCA EN PRENSA DIARIA O REVISTAS COMUNES</strong>, salvo con mi <strong>EXPRESO PERMISO</strong>.</div>
    <div class="banner">DOY CONSENTIMIENTO PARA EL TRATAMIENTO O PROCEDIMIENTO DE PUNTOS CITADOS PREVIAMENTE.<br/>ESTOY SATISFECHO/A CON LA EXPLICACIÓN Y NO NECESITO MÁS INFORMACIÓN.</div>
  </div>
  <div class="bottom">
    <div class="sigs">
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${guardian}</strong><br/>C.I.: ${ci}<br/>(Tutor / Representante legal)</div></div>
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${surgeon}</strong><br/>(Firma del Cirujano)</div></div>
    </div>
    <div class="date-row">Fecha: <strong>${dateStr}</strong></div>
  </div>
</div>
<div class="bot"></div>
</body></html>`;

  const win = window.open('', '_blank', 'width=816,height=1056');
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 500);
}

async function printAnesthesiaConsentForm(surgery, patient) {
  const logo2          = await getLogoBase64(logo2Img);
  const anesthesiologist = surgery.anesthesiologist || '___________';
  const patientName    = surgery.patientName        || '___________';
  const guardian       = patient?.guardian          || '___________';
  const ci             = patient?.guardianIdNumber  || patient?.idNumber || '___________';
  const dateStr        = surgery.date
    ? format(new Date(surgery.date + 'T12:00'), 'dd/MM/yyyy')
    : '___________';

  const logoBoxHtml = logo2
    ? `<div style="background:#FFF;padding:6px 12px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${logo2}" style="height:60px;width:auto;object-fit:contain;"/></div>`
    : `<div style="background:#FFF;padding:6px 12px;border-radius:6px;flex-shrink:0;"><span style="font-size:14px;font-weight:900;color:#1F3A5F;letter-spacing:2px;">MUNAY</span></div>`;

  const hl = (t) => `<span style="font-weight:700;color:#1F3A5F;border-bottom:1.5px solid #4FC3C2;padding-bottom:1px;">${t}</span>`;

  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/>
<title>Consentimiento Anestesia — ${patientName}</title>
<style>
  @page{size:8.5in 11in portrait;margin:0}*{box-sizing:border-box;margin:0;padding:0}
  body{width:8.5in;height:11in;font-family:Arial,Helvetica,sans-serif;font-size:9pt;color:#1a1a1a;line-height:1.46;display:flex;flex-direction:column}
  .hdr{background:#1F3A5F;padding:12px 24px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;border-bottom:4px solid #4FC3C2;flex-shrink:0}
  .pstrip{background:linear-gradient(90deg,#EBF4FF,#F4F7FA);padding:7px 24px;border-bottom:1px solid #D5DEE8;flex-shrink:0;display:flex;align-items:center}
  .pi{font-size:8.5pt;padding:0 12px;border-right:1px solid #C5D8EE}.pi:first-child{padding-left:0}.pi:last-child{border-right:none}
  .pi .lbl{color:#5A6B82}.pi strong{color:#1F3A5F}
  .content{flex:1;padding:12px 26px 8px;display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;flex-direction:column;gap:7px}
  .doc-title{text-align:center;font-size:11.5pt;font-weight:bold;color:#1F3A5F;text-transform:uppercase;border-bottom:2px solid #4FC3C2;padding-bottom:6px;margin-bottom:3px}
  .qa-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 20px}
  .qa{margin-bottom:6px}.qa-q{font-weight:700;color:#1F3A5F;font-size:9pt;margin-bottom:2px}
  .qa-a{font-size:8.5pt;line-height:1.42;color:#1a1a1a;text-align:justify}
  .qa-a ul{margin:3px 0 0 16px}.qa-a li{margin-bottom:2px}
  .sec-hdr{font-size:9.5pt;font-weight:700;color:#1F3A5F;background:linear-gradient(90deg,#EBF4FF,#F4F7FA);padding:4px 12px;border-left:3px solid #4FC3C2;margin-bottom:4px}
  .s{text-align:justify;font-size:9pt;line-height:1.46}.s strong{color:#1F3A5F}
  .rl{margin:3px 0 0 16px}.rl li{font-size:8.5pt;line-height:1.42;margin-bottom:2px}
  .indiv{font-size:9pt;line-height:1.48;text-align:justify;background:#F4F7FA;border:1px solid #D5DEE8;border-left:3px solid #4FC3C2;border-radius:0 4px 4px 0;padding:8px 12px}
  .bottom{display:flex;flex-direction:column;gap:10px}
  .sigs{display:flex;gap:28px}.sig{flex:1;text-align:center}
  .stamp-box{border:1px dashed #8AAFC8;border-radius:6px;height:72px;display:flex;align-items:center;justify-content:center;color:#A0B8CC;font-size:9pt;letter-spacing:1px;margin-bottom:8px}
  .sig-line{border-top:1px solid #555;margin-bottom:5px}
  .sig-txt{font-size:9pt;line-height:1.6}
  .date-row{text-align:right;font-size:10pt;color:#1F3A5F;padding-right:2px}
  .bot{height:5px;background:#4FC3C2;flex-shrink:0}
</style></head><body>
<div class="hdr">
  ${logoBoxHtml}
  <div style="text-align:center;color:#FFF">
    <div style="font-size:13px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;opacity:.85">Centro Médico Quirúrgico</div>
    <div style="font-size:24px;font-weight:900;letter-spacing:5px;color:#4FC3C2;margin-top:3px">MUNAY</div>
  </div>
  <div style="text-align:right;color:#FFF">
    <div style="font-size:14px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase">Consentimiento Informado</div>
    <div style="font-size:10px;opacity:.9;margin-top:3px">ANESTESIA GENERAL</div>
  </div>
</div>
<div class="pstrip">
  <div class="pi"><span class="lbl">Paciente: </span><strong>${patientName}</strong></div>
  <div class="pi"><span class="lbl">Representante: </span><strong>${guardian}</strong></div>
  <div class="pi"><span class="lbl">CI: </span><strong>${ci}</strong></div>
  <div class="pi"><span class="lbl">Anestesiólogo: </span><strong style="color:#3DA8A7">${anesthesiologist}</strong></div>
</div>
<div class="content">
  <div class="top">
    <div class="doc-title">CONSENTIMIENTO INFORMADO DE ANESTESIA GENERAL</div>
    <div class="qa-grid">
      <div>
        <div class="qa"><div class="qa-q">¿Es importante leer este documento?</div><div class="qa-a">Sí. Informa de los procedimientos médico-anestésicos necesarios para la cirugía. Puede rechazar esta información o solicitarla las veces necesarias hasta su completa comprensión.</div></div>
        <div class="qa"><div class="qa-q">¿Estoy obligado a autorizar y firmar?</div><div class="qa-a">No. Tiene derecho de rechazar o aceptar los procedimientos en cualquier momento previo a la cirugía, sin temor a repercusiones por parte del equipo quirúrgico.</div></div>
        <div class="qa"><div class="qa-q">¿Qué es la anestesia?</div><div class="qa-a">Procedimiento médico que permite realizar una cirugía sin dolor, pudiendo dormir al paciente (general, local o regional). En ocasiones pueden desarrollarse dos tipos simultáneamente.</div></div>
        <div class="qa"><div class="qa-q">¿Quién es el anestesiólogo?</div><div class="qa-a">El médico especialista encargado de sugerir y administrar el tipo de anestesia adecuada, y de cuidar el estado general del paciente durante la operación.</div></div>
      </div>
      <div>
        <div class="qa"><div class="qa-q">¿La anestesia tiene riesgos?</div><div class="qa-a">Todo tipo de anestesia implica riesgos de lesiones, secuelas tardías e incluso la muerte. Los riesgos se relacionan con el estado de salud, edad, tipo y complejidad de la cirugía, alergias u otros factores imprevisibles.</div></div>
        <div class="qa"><div class="qa-q">¿Qué factores son importantes antes de la anestesia?</div><div class="qa-a">Dificultades en anestesias previas, alergias medicamentosas, alteraciones de la coagulación, prótesis o marcapasos, enfermedades de tiroides, riñones, hígado, pulmones, corazón o cerebro.</div></div>
        <div class="qa"><div class="qa-q">¿Cómo prepararme para la anestesia?</div><div class="qa-a"><ul><li>Cumpliendo ayuno absoluto por el tiempo indicado (su incumplimiento suspende la cirugía automáticamente).</li><li>Siguiendo el tratamiento habitual de enfermedades previas, salvo indicación del médico tratante.</li><li>Suspendiendo el hábito de fumar el mayor tiempo posible antes de la cirugía.</li></ul></div></div>
      </div>
    </div>
    <div class="sec-hdr">ANESTESIA GENERAL — Descripción del Procedimiento</div>
    <div class="s">Administración de medicamentos por vía endovenosa inhalatoria hasta quedar totalmente dormido. Se introduce un tubo por la boca o nariz hasta la tráquea, conectándolo a una máquina respiratoria durante toda la cirugía. Al concluir se desconecta y retira el tubo hasta que el paciente respire con su propio esfuerzo.</div>
    <div class="sec-hdr">RIESGOS DE LA ANESTESIA GENERAL</div>
    <div class="s"><ul class="rl">
      <li>Podría lesionar alguna pieza dentaria.</li>
      <li>Podría producir irritación en las cuerdas vocales (disfonía).</li>
      <li>Podría pasar contenido gástrico a los pulmones, requiriendo recuperación en terapia intensiva.</li>
      <li>Podría presentar reacciones alérgicas inesperadas a los medicamentos utilizados.</li>
      <li>Náuseas y vómitos después de la cirugía. Inflamación y dolor de la vena utilizada.</li>
      <li>Arritmia cardiaca, infarto de miocardio, muerte (si existe riesgo cardiaco).</li>
    </ul></div>
    <div class="indiv">Habiendo leído este documento y comprendiendo el procedimiento anestésico y sus riesgos, habiendo aclarado mis dudas con el/la ${hl(anesthesiologist)}, quien respondió a todas mis preguntas, yo ${hl(guardian)}, representante legal de ${hl(patientName)}, con CI ${hl(ci)}, de manera libre y voluntaria <strong>DOY MI CONSENTIMIENTO</strong> para que sea sometido a la <strong>ANESTESIA GENERAL.</strong></div>
  </div>
  <div class="bottom">
    <div class="sigs">
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${guardian}</strong><br/>C.I.: ${ci}<br/>(Tutor / Representante legal)</div></div>
      <div class="sig"><div class="stamp-box">SELLO</div><div class="sig-line"></div><div class="sig-txt"><strong>${anesthesiologist}</strong><br/>(Firma del Anestesiólogo)</div></div>
    </div>
    <div class="date-row">Fecha: <strong>${dateStr}</strong></div>
  </div>
</div>
<div class="bot"></div>
</body></html>`;

  const win = window.open('', '_blank', 'width=816,height=1056');
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 500);
}

// ── Component ─────────────────────────────────────────────────────────────────

const ALL_TABS = [
  { id: 'info',       label: 'Información', icon: User,        adminOnly: false },
  { id: 'financiero', label: 'Financiero',  icon: DollarSign,  adminOnly: true  },
  { id: 'historial',  label: 'Historial',   icon: History,     adminOnly: false },
];

export default function SurgeryDetail({
  surgery,
  onEdit,
  onClose,
  onCancelSurgery,
  onSuspendSurgery,
  isAdmin,
  canEdit,
}) {
  const [activeTab,        setActiveTab]        = useState('info');
  const [printPreviewOpen, setPrintPreviewOpen] = useState(false);
  const [suspendOpen,      setSuspendOpen]      = useState(false);
  const [suspendMode,      setSuspendMode]      = useState('suspendido');
  const [suspendReason,    setSuspendReason]    = useState('');
  const [newDate,          setNewDate]          = useState(surgery?.date ?? '');
  const [newTime,          setNewTime]          = useState(surgery?.startTime ?? '');
  const [suspendBusy,      setSuspendBusy]      = useState(false);
  const { patients, surgeries: allSurgeries, therapies } = useStore();

  if (!surgery) return null;

  const TABS    = ALL_TABS.filter((t) => !t.adminOnly || isAdmin);
  const patient = patients.find((p) => p.id === surgery.patientId);
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
                    age ? fmtAge(age) : null,
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
                <DataRow label="Carnet de identidad" value={patient?.idNumber || '—'} />
                {patient?.allergies && (
                  <DataRow label="Alergias / Med." value={patient.allergies} />
                )}
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
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setPrintPreviewOpen(true)}
            className="btn btn-sm border border-gray-200 text-gray-600 hover:bg-gray-50 gap-1.5"
          >
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
          <button
            onClick={() => printConsentForm(surgery, patient)}
            className="btn btn-sm border border-teal-200 text-teal-700 hover:bg-teal-50 gap-1.5"
          >
            <FileText className="w-4 h-4" />
            Consentimiento
          </button>
          <button
            onClick={() => printAnesthesiaConsentForm(surgery, patient)}
            className="btn btn-sm border border-purple-200 text-purple-700 hover:bg-purple-50 gap-1.5"
          >
            <FileText className="w-4 h-4" />
            Anestesia
          </button>
          {isAdmin && !isCancelled && surgery.status !== 'suspendido' && (
            <button onClick={() => { setSuspendOpen(true); setSuspendReason(''); setSuspendMode('suspendido'); setNewDate(surgery.date ?? ''); setNewTime(surgery.startTime ?? ''); }}
              className="btn btn-sm text-amber-700 border border-amber-300 hover:bg-amber-50 gap-1.5">
              <PauseCircle className="w-4 h-4" />
              Suspender / Reprogramar
            </button>
          )}
          {isAdmin && surgery.status === 'suspendido' && (
            <button onClick={() => { setSuspendOpen(true); setSuspendReason(''); setSuspendMode('reprogramar'); setNewDate(surgery.date ?? ''); setNewTime(surgery.startTime ?? ''); }}
              className="btn btn-sm text-blue-700 border border-blue-300 hover:bg-blue-50 gap-1.5">
              <CalendarClock className="w-4 h-4" />
              Reprogramar
            </button>
          )}
          {isAdmin && !isCancelled && (
            <button onClick={onCancelSurgery}
              className="btn btn-sm text-red-600 border border-red-200 hover:bg-red-50 gap-1.5">
              <XCircle className="w-4 h-4" />
              Cancelar
            </button>
          )}
        </div>

        <div className="flex gap-2 ml-auto">
          <button onClick={onClose} className="btn-secondary btn btn-sm">Cerrar</button>
          {canEdit && (
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
            <div style={{ width: '100%', maxWidth: 580, fontFamily: 'Arial, sans-serif', boxShadow: '0 6px 24px rgba(0,0,0,0.3)' }}>

              {/* ── Copy 1: CLÍNICO ── */}
              <div style={{ backgroundColor: 'white', borderBottom: '2px dashed #b0bec5' }}>
                {/* Header - Navy */}
                <div style={{ backgroundColor: '#1F3A5F', padding: '12px 20px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 14, borderBottom: '4px solid #4FC3C2' }}>
                  {/* Logo wrapper white box */}
                  <div style={{ backgroundColor: '#FFFFFF', padding: '5px 10px', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 62, flexShrink: 0 }}>
                    <img src={logo2Img} alt="Logo" style={{ width: 54, height: 54, objectFit: 'contain' }} />
                  </div>
                  {/* Center: Centro Médico Quirúrgico MUNAY */}
                  <div style={{ textAlign: 'center', color: '#FFFFFF' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.85 }}>Centro Médico Quirúrgico</div>
                    <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '4px', color: '#4FC3C2', marginTop: 2 }}>MUNAY</div>
                  </div>
                  {/* Title right */}
                  <div style={{ textAlign: 'right', color: '#FFFFFF' }}>
                    <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>Programación Quirúrgica</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>{format(new Date(), "dd/MM/yyyy HH:mm")}</div>
                  </div>
                </div>
                {/* Patient section */}
                <div style={{ padding: '12px 20px 8px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 19, fontWeight: 700, color: '#1F3A5F', letterSpacing: '-0.3px', lineHeight: 1.1 }}>{surgery.patientName ?? '—'}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#3DA8A7', letterSpacing: '0.5px', marginTop: 4, textTransform: 'uppercase' }}>{surgery.surgeryType ?? '—'}</div>
                  </div>
                  {/* Baby mascot */}
                  <svg style={{ width: 60, height: 60, flexShrink: 0 }} viewBox="0 0 80 80">
                    <circle cx="40" cy="32" r="18" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.8"/>
                    <path d="M 32 18 Q 40 14 48 18 Q 46 22 40 22 Q 34 22 32 18 Z" fill="#3D7AAB" stroke="#1F3A5F" strokeWidth="1.2"/>
                    <path d="M 32 32 Q 34 30 36 32" stroke="#1A2B42" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M 44 32 Q 46 30 48 32" stroke="#1A2B42" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <circle cx="28" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/>
                    <circle cx="52" cy="36" r="2" fill="#F5B5C8" opacity="0.7"/>
                    <path d="M 36 38 Q 40 41 44 38" stroke="#1A2B42" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                    <path d="M 25 50 Q 25 65 40 65 Q 55 65 55 50" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.8"/>
                    <ellipse cx="22" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.5" transform="rotate(-20 22 52)"/>
                    <ellipse cx="58" cy="52" rx="4" ry="6" fill="#FFFFFF" stroke="#1F3A5F" strokeWidth="1.5" transform="rotate(20 58 52)"/>
                    <path d="M 60 58 Q 58 56 56 58 Q 54 60 60 64 Q 66 60 64 58 Q 62 56 60 58 Z" fill="#3D7AAB"/>
                  </svg>
                </div>
                {/* Info tables */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '0 20px 16px' }}>
                  {[
                    { fields: fichaFields.left, icons: [
                      '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>',
                      '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
                      '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
                    ]},
                    { fields: fichaFields.right, icons: [
                      '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
                      '<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>',
                      '<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>',
                      '<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>',
                      '<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>',
                    ]},
                  ].map(({ fields, icons }, colIdx) => (
                    <div key={colIdx} style={{ border: '1px solid #D5DEE8', borderRadius: 4, overflow: 'hidden' }}>
                      {fields.map(({ label, value }, i) => (
                        <div key={label} style={{ display: 'grid', gridTemplateColumns: '44px 1fr 1fr', alignItems: 'center', padding: '7px 12px 7px 8px', borderBottom: '1px solid #E5EBF2', backgroundColor: i % 2 === 1 ? '#F4F7FA' : '#FFFFFF' }}>
                          <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#2B5C8A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 1px 3px rgba(43,92,138,0.25)' }}>
                            <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, stroke: '#FFFFFF', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}
                              dangerouslySetInnerHTML={{ __html: icons[i] }} />
                          </div>
                          <span style={{ fontSize: 10, color: '#5A6B82', fontWeight: 500, paddingLeft: 3 }}>{label}</span>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#1A2B42', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                {/* Bottom teal bar */}
                <div style={{ height: 5, backgroundColor: '#4FC3C2' }} />
              </div>

              {/* ── Copy 2: PEDIÁTRICO ── */}
              <div style={{ backgroundColor: 'white' }}>
                {/* Header */}
                <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FBFAFE 100%)', padding: '12px 20px 8px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 14, borderBottom: '1px solid #E8E4F2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 70, height: 70, background: 'linear-gradient(135deg, #E8DFFA 0%, #D4C5EC 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 10px rgba(107,95,191,0.2)', overflow: 'hidden' }}>
                      <img src={logo2Img} alt="Logo" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#6B5FBF', textTransform: 'uppercase', letterSpacing: '1px' }}>Centro Médico Quirúrgico</div>
                      <div style={{ fontSize: 17, fontWeight: 900, color: '#4A3F8C', letterSpacing: '3px', marginTop: 2 }}>MUNAY</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#6B5FBF', letterSpacing: '1px', textTransform: 'uppercase' }}>Orden de Internación</div>
                    <div style={{ fontSize: 9, color: '#5A5A6E', marginTop: 2 }}>{format(new Date(), "dd/MM/yyyy HH:mm")}</div>
                  </div>
                  {/* Bear mascot */}
                  <svg style={{ width: 58, height: 58, flexShrink: 0 }} viewBox="0 0 80 80">
                    <circle cx="20" cy="22" r="10" fill="#C9A57B"/>
                    <circle cx="60" cy="22" r="10" fill="#C9A57B"/>
                    <circle cx="20" cy="22" r="6" fill="#E8C9A8"/>
                    <circle cx="60" cy="22" r="6" fill="#E8C9A8"/>
                    <ellipse cx="40" cy="38" rx="22" ry="20" fill="#D4B088"/>
                    <ellipse cx="40" cy="44" rx="12" ry="10" fill="#F0DAB8"/>
                    <rect x="22" y="55" width="36" height="18" rx="3" fill="#A8C5E8"/>
                    <path d="M 32 55 L 40 60 L 48 55 L 48 58 L 40 63 L 32 58 Z" fill="#FFFFFF"/>
                    <ellipse cx="32" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/>
                    <ellipse cx="48" cy="36" rx="2.5" ry="3" fill="#2A2A3E"/>
                    <circle cx="32.8" cy="35" r="0.8" fill="#FFFFFF"/>
                    <circle cx="48.8" cy="35" r="0.8" fill="#FFFFFF"/>
                    <ellipse cx="40" cy="42" rx="2.5" ry="2" fill="#2A2A3E"/>
                    <path d="M 40 44 L 40 47 M 40 47 Q 36 49 35 47 M 40 47 Q 44 49 45 47" stroke="#2A2A3E" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    <circle cx="25" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/>
                    <circle cx="55" cy="42" r="2.5" fill="#F5B5C8" opacity="0.6"/>
                  </svg>
                </div>
                {/* Patient banner */}
                <div style={{ margin: '8px 20px 10px', background: 'linear-gradient(90deg, #EFE9FA 0%, #F3EEFC 100%)', borderRadius: 10, padding: '9px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ flex: 1, fontSize: 16, fontWeight: 700, color: '#5B4FB8' }}>{surgery.patientName ?? '—'}</div>
                  <div style={{ width: 1, height: 20, background: 'linear-gradient(180deg, transparent, #C5B5E5, transparent)', flexShrink: 0 }} />
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#2A2A3E', whiteSpace: 'nowrap', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>{surgery.surgeryType ?? '—'}</div>
                </div>
                {/* Info grid with SVG icon rows */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '0 20px 12px' }}>
                  {[
                    { fields: fichaFields.left, icons: [
                      { bg: '#C7B8E8', svg: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v2H9z"/><path d="M9 12h6M12 9v6"/>' },
                      { bg: '#A8DDDA', svg: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>' },
                      { bg: '#F4C58A', svg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
                    ]},
                    { fields: fichaFields.right, icons: [
                      { bg: '#F5D88A', svg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
                      { bg: '#F0A8B8', svg: '<path d="M5 7h14l-1 13H6z"/><path d="M9 7V5a3 3 0 016 0v2"/><path d="M10 12h4"/>' },
                      { bg: '#B5C9E8', svg: '<rect x="9" y="3" width="6" height="18" rx="1"/><path d="M9 7h3M9 11h3M9 15h3M9 19h3"/>' },
                      { bg: '#F0B5A8', svg: '<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-4 4-4s3 1 3 3"/>' },
                      { bg: '#D4C5EC', svg: '<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 11h4M14 14h3"/><path d="M7 17c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>' },
                    ]},
                  ].map(({ fields, icons }, colIdx) => (
                    <div key={colIdx} style={{ background: '#FBFAFE', border: '1px solid #E8E4F2', borderRadius: 10, padding: '9px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {fields.map(({ label, value }, i) => {
                        const ic = icons[i] ?? { bg: '#D4C5EC', svg: '<circle cx="12" cy="12" r="6"/>' };
                        return (
                          <div key={label} style={{ display: 'grid', gridTemplateColumns: '30px 1fr auto', alignItems: 'center', gap: 8, padding: '3px 0', borderBottom: '1px dashed #EDE7F7' }}>
                            <div style={{ width: 28, height: 28, borderRadius: '50%', background: ic.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, stroke: '#FFFFFF', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}
                                dangerouslySetInnerHTML={{ __html: ic.svg }} />
                            </div>
                            <span style={{ fontSize: 9, color: '#6B6B7E', fontWeight: 500 }}>{label}</span>
                            <span style={{ fontSize: 10, fontWeight: 700, color: '#2A2A3E', textAlign: 'right', maxWidth: 90, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
                {/* Grass decoration */}
                <div style={{ height: 24, background: 'linear-gradient(180deg, transparent 0%, #E8F5E0 100%)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', bottom: 3, left: 0, right: 0, fontSize: 9, color: '#F5B5C8', textAlign: 'center', letterSpacing: 20 }}>✿ ❀ ✿ ❀</div>
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

      {/* ── Suspend / Reschedule panel ── */}
      {suspendOpen && (
        <div className="absolute inset-0 z-20 bg-white rounded-2xl flex flex-col overflow-hidden">
          <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <PauseCircle className="w-4 h-4 text-amber-600" />
              <p className="text-sm font-bold text-hm-primary">Suspender / Reprogramar cirugía</p>
            </div>
            <button onClick={() => setSuspendOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Mode selector */}
            <div>
              <p className="label mb-2">Acción</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                  <input type="radio" className="accent-amber-500" checked={suspendMode === 'suspendido'}
                    onChange={() => setSuspendMode('suspendido')} />
                  <span>Suspender (sin nueva fecha)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                  <input type="radio" className="accent-hm-primary" checked={suspendMode === 'reprogramar'}
                    onChange={() => setSuspendMode('reprogramar')} />
                  <span>Reprogramar a nueva fecha</span>
                </label>
              </div>
            </div>

            {/* Justification */}
            <div>
              <label className="label">Justificación / Motivo *</label>
              <textarea
                rows={3} className="input resize-none"
                placeholder="Indique el motivo de la suspensión o reprogramación..."
                value={suspendReason}
                onChange={(e) => setSuspendReason(e.target.value)}
              />
            </div>

            {/* New date + time (only for reschedule) */}
            {suspendMode === 'reprogramar' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Nueva fecha *</label>
                  <input type="date" className="input" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                </div>
                <div>
                  <label className="label">Nueva hora de inicio *</label>
                  <input type="time" className="input" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-2 shrink-0">
            <button onClick={() => setSuspendOpen(false)} className="btn-secondary btn btn-sm">
              Cancelar
            </button>
            <button
              disabled={suspendBusy || !suspendReason.trim() || (suspendMode === 'reprogramar' && (!newDate || !newTime))}
              onClick={async () => {
                setSuspendBusy(true);
                const updates = suspendMode === 'reprogramar'
                  ? { status: 'programado', date: newDate, startTime: newTime, suspendReason: suspendReason.trim(), suspendDate: format(new Date(), 'yyyy-MM-dd') }
                  : { status: 'suspendido', suspendReason: suspendReason.trim(), suspendDate: format(new Date(), 'yyyy-MM-dd') };
                try {
                  await onSuspendSurgery(surgery.id, updates);
                  setSuspendOpen(false);
                } finally {
                  setSuspendBusy(false);
                }
              }}
              className={`btn btn-sm text-white gap-1.5 ${suspendMode === 'reprogramar' ? 'btn-primary' : 'bg-amber-600 hover:bg-amber-700'}`}
            >
              {suspendBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : suspendMode === 'reprogramar' ? <><CalendarClock className="w-4 h-4" /> Reprogramar</> : <><PauseCircle className="w-4 h-4" /> Suspender</>}
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
    suspendido: 'bg-amber-100 text-amber-800 border-amber-200',
  };
  const label = { programado: 'Programada', confirmado: 'Confirmada', realizado: 'Realizada', cancelado: 'Cancelada', suspendido: 'Suspendida' };
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
