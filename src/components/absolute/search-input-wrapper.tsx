import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchInputWrapperProps {
  children: React.ReactNode;
}
const SearchInputWrapper: React.FC<SearchInputWrapperProps> = ({
  children,
}) => (
  <div className='h-12 px-4 flex gap-x-4 items-center border-b border-gray-200'>
    <MagnifyingGlassIcon className='w-4 h-4' />
    {children}
  </div>
);

export default SearchInputWrapper;
