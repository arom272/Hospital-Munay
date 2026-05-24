import { Document, Page, View, Text } from '@react-pdf/renderer';
import {
  styles,
  PDFHeader, PatientBar, PDFFooter,
  SectionTitle, Field, Row, TextBlock, Signature,
} from './BaseTemplate';

const NIVEL_MAP = {
  ninguno: 'Ninguno', primaria: 'Primaria',
  secundaria: 'Secundaria', tecnico: 'Técnico / Universitario',
};
const ECON_MAP = {
  muy_baja: 'Muy baja', baja: 'Baja',
  media: 'Media', media_alta: 'Media alta',
};
const FAMILIA_MAP = {
  nuclear: 'Nuclear', monoparental: 'Monoparental',
  extensa: 'Extensa', reconstituida: 'Reconstituida', unipersonal: 'Unipersonal',
};
const VIVIENDA_MAP = {
  propia: 'Propia', alquilada: 'Alquilada', prestada: 'Prestada', otro: 'Otro',
};

export default function FichaSocialTemplate({ data = {}, patient }) {
  const d = data;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PDFHeader title="FICHA DE EVALUACIÓN SOCIAL" subtitle="Trabajo Social" />
        <PatientBar patient={patient} />

        {/* 1. COMPOSICIÓN FAMILIAR */}
        <SectionTitle>1. Composición Familiar</SectionTitle>
        <Row>
          <Field label="Tipo de familia"   value={FAMILIA_MAP[d.tipoFamilia] ?? d.tipoFamilia} />
          <Field label="N° integrantes"    value={d.nIntegrantes} flex={0.6} />
          <View style={{ flex: 2 }} />
        </Row>
        <TextBlock label="Descripción del grupo familiar" value={d.composicionFamiliar} />

        {/* 2. SITUACIÓN SOCIOECONÓMICA */}
        <SectionTitle>2. Situación Socioeconómica</SectionTitle>
        <Row>
          <Field label="Ocupación padre / tutor"  value={d.ocupacionPadre} />
          <Field label="Ocupación madre / tutora" value={d.ocupacionMadre} />
        </Row>
        <Row>
          <Field label="Nivel educativo"     value={NIVEL_MAP[d.nivelEducativo] ?? d.nivelEducativo} />
          <Field label="Condición económica" value={ECON_MAP[d.condicionEconomica] ?? d.condicionEconomica} />
        </Row>

        {/* 3. VIVIENDA Y RED DE APOYO */}
        <SectionTitle>3. Vivienda y Red de Apoyo</SectionTitle>
        <Row>
          <Field label="Tipo de vivienda" value={VIVIENDA_MAP[d.tipoVivienda] ?? d.tipoVivienda} />
          <Field label="Red de apoyo"     value={d.redApoyo} />
        </Row>

        {/* 4. OBSERVACIONES */}
        <SectionTitle>4. Observaciones del Trabajador/a Social</SectionTitle>
        <TextBlock value={d.observaciones} />

        {/* FIRMAS */}
        <SectionTitle>Firmas</SectionTitle>
        <Row>
          <Signature label="Trabajador/a Social"       sublabel="Nombre / Firma / Sello" />
          <Signature label="Responsable del paciente"  sublabel="Nombre / CI / Firma" />
        </Row>

        <PDFFooter docType="Ficha Social" />
      </Page>
    </Document>
  );
}