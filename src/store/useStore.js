import { create } from 'zustand';

const useStore = create((set) => ({
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
}));

export default useStore;
