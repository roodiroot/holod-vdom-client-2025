import { Skeleton } from "@/components/ui/skeleton";

const SliderPageSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <div className='grid grid-cols-4 gap-6'>
          <div>
            <Skeleton className='flex h-24 rounded-md' />
          </div>
          <div>
            <Skeleton className='flex h-24 rounded-md' />
          </div>
          <div>
            <Skeleton className='flex h-24 rounded-md' />
          </div>
          <div>
            <Skeleton className='flex h-24 rounded-md' />
          </div>
        </div>
      </div>
      <Skeleton className='w-full pb-[100%]' />
    </div>
  );
};

export default SliderPageSkeleton;
