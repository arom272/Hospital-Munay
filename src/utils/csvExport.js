import { differenceInYears, parseISO, isValid } from 'date-fns';

function calcAge(birthDate) {
  if (!birthDate) return '';
  const d = parseISO(birthDate);
  return isValid(d) ? differenceInYears(new Date(), d) : '';
}

function toCSV(headers, rows) {
  const escape = (v) => {
    const str = String(v ?? '').replace(/"/g, '""');
    return /[,"\n]/.test(str) ? `"${str}"` : str;
  };
  return [headers.map(escape).join(','), ...rows.map((r) => r.map(escape).join(','))].join('\n');
}

function download(csv, filename) {
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: filename });
  a.click();
  URL.revokeObjectURL(url);
}

export function exportPatientsCSV(patients) {
  const headers = ['Nombre', 'Fecha Nac.', 'Edad', 'Diagnóstico', 'Teléfono', 'Dirección', 'Responsable', 'Tel. Responsable', 'Tipo'];
  const rows    = patients.map((p) => [
    p.fullName, p.birthDate, calcAge(p.birthDate), p.diagnosis,
    p.phone, p.address, p.guardian, p.guardianPhone,
    p.patientType === 'flap' ? 'FLAP' : 'Externo',
  ]);
  download(toCSV(headers, rows), 'pacientes.csv');
}

export function exportSurgeriesCSV(surgeries) {
  const headers = ['Fecha', 'Hora', 'Paciente', 'Tipo', 'Cirujano', 'Anestesiólogo', 'Instrumentadora', 'Ayuno', 'Estado', 'Cotización', 'Pagado', 'Pago Completo', 'Ayuda Social'];
  const rows    = surgeries.map((s) => [
    s.date, s.startTime, s.patientName, s.surgeryType,
    s.surgeon, s.anesthesiologist, s.scrubNurse, s.fastingTime,
    s.status, s.quotation, s.amountPaid,
    s.paymentComplete ? 'Sí' : 'No',
    s.socialAid ? 'Sí' : 'No',
  ]);
  download(toCSV(headers, rows), 'cirugias.csv');
}
