import { create } from "zustand";

interface MobilFiltersState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFilters = create<MobilFiltersState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFilters;
