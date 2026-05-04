/**
 * Returns all non-cancelled surgeries scheduled on the same date,
 * excluding the surgery being edited. Used to warn about a busy OR.
 */
export function getSameDaySurgeries(surgeries, { date, excludeId = null }) {
  return surgeries.filter((s) => {
    if (s.id === excludeId)       return false;
    if (s.status === 'cancelado') return false;
    return s.date === date;
  });
}

/** Returns true if any surgery is already scheduled at the exact same date + time. */
export function hasExactConflict(surgeries, { date, startTime, excludeId = null }) {
  return surgeries.some((s) => {
    if (s.id === excludeId)       return false;
    if (s.status === 'cancelado') return false;
    return s.date === date && s.startTime === startTime;
  });
}
