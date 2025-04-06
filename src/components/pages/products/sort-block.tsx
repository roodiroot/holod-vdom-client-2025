"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import useFilters from "@/hooks/use-filters";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const SortBlock = () => {
  const { onOpen } = useFilters();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sortSelect, setSortSelect] = useState<any>([]);
  const [value, setValue] = useState("Сортировать");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const deletQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    sortSelect.length === 2
      ? router.push(
          pathname +
            "?" +
            createQueryString("sort", JSON.stringify(sortSelect)),
          { scroll: false }
        )
      : router.push(pathname + "?" + deletQueryString("sort"), {
          scroll: false,
        });
  }, [sortSelect]);

  return (
    <div className='mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8 lg:justify-end'>
      <button onClick={onOpen} className='flex items-center lg:hidden'>
        <span className='text-gray-900 text-sm'>Фильтры</span>
        <Icons.pluss className='text-gray-300 w-5 h-5 ml-1 shrink-0' />
      </button>
      <div className='relative inline-block'>
        <DropdownMenu>
          <DropdownMenuTrigger className='text-gray-900 text-sm flex items-center'>
            <span>{value}</span>
            <ChevronDownIcon className='w-4 h-4 ml-1 text-gray-300' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                setValue("Сначала дешевые");
                setSortSelect(["price", "ASC"]);
              }}
              className='text-gray-500'
            >
              Сначала дешевые
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setValue("Сначала дорогие");
                setSortSelect(["price", "DESC"]);
              }}
              className='text-gray-500'
            >
              Сначала дорогие
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setValue("По названию");
                setSortSelect(["name", "ASC"]);
              }}
              className='text-gray-500'
            >
              По названию
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SortBlock;
