import { create } from "zustand";

interface FilterStore {
  activeFilters: Set<string>;
  addFilter: (key: string) => void;
  removeFilter: (key: string) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  activeFilters: new Set(),

  addFilter: (key) =>
    set((state) => {
      const updatedFilters = new Set(state.activeFilters);
      updatedFilters.add(key);
      return { activeFilters: updatedFilters };
    }),

  removeFilter: (key) =>
    set((state) => {
      const updatedFilters = new Set(state.activeFilters);
      updatedFilters.delete(key);
      return { activeFilters: updatedFilters };
    }),

  clearFilters: () => set({ activeFilters: new Set() }),
}));
