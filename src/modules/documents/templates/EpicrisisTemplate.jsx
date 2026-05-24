import { Document, Page, View, Text } from '@react-pdf/renderer';
import {
  styles,
  PDFHeader, PatientBar, PDFFooter,
  SectionTitle, Field, Row, TextBlock, Signature,
} from './BaseTemplate';

function DateTimeRow({ label1, date1, time1, label2, date2, time2 }) {
  return (
    <Row>
      <Field label={`${label1} — Fecha`}    value={date1} />
      <Field label={`${label1} — Hora`}     value={time1} flex={0.6} />
      <Field label={`${label2} — Fecha`}    value={date2} />
      <Field label={`${label2} — Hora`}     value={time2} flex={0.6} />
    </Row>
  );
}

export default function EpicrisisTemplate({ data = {}, patient }) {
  const d     = data;
  const ind   = d.indicaciones ?? {};
  const cita  = d.proximaCita  ?? {};

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PDFHeader title="EPICRISIS" subtitle="Cirugía · Alta hospitalaria" />
        <PatientBar patient={patient} />

        {/* 1. INTERNACIÓN */}
        <SectionTitle>1. Datos de Internación</SectionTitle>
        <DateTimeRow
          label1="Ingreso"  date1={d.fechaIngreso}  time1={d.horaIngreso}
          label2="Egreso"   date2={d.fechaEgreso}   time2={d.horaEgreso}
        />

        {/* 2. DIAGNÓSTICOS */}
        <SectionTitle>2. Diagnósticos</SectionTitle>
        <Row>
          <TextBlock label="Diagnóstico pre-quirúrgico"  value={d.diagnosticoPreQx} />
          <TextBlock label="Diagnóstico post-quirúrgico" value={d.diagnosticoPostQx} />
        </Row>

        {/* 3. PROCEDIMIENTO */}
        <SectionTitle>3. Procedimiento Quirúrgico</SectionTitle>
        <Row>
          <Field label="Procedimiento realizado" value={d.procedimiento} flex={2} />
          <Field label="Tipo de anestesia"        value={d.anestesia} />
          <Field label="Duración (min)"           value={d.duracionMin} flex={0.7} />
        </Row>
        <Row>
          <Field label="Sangrado (ml)" value={d.sangradoMl} />
          <Field label="Cirujano"      value={d.cirujano} />
          <View style={{ flex: 2 }} />
        </Row>

        {/* 4. INDICACIONES DE ALTA */}
        <SectionTitle>4. Indicaciones de Alta</SectionTitle>
        <Row>
          <TextBlock label="Dieta"               value={ind.dieta} />
          <TextBlock label="Cuidado de herida"   value={ind.cuidadoHerida} />
        </Row>
        <Row>
          <TextBlock label="Precauciones"        value={ind.precauciones} />
          <TextBlock label="Actividad / Reposo"  value={ind.actividad} />
        </Row>
        <TextBlock label="Signos de alarma" value={d.signosAlarma} />

        {/* 5. PRÓXIMA CITA */}
        <SectionTitle>5. Próxima Cita de Control</SectionTitle>
        <Row>
          <Field label="Fecha"    value={cita.fecha} />
          <Field label="Hora"     value={cita.hora}  flex={0.7} />
          <View style={{ flex: 2 }} />
        </Row>
        <TextBlock label="Observaciones de egreso" value={d.observaciones} />

        {/* FIRMAS */}
        <SectionTitle>Firmas</SectionTitle>
        <Row>
          <Signature label="Cirujano"              sublabel="Nombre / Firma / Sello" />
          <Signature label="Médico de sala"         sublabel="Nombre / Firma / Sello" />
          <Signature label="Responsable del paciente" sublabel="Nombre / CI / Firma" />
        </Row>

        <PDFFooter docType="Epicrisis" />
      </Page>
    </Document>
  );
}