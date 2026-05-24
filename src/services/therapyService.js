import {
  collection, doc, addDoc, updateDoc, deleteDoc, getDoc,
  onSnapshot, query, orderBy, serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';

const COL = 'therapies';
const ref = (id) => doc(db, COL, id);

export const subscribeTherapies = (callback) => {
  const q = query(collection(db, COL), orderBy('date', 'asc'));
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};

export const getTherapy = async (id) => {
  const snap = await getDoc(ref(id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const addTherapy = (data) =>
  addDoc(collection(db, COL), {
    ...data,
    attachments: data.attachments ?? [],
    createdAt: serverTimestamp(),
  });

export const updateTherapy = (id, data) =>
  updateDoc(ref(id), { ...data, updatedAt: serverTimestamp() });

export const deleteTherapy = (id) =>
  deleteDoc(doc(db, COL, id));

export const deleteTherapies = (ids) =>
  Promise.all(ids.map(id => deleteDoc(doc(db, COL, id))));
