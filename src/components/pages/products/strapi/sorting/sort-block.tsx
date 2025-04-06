"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import useFilters from "@/hooks/use-filters";
import { useFilterStore } from "@/hooks/use-open-filters";

const sortTypes = [
  { name: "По популярности" },
  { name: "Сначало дешевле", value: "asc" },
  { name: "Сначало дороже", value: "desc" },
];

const SortBlock = () => {
  const { onOpen } = useFilters();

  const searchParams = useSearchParams();
  const searchParamsToStr = searchParams.toString();
  const { activeFilters } = useFilterStore();

  const [select, setSelect] = useState<"asc" | "desc" | undefined>();
  const [selectName, setSelectName] = useState<string>("Сортировка");

  function updateSorting(sortOrder: "asc" | "desc") {
    const params = new URLSearchParams(searchParamsToStr);
    params.delete("page");
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  function removeSorting() {
    const params = new URLSearchParams(searchParamsToStr);
    params.delete("page");
    params.delete("sort");
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  useEffect(() => {
    const sortParam = searchParams.get("sort") || undefined;
    setSelect(sortParam as "asc" | "desc" | undefined);
    sortTypes.map((i) => {
      if (i.value === sortParam) {
        setSelectName(i.name);
      }
    });
  }, [searchParamsToStr]);

  return (
    <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8 lg:justify-end">
      <button onClick={onOpen} className="flex items-center lg:hidden">
        <span className="text-gray-900 text-sm">Фильтры</span>
        {activeFilters.size ? (
          <div className="size-5 rounded-full bg-red-500 ml-2 flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {" "}
              {activeFilters.size}
            </span>
          </div>
        ) : (
          <Icons.pluss className="text-gray-300 w-5 h-5 ml-1 shrink-0" />
        )}
      </button>
      <div className="relative inline-block">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-gray-900 text-sm flex items-center">
            <span>{selectName}</span>
            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-300" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-[1px]">
            {sortTypes.map((i) => (
              <DropdownMenuItem
                key={i.name}
                onClick={() => {
                  if (i.value) {
                    updateSorting(i.value as "asc" | "desc");
                    setSelect(i.value as "asc" | "desc" | undefined);
                    setSelectName(i.name);
                  } else {
                    removeSorting();
                  }
                }}
                className={cn(
                  "text-gray-500 rounded-[8px]",
                  select === i.value || (!select && !i.value)
                    ? "bg-accent/5"
                    : null
                )}
              >
                {i.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SortBlock;
