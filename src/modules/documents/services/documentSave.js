import { createDocument } from './documentService';

/**
 * Persists a clinical document snapshot to Firestore.
 * Call this alongside any print utility — does not affect the print flow.
 * Silently swallows errors so a Firestore failure never blocks printing.
 */
export async function saveDocumentSnapshot({ patientId, documentType, specialty, clinicalData, user }) {
  if (!patientId) return;
  try {
    const auditUser = user
      ? { uid: user.uid, name: user.displayName ?? user.email ?? 'Sistema' }
      : { uid: '', name: 'Sistema' };

    await createDocument(patientId, {
      documentType,
      specialty,
      status:      'completed',
      clinicalData,
      createdBy:   auditUser,
      updatedBy:   auditUser,
      metadata:    { printable: true, signed: false, locked: false },
    });
  } catch (_) {
    // intentionally silent — print must always succeed regardless
  }
}
