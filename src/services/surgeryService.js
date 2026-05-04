import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';

const COL = 'surgeries';

export const subscribeSurgeries = (callback) => {
  const q = query(collection(db, COL), orderBy('date', 'asc'));
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};

export const addSurgery = (data) =>
  addDoc(collection(db, COL), { ...data, createdAt: serverTimestamp() });

export const updateSurgery = (id, data) =>
  updateDoc(doc(db, COL, id), { ...data, updatedAt: serverTimestamp() });

export const deleteSurgery = (id) =>
  deleteDoc(doc(db, COL, id));
