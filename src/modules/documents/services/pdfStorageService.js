import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase';

/**
 * Uploads a generated PDF Blob to Firebase Storage under:
 *   patients/{patientId}/documents/{documentId}/v{version}_{type}_{date}.pdf
 *
 * Returns { url, storagePath, sizeBytes }.
 */
export const pdfStorageService = {
  async uploadPDF({ blob, patientId, documentId, documentType, version }) {
    const date        = new Date().toISOString().split('T')[0];
    const slug        = documentType.replace(/_/g, '-');
    const filename    = `v${version}_${slug}_${date}.pdf`;
    const storagePath = `patients/${patientId}/documents/${documentId}/${filename}`;

    const storageRef = ref(storage, storagePath);

    const snapshot = await uploadBytes(storageRef, blob, {
      contentType: 'application/pdf',
      customMetadata: {
        patientId,
        documentId,
        documentType,
        version: String(version),
      },
    });

    const url = await getDownloadURL(snapshot.ref);
    return { url, storagePath, sizeBytes: blob.size };
  },
};