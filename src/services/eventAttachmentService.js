import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { arrayUnion } from 'firebase/firestore';
import { storage } from '../firebase';
import { updateSurgery } from './surgeryService';
import { updateTherapy } from './therapyService';

const MAX_SIZE = 20 * 1024 * 1024; // 20 MB

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'image/jpeg', 'image/png', 'image/webp',
]);

function sanitize(name) {
  return name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_{2,}/g, '_')
    .toLowerCase();
}

/**
 * Uploads a general file attachment and appends it to a surgery or therapy event.
 *
 * @param {{ file: File, patientId: string, eventId: string, eventType: 'surgery'|'therapy', label: string, uploadedBy: {uid, name} }}
 * @returns {Promise<object>} The attachment record appended to the event
 */
export async function uploadAndLinkAttachment({ file, patientId, eventId, eventType, label, uploadedBy }) {
  if (!file) throw new Error('No se proporcionó archivo.');
  if (!patientId || !eventId) throw new Error('patientId y eventId son requeridos.');
  if (file.size > MAX_SIZE)
    throw new Error(`El archivo excede 20 MB (${(file.size / 1024 / 1024).toFixed(1)} MB).`);
  if (!ALLOWED_TYPES.has(file.type))
    throw new Error('Tipo no permitido. Se aceptan PDF, JPG, PNG y WEBP.');

  const ext       = file.name.split('.').pop().toLowerCase() || 'bin';
  const base      = sanitize(file.name.replace(/\.[^/.]+$/, ''));
  const ts        = Date.now();
  const filename  = `${base}_${ts}.${ext}`;
  const folder    = eventType === 'surgery' ? 'surgery-attachments' : 'therapy-attachments';
  const storagePath = `patients/${patientId}/${folder}/${eventId}_${filename}`;

  const storageRef = ref(storage, storagePath);
  const snapshot   = await uploadBytes(storageRef, file, {
    contentType: file.type,
    customMetadata: { patientId, eventId, eventType },
  });
  const url = await getDownloadURL(snapshot.ref);

  const record = {
    id:          `${ts}`,
    label:       label || file.name,
    originalName:file.name,
    url,
    storagePath,
    filename,
    sizeBytes:   file.size,
    mimeType:    file.type,
    uploadedAt:  new Date().toISOString(),
    uploadedBy:  uploadedBy ?? { uid: '', name: '' },
  };

  if (eventType === 'surgery') {
    await updateSurgery(eventId, { attachments: arrayUnion(record) });
  } else {
    await updateTherapy(eventId, { attachments: arrayUnion(record) });
  }

  return record;
}

/**
 * Removes one attachment from an event's array and deletes the file from Storage.
 *
 * @param {{ record: object, eventId: string, eventType: 'surgery'|'therapy', currentAttachments: object[] }}
 */
export async function removeAttachment({ record, eventId, eventType, currentAttachments }) {
  const next = (currentAttachments ?? []).filter(a => a.storagePath !== record.storagePath);

  if (eventType === 'surgery') {
    await updateSurgery(eventId, { attachments: next });
  } else {
    await updateTherapy(eventId, { attachments: next });
  }

  try {
    await deleteObject(ref(storage, record.storagePath));
  } catch (err) {
    if (err.code !== 'storage/object-not-found') throw err;
  }
}
