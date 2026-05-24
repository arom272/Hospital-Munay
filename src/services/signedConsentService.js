import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { arrayUnion } from 'firebase/firestore';
import { storage } from '../firebase';
import { updateSurgery } from './surgeryService';

const CONSENT_LABELS = {
  cirugia:    'Consentimiento Quirúrgico',
  anestesia:  'Consentimiento de Anestesia',
  fotos:      'Autorización de Fotografías',
  otro:       'Otro Consentimiento',
};

const MAX_SIZE = 20 * 1024 * 1024; // 20 MB

/**
 * Uploads a signed physical consent PDF/image and links it to a surgery.
 *
 * @param {{ file: File, patientId: string, surgeryId: string, type: string, uploadedBy: {uid: string, name: string} }}
 * @returns {Promise<object>} The consent record that was appended to surgery.signedConsents
 */
export async function uploadSignedConsent({ file, patientId, surgeryId, type, uploadedBy }) {
  if (!file)       throw new Error('No se proporcionó archivo.');
  if (!patientId)  throw new Error('patientId es requerido.');
  if (!surgeryId)  throw new Error('surgeryId es requerido.');
  if (file.size > MAX_SIZE)
    throw new Error(`El archivo excede 20 MB (${(file.size / 1024 / 1024).toFixed(1)} MB).`);

  const date     = new Date().toISOString().split('T')[0];
  const shortId  = Math.random().toString(36).slice(2, 8);
  const safeType = (type ?? 'otro').replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const ext      = file.name.split('.').pop().toLowerCase() || 'pdf';
  const filename = `${surgeryId}_${safeType}_${date}_${shortId}.${ext}`;
  const storagePath = `patients/${patientId}/signed-consents/${filename}`;

  const storageRef = ref(storage, storagePath);
  const snapshot   = await uploadBytes(storageRef, file, {
    contentType:    file.type,
    customMetadata: { patientId, surgeryId, consentType: safeType },
  });
  const url = await getDownloadURL(snapshot.ref);

  const record = {
    id:          shortId,
    type:        safeType,
    label:       CONSENT_LABELS[safeType] ?? CONSENT_LABELS.otro,
    url,
    storagePath,
    filename,
    sizeBytes:   file.size,
    uploadedAt:  new Date().toISOString(),
    uploadedBy:  uploadedBy ?? { uid: '', name: '' },
    status:      'uploaded',
  };

  await updateSurgery(surgeryId, { signedConsents: arrayUnion(record) });

  return record;
}
