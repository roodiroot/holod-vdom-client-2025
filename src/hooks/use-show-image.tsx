import { create } from "zustand";

interface ShowImage {
  isOpen: boolean;
  src: string;
  onOpen: (src: ShowImage["src"]) => void;
  onClose: () => void;
}

const useShowImage = create<ShowImage>((set) => ({
  isOpen: false,
  src: "",
  onOpen: (src) =>
    set({
      isOpen: true,
      src: src,
    }),
  onClose: () => set({ isOpen: false, src: "" }),
}));

export default useShowImage;
