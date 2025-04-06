"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import useSearchModal from "@/hooks/use-search-moda";

const SearchButton = () => {
  const { onOpen } = useSearchModal();
  return (
    <button onClick={() => onOpen()} className='text-gray-400 p-2'>
      <MagnifyingGlassIcon className='w-6 h-6' />
    </button>
  );
};

export default SearchButton;
