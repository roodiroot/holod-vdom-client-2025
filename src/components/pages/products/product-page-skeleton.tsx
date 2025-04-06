import { Skeleton } from "@/components/ui/skeleton";
import SliderPageSkeleton from "./slider-page-skeleton";
import Breadcrumbs from "@/components/ui/breadcrumbs";

interface ProductPageSkeletonProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  error?: Error;
  message?: string;
}

const ProductPageSkeleton: React.FC<ProductPageSkeletonProps> = ({
  error,
  message,
}) => {
  return (
    <>
      <Breadcrumbs />
      <div className='relative mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        {error && (
          <div className='absolute z-10 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white'>
            {error?.message}
          </div>
        )}
        {message && (
          <div className='absolute z-10 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white'>
            {message}
          </div>
        )}
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          <SliderPageSkeleton />
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <Skeleton className='w-full h-9' />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageSkeleton;
