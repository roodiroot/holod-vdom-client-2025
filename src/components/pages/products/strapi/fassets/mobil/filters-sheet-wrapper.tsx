"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import useFilters from "@/hooks/use-filters";
import { useMediaQuery } from "@/hooks/use-media-query";

interface FiltersSheetWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}
const FiltersSheetWrapper: React.FC<FiltersSheetWrapperProps> = ({
  children,
}) => {
  const { onClose, isOpen } = useFilters();
  const isDesctop = useMediaQuery("(min-width: 1024px)");

  if (isDesctop) return null;

  return (
    <Sheet onOpenChange={() => onClose()} open={isOpen}>
      <SheetContent className="h-full flex flex-col p-4" side="bottom">
        <SheetTitle className="text-center">Фильтры</SheetTitle>
        <SheetDescription className="sr-only">
          Фильтры динамиеские товарного каталогач
        </SheetDescription>
        <div className="flex-1 overflow-auto">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default FiltersSheetWrapper;
