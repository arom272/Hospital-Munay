import { DOCUMENT_TYPE_CONFIG } from '../types/documentTypes';
import { DOCUMENT_STATUS_CONFIG } from '../types/documentStatus';

export function getDocumentTypeConfig(type) {
  return DOCUMENT_TYPE_CONFIG[type] ?? {
    label: type, specialty: '—', icon: '📁', color: '#64748b', light: '#f1f5f9',
  };
}

export function getStatusConfig(status) {
  return DOCUMENT_STATUS_CONFIG[status] ?? DOCUMENT_STATUS_CONFIG.draft;
}

export function formatTimestamp(ts) {
  if (!ts) return '—';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString('es', {
    day: '2-digit', month: 'short', year: 'numeric',
  }) + ' ' + d.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });
}

export function formatDateOnly(ts) {
  if (!ts) return '—';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString('es', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function buildAuditUser(user) {
  return {
    uid:  user?.uid   ?? '',
    name: user?.displayName ?? user?.email ?? 'Sistema',
  };
}

/* Derive a human-readable label from a camelCase or snake_case key */
export function fieldLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/^\s?/, '')
    .replace(/^./, (c) => c.toUpperCase());
}
