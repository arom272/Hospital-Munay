import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

const COL = 'therapyPackages';
const ref = (id) => doc(db, COL, id);

/**
 * Build 8 sessions for a package.
 * @param {Array<{specialty: string, count: number}>} distribution
 *   Optional list assigning N sessions per specialty (must sum to 8).
 *   If omitted, returns 8 generic sessions (legacy, any-specialty).
 */
export function buildDefaultSessions(distribution) {
  if (!distribution || !distribution.length) {
    return Array.from({ length: 8 }, (_, i) => ({
      sessionNumber: i + 1,
      specialty:     null,
      date:          null,
      therapist:     null,
      therapyId:     null,
      status:        'pendiente',
      notes:         '',
    }));
  }

  const sessions = [];
  let n = 1;
  for (const { specialty, count } of distribution) {
    for (let i = 0; i < count; i++) {
      sessions.push({
        sessionNumber: n++,
        specialty,
        date:          null,
        therapist:     null,
        therapyId:     null,
        status:        'pendiente',
        notes:         '',
      });
    }
  }
  return sessions;
}

export const subscribePackages = (callback) => {
  const q = query(collection(db, COL), orderBy('startDate', 'desc'));
  return onSnapshot(q, (snap) =>
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
};

export const addPackage = (data) =>
  addDoc(collection(db, COL), {
    ...data,
    sessions: data.sessions ?? buildDefaultSessions(),
    status:   data.status   ?? 'activo',
    createdAt: serverTimestamp(),
  });

export const updatePackage = (id, data) =>
  updateDoc(ref(id), { ...data, updatedAt: serverTimestamp() });

export const deletePackage = (id) =>
  deleteDoc(ref(id));