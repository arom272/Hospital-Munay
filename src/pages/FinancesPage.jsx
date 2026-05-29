import { useEffect, useState, useMemo, Fragment } from 'react';
import {
  DollarSign, TrendingUp, TrendingDown, AlertCircle,
  FileDown, FileText, CheckCircle, XCircle, HeartHandshake,
  ChevronDown, ChevronUp, Stethoscope,
} from 'lucide-react';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import { es } from 'date-fns/locale';
import useStore from '../store/useStore';
import { subscribeSurgeries } from '../services/surgeryService';
import { subscribeTherapies } from '../services/therapyService';
import SearchBar from '../components/ui/SearchBar';
import Badge     from '../components/ui/Badge';

// ─── Helpers ────────────────────────────────────────────────────────────────

function fmt(n) {
  return Number(n || 0).toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
}

function fmtBs(n) {
  return `Bs. ${Number(n || 0).toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const TIPO_LABELS = { sesion: 'Sesión', paquete: 'Paquete', evaluacion: 'Evaluación', otro: 'Otro' };

function isoWeekRange(isoDate) {
  const d = new Date(isoDate + 'T12:00');
  const from = startOfWeek(d, { weekStartsOn: 1 });
  const to   = endOfWeek(d,   { weekStartsOn: 1 });
  return {
    from: from.toISOString().slice(0, 10),
    to:   to.toISOString().slice(0, 10),
  };
}

function isoMonthRange(isoDate) {
  const d = new Date(isoDate + 'T12:00');
  return {
    from: startOfMonth(d).toISOString().slice(0, 10),
    to:   endOfMonth(d).toISOString().slice(0, 10),
  };
}

function exportFinancesCSV(rows) {
  const headers = ['Fecha', 'Paciente', 'Tipo', 'Cirujano', 'Estado', 'Cotización', 'Pagado', 'Fecha pago', 'Pendiente', 'Pago Completo', 'Ayuda Social', 'Monto Ayuda', 'Obs. Admin.'];
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
      s.paymentDate || s.partialPaymentDate || '',
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
        head: [['Fecha', 'Paciente', 'Tipo cirugía', 'Cirujano', 'Estado', 'Cotización', 'Pagado', 'Fecha pago', 'Pendiente', 'Pago OK', 'Ayuda Social']],
        body: rows.map((s) => [
          s.date,
          s.patientName ?? '',
          s.surgeryType ?? '',
          s.surgeon ?? '',
          s.status,
          `$${Number(s.quotation || 0).toLocaleString('es-CL')}`,
          `$${Number(s.amountPaid || 0).toLocaleString('es-CL')}`,
          s.paymentDate || s.partialPaymentDate || '—',
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
  const { surgeries, setSurgeries, therapies, setTherapies } = useStore();

  /* ── tab ── */
  const [activeTab,    setActiveTab]    = useState('cirugias');

  /* ── cirugías state ── */
  const [search,       setSearch]       = useState('');
  const [payFilter,    setPayFilter]    = useState('all');
  const [dateFrom,     setDateFrom]     = useState('');
  const [dateTo,       setDateTo]       = useState('');
  const [sortField,    setSortField]    = useState('date');
  const [sortDir,      setSortDir]      = useState('desc');

  /* ── terapias state ── */
  const TODAY = new Date().toISOString().slice(0, 10);
  const [tPeriod,      setTPeriod]      = useState('mes');
  const [tDateFrom,    setTDateFrom]    = useState('');
  const [tDateTo,      setTDateTo]      = useState('');
  const [tDebtFilter,  setTDebtFilter]  = useState('all');
  const [tSearch,      setTSearch]      = useState('');

  useEffect(() => {
    const u1 = subscribeSurgeries(setSurgeries);
    const u2 = subscribeTherapies(setTherapies);
    return () => { u1(); u2(); };
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

  /* ── terapias computed ──────────────────────────────── */
  const tRange = useMemo(() => {
    if (tPeriod === 'dia')    return { from: TODAY, to: TODAY };
    if (tPeriod === 'semana') return isoWeekRange(TODAY);
    if (tPeriod === 'mes')    return isoMonthRange(TODAY);
    return { from: tDateFrom, to: tDateTo };
  }, [tPeriod, tDateFrom, tDateTo]);

  const tFiltered = useMemo(() => {
    let list = therapies;
    if (tRange.from) list = list.filter(t => t.date >= tRange.from);
    if (tRange.to)   list = list.filter(t => t.date <= tRange.to);
    if (tDebtFilter === 'deuda')    list = list.filter(t => Number(t.precio) > 0 && !t.pagado);
    if (tDebtFilter === 'aldia')    list = list.filter(t => t.pagado);
    if (tDebtFilter === 'sincobro') list = list.filter(t => !(Number(t.precio) > 0));
    if (tSearch) {
      const q = tSearch.toLowerCase();
      list = list.filter(t =>
        t.patientName?.toLowerCase().includes(q) ||
        t.therapyType?.toLowerCase().includes(q) ||
        t.therapist?.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) => b.date.localeCompare(a.date));
  }, [therapies, tRange, tDebtFilter, tSearch]);

  const tTotals = useMemo(() => {
    const billed = tFiltered.filter(t => Number(t.precio) > 0);
    const facturado = billed.reduce((s, t) => s + Number(t.precio || 0), 0);
    const cobrado   = billed.reduce((s, t) => s + Number(t.montoPagado || 0), 0);
    return {
      total:       tFiltered.length,
      billed:      billed.length,
      facturado,
      cobrado,
      pendiente:   Math.max(0, facturado - cobrado),
      pagadoCount: billed.filter(t => t.pagado).length,
      deudaCount:  billed.filter(t => !t.pagado).length,
    };
  }, [tFiltered]);

  /* ── balance mensual (cirugías + terapias) ──────────────── */
  const monthlyBalance = useMemo(() => {
    const map = {};
    const ensure = (k) => (map[k] ||= { sQuoted: 0, sCollected: 0, tBilled: 0, tCollected: 0 });
    for (const s of surgeries) {
      if (s.status === 'cancelado' || !s.date) continue;
      const m = ensure(s.date.slice(0, 7));
      m.sQuoted    += Number(s.quotation  || 0);
      m.sCollected += Number(s.amountPaid || 0);
    }
    for (const t of therapies) {
      if (!t.date || !(Number(t.precio) > 0)) continue;
      const m = ensure(t.date.slice(0, 7));
      m.tBilled    += Number(t.precio      || 0);
      m.tCollected += Number(t.montoPagado || 0);
    }
    return Object.entries(map)
      .map(([key, v]) => ({
        key,
        ...v,
        sPending: Math.max(0, v.sQuoted - v.sCollected),
        tPending: Math.max(0, v.tBilled - v.tCollected),
      }))
      .sort((a, b) => b.key.localeCompare(a.key));
  }, [surgeries, therapies]);

  // Terapias individuales agrupadas por mes (para el detalle expandible del balance)
  const therapyByMonth = useMemo(() => {
    const map = {};
    for (const t of therapies) {
      if (!t.date || !(Number(t.precio) > 0)) continue;
      (map[t.date.slice(0, 7)] ||= []).push(t);
    }
    for (const k in map) map[k].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
    return map;
  }, [therapies]);

  const balanceTotals = useMemo(() =>
    monthlyBalance.reduce((acc, m) => ({
      sQuoted:    acc.sQuoted    + m.sQuoted,
      sCollected: acc.sCollected + m.sCollected,
      sPending:   acc.sPending   + m.sPending,
      tBilled:    acc.tBilled    + m.tBilled,
      tCollected: acc.tCollected + m.tCollected,
      tPending:   acc.tPending   + m.tPending,
    }), { sQuoted: 0, sCollected: 0, sPending: 0, tBilled: 0, tCollected: 0, tPending: 0 }),
    [monthlyBalance]
  );

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

      {/* ── Tabs ── */}
      <div className="flex gap-0 border-b border-gray-200">
        {[
          { k: 'cirugias', l: 'Cirugías' },
          { k: 'terapias', l: 'Terapias' },
          { k: 'balance',  l: 'Balance mensual' },
        ].map(({ k, l }) => (
          <button key={k} onClick={() => setActiveTab(k)}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors
              ${activeTab === k
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            {l}
          </button>
        ))}
      </div>

      {/* ── Balance mensual tab ── */}
      {activeTab === 'balance' && (
        <div className="space-y-5">
          {/* KPI resumen */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KpiCard icon={DollarSign} label="Cirugías · cobrado"
              value={fmt(balanceTotals.sCollected)}
              sub={`Cotizado ${fmt(balanceTotals.sQuoted)}`} color="teal" />
            <KpiCard icon={AlertCircle} label="Cirugías · pendiente"
              value={fmt(balanceTotals.sPending)}
              sub={balanceTotals.sPending > 0 ? 'Por cobrar' : 'Sin deuda'}
              color={balanceTotals.sPending > 0 ? 'red' : 'green'} />
            <KpiCard icon={Stethoscope} label="Terapias · cobrado"
              value={fmtBs(balanceTotals.tCollected)}
              sub={`Facturado ${fmtBs(balanceTotals.tBilled)}`} color="green" />
            <KpiCard icon={AlertCircle} label="Terapias · pendiente"
              value={fmtBs(balanceTotals.tPending)}
              sub={balanceTotals.tPending > 0 ? 'Por cobrar' : 'Sin deuda'}
              color={balanceTotals.tPending > 0 ? 'red' : 'green'} />
          </div>

          {monthlyBalance.length === 0 ? (
            <div className="card flex flex-col items-center py-14 text-gray-400">
              <AlertCircle className="w-10 h-10 mb-2 opacity-40" />
              <p className="text-sm">Sin movimientos registrados.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <MonthlyBalanceTable
                title="Cirugías"
                accent="teal"
                grossLabel="Cotizado"
                money={fmt}
                rows={monthlyBalance
                  .filter((m) => m.sQuoted || m.sCollected)
                  .map((m) => ({ key: m.key, gross: m.sQuoted, collected: m.sCollected, pending: m.sPending }))}
              />
              <MonthlyBalanceTable
                title="Terapias"
                accent="green"
                grossLabel="Facturado"
                money={fmtBs}
                rows={monthlyBalance
                  .filter((m) => m.tBilled || m.tCollected)
                  .map((m) => ({ key: m.key, gross: m.tBilled, collected: m.tCollected, pending: m.tPending }))}
                getDetail={(key) => (therapyByMonth[key] || []).map((t) => ({
                  id:        t.id,
                  date:      t.date,
                  generated: t.createdAt,
                  name:      t.patientName,
                  service:   t.therapyType || TIPO_LABELS[t.tipoServicio] || '—',
                  gross:     Number(t.precio || 0),
                  collected: Number(t.montoPagado || 0),
                  pending:   Math.max(0, Number(t.precio || 0) - Number(t.montoPagado || 0)),
                }))}
              />
              <p className="text-[11px] text-gray-400">
                Cirugías en $ · Terapias en Bs. — son monedas distintas y no se suman entre sí.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── Terapias tab ── */}
      {activeTab === 'terapias' && (
        <div className="space-y-5">
          {/* Period selector */}
          <div className="card py-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-medium text-gray-500">Período:</span>
                {[
                  { v: 'dia',    l: 'Hoy'         },
                  { v: 'semana', l: 'Esta semana'  },
                  { v: 'mes',    l: 'Este mes'     },
                  { v: 'custom', l: 'Personalizado'},
                ].map(({ v, l }) => (
                  <button key={v} onClick={() => setTPeriod(v)}
                    className={`btn btn-sm ${tPeriod === v ? 'btn-primary' : 'btn-secondary'}`}>
                    {l}
                  </button>
                ))}
                {tPeriod === 'custom' && (
                  <>
                    <div className="flex gap-2 items-center">
                      <label className="text-xs text-gray-500 shrink-0">Desde</label>
                      <input type="date" value={tDateFrom} onChange={e => setTDateFrom(e.target.value)}
                        className="input text-sm py-1.5 w-36" />
                    </div>
                    <div className="flex gap-2 items-center">
                      <label className="text-xs text-gray-500 shrink-0">Hasta</label>
                      <input type="date" value={tDateTo} onChange={e => setTDateTo(e.target.value)}
                        className="input text-sm py-1.5 w-36" />
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {[
                    { v: 'all',      l: 'Todos'       },
                    { v: 'deuda',    l: 'Con deuda'   },
                    { v: 'aldia',    l: 'Al día'      },
                    { v: 'sincobro', l: 'Sin cobro'   },
                  ].map(({ v, l }) => (
                    <button key={v} onClick={() => setTDebtFilter(v)}
                      className={`btn btn-sm ${tDebtFilter === v ? 'btn-primary' : 'btn-secondary'}`}>
                      {l}
                    </button>
                  ))}
                </div>
                <SearchBar value={tSearch} onChange={setTSearch} placeholder="Buscar paciente, especialidad…" />
              </div>
            </div>
          </div>

          {/* KPI cards terapias */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KpiCard icon={Stethoscope} label="Terapias periodo"
              value={String(tTotals.total)}
              sub={`${tTotals.billed} con cobro registrado`}
              color="teal" />
            <KpiCard icon={TrendingUp} label="Total facturado"
              value={fmtBs(tTotals.facturado)}
              sub={`${tTotals.pagadoCount} al día`}
              color="green" />
            <KpiCard icon={TrendingDown} label="Total cobrado"
              value={fmtBs(tTotals.cobrado)}
              sub={tTotals.facturado > 0
                ? `${Math.round((tTotals.cobrado / tTotals.facturado) * 100)}% del total`
                : '—'}
              color="teal" />
            <KpiCard icon={AlertCircle} label="Saldo pendiente"
              value={fmtBs(tTotals.pendiente)}
              sub={tTotals.deudaCount > 0 ? `${tTotals.deudaCount} con deuda` : 'Sin deudas'}
              color={tTotals.pendiente > 0 ? 'red' : 'green'} />
          </div>

          {/* Resumen */}
          <div className="flex gap-4 flex-wrap text-sm text-gray-600">
            <span><strong className="text-gray-800">{tFiltered.length}</strong> registros</span>
            <span className="text-gray-300">|</span>
            <span>Facturado: <strong className="text-teal-700">{fmtBs(tTotals.facturado)}</strong></span>
            <span>Cobrado: <strong className="text-green-700">{fmtBs(tTotals.cobrado)}</strong></span>
            {tTotals.pendiente > 0 && (
              <span>Pendiente: <strong className="text-red-600">{fmtBs(tTotals.pendiente)}</strong></span>
            )}
          </div>

          {/* Tabla terapias */}
          {tFiltered.length === 0 ? (
            <div className="card flex flex-col items-center py-14 text-gray-400">
              <AlertCircle className="w-10 h-10 mb-2 opacity-40" />
              <p className="text-sm">No hay registros que coincidan.</p>
            </div>
          ) : (
            <div className="card p-0 overflow-hidden">
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Fecha</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Paciente</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Especialidad</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Servicio</th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Precio</th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pagado</th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Saldo</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Estado pago</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {tFiltered.map(t => {
                      const precio = Number(t.precio || 0);
                      const pagado = Number(t.montoPagado || 0);
                      const saldo  = Math.max(0, precio - pagado);
                      return (
                        <tr key={t.id} className={`hover:bg-gray-50 transition ${!t.pagado && precio > 0 ? 'bg-red-50/30' : ''}`}>
                          <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                            {format(new Date(t.date + 'T12:00'), 'dd/MM/yyyy')}
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-800">{t.patientName}</td>
                          <td className="px-4 py-3 text-gray-600">{t.therapyType || '—'}</td>
                          <td className="px-4 py-3 text-gray-600">
                            {TIPO_LABELS[t.tipoServicio] || <span className="text-gray-300">—</span>}
                          </td>
                          <td className="px-4 py-3 text-right font-medium text-gray-800">
                            {precio > 0 ? fmtBs(precio) : <span className="text-gray-300">—</span>}
                          </td>
                          <td className="px-4 py-3 text-right text-green-700 font-medium">
                            {pagado > 0 ? fmtBs(pagado) : <span className="text-gray-300">—</span>}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {saldo > 0
                              ? <span className="text-red-600 font-semibold">{fmtBs(saldo)}</span>
                              : <span className="text-gray-300">—</span>}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {precio === 0
                              ? <span className="text-xs text-gray-300">Sin cobro</span>
                              : t.pagado
                              ? <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                  <CheckCircle className="w-3 h-3" /> Al día
                                </span>
                              : <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                                  <XCircle className="w-3 h-3" /> Con deuda
                                </span>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="bg-gray-50 border-t-2 border-gray-200">
                    <tr>
                      <td colSpan={4} className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                        Totales ({tFiltered.length} registros)
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-gray-800">{fmtBs(tTotals.facturado)}</td>
                      <td className="px-4 py-3 text-right font-bold text-green-700">{fmtBs(tTotals.cobrado)}</td>
                      <td className="px-4 py-3 text-right font-bold text-red-600">{tTotals.pendiente > 0 ? fmtBs(tTotals.pendiente) : '—'}</td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500">{tTotals.pagadoCount}/{tTotals.billed}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Mobile cards */}
              <ul className="md:hidden divide-y divide-gray-100">
                {tFiltered.map(t => {
                  const precio = Number(t.precio || 0);
                  const saldo  = Math.max(0, precio - Number(t.montoPagado || 0));
                  return (
                    <li key={t.id} className="p-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-gray-800">{t.patientName}</p>
                          <p className="text-xs text-gray-500">{t.therapyType}</p>
                          <p className="text-xs text-gray-400">
                            {format(new Date(t.date + 'T12:00'), "d MMM yyyy", { locale: es })}
                            {t.therapist && ` · ${t.therapist}`}
                          </p>
                        </div>
                        {precio > 0
                          ? t.pagado
                            ? <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Al día</span>
                            : <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">Con deuda</span>
                          : <span className="text-xs text-gray-300">Sin cobro</span>}
                      </div>
                      {precio > 0 && (
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-gray-50 rounded p-2">
                            <p className="text-gray-400">{TIPO_LABELS[t.tipoServicio] || 'Servicio'}</p>
                            <p className="font-semibold text-gray-800">{fmtBs(precio)}</p>
                          </div>
                          <div className="bg-gray-50 rounded p-2">
                            <p className="text-gray-400">Pagado</p>
                            <p className="font-semibold text-green-700">{fmtBs(t.montoPagado)}</p>
                          </div>
                          <div className={`rounded p-2 ${saldo > 0 ? 'bg-red-50' : 'bg-gray-50'}`}>
                            <p className="text-gray-400">Saldo</p>
                            <p className={`font-semibold ${saldo > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                              {saldo > 0 ? fmtBs(saldo) : '—'}
                            </p>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* ── Cirugías tab ── */}
      {activeTab === 'cirugias' && (<div className="space-y-5">
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
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Fecha pago</th>
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
                      <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                        {s.paymentDate
                          ? <span className="text-green-700 font-medium">{format(new Date(s.paymentDate + 'T12:00'), 'dd/MM/yyyy')}</span>
                          : s.partialPaymentDate
                          ? <span className="text-amber-600">{format(new Date(s.partialPaymentDate + 'T12:00'), 'dd/MM/yyyy')} <span className="text-gray-400">(parcial)</span></span>
                          : <span className="text-gray-300">—</span>}
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
                  <td className="px-4 py-3" />
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
                  {(s.paymentDate || s.partialPaymentDate) && (
                    <p className="text-xs text-gray-500">
                      Fecha pago:{' '}
                      {s.paymentDate
                        ? <span className="text-green-700 font-medium">{format(new Date(s.paymentDate + 'T12:00'), 'dd/MM/yyyy')}</span>
                        : <span className="text-amber-600">{format(new Date(s.partialPaymentDate + 'T12:00'), 'dd/MM/yyyy')} (parcial)</span>}
                    </p>
                  )}
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
      </div>)}
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function fmtTs(ts) {
  if (!ts) return '—';
  const ms = ts.seconds ? ts.seconds * 1000 : (typeof ts === 'number' ? ts : Date.parse(ts));
  if (!ms || Number.isNaN(ms)) return '—';
  return format(new Date(ms), 'dd/MM/yyyy');
}

function MonthlyBalanceTable({ title, accent = 'teal', grossLabel, money, rows, getDetail }) {
  const accentText = accent === 'green' ? 'text-green-700' : 'text-teal-700';
  const [expanded, setExpanded] = useState({});
  const toggle = (key) => setExpanded((e) => ({ ...e, [key]: !e[key] }));
  const totals = rows.reduce(
    (a, r) => ({ gross: a.gross + r.gross, collected: a.collected + r.collected, pending: a.pending + r.pending }),
    { gross: 0, collected: 0, pending: 0 }
  );
  return (
    <div className="space-y-2">
      <h3 className={`text-sm font-bold uppercase tracking-wide ${accentText}`}>{title}</h3>
      {rows.length === 0 ? (
        <div className="card flex flex-col items-center py-10 text-gray-400">
          <AlertCircle className="w-8 h-8 mb-2 opacity-40" />
          <p className="text-sm">Sin movimientos registrados.</p>
        </div>
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left  px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Mes</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{grossLabel}</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Cobrado</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pendiente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rows.map((r) => {
                  const detail = getDetail ? getDetail(r.key) : null;
                  const canExpand = detail && detail.length > 0;
                  const isOpen = !!expanded[r.key];
                  return (
                    <Fragment key={r.key}>
                      <tr
                        className={`hover:bg-gray-50 transition ${canExpand ? 'cursor-pointer' : ''}`}
                        onClick={canExpand ? () => toggle(r.key) : undefined}
                      >
                        <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap capitalize">
                          <span className="inline-flex items-center gap-1.5">
                            {canExpand && (isOpen
                              ? <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
                              : <ChevronDown className="w-3.5 h-3.5 text-gray-400" />)}
                            {format(new Date(r.key + '-01T12:00'), 'MMMM yyyy', { locale: es })}
                            {canExpand && <span className="text-[11px] text-gray-400 font-normal">({detail.length})</span>}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-gray-700">{r.gross ? money(r.gross) : <span className="text-gray-300">—</span>}</td>
                        <td className="px-4 py-3 text-right text-green-700 font-medium">{r.collected ? money(r.collected) : <span className="text-gray-300">—</span>}</td>
                        <td className="px-4 py-3 text-right">{r.pending > 0 ? <span className="text-red-600 font-semibold">{money(r.pending)}</span> : <span className="text-gray-300">—</span>}</td>
                      </tr>
                      {canExpand && isOpen && (
                        <tr>
                          <td colSpan={4} className="px-4 py-3 bg-gray-50/60">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="text-gray-400">
                                  <th className="text-left  font-semibold uppercase tracking-wide py-1.5 px-2">Fecha terapia</th>
                                  <th className="text-left  font-semibold uppercase tracking-wide py-1.5 px-2">Generada</th>
                                  <th className="text-left  font-semibold uppercase tracking-wide py-1.5 px-2">Paciente</th>
                                  <th className="text-left  font-semibold uppercase tracking-wide py-1.5 px-2">Servicio</th>
                                  <th className="text-right font-semibold uppercase tracking-wide py-1.5 px-2">{grossLabel}</th>
                                  <th className="text-right font-semibold uppercase tracking-wide py-1.5 px-2">Cobrado</th>
                                  <th className="text-right font-semibold uppercase tracking-wide py-1.5 px-2">Saldo</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {detail.map((d) => (
                                  <tr key={d.id} className="text-gray-700">
                                    <td className="py-1.5 px-2 whitespace-nowrap">{d.date ? format(new Date(d.date + 'T12:00'), 'dd/MM/yyyy') : '—'}</td>
                                    <td className="py-1.5 px-2 whitespace-nowrap text-gray-500">{fmtTs(d.generated)}</td>
                                    <td className="py-1.5 px-2 font-medium text-gray-800">{d.name || '—'}</td>
                                    <td className="py-1.5 px-2">{d.service || '—'}</td>
                                    <td className="py-1.5 px-2 text-right">{d.gross ? money(d.gross) : <span className="text-gray-300">—</span>}</td>
                                    <td className="py-1.5 px-2 text-right text-green-700">{d.collected ? money(d.collected) : <span className="text-gray-300">—</span>}</td>
                                    <td className="py-1.5 px-2 text-right">{d.pending > 0 ? <span className="text-red-600 font-semibold">{money(d.pending)}</span> : <span className="text-gray-300">—</span>}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
              <tfoot className="bg-gray-50 border-t-2 border-gray-200">
                <tr>
                  <td className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Totales</td>
                  <td className="px-4 py-3 text-right font-bold text-gray-800">{money(totals.gross)}</td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">{money(totals.collected)}</td>
                  <td className="px-4 py-3 text-right font-bold text-red-600">{totals.pending > 0 ? money(totals.pending) : '—'}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

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
