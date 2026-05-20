import jsPDF from 'jspdf';

const C_DARK = [26,  26,  46];
const C_TEAL = [79,  195, 194];
const C_BLUE = [74,  111, 165];
const C_GRAY = [150, 150, 160];

export function generateHCPdf({ clinicalData = {}, patientName = '', patientCode = '', savedAt }) {
  const doc = new jsPDF({ unit: 'mm', format: 'letter' });
  const W   = doc.internal.pageSize.getWidth();
  const H   = doc.internal.pageSize.getHeight();
  const LM  = 15;
  const CW  = W - LM * 2;
  let y = 0;

  const newPage = () => { doc.addPage(); y = 22; };
  const guard   = (need = 10) => { if (y + need > H - 18) newPage(); };

  /* ── Header ─────────────────────────────────────────── */
  doc.setFillColor(...C_DARK);
  doc.rect(0, 0, W, 28, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...C_TEAL);
  doc.text('MUNAY', W / 2, 11, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(220, 220, 235);
  doc.text('HISTORIA CLINICA INTEGRAL', W / 2, 17, { align: 'center' });
  doc.text('Centro Medico Quirurgico · La Paz, Bolivia', W / 2, 22, { align: 'center' });

  y = 35;

  /* ── Patient strip ───────────────────────────────────── */
  doc.setFillColor(240, 242, 248);
  doc.rect(LM, y - 3, CW, 14, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...C_DARK);
  doc.text(patientName || '—', LM + 3, y + 3);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...C_GRAY);
  if (patientCode) doc.text(patientCode, W - LM - 3, y + 1, { align: 'right' });
  doc.text('Guardado: ' + new Date(savedAt || Date.now()).toLocaleString('es-BO'), W - LM - 3, y + 7, { align: 'right' });

  y += 18;

  /* ── Divider ─────────────────────────────────────────── */
  doc.setDrawColor(200, 200, 215);
  doc.setLineWidth(0.3);
  doc.line(LM, y, W - LM, y);
  y += 7;

  /* ── Sections ────────────────────────────────────────── */
  for (const [sectionTitle, items] of Object.entries(clinicalData)) {
    if (!Array.isArray(items) || items.length === 0) continue;

    guard(16);

    /* section header */
    doc.setFillColor(...C_DARK);
    doc.rect(LM, y, CW, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.text(sectionTitle.toUpperCase(), LM + 3, y + 4.8);
    y += 9;

    for (const item of items) {
      guard(7);

      if (item.tipo === 'check') {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...C_DARK);
        const lines = doc.splitTextToSize('[v] ' + (item.texto || ''), CW - 5);
        doc.text(lines, LM + 3, y);
        y += lines.length * 4.8 + 1;

      } else if (item.tipo === 'campo') {
        const label  = (item.etiqueta || '') + ':';
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(...C_BLUE);
        doc.text(label, LM + 3, y);
        const lw = Math.min(doc.getTextWidth(label) + 2, 50);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...C_DARK);
        const vlines = doc.splitTextToSize(String(item.valor || ''), CW - lw - 5);
        doc.text(vlines, LM + 3 + lw, y);
        y += Math.max(vlines.length * 4.8, 5) + 1;

      } else if (item.tipo === 'narrativa') {
        const lines = doc.splitTextToSize(item.texto || '', CW - 7);
        doc.setDrawColor(...C_TEAL);
        doc.setLineWidth(0.8);
        doc.line(LM + 3, y - 2, LM + 3, y + lines.length * 4.5 + 1);
        doc.setLineWidth(0.2);
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(55, 65, 81);
        doc.text(lines, LM + 7, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...C_DARK);
        y += lines.length * 4.5 + 4;

      } else if (item.tipo === 'tabla') {
        const hdrs = item.encabezados || [];
        const rows = item.filas       || [];
        if (hdrs.length && rows.length) {
          const colW = (CW - 3) / hdrs.length;
          doc.setFillColor(220, 225, 235);
          doc.rect(LM + 2, y - 3.5, CW - 3, 5.5, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(7);
          doc.setTextColor(...C_DARK);
          hdrs.forEach((h, i) => doc.text(String(h), LM + 3 + i * colW, y));
          y += 4;
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          rows.forEach(row => {
            guard(6);
            row.forEach((cell, i) => doc.text(String(cell ?? ''), LM + 3 + i * colW, y));
            y += 4.5;
          });
          y += 2;
        }
      }
    }

    y += 5;
  }

  /* ── Footer on every page ────────────────────────────── */
  const total = doc.internal.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setFontSize(6.5);
    doc.setTextColor(...C_GRAY);
    doc.setDrawColor(200, 200, 215);
    doc.setLineWidth(0.3);
    doc.line(LM, H - 12, W - LM, H - 12);
    doc.text('Centro Medico Quirurgico MUNAY — Documento generado electronicamente', LM, H - 8);
    doc.text(`Pag. ${i} / ${total}`, W - LM, H - 8, { align: 'right' });
  }

  return doc.output('blob');
}
