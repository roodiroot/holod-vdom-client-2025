import { Icons } from "../icons";

const Preloader = () => {
  return (
    <div role='status'>
      <Icons.spinner className='w-8 h-8 text-gray-200 animate-spin duration-500 dark:text-gray-600 fill-accent-600' />
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Preloader;
