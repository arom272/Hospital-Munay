import { Document, Page } from '@react-pdf/renderer';
import {
  styles,
  PDFHeader, PatientBar, PDFFooter,
  SectionTitle, Field, Row, TextBlock, VitalsBar, Signature,
} from './BaseTemplate';

export default function HistoriaClinicaTemplate({ data = {}, patient }) {
  const d = data;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PDFHeader title="HISTORIA CLÍNICA" subtitle="Medicina General · FLAP" />
        <PatientBar patient={patient} />

        {/* 1. MOTIVO DE CONSULTA */}
        <SectionTitle>1. Motivo de Consulta</SectionTitle>
        <TextBlock label="Motivo de consulta" value={d.motivoConsulta} />
        <TextBlock label="Enfermedad actual" value={d.enfermedadActual} />

        {/* 2. ANTECEDENTES */}
        <SectionTitle>2. Antecedentes</SectionTitle>
        <Row>
          <TextBlock label="Antecedentes personales" value={d.antecedentesPersonales} />
          <TextBlock label="Antecedentes familiares" value={d.antecedentesFamiliares} />
        </Row>

        {/* 3. EXAMEN FÍSICO */}
        <SectionTitle>3. Examen Físico</SectionTitle>
        <VitalsBar vitals={d.signosVitales} />
        <TextBlock label="Hallazgos del examen físico" value={d.examenFisico} />

        {/* 4. DIAGNÓSTICO Y PLAN */}
        <SectionTitle>4. Diagnóstico y Plan de Tratamiento</SectionTitle>
        <Row>
          <TextBlock label="Diagnóstico clínico" value={d.diagnostico} />
          <TextBlock label="Plan de tratamiento" value={d.planTratamiento} />
        </Row>
        <TextBlock label="Observaciones" value={d.observaciones} />

        {/* FIRMAS */}
        <SectionTitle>Firmas</SectionTitle>
        <Row>
          <Signature label="Médico tratante" sublabel="Nombre / Firma / Sello" />
          <Signature label="Responsable del paciente" sublabel="Nombre / CI / Firma" />
        </Row>

        <PDFFooter docType="Historia Clínica" />
      </Page>
    </Document>
  );
}