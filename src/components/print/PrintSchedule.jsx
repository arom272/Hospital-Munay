import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function addMinutes(time, mins) {
  const [h, m] = time.split(':').map(Number);
  const total  = h * 60 + m + Number(mins);
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

const STATUS_LABELS = {
  programado: 'Programado',
  confirmado: 'Confirmado',
  realizado:  'Realizado',
  cancelado:  'Cancelado',
};

export function PrintDailySchedule({ surgeries, date }) {
  const list = surgeries
    .filter((s) => s.date === date && s.status !== 'cancelado')
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const dateLabel = format(new Date(date + 'T12:00'), "EEEE d 'de' MMMM yyyy", { locale: es });

  return (
    <div className="print-only font-sans text-sm text-gray-900 p-8 max-w-3xl mx-auto">
      <div className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-2xl font-bold">MUNAY — Gestión Quirúrgica</h1>
        <h2 className="text-lg font-semibold mt-1 capitalize">Programación Diaria · {dateLabel}</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Generado: {format(new Date(), "dd/MM/yyyy HH:mm")}
        </p>
      </div>

      {list.length === 0 ? (
        <p className="text-gray-500 italic">No hay cirugías programadas para este día.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              {['N°', 'Hora', 'Rango', 'Paciente', 'Tipo de cirugía', 'Cirujano', 'Anestesiólogo', 'Ayuno', 'Estado'].map((h) => (
                <th key={h} className="border border-gray-300 px-2 py-1.5 text-left text-xs font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((s, i) => (
              <tr key={s.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 px-2 py-1.5">{i + 1}</td>
                <td className="border border-gray-200 px-2 py-1.5 font-medium">{s.startTime}</td>
                <td className="border border-gray-200 px-2 py-1.5">
                  {s.startTime} – {addMinutes(s.startTime, s.durationMinutes)}
                  <span className="text-gray-400 text-xs"> ({s.durationMinutes}m)</span>
                </td>
                <td className="border border-gray-200 px-2 py-1.5 font-medium">{s.patientName}</td>
                <td className="border border-gray-200 px-2 py-1.5">{s.surgeryType}</td>
                <td className="border border-gray-200 px-2 py-1.5">{s.surgeon || '—'}</td>
                <td className="border border-gray-200 px-2 py-1.5">{s.anesthesiologist || '—'}</td>
                <td className="border border-gray-200 px-2 py-1.5">{s.fastingTime || '—'}</td>
                <td className="border border-gray-200 px-2 py-1.5">{STATUS_LABELS[s.status] ?? s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between text-xs text-gray-400">
        <span>Total: {list.length} cirugía{list.length !== 1 ? 's' : ''}</span>
        <span>Quirófano único</span>
      </div>
    </div>
  );
}
