"use client";

import { useState } from "react";
import SearchResultContent from "./search-result-content";
import SearchInput from "./search-input";
import MenuSearch from "./menu-search";

interface SearchActionBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}

const SearchActionBody: React.FC<SearchActionBodyProps> = ({ onClose }) => {
  const [submit, setSubmit] = useState("");

  return (
    <>
      <SearchInput setSubmit={setSubmit} />
      <div className='relative px-4 pt-4 h-[300px] overflow-y-auto'>
        {submit === "" ? (
          <MenuSearch onClose={onClose} />
        ) : (
          <SearchResultContent submit={submit} onClose={onClose} />
        )}
      </div>
    </>
  );
};

export default SearchActionBody;
