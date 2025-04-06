import { create } from "zustand";

interface MobilMenuState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMenu = create<MobilMenuState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMenu;
