/* Types */
export * from './types/documentTypes';
export * from './types/documentStatus';

/* Services */
export * from './services/documentService';
export { saveDocumentSnapshot } from './services/documentSave';

/* Hooks */
export { usePatientDocuments }   from './hooks/usePatientDocuments';
export { useSurgeryDocuments }   from './hooks/useSurgeryDocuments';
export { useTherapyDocuments }   from './hooks/useTherapyDocuments';
export { useAutoSave, SAVE_STATUS } from './hooks/useAutoSave';

/* Utils */
export * from './utils/documentUtils';

/* Components */
export { default as DocumentStatusBadge } from './components/DocumentStatusBadge';
export { default as DocumentTable }       from './components/DocumentTable';
export { default as DocumentViewer }      from './components/DocumentViewer';
export { default as DocumentFormModal }   from './components/DocumentFormModal';
export { default as PatientTimeline }     from './components/PatientTimeline';
