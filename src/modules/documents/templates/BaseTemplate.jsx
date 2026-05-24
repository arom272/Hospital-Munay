import { StyleSheet, Text, View } from '@react-pdf/renderer';

/* ── Brand constants ────────────────────────────────── */
const BLUE       = '#2563eb';
const BLUE_LIGHT = '#eff6ff';
const BLUE_BORDER= '#bfdbfe';
const GRAY_900   = '#111827';
const GRAY_700   = '#374151';
const GRAY_500   = '#6b7280';
const GRAY_400   = '#9ca3af';
const GRAY_100   = '#f3f4f6';
const GRAY_50    = '#f9fafb';
const BORDER     = '#e5e7eb';

/* ── Shared styles ──────────────────────────────────── */
export const styles = StyleSheet.create({
  /* Page */
  page: {
    paddingTop: 36,
    paddingBottom: 56,
    paddingHorizontal: 38,
    fontSize: 8.5,
    color: GRAY_900,
    fontFamily: 'Helvetica',
    lineHeight: 1.4,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: BLUE,
  },
  headerOrgName: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
  },
  headerOrgSub: {
    fontSize: 7,
    color: GRAY_500,
    marginTop: 2,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  headerDocTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: GRAY_900,
  },
  headerDocDate: {
    fontSize: 7.5,
    color: GRAY_500,
    marginTop: 2,
  },

  /* Patient info bar */
  patientBar: {
    backgroundColor: BLUE_LIGHT,
    borderWidth: 0.5,
    borderColor: BLUE_BORDER,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 12,
    gap: 16,
  },
  patientBarItem: {
    flex: 1,
  },
  patientBarLabel: {
    fontSize: 6.5,
    color: BLUE,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 1,
  },
  patientBarValue: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: GRAY_900,
  },

  /* Section */
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
    backgroundColor: BLUE_LIGHT,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginBottom: 7,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },

  /* Row + Field */
  row: {
    flexDirection: 'row',
    marginBottom: 6,
    gap: 10,
  },
  field: {
    flex: 1,
  },
  label: {
    fontSize: 6.5,
    color: GRAY_400,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 2,
  },
  value: {
    fontSize: 8.5,
    color: GRAY_900,
    borderBottomWidth: 0.5,
    borderBottomColor: BORDER,
    paddingBottom: 3,
    minHeight: 14,
  },

  /* Text block (multiline) */
  textBlock: {
    fontSize: 8.5,
    color: GRAY_900,
    borderWidth: 0.5,
    borderColor: BORDER,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 7,
    minHeight: 32,
    lineHeight: 1.5,
  },

  /* Vitals grid */
  vitalsRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
  },
  vitalBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GRAY_50,
    borderWidth: 0.5,
    borderColor: BORDER,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 4,
  },
  vitalLabel: {
    fontSize: 6,
    color: GRAY_400,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  vitalValue: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: GRAY_900,
  },

  /* Divider */
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: BORDER,
    marginVertical: 8,
  },

  /* Signature area */
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 28,
    gap: 24,
  },
  signatureBox: {
    flex: 1,
    alignItems: 'center',
  },
  signatureLine: {
    width: '85%',
    borderTopWidth: 0.5,
    borderTopColor: GRAY_700,
    marginBottom: 4,
  },
  signatureLabel: {
    fontSize: 7.5,
    color: GRAY_700,
    textAlign: 'center',
  },
  signatureSub: {
    fontSize: 6.5,
    color: GRAY_400,
    textAlign: 'center',
    marginTop: 1,
  },

  /* Footer */
  footer: {
    position: 'absolute',
    bottom: 22,
    left: 38,
    right: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: BORDER,
    paddingTop: 5,
  },
  footerText: {
    fontSize: 6.5,
    color: GRAY_400,
  },
});

/* ── Reusable PDF components ────────────────────────── */

export function PDFHeader({ title, subtitle, date }) {
  const today = date ?? new Date().toLocaleDateString('es-BO', {
    day: '2-digit', month: 'long', year: 'numeric',
  });
  return (
    <View style={styles.header} fixed>
      <View>
        <Text style={styles.headerOrgName}>FUNDACIÓN MUNAY</Text>
        <Text style={styles.headerOrgSub}>Atención integral en Fisura Labio Alveolo Palatina</Text>
      </View>
      <View style={styles.headerRight}>
        <Text style={styles.headerDocTitle}>{title}</Text>
        {subtitle && <Text style={styles.headerDocDate}>{subtitle}</Text>}
        <Text style={styles.headerDocDate}>{today}</Text>
      </View>
    </View>
  );
}

export function PatientBar({ patient }) {
  if (!patient) return null;
  const name    = patient.name     ?? '—';
  const hc      = patient.hcNumber ?? patient.idNumber ?? '—';
  const birth   = patient.birthDate ?? '—';
  const diag    = patient.diagnosis ?? '—';
  return (
    <View style={styles.patientBar}>
      <View style={styles.patientBarItem}>
        <Text style={styles.patientBarLabel}>Paciente</Text>
        <Text style={styles.patientBarValue}>{name}</Text>
      </View>
      <View style={styles.patientBarItem}>
        <Text style={styles.patientBarLabel}>N° HC</Text>
        <Text style={styles.patientBarValue}>{hc}</Text>
      </View>
      <View style={styles.patientBarItem}>
        <Text style={styles.patientBarLabel}>Fecha de nacimiento</Text>
        <Text style={styles.patientBarValue}>{birth}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.patientBarLabel}>Diagnóstico</Text>
        <Text style={styles.patientBarValue}>{diag}</Text>
      </View>
    </View>
  );
}

export function SectionTitle({ children }) {
  return (
    <View wrap={false}>
      <Text style={styles.sectionTitle}>{children}</Text>
    </View>
  );
}

export function Field({ label, value, flex = 1 }) {
  return (
    <View style={{ ...styles.field, flex }}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || '—'}</Text>
    </View>
  );
}

export function Row({ children, gap = 10 }) {
  return <View style={{ ...styles.row, gap }}>{children}</View>;
}

export function TextBlock({ label, value }) {
  return (
    <View style={styles.section}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Text style={styles.textBlock}>{value || '—'}</Text>
    </View>
  );
}

export function VitalsBar({ vitals = {} }) {
  const fields = [
    { key: 'peso',  label: 'Peso (kg)' },
    { key: 'talla', label: 'Talla (cm)' },
    { key: 'temp',  label: 'Temp (°C)' },
    { key: 'fc',    label: 'FC (lpm)' },
    { key: 'fr',    label: 'FR (rpm)' },
    { key: 'spo2',  label: 'SpO₂ (%)' },
  ];
  return (
    <View style={styles.vitalsRow}>
      {fields.map(f => (
        <View key={f.key} style={styles.vitalBox}>
          <Text style={styles.vitalLabel}>{f.label}</Text>
          <Text style={styles.vitalValue}>{vitals[f.key] || '—'}</Text>
        </View>
      ))}
    </View>
  );
}

export function Signature({ label, sublabel }) {
  return (
    <View style={styles.signatureBox}>
      <View style={styles.signatureLine} />
      <Text style={styles.signatureLabel}>{label}</Text>
      {sublabel && <Text style={styles.signatureSub}>{sublabel}</Text>}
    </View>
  );
}

export function Divider() {
  return <View style={styles.divider} />;
}

export function PDFFooter({ docType, version }) {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>Fundación Munay · APP MUNAY</Text>
      <Text style={styles.footerText}>{docType}{version ? ` · v${version}` : ''}</Text>
      <Text
        style={styles.footerText}
        render={({ pageNumber, totalPages }) => `Página ${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}