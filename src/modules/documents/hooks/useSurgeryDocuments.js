import { useMemo } from 'react';
import { usePatientDocuments } from './usePatientDocuments';

/**
 * Returns all clinical documents for a patient that are linked to a specific surgery.
 * Uses the already-subscribed patient documents list — zero extra Firestore reads.
 */
export function useSurgeryDocuments(patientId, surgeryId) {
  const { documents, loading } = usePatientDocuments(patientId);

  const surgeryDocs = useMemo(
    () => documents.filter((d) => d.surgeryId === surgeryId),
    [documents, surgeryId]
  );

  return { documents: surgeryDocs, loading };
}
