import { Document, Page, View } from '@react-pdf/renderer';
import {
  styles,
  PDFHeader, PatientBar, PDFFooter,
  SectionTitle, Field, Row, TextBlock, VitalsBar, Signature,
} from './BaseTemplate';

export default function HistoriaQxTemplate({ data = {}, patient }) {
  const d = data;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PDFHeader title="HISTORIA CLÍNICA QUIRÚRGICA" subtitle="Cirugía · FLAP" />
        <PatientBar patient={patient} />

        {/* 1. MOTIVO */}
        <SectionTitle>1. Motivo Quirúrgico</SectionTitle>
        <TextBlock label="Indicación quirúrgica / Motivo"   value={d.motivoConsulta} />
        <TextBlock label="Antecedentes quirúrgicos previos" value={d.antecedentesQx} />

        {/* 2. EVALUACIÓN PREOPERATORIA */}
        <SectionTitle>2. Evaluación Preoperatoria</SectionTitle>
        <Row>
          <Field label="Peso (kg)"     value={d.peso} />
          <Field label="Talla (cm)"    value={d.talla} />
          <Field label="Ayuno (horas)" value={d.ayunoHoras} />
          <View style={{ flex: 3 }} />
        </Row>
        <VitalsBar vitals={d.signosVitales} />
        <TextBlock label="Examen físico preoperatorio" value={d.examenFisicoPreQx} />

        {/* 3. PLAN QUIRÚRGICO */}
        <SectionTitle>3. Plan Quirúrgico</SectionTitle>
        <Row>
          <Field label="Procedimiento planificado"    value={d.procedimientoPlanificado} flex={2} />
          <Field label="Tipo de anestesia planificada" value={d.tipoAnestesia} />
        </Row>
        <TextBlock label="Diagnóstico preoperatorio" value={d.diagnosticoPreQx} />
        <TextBlock label="Observaciones del cirujano" value={d.observaciones} />

        {/* FIRMAS */}
        <SectionTitle>Firmas</SectionTitle>
        <Row>
          <Signature label="Cirujano a cargo"            sublabel="Nombre / Firma / Sello" />
          <Signature label="Anestesiólogo"               sublabel="Nombre / Firma / Sello" />
          <Signature label="Responsable del paciente"    sublabel="Nombre / CI / Firma" />
        </Row>

        <PDFFooter docType="Historia Clínica Quirúrgica" />
      </Page>
    </Document>
  );
}