import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from '@/firebase';

/* ── Constants ──────────────────────────────────────────────────────────────── */

const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
]);

const EXT_MAP = {
  'application/pdf': 'pdf',
  'image/jpeg':      'jpg',
  'image/png':       'png',
  'image/webp':      'webp',
};

/* Storage folder per attachment category */
export const STORAGE_CATEGORIES = {
  documents:  'documents',
  images:     'images',
  reports:    'reports',
  signatures: 'signatures',
  consents:   'consents',
};

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function sanitizeFilename(name) {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')   // strip diacritics
    .replace(/[^a-zA-Z0-9._-]/g, '_') // replace unsafe chars
    .replace(/_{2,}/g, '_')            // collapse consecutive underscores
    .toLowerCase();
}

function buildStoragePath(patientId, category, file) {
  const folder  = STORAGE_CATEGORIES[category] ?? 'documents';
  const base    = sanitizeFilename(file.name.replace(/\.[^/.]+$/, ''));
  const ext     = EXT_MAP[file.type] ?? 'bin';
  const ts      = Date.now();
  return `patients/${patientId}/${folder}/${base}_${ts}.${ext}`;
}

function validate(file) {
  if (!file) throw new Error('No se proporcionó archivo.');
  if (file.size > MAX_SIZE_BYTES)
    throw new Error(`El archivo excede el límite de 10 MB (${(file.size / 1024 / 1024).toFixed(1)} MB).`);
  if (!ALLOWED_TYPES.has(file.type))
    throw new Error(`Tipo de archivo no permitido: ${file.type}. Se aceptan PDF, JPG, PNG y WEBP.`);
}

/* ── Core API ───────────────────────────────────────────────────────────────── */

/**
 * Uploads a clinical file to Firebase Storage.
 *
 * @param {string} patientId   - Firestore patient document ID
 * @param {string} category    - One of STORAGE_CATEGORIES keys
 * @param {File}   file        - Browser File object
 * @returns {Promise<{url: string, path: string, name: string, size: number, type: string}>}
 */
export async function uploadFile(patientId, category, file) {
  if (!patientId) throw new Error('patientId es requerido.');
  validate(file);

  const storagePath = buildStoragePath(patientId, category, file);
  const storageRef  = ref(storage, storagePath);

  try {
    const snapshot = await uploadBytes(storageRef, file, {
      contentType:        file.type,
      customMetadata: {
        patientId,
        category,
        originalName: file.name,
      },
    });
    const url = await getDownloadURL(snapshot.ref);
    return {
      url,
      path:         storagePath,
      name:         file.name,
      size:         file.size,
      type:         file.type,
    };
  } catch (err) {
    console.error('[uploadService] uploadFile failed:', err);
    throw new Error('Error al subir el archivo. Intente nuevamente.');
  }
}

/**
 * Deletes a file from Firebase Storage by its storage path.
 *
 * @param {string} storagePath - The full path returned by uploadFile()
 */
export async function deleteFile(storagePath) {
  if (!storagePath) throw new Error('storagePath es requerido.');
  try {
    await deleteObject(ref(storage, storagePath));
  } catch (err) {
    if (err.code === 'storage/object-not-found') return; // already deleted — no-op
    console.error('[uploadService] deleteFile failed:', err);
    throw new Error('Error al eliminar el archivo.');
  }
}

/**
 * Obtains the public download URL of an existing file.
 *
 * @param {string} storagePath - The full path stored in Firestore
 * @returns {Promise<string>}
 */
export async function getFileURL(storagePath) {
  if (!storagePath) throw new Error('storagePath es requerido.');
  try {
    return await getDownloadURL(ref(storage, storagePath));
  } catch (err) {
    console.error('[uploadService] getFileURL failed:', err);
    throw new Error('No se pudo obtener la URL del archivo.');
  }
}

/**
 * Returns an attachment metadata object ready to be persisted in Firestore.
 * Use this to build the `attachments` array on a clinical document.
 *
 * @param {object} uploadResult - Return value of uploadFile()
 * @param {string} label        - Human-readable name (e.g. "Historia Clínica")
 * @param {string} category     - Storage category key
 */
export function buildAttachmentRecord(uploadResult, label, category) {
  return {
    type:        EXT_MAP[uploadResult.type] ?? 'bin',
    name:        label || uploadResult.name,
    originalName:uploadResult.name,
    url:         uploadResult.url,
    storagePath: uploadResult.path,
    size:        uploadResult.size,
    mimeType:    uploadResult.type,
    category:    category ?? 'documents',
    uploadedAt:  new Date().toISOString(),
  };
}
