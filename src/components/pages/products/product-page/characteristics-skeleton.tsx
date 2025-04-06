import { Skeleton } from "@/components/ui/skeleton";

const CharacteristicsSkeleton: React.FC = () => {
  return (
    <>
      <div className='mt-3'>
        <Skeleton className='w-full h-9' />
      </div>
      <div className='mt-3'>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <Skeleton className='w-[97px] h-5' />
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <Skeleton className='w-full h-[96px]' />
      </div>
      <div className='mt-10 flex'>
        <Skeleton className='w-[182px] h-11' />
      </div>
      <section className='mt-12'>
        <Skeleton className='w-full h-[366px]' />
      </section>
      <div className='mt-12 space-y-4'>
        <Skeleton className='w-full h-[72px]' />
        <Skeleton className='w-full h-[72px]' />
        <Skeleton className='w-full h-[72px]' />
      </div>
    </>
  );
};

export default CharacteristicsSkeleton;
