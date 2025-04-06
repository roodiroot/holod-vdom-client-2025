"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import useSearchModal from "@/hooks/use-search-moda";
import SearchActionBody from "./search-action-body";
import { DialogDescription } from "@radix-ui/react-dialog";

const SearchWindow = () => {
  const { isOpen, onClose } = useSearchModal();

  return (
    <Dialog modal open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">Поиск</DialogTitle>
      <DialogDescription className="sr-only">Поиск по сайту</DialogDescription>
      <DialogContent className="p-0 pb-3 gap-y-0 max-w-xl top-48">
        <SearchActionBody onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default SearchWindow;
