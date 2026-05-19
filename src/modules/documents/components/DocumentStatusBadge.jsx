import { DOCUMENT_STATUS_CONFIG } from '../types/documentStatus';

export default function DocumentStatusBadge({ status, size = 'sm' }) {
  const cfg = DOCUMENT_STATUS_CONFIG[status] ?? DOCUMENT_STATUS_CONFIG.draft;
  const cls = size === 'xs'
    ? 'text-[9px] px-1.5 py-px'
    : size === 'lg'
    ? 'text-xs px-3 py-1'
    : 'text-[10px] px-2 py-0.5';
  return (
    <span className={`inline-flex items-center font-semibold rounded-full border ${cls} ${cfg.tw}`}>
      {cfg.label}
    </span>
  );
}
