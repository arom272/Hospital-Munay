import { Document, Page } from '@react-pdf/renderer';
import {
  styles,
  PDFHeader, PatientBar, PDFFooter,
  SectionTitle, Field, Row, TextBlock, VitalsBar, Signature,
} from './BaseTemplate';

export default function EvolucionTemplate({ data = {}, patient }) {
  const d = data;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PDFHeader title="NOTA DE EVOLUCIÓN" subtitle="Seguimiento clínico · SOAP" />
        <PatientBar patient={patient} />

        <Row>
          <Field label="Fecha de evolución" value={d.fecha} />
        </Row>

        {/* SOAP */}
        <SectionTitle>S — Subjetivo</SectionTitle>
        <TextBlock value={d.subjetivo} />

        <SectionTitle>O — Objetivo</SectionTitle>
        <VitalsBar vitals={d.signosVitales} />
        <TextBlock value={d.objetivo} />

        <SectionTitle>A — Análisis</SectionTitle>
        <TextBlock value={d.analisis} />

        <SectionTitle>P — Plan</SectionTitle>
        <TextBlock value={d.plan} />

        {/* FIRMA */}
        <SectionTitle>Firma</SectionTitle>
        <Row>
          <Signature label="Médico / Profesional tratante" sublabel="Nombre / Firma / Sello" />
          <Signature label="Responsable del paciente"      sublabel="Nombre / CI / Firma" />
        </Row>

        <PDFFooter docType="Nota de Evolución" />
      </Page>
    </Document>
  );
}