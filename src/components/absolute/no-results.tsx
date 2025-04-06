import { IoWarningOutline } from "react-icons/io5";

const NoResults = () => {
  return (
    <div className='w-full h-full text-center flex justify-center items-center '>
      <div className='p-4'>
        <IoWarningOutline className='w-6 h-6 text-gray-400 mx-auto' />
        <p className='mt-4 font-semibold text-gray-900'>
          Результаты отсутствуют
        </p>
        <p className='mt-2'>
          Попробуйте задать другие критерии поиска или позвоните нам.
        </p>
      </div>
    </div>
  );
};

export default NoResults;
