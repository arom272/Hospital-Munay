import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';

const COL = 'patients';

export const subscribePatients = (callback) => {
  const q = query(collection(db, COL), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};

export const addPatient = (data) =>
  addDoc(collection(db, COL), { ...data, createdAt: serverTimestamp() });

export const updatePatient = (id, data) =>
  updateDoc(doc(db, COL, id), { ...data, updatedAt: serverTimestamp() });

export const deletePatient = (id) =>
  deleteDoc(doc(db, COL, id));
