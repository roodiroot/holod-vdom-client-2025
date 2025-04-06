import { create } from "zustand";

interface SearchModalOpenState {
  isOpen: boolean;
  text: string;
  onOpen: (text?: string) => void;
  onClose: () => void;
}

const useSearchModal = create<SearchModalOpenState>((set) => ({
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

export default useSearchModal;
