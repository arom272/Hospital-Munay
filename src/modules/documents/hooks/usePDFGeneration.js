import React, { useState, useCallback } from 'react';
import { pdf } from '@react-pdf/renderer';
import { useAuth } from '../../../contexts/AuthContext';
import {
  createDocument,
  updateDocument,
  getDocument,
} from '../services/documentService';
import { pdfStorageService } from '../services/pdfStorageService';
import { getTemplateForType } from '../templates';
import { buildAuditUser } from '../utils/documentUtils';
import toast from 'react-hot-toast';

/* States: idle → generating → uploading → saving → done | error */

const STATE_LABELS = {
  generating: 'Generando PDF…',
  uploading:  'Subiendo…',
  saving:     'Guardando…',
};

/**
 * Hook that orchestrates: save data → render PDF → upload Storage → save reference.
 *
 * Usage:
 *   const { generateAndSave, isLoading, stateLabel } = usePDFGeneration();
 *   await generateAndSave({ patient, clinicalData, documentType, documentId, patientId });
 */
export function usePDFGeneration() {
  const { user } = useAuth();
  const [state, setState] = useState('idle');

  const generateAndSave = useCallback(async ({
    patient,
    clinicalData,
    documentType,
    documentId  = null,
    patientId,
    surgeryId   = null,
    therapyId   = null,
    eventDate   = null,
  }) => {
    setState('generating');
    try {
      const audit = buildAuditUser(user);
      let docId   = documentId;
      let version = 1;

      /* ── Step 1: persist data in Firestore ─────────── */
      if (docId) {
        const existing = await getDocument(patientId, docId);
        version = (existing?.version ?? 0) + 1;
        await updateDocument(patientId, docId, {
          clinicalData,
          status:    'completed',
          version,
          updatedBy: audit,
        });
      } else {
        const ref = await createDocument(patientId, {
          documentType,
          clinicalData,
          status:    'completed',
          surgeryId,
          therapyId,
          eventDate,
          createdBy: audit,
          updatedBy: audit,
        });
        docId = ref.id;
      }

      /* ── Step 2: render template → Blob ────────────── */
      const Template = getTemplateForType(documentType);
      const element  = React.createElement(Template, { data: clinicalData, patient });
      const blob     = await pdf(element).toBlob();

      setState('uploading');

      /* ── Step 3: upload Blob to Firebase Storage ───── */
      const { url, storagePath, sizeBytes } = await pdfStorageService.uploadPDF({
        blob,
        patientId,
        documentId: docId,
        documentType,
        version,
      });

      setState('saving');

      /* ── Step 4: save PDF reference in Firestore ───── */
      await updateDocument(patientId, docId, {
        pdf: {
          url,
          storagePath,
          sizeBytes,
          version,
          generatedAt: new Date().toISOString(),
          generatedBy: audit,
        },
      });

      setState('done');
      toast.success('PDF generado correctamente');
      return { documentId: docId, pdfUrl: url };

    } catch (err) {
      setState('error');
      toast.error('Error al generar el PDF. Intente nuevamente.');
      console.error('[usePDFGeneration]', err);
      throw err;
    }
  }, [user]);

  const reset = useCallback(() => setState('idle'), []);

  return {
    state,
    stateLabel: STATE_LABELS[state] ?? null,
    generateAndSave,
    reset,
    isLoading: ['generating', 'uploading', 'saving'].includes(state),
  };
}