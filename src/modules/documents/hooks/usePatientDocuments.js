import { useEffect, useState } from 'react';
import { subscribePatientDocuments } from '../services/documentService';

export function usePatientDocuments(patientId) {
  const [documents, setDocuments] = useState([]);
  const [loading,   setLoading]   = useState(true);

  useEffect(() => {
    if (!patientId) { setDocuments([]); setLoading(false); return; }
    setLoading(true);
    const unsub = subscribePatientDocuments(patientId, (docs) => {
      setDocuments(docs);
      setLoading(false);
    });
    return unsub;
  }, [patientId]);

  return { documents, loading };
}
