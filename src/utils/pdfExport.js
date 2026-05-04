import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format, differenceInYears, parseISO, isValid } from 'date-fns';
import { es } from 'date-fns/locale';

const TEAL = [15, 118, 110];

function calcAge(birthDate) {
  if (!birthDate) return '';
  const d = parseISO(birthDate);
  return isValid(d) ? `${differenceInYears(new Date(), d)} años` : '';
}

function header(doc, title, subtitle, landscape = false) {
  const W = landscape ? 297 : 210;
  doc.setFillColor(...TEAL);
  doc.rect(0, 0, W, 22, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('MUNAY - Gestión Quirúrgica', 14, 10);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(title, 14, 17);
  if (subtitle) doc.text(subtitle, W / 2, 17, { align: 'center' });
  doc.text(`Generado: ${format(new Date(), "dd/MM/yyyy HH:mm", { locale: es })}`, W - 14, 17, { align: 'right' });
  doc.setTextColor(0, 0, 0);
}

export function exportDailySchedulePDF(surgeries, date) {
  const doc       = new jsPDF();
  const dateLabel = format(new Date(date + 'T12:00:00'), "EEEE d 'de' MMMM yyyy", { locale: es });
  header(doc, 'Programación Diaria', dateLabel);

  const rows = surgeries
    .filter((s) => s.date === date && s.status !== 'cancelado')
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .map((s) => [
      s.startTime,
      s.patientName ?? '',
      s.surgeryType ?? '',
      s.surgeon ?? '',
      s.anesthesiologist ?? '',
      s.fastingTime ?? '—',
      translateStatus(s.status),
    ]);

  autoTable(doc, {
    startY: 28,
    head: [['Hora', 'Paciente', 'Tipo de cirugía', 'Cirujano', 'Anestesiólogo', 'Ayuno', 'Estado']],
    body: rows,
    headStyles:         { fillColor: TEAL, fontSize: 8 },
    bodyStyles:         { fontSize: 8 },
    alternateRowStyles: { fillColor: [245, 250, 250] },
    margin:             { left: 14, right: 14 },
  });

  doc.save(`programacion-${date}.pdf`);
}

export function exportWeeklySchedulePDF(surgeries, weekDates) {
  const doc = new jsPDF({ orientation: 'landscape' });
  header(doc, 'Programación Semanal', `Semana del ${weekDates[0]} al ${weekDates[6]}`, true);

  const rows = surgeries
    .filter((s) => weekDates.includes(s.date) && s.status !== 'cancelado')
    .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime))
    .map((s) => [
      format(new Date(s.date + 'T12:00'), 'EEE dd/MM', { locale: es }),
      s.startTime,
      s.patientName ?? '',
      s.surgeryType ?? '',
      s.surgeon ?? '',
      s.anesthesiologist ?? '',
      s.fastingTime ?? '—',
      translateStatus(s.status),
    ]);

  autoTable(doc, {
    startY: 28,
    head: [['Día', 'Hora', 'Paciente', 'Tipo', 'Cirujano', 'Anestesiólogo', 'Ayuno', 'Estado']],
    body: rows,
    headStyles:         { fillColor: TEAL, fontSize: 7 },
    bodyStyles:         { fontSize: 7 },
    alternateRowStyles: { fillColor: [245, 250, 250] },
    margin:             { left: 10, right: 10 },
  });

  doc.save('programacion-semana.pdf');
}

export function exportPatientsPDF(patients) {
  const doc = new jsPDF();
  header(doc, 'Listado de Pacientes', '');

  const rows = patients.map((p) => [
    p.fullName ?? '',
    p.birthDate ?? '',
    calcAge(p.birthDate),
    p.diagnosis ?? '',
    p.phone ?? '',
    p.guardian ?? '',
    p.guardianPhone ?? '',
    p.patientType === 'flap' ? 'FLAP' : 'Externo',
  ]);

  autoTable(doc, {
    startY: 28,
    head: [['Nombre', 'Fecha Nac.', 'Edad', 'Diagnóstico', 'Teléfono', 'Responsable', 'Tel. Resp.', 'Tipo']],
    body: rows,
    headStyles:         { fillColor: TEAL, fontSize: 8 },
    bodyStyles:         { fontSize: 7 },
    alternateRowStyles: { fillColor: [245, 250, 250] },
    margin:             { left: 10, right: 10 },
  });

  doc.save('pacientes.pdf');
}

function translateStatus(s) {
  return { programado: 'Programado', confirmado: 'Confirmado', realizado: 'Realizado', cancelado: 'Cancelado' }[s] ?? s;
}
