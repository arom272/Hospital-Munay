import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Save, Clock, FileDown } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import Modal from '../../../components/ui/Modal';
import { createDocument, updateDocument } from '../services/documentService';
import { useAutoSave, SAVE_STATUS } from '../hooks/useAutoSave';
import { usePDFGeneration } from '../hooks/usePDFGeneration';
import { buildAuditUser } from '../utils/documentUtils';
import { DOCUMENT_TYPE_OPTIONS } from '../types/documentTypes';
import { DOCUMENT_STATUS_OPTIONS } from '../types/documentStatus';
import ClinicalDataForm from './ClinicalDataForm';
import toast from 'react-hot-toast';

/* ── AutoSave indicator ─────────────────────────────── */
function SaveIndicator({ status, lastSaved }) {
  if (status === SAVE_STATUS.IDLE && !lastSaved) return null;
  const map = {
    saving: { text: 'Guardando…',  cls: 'text-amber-600' },
    saved:  { text: 'Guardado',    cls: 'text-green-600' },
    error:  { text: 'Error al guardar', cls: 'text-red-500' },
    idle:   { text: lastSaved ? `Guardado ${lastSaved.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}` : '', cls: 'text-gray-400' },
  };
  const { text, cls } = map[status] ?? map.idle;
  if (!text) return null;
  return (
    <span className={`flex items-center gap-1 text-[10px] ${cls}`}>
      <Clock className="w-3 h-3" />
      {text}
    </span>
  );
}

/* ── Main component ─────────────────────────────────── */
export default function DocumentFormModal({
  open, onClose, patientId, document: initialDoc, patient,
  surgeryId = null, therapyId = null, eventDate = null,
}) {
  const { user } = useAuth();
  const isEditing = !!initialDoc?.id;

  const {
    register, handleSubmit, watch, reset, getValues, trigger,
    formState: { errors },
  } = useForm({
    defaultValues: initialDoc ?? {
      documentType: 'historia_clinica',
      status:       'draft',
      clinicalData: {},
    },
  });

  useEffect(() => {
    reset(initialDoc ?? { documentType: 'historia_clinica', status: 'draft', clinicalData: {} });
  }, [initialDoc, reset]);

  const [busy,       setBusy]       = useState(false);
  const [savedDocId, setSavedDocId] = useState(initialDoc?.id ?? null);
  const docType = watch('documentType');

  const {
    generateAndSave,
    isLoading: pdfLoading,
    stateLabel: pdfLabel,
  } = usePDFGeneration();

  /* ── autosave for editing mode ─ */
  const { status: saveStatus, lastSaved } = useAutoSave({
    data:   null,
    onSave: async () => {
      if (!savedDocId) return;
      const vals = getValues();
      await updateDocument(patientId, savedDocId, {
        clinicalData: vals.clinicalData ?? {},
        status:       vals.status,
        updatedBy:    buildAuditUser(user),
      });
    },
    interval: 15000,
    enabled:  isEditing || !!savedDocId,
  });

  /* ── Regular save (no PDF) ──────────────────────────── */
  const onSubmit = async (data) => {
    setBusy(true);
    try {
      const audit = buildAuditUser(user);
      if (isEditing || savedDocId) {
        await updateDocument(patientId, savedDocId ?? initialDoc.id, {
          ...data,
          updatedBy: audit,
        });
        toast.success('Documento actualizado');
      } else {
        const ref = await createDocument(patientId, {
          ...data,
          surgeryId,
          therapyId,
          eventDate,
          createdBy: audit,
          updatedBy: audit,
        });
        setSavedDocId(ref.id);
        toast.success('Documento creado');
      }
      onClose();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setBusy(false);
    }
  };

  /* ── Save + generate PDF ────────────────────────────── */
  const handleGeneratePDF = async () => {
    const valid = await trigger();
    if (!valid) return;

    const values = getValues();
    try {
      const result = await generateAndSave({
        patient,
        clinicalData: values.clinicalData ?? {},
        documentType: values.documentType,
        documentId:   savedDocId ?? initialDoc?.id ?? null,
        patientId,
        surgeryId,
        therapyId,
        eventDate,
      });
      if (result?.documentId && !savedDocId) {
        setSavedDocId(result.documentId);
      }
      onClose();
    } catch {
      /* already toasted by hook */
    }
  };

  const title = isEditing ? 'Editar documento clínico' : 'Nuevo documento clínico';
  const anyBusy = busy || pdfLoading;

  return (
    <Modal open={open} onClose={onClose} title={title} size="xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Type + Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-group mb-0">
            <label className="label">Tipo de documento *</label>
            <select
              className={`input ${errors.documentType ? 'input-error' : ''}`}
              {...register('documentType', { required: true })}
              disabled={isEditing}
            >
              {DOCUMENT_TYPE_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.icon} {o.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-0">
            <label className="label">Estado</label>
            <select className="input" {...register('status')}>
              {DOCUMENT_STATUS_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Clinical data */}
        <div className="space-y-4">
          <ClinicalDataForm documentType={docType} register={register} />
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <SaveIndicator status={saveStatus} lastSaved={lastSaved} />
          <div className="flex gap-2 ml-auto flex-wrap justify-end">
            <button type="button" onClick={onClose} className="btn btn-secondary" disabled={anyBusy}>
              Cancelar
            </button>

            {/* Save draft only */}
            <button type="submit" disabled={anyBusy} className="btn btn-secondary gap-1.5">
              {busy
                ? <Loader2 className="w-4 h-4 animate-spin" />
                : <Save className="w-4 h-4" />}
              {isEditing ? 'Guardar cambios' : 'Guardar borrador'}
            </button>

            {/* Save + generate PDF */}
            <button
              type="button"
              onClick={handleGeneratePDF}
              disabled={anyBusy}
              className="btn btn-primary gap-1.5"
            >
              {pdfLoading
                ? <Loader2 className="w-4 h-4 animate-spin" />
                : <FileDown className="w-4 h-4" />}
              {pdfLoading ? (pdfLabel ?? 'Procesando…') : 'Guardar y generar PDF'}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}