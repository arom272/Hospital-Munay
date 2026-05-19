import {
  collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase';

const COL = 'therapists';

export const subscribeTherapists = (callback) =>
  onSnapshot(collection(db, COL), (snap) =>
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  );

export const addTherapist    = (data)     => addDoc(collection(db, COL), data);
export const updateTherapist = (id, data) => updateDoc(doc(db, COL, id), data);
export const deleteTherapist = (id)       => deleteDoc(doc(db, COL, id));
