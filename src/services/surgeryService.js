import {
  collection, doc, addDoc, updateDoc, deleteDoc, getDoc,
  onSnapshot, query, orderBy, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

const COL = 'surgeries';
const ref = (id) => doc(db, COL, id);

export const subscribeSurgeries = (callback) => {
  const q = query(collection(db, COL), orderBy('date', 'asc'));
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};

export const getSurgery = async (id) => {
  const snap = await getDoc(ref(id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const addSurgery = (data) =>
  addDoc(collection(db, COL), {
    ...data,
    signedConsents: data.signedConsents ?? [],
    attachments:    data.attachments    ?? [],
    createdAt: serverTimestamp(),
  });

export const updateSurgery = (id, data) =>
  updateDoc(ref(id), { ...data, updatedAt: serverTimestamp() });

export const deleteSurgery = (id) =>
  deleteDoc(ref(id));
