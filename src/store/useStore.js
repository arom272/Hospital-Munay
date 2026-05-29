import { create } from 'zustand';
import { subscribePatients }  from '../services/patientService';
import { subscribeSurgeries } from '../services/surgeryService';
import { subscribeTherapies } from '../services/therapyService';
import { subscribeTherapists } from '../services/therapistService';
import { subscribePackages }  from '../services/therapyPackageService';

const useStore = create((set, get) => ({
  // ── Patients ──────────────────────────────────────────────
  patients:       [],
  setPatients:    (patients) => set({ patients }),

  // ── Surgeries ─────────────────────────────────────────────
  surgeries:      [],
  setSurgeries:   (surgeries) => set({ surgeries }),

  // ── Therapies ─────────────────────────────────────────────
  therapies:      [],
  setTherapies:   (therapies) => set({ therapies }),

  // ── Therapists ────────────────────────────────────────────
  therapists:     [],
  setTherapists:  (therapists) => set({ therapists }),

  // ── Therapy Packages ──────────────────────────────────────
  packages:       [],
  setPackages:    (packages) => set({ packages }),

  // ── UI state ──────────────────────────────────────────────
  sidebarOpen:    false,
  toggleSidebar:  () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  closeSidebar:   () => set({ sidebarOpen: false }),

  // ── Search ────────────────────────────────────────────────
  searchQuery:    '',
  setSearchQuery: (q) => set({ searchQuery: q }),

  // ── Real-time data layer ──────────────────────────────────
  // Las suscripciones a Firestore se montan UNA sola vez para
  // toda la sesión autenticada (no por página). Se usa un contador
  // de referencias para soltar los listeners cuando ya nadie los usa.
  dataReady:      false,
  _unsubs:        [],
  _refCount:      0,

  startData: () => {
    const next = get()._refCount + 1;
    set({ _refCount: next });
    if (next > 1) return;            // ya hay listeners activos

    const { setPatients, setSurgeries, setTherapies, setTherapists, setPackages } = get();
    const unsubs = [
      subscribePatients(setPatients),
      subscribeSurgeries(setSurgeries),
      subscribeTherapies(setTherapies),
      subscribeTherapists(setTherapists),
      subscribePackages(setPackages),
    ];
    set({ _unsubs: unsubs, dataReady: true });
  },

  stopData: () => {
    const next = Math.max(0, get()._refCount - 1);
    set({ _refCount: next });
    if (next > 0) return;            // todavía hay consumidores

    get()._unsubs.forEach((u) => u && u());
    set({ _unsubs: [], dataReady: false });
  },
}));

export default useStore;
