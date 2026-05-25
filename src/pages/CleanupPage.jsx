import { useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';

async function deleteStorageFile(storagePath) {
  if (!storagePath) return;
  try {
    await deleteObject(ref(storage, storagePath));
  } catch {
    // file may already be deleted or not exist
  }
}

export default function CleanupPage() {
  const [state, setState]   = useState('idle'); // idle | running | done | error
  const [log,   setLog]     = useState([]);
  const [stats, setStats]   = useState({ patients: 0, docs: 0, files: 0 });

  function addLog(msg) {
    setLog(prev => [...prev, msg]);
  }

  async function runCleanup() {
    setState('running');
    setLog([]);
    let totalDocs = 0;
    let totalFiles = 0;
    let totalPatients = 0;

    try {
      const patientsSnap = await getDocs(collection(db, 'patients'));
      totalPatients = patientsSnap.size;
      addLog(`${totalPatients} pacientes encontrados`);

      for (const patientDoc of patientsSnap.docs) {
        const patientId = patientDoc.id;
        const patientName = patientDoc.data().name ?? patientId;

        const docsSnap = await getDocs(collection(db, 'patients', patientId, 'documents'));
        if (docsSnap.empty) continue;

        addLog(`  ${patientName}: ${docsSnap.size} documento(s)`);

        for (const d of docsSnap.docs) {
          const data = d.data();

          // delete PDF file
          if (data.pdf?.storagePath) {
            await deleteStorageFile(data.pdf.storagePath);
            totalFiles++;
          }

          // delete attachment files
          for (const att of data.attachments ?? []) {
            if (att.storagePath) {
              await deleteStorageFile(att.storagePath);
              totalFiles++;
            }
          }

          // delete Firestore document
          await deleteDoc(doc(db, 'patients', patientId, 'documents', d.id));
          totalDocs++;
        }
      }

      setStats({ patients: totalPatients, docs: totalDocs, files: totalFiles });
      addLog(`✅ Listo: ${totalDocs} documentos y ${totalFiles} archivos eliminados`);
      setState('done');
    } catch (err) {
      addLog(`❌ Error: ${err.message}`);
      setState('error');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 max-w-lg w-full p-8">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Limpieza de documentos</h1>
        <p className="text-sm text-gray-500 mb-6">
          Elimina <strong>todos</strong> los documentos clínicos de Firebase (Firestore + Storage).
          No afecta pacientes, cirugías ni terapias.
        </p>

        {state === 'idle' && (
          <button
            onClick={runCleanup}
            className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition"
          >
            Eliminar todos los documentos
          </button>
        )}

        {state === 'running' && (
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="w-5 h-5 border-2 border-t-transparent border-red-500 rounded-full animate-spin shrink-0" />
            Eliminando...
          </div>
        )}

        {state === 'done' && (
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800">
            <p className="font-bold mb-1">Completado</p>
            <p>{stats.docs} documentos eliminados · {stats.files} archivos de Storage eliminados</p>
          </div>
        )}

        {state === 'error' && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
            <p className="font-bold mb-1">Error durante la limpieza</p>
          </div>
        )}

        {log.length > 0 && (
          <div className="mt-4 bg-gray-900 rounded-xl p-4 max-h-64 overflow-y-auto">
            {log.map((line, i) => (
              <p key={i} className="text-xs text-gray-300 font-mono leading-relaxed">{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
