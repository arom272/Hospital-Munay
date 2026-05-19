import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  getDoc, query, orderBy, serverTimestamp, onSnapshot,
} from 'firebase/firestore';
import { db } from '../../../firebase';

/* ── collection references ─────────────────────────── */
const docsCol = (patientId) =>
  collection(db, 'patients', patientId, 'documents');

const docRef = (patientId, documentId) =>
  doc(db, 'patients', patientId, 'documents', documentId);

/* ── CRUD ───────────────────────────────────────────── */
export const createDocument = (patientId, data) =>
  addDoc(docsCol(patientId), {
    patientId,
    documentType: data.documentType ?? 'historia_clinica',
    specialty:    data.specialty    ?? 'medicina',
    status:       data.status       ?? 'draft',
    version:      1,
    metadata: {
      printable: true,
      signed:    false,
      locked:    false,
      ...data.metadata,
    },
    clinicalData: data.clinicalData ?? {},
    createdBy:    data.createdBy    ?? { uid: '', name: '' },
    updatedBy:    data.updatedBy    ?? { uid: '', name: '' },
    createdAt:    serverTimestamp(),
    updatedAt:    serverTimestamp(),
  });

export const updateDocument = (patientId, documentId, data) =>
  updateDoc(docRef(patientId, documentId), {
    ...data,
    updatedAt: serverTimestamp(),
  });

export const getDocument = async (patientId, documentId) => {
  const snap = await getDoc(docRef(patientId, documentId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const deleteDocument = (patientId, documentId) =>
  deleteDoc(docRef(patientId, documentId));

/* ── real-time subscription ─────────────────────────── */
export const subscribePatientDocuments = (patientId, callback) => {
  const q = query(docsCol(patientId), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};
