import { useEffect, useState, useMemo } from 'react';
import {
  DollarSign, TrendingUp, TrendingDown, AlertCircle,
  FileDown, FileText, CheckCircle, XCircle, HeartHandshake,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import useStore from '../store/useStore';
import { subscribeSurgeries } from '../services/surgeryService';
import SearchBar from '../components/ui/SearchBar';
import Badge     from '../components/ui/Badge';

// ─── Helpers ────────────────────────────────────────────────────────────────

function fmt(n) {
  return Number(n || 0).toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
}

function exportFinancesCSV(rows) {
  const headers = ['Fecha', 'Paciente', 'Tipo', 'Cirujano', 'Estado', 'Cotización', 'Pagado', 'Pendiente', 'Pago Completo', 'Ayuda Social', 'Monto Ayuda', 'Obs. Admin.'];
  const lines = [
    headers.join(','),
    ...rows.map((s) => [
      s.date,
      `"${s.patientName ?? ''}"`,
      `"${s.surgeryType ?? ''}"`,
      `"${s.surgeon ?? ''}"`,
      s.status,
      s.quotation || 0,
      s.amountPaid || 0,
      Math.max(0, (s.quotation || 0) - (s.amountPaid || 0)),
      s.paymentComplete ? 'Sí' : 'No',
      s.socialAid ? 'Sí' : 'No',
      s.socialAidAmount || 0,
      `"${s.adminNotes ?? ''}"`,
    ].join(',')),
  ];
  const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: 'finanzas.csv' });
  a.click();
  URL.revokeObjectURL(url);
}

