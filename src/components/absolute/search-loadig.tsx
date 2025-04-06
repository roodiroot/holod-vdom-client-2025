import { Icons } from "../ui/icons";

const SearchLoadig = () => {
  return (
    <div className='absolute inset-0 bg-white/80 flex justify-center items-center'>
      <Icons.spinner className='w-8 h-8 text-gray-200 animate-spin duration-500 dark:text-gray-600 fill-accent-600' />
    </div>
  );
};

export default SearchLoadig;
