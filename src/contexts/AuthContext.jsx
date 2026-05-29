import { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [role, setRole]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        try {
          // 1) El rol se resuelve PRIMERO desde el custom claim del token.
          //    Es la fuente que también usan las reglas de Firestore/Storage.
          const token = await firebaseUser.getIdTokenResult();
          const claimRole = token.claims.role;
          if (claimRole) {
            setRole(claimRole);
          } else {
            // 2) Fallback (migración en curso): leer users/{uid}.role en Firestore.
            const snap = await getDoc(doc(db, 'users', firebaseUser.uid));
            setRole(snap.exists() ? snap.data().role : 'viewer');
          }
        } catch {
          setRole('viewer');
        }
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const isAdmin     = role === 'admin';
  const isSecretary = role === 'secretaria';
  const isDoctor    = role === 'medico';
  const isViewer    = role === 'viewer';
  const canEdit     = isAdmin || isSecretary;
  // Create / generate clinical documents (historia clínica, epicrisis, consentimientos…)
  const canDocument = isAdmin || isSecretary || isDoctor;

  return (
    <AuthContext.Provider value={{ user, role, isAdmin, isSecretary, isDoctor, isViewer, canEdit, canDocument, loading, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
