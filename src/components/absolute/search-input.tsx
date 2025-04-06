import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import SearchInputWrapper from "./search-input-wrapper";

interface SearchInputProps {
  setSubmit: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSubmit }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSubmit(value);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  return (
    <SearchInputWrapper>
      <input
        type='text'
        placeholder='Поиск'
        className='w-full h-full bg-transparent outline-none'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