function exportFinancesPDF(rows, totals) {
  import('jspdf').then(({ default: jsPDF }) => {
    import('jspdf-autotable').then(({ default: autoTable }) => {
      const doc    = new jsPDF({ orientation: 'landscape' });
      const TEAL   = [15, 118, 110];

      doc.setFillColor(...TEAL);
      doc.rect(0, 0, 297, 22, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('MUNAY — Reporte Financiero', 14, 10);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(`Generado: ${format(new Date(), "dd/MM/yyyy HH:mm")}`, 283, 10, { align: 'right' });
      doc.text(
        `Total cirugías: ${totals.count} | Cotizado: $${totals.quoted.toLocaleString('es-CL')} | Cobrado: $${totals.collected.toLocaleString('es-CL')} | Pendiente: $${totals.pending.toLocaleString('es-CL')}`,
        14, 18
      );
      doc.setTextColor(0, 0, 0);

      autoTable(doc, {
        startY: 26,
        head: [['Fecha', 'Paciente', 'Tipo cirugía', 'Cirujano', 'Estado', 'Cotización', 'Pagado', 'Pendiente', 'Pago OK', 'Ayuda Social']],
        body: rows.map((s) => [
          s.date,
          s.patientName ?? '',
          s.surgeryType ?? '',
          s.surgeon ?? '',
          s.status,
          `$${Number(s.quotation || 0).toLocaleString('es-CL')}`,
          `$${Number(s.amountPaid || 0).toLocaleString('es-CL')}`,
          `$${Math.max(0, (s.quotation || 0) - (s.amountPaid || 0)).toLocaleString('es-CL')}`,
          s.paymentComplete ? '✓' : '✗',
          s.socialAid ? `$${Number(s.socialAidAmount || 0).toLocaleString('es-CL')}` : '—',
        ]),
        headStyles:          { fillColor: TEAL, fontSize: 7 },
        bodyStyles:          { fontSize: 7 },
        alternateRowStyles:  { fillColor: [245, 250, 250] },
        margin:              { left: 10, right: 10 },
      });

      doc.save('finanzas-munay.pdf');
    });
  });
}

// ─── Component ───────────────────────────────────────────────────────────────

const STATUS_FILTER_OPTIONS = [
  { v: 'all',        l: 'Todas' },
  { v: 'pendiente',  l: 'Con deuda' },
  { v: 'completo',   l: 'Pagadas' },
  { v: 'socialAid',  l: 'Con ayuda social' },
];

export default function FinancesPage() {
  const { surgeries, setSurgeries } = useStore();
  const [search,       setSearch]       = useState('');
  const [payFilter,    setPayFilter]    = useState('all');
  const [dateFrom,     setDateFrom]     = useState('');
  const [dateTo,       setDateTo]       = useState('');
  const [sortField,    setSortField]    = useState('date');
  const [sortDir,      setSortDir]      = useState('desc');

  useEffect(() => {
    const unsub = subscribeSurgeries(setSurgeries);
    return unsub;
  }, []);

  // Only surgeries with at least some financial data or any surgery
  const billableSurgeries = useMemo(() =>
    surgeries.filter((s) => s.status !== 'cancelado'),
    [surgeries]
  );

  const filtered = useMemo(() => {
    let list = billableSurgeries;

    if (dateFrom) list = list.filter((s) => s.date >= dateFrom);
    if (dateTo)   list = list.filter((s) => s.date <= dateTo);

    if (payFilter === 'pendiente')  list = list.filter((s) => !s.paymentComplete && (s.quotation || s.amountPaid));
    if (payFilter === 'completo')   list = list.filter((s) => s.paymentComplete);
    if (payFilter === 'socialAid')  list = list.filter((s) => s.socialAid);

    if (search) {
      const q = search.toLowerCase();
      list = list.filter((s) =>
        s.patientName?.toLowerCase().includes(q) ||
        s.surgeryType?.toLowerCase().includes(q) ||
        s.surgeon?.toLowerCase().includes(q)
      );
    }

    return [...list].sort((a, b) => {
      let va = a[sortField] ?? '';
      let vb = b[sortField] ?? '';
      if (sortField === 'quotation' || sortField === 'amountPaid') {
        va = Number(va); vb = Number(vb);
      }
      if (va < vb) return sortDir === 'asc' ? -1 : 1;
      if (va > vb) return sortDir === 'asc' ?  1 : -1;
      return 0;
    });
  }, [billableSurgeries, dateFrom, dateTo, payFilter, search, sortField, sortDir]);

  const totals = useMemo(() => {
    const quoted    = filtered.reduce((s, r) => s + Number(r.quotation || 0), 0);
    const collected = filtered.reduce((s, r) => s + Number(r.amountPaid || 0), 0);
    const socialAid = filtered.reduce((s, r) => s + Number(r.socialAidAmount || 0), 0);
    return {
      count:        filtered.length,
      quoted,
      collected,
      pending:      Math.max(0, quoted - collected),
      socialAid,
      paidCount:    filtered.filter((r) => r.paymentComplete).length,
      socialCount:  filtered.filter((r) => r.socialAid).length,
    };
  }, [filtered]);

  const toggleSort = (field) => {
    if (sortField === field) setSortDir((d) => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDir('desc'); }
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDir === 'asc' ? <ChevronUp className="w-3.5 h-3.5 inline" /> : <ChevronDown className="w-3.5 h-3.5 inline" />;
  };

  return (
    <div className="space-y-5">
      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard
          icon={DollarSign}
          label="Total cotizado"
          value={fmt(totals.quoted)}
          sub={`${totals.count} cirugía${totals.count !== 1 ? 's' : ''}`}
          color="teal"
        />
        <KpiCard
          icon={TrendingUp}
          label="Total cobrado"
          value={fmt(totals.collected)}
          sub={`${totals.paidCount} pagadas completo`}
          color="green"
        />
        <KpiCard
          icon={TrendingDown}
          label="Total pendiente"
          value={fmt(totals.pending)}
          sub={totals.pending > 0 ? 'Por cobrar' : 'Sin deuda'}
          color={totals.pending > 0 ? 'red' : 'green'}
        />
        <KpiCard
          icon={HeartHandshake}
          label="Ayuda social"
          value={fmt(totals.socialAid)}
          sub={`${totals.socialCount} paciente${totals.socialCount !== 1 ? 's' : ''}`}
          color="purple"
        />
      </div>

      {/* Filters toolbar */}
      <div className="card py-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex-1 min-w-[200px]">
              <SearchBar value={search} onChange={setSearch} placeholder="Buscar paciente, cirugía, cirujano..." />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-xs text-gray-500 shrink-0">Desde</label>
              <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="input text-sm py-1.5 w-36" />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-xs text-gray-500 shrink-0">Hasta</label>
              <input type="date" value={dateTo}   onChange={(e) => setDateTo(e.target.value)}   className="input text-sm py-1.5 w-36" />
            </div>
            {(dateFrom || dateTo || search) && (
              <button onClick={() => { setSearch(''); setDateFrom(''); setDateTo(''); }}
                className="btn-secondary btn btn-sm text-xs">
                Limpiar
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex gap-1.5 flex-wrap">
              {STATUS_FILTER_OPTIONS.map(({ v, l }) => (
                <button key={v} onClick={() => setPayFilter(v)}
                  className={`btn btn-sm ${payFilter === v ? 'btn-primary' : 'btn-secondary'}`}>
                  {l}
                </button>
              ))}
            </div>
            <div className="flex gap-2 ml-auto">
              <button onClick={() => exportFinancesCSV(filtered)} className="btn-secondary btn btn-sm" title="Exportar CSV">
                <FileDown className="w-4 h-4" /> CSV
              </button>
              <button onClick={() => exportFinancesPDF(filtered, totals)} className="btn-secondary btn btn-sm" title="Exportar PDF">
                <FileText className="w-4 h-4" /> PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary row */}
      <div className="flex gap-4 flex-wrap text-sm text-gray-600">
        <span><strong className="text-gray-800">{filtered.length}</strong> registros</span>
        <span className="text-gray-300">|</span>
        <span>Cotizado: <strong className="text-teal-700">{fmt(totals.quoted)}</strong></span>
        <span>Cobrado: <strong className="text-green-700">{fmt(totals.collected)}</strong></span>
        {totals.pending > 0 && (
          <span>Pendiente: <strong className="text-red-600">{fmt(totals.pending)}</strong></span>
        )}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="card flex flex-col items-center py-14 text-gray-400">
          <AlertCircle className="w-10 h-10 mb-2 opacity-40" />
          <p className="text-sm">No hay registros que coincidan con los filtros.</p>
        </div>
      ) : (
        <div className="card p-0 overflow-hidden">
          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <Th label="Fecha"      field="date"      sortField={sortField} sortDir={sortDir} onSort={toggleSort} />
                  <Th label="Paciente"   field="patientName" sortField={sortField} sortDir={sortDir} onSort={toggleSort} />
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Cirugía</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Cirujano</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Estado</th>
                  <Th label="Cotización" field="quotation"  sortField={sortField} sortDir={sortDir} onSort={toggleSort} right />
                  <Th label="Pagado"     field="amountPaid" sortField={sortField} sortDir={sortDir} onSort={toggleSort} right />
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pendiente</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pago</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Ayuda Social</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((s) => {
                  const pending = Math.max(0, Number(s.quotation || 0) - Number(s.amountPaid || 0));
                  return (
                    <tr key={s.id} className={`hover:bg-gray-50 transition ${s.paymentComplete ? '' : pending > 0 ? 'bg-red-50/30' : ''}`}>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {format(new Date(s.date + 'T12:00'), 'dd/MM/yyyy')}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.patientType === 'flap' ? 'bg-green-500' : 'bg-blue-500'}`} />
                          <span className="font-medium text-gray-800">{s.patientName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600 max-w-[160px] truncate" title={s.surgeryType}>{s.surgeryType}</td>
                      <td className="px-4 py-3 text-gray-600">{s.surgeon || '—'}</td>
                      <td className="px-4 py-3"><Badge variant={s.status} /></td>
                      <td className="px-4 py-3 text-right font-medium text-gray-800">
                        {s.quotation ? fmt(s.quotation) : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 py-3 text-right text-green-700 font-medium">
                        {s.amountPaid ? fmt(s.amountPaid) : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {pending > 0
                          ? <span className="text-red-600 font-semibold">{fmt(pending)}</span>
                          : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {s.paymentComplete
                          ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                          : <XCircle    className="w-4 h-4 text-red-400 mx-auto" />}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {s.socialAid
                          ? (
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                              {s.socialAidAmount ? fmt(s.socialAidAmount) : 'Sí'}
                            </span>
                          )
                          : <span className="text-gray-300 text-xs">—</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              {/* Totals row */}
              <tfoot className="bg-gray-50 border-t-2 border-gray-200">
                <tr>
                  <td colSpan={5} className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                    Totales ({filtered.length} registros)
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-gray-800">{fmt(totals.quoted)}</td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">{fmt(totals.collected)}</td>
                  <td className="px-4 py-3 text-right font-bold text-red-600">{totals.pending > 0 ? fmt(totals.pending) : '—'}</td>
                  <td className="px-4 py-3 text-center text-xs text-gray-500">{totals.paidCount}/{filtered.length}</td>
                  <td className="px-4 py-3 text-center font-bold text-purple-700 text-xs">{totals.socialAid > 0 ? fmt(totals.socialAid) : '—'}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile cards */}
          <ul className="md:hidden divide-y divide-gray-100">
            {filtered.map((s) => {
              const pending = Math.max(0, Number(s.quotation || 0) - Number(s.amountPaid || 0));
              return (
                <li key={s.id} className="p-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{s.patientName}</p>
                      <p className="text-xs text-gray-500">{s.surgeryType}</p>
                      <p className="text-xs text-gray-400">
                        {format(new Date(s.date + 'T12:00'), "d MMM yyyy", { locale: es })} · {s.surgeon || '—'}
                      </p>
                    </div>
                    <Badge variant={s.status} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-gray-400">Cotización</p>
                      <p className="font-semibold text-gray-800">{s.quotation ? fmt(s.quotation) : '—'}</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-gray-400">Pagado</p>
                      <p className="font-semibold text-green-700">{s.amountPaid ? fmt(s.amountPaid) : '—'}</p>
                    </div>
                    <div className={`rounded p-2 ${pending > 0 ? 'bg-red-50' : 'bg-gray-50'}`}>
                      <p className="text-gray-400">Pendiente</p>
                      <p className={`font-semibold ${pending > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                        {pending > 0 ? fmt(pending) : '—'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {s.paymentComplete && (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Pagado
                      </span>
                    )}
                    {s.socialAid && (
                      <span className="flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                        <HeartHandshake className="w-3 h-3" /> Ayuda social
                      </span>
                    )}
                    {s.adminNotes && (
                      <span className="text-xs text-gray-400 italic truncate">{s.adminNotes}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function KpiCard({ icon: Icon, label, value, sub, color }) {
  const colors = {
    teal:   'bg-teal-50   text-teal-700',
    green:  'bg-green-50  text-green-700',
    red:    'bg-red-50    text-red-600',
    purple: 'bg-purple-50 text-purple-700',
  };
  return (
    <div className="card">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${colors[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-lg font-bold text-gray-800 leading-tight">{value}</p>
      <p className="text-sm font-medium text-gray-600 mt-0.5">{label}</p>
      <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
    </div>
  );
}

function Th({ label, field, sortField, sortDir, onSort, right = false }) {
  return (
    <th
      className={`px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-700 select-none ${right ? 'text-right' : 'text-left'}`}
      onClick={() => onSort(field)}
    >
      {label}{' '}
      {sortField === field
        ? (sortDir === 'asc' ? <ChevronUp className="w-3.5 h-3.5 inline" /> : <ChevronDown className="w-3.5 h-3.5 inline" />)
        : null}
    </th>
  );
}
