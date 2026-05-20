import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  getDoc, query, orderBy, serverTimestamp, onSnapshot, arrayUnion,
} from 'firebase/firestore';
import { db } from '../../../firebase';
import { deleteFile } from '../../../services/uploadService';

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

/* ── Attachment management ──────────────────────────── */

/**
 * Appends a file attachment record to a clinical document's attachments array.
 * The record must be the object returned by buildAttachmentRecord() from uploadService.
 */
export const attachFileToDocument = (patientId, documentId, attachmentRecord) =>
  updateDoc(docRef(patientId, documentId), {
    attachments: arrayUnion(attachmentRecord),
    updatedAt:   serverTimestamp(),
  });

/**
 * Removes one attachment from a document's array and deletes the file from Storage.
 * Filters by storagePath since arrayRemove needs an exact match.
 */
export const removeFileFromDocument = async (patientId, documentId, attachmentRecord, currentAttachments) => {
  const next = (currentAttachments ?? []).filter(a => a.storagePath !== attachmentRecord.storagePath);
  await updateDoc(docRef(patientId, documentId), {
    attachments: next,
    updatedAt:   serverTimestamp(),
  });
  await deleteFile(attachmentRecord.storagePath);
};
