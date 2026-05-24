import { useMemo } from 'react';
import { usePatientDocuments } from './usePatientDocuments';

/**
 * Returns all clinical documents for a patient that are linked to a specific therapy.
 * Uses the already-subscribed patient documents list — zero extra Firestore reads.
 */
export function useTherapyDocuments(patientId, therapyId) {
  const { documents, loading } = usePatientDocuments(patientId);

  const therapyDocs = useMemo(
    () => documents.filter((d) => d.therapyId === therapyId),
    [documents, therapyId]
  );

  return { documents: therapyDocs, loading };
}
