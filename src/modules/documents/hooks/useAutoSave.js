import { useCallback, useEffect, useRef, useState } from 'react';

export const SAVE_STATUS = {
  IDLE:    'idle',
  SAVING:  'saving',
  SAVED:   'saved',
  ERROR:   'error',
};

/**
 * Auto-saves `data` every `interval` ms using `onSave`.
 * Skips if a save is already in progress.
 *
 * @param {{ data, onSave, interval?, enabled? }} options
 * @returns {{ status, lastSaved, saveNow }}
 */
export function useAutoSave({ data, onSave, interval = 15000, enabled = true }) {
  const [status,    setStatus]    = useState(SAVE_STATUS.IDLE);
  const [lastSaved, setLastSaved] = useState(null);
  const pendingRef  = useRef(false);
  const dataRef     = useRef(data);

  /* keep ref fresh so the interval always uses the latest data */
  useEffect(() => { dataRef.current = data; }, [data]);

  const save = useCallback(async () => {
    if (pendingRef.current) return;
    pendingRef.current = true;
    setStatus(SAVE_STATUS.SAVING);
    try {
      await onSave(dataRef.current);
      setLastSaved(new Date());
      setStatus(SAVE_STATUS.SAVED);
      setTimeout(() => setStatus(SAVE_STATUS.IDLE), 3000);
    } catch {
      setStatus(SAVE_STATUS.ERROR);
    } finally {
      pendingRef.current = false;
    }
  }, [onSave]);

  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(save, interval);
    return () => clearInterval(id);
  }, [save, interval, enabled]);

  return { status, lastSaved, saveNow: save };
}
