import { create } from "zustand";

interface ModalOpenState {
  isOpen: boolean;
  text: string;
  onOpen: (text?: string) => void;
  onClose: () => void;
}

const useModal = create<ModalOpenState>((set) => ({
  isOpen: false,
  text: "",
  onOpen: (text) => {
    if (text) {
      set({ isOpen: true, text: text });
    }
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false, text: "" }),
}));

export default useModal;
