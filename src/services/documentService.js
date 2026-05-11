import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const COL = 'documentos';

function makeId(patientId, docType, surgeryId) {
  return surgeryId
    ? `${patientId}_${surgeryId}_${docType}`
    : `${patientId}_${docType}`;
}

export async function saveDocumento(patientId, docType, formData, surgeryId = null) {
  const id  = makeId(patientId, docType, surgeryId);
  const ref = doc(db, COL, id);
  const payload = {
    patientId,
    docType,
    formData,
    savedAt: serverTimestamp(),
  };
  if (surgeryId) payload.surgeryId = surgeryId;
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await setDoc(ref, payload, { merge: true });
  } else {
    await setDoc(ref, { ...payload, createdAt: serverTimestamp() });
  }
  return id;
}

export async function getDocumento(patientId, docType, surgeryId = null) {
  const id   = makeId(patientId, docType, surgeryId);
  const snap = await getDoc(doc(db, COL, id));
  return snap.exists() ? snap.data() : null;
}
