import { Document, Page, View, Text } from '@react-pdf/renderer';
import {
  styles,
  PDFHeader, PatientBar, PDFFooter,
  SectionTitle, Field, Row, TextBlock, Signature,
} from './BaseTemplate';

export default function ConsentimientoTemplate({ data = {}, patient }) {
  const d = data;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PDFHeader title="CONSENTIMIENTO INFORMADO" />
        <PatientBar patient={patient} />

        {/* Intro */}
        <View style={{ marginBottom: 10 }}>
          <Text style={{ ...styles.value, fontSize: 8, color: '#6b7280', lineHeight: 1.6 }}>
            Yo, el/la responsable del paciente identificado/a en este documento, declaro haber recibido
            información suficiente sobre el procedimiento propuesto, sus riesgos, beneficios y alternativas.
            Habiendo comprendido dicha información, otorgo mi consentimiento libre e informado.
          </Text>
        </View>

        {/* Contenido personalizado */}
        {d.contenido ? (
          <>
            <SectionTitle>Contenido del Consentimiento</SectionTitle>
            <TextBlock value={d.contenido} />
          </>
        ) : null}

        {/* Declaración */}
        <SectionTitle>Declaración de Conformidad</SectionTitle>
        <Row>
          <Field label="Nombre del responsable"  value={patient?.guardian ?? ''} flex={2} />
          <Field label="C.I. del responsable"    value={patient?.guardianIdNumber ?? ''} />
          <Field label="Fecha"                   value={new Date().toLocaleDateString('es-BO')} />
        </Row>
        <Row>
          <Field label="Relación con el paciente" value="" flex={2} />
          <View style={{ flex: 2 }} />
        </Row>

        {/* FIRMAS */}
        <SectionTitle>Firmas</SectionTitle>
        <Row>
          <Signature label="Responsable del paciente" sublabel="Nombre / CI / Firma" />
          <Signature label="Médico informante"         sublabel="Nombre / Firma / Sello" />
          <Signature label="Testigo (opcional)"        sublabel="Nombre / CI / Firma" />
        </Row>

        <PDFFooter docType="Consentimiento Informado" />
      </Page>
    </Document>
  );
}