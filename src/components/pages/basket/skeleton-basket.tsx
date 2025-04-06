import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
interface SkeletonBasketWrapperProps
  extends React.HtmlHTMLAttributes<HTMLElement> {}

const SkeletonBasketWrapper: React.FC<SkeletonBasketWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} className={cn("relative", className)}>
      <div className='border-y border-gray-100 divide-y divide-gray-100'>
        <div className='flex py-6'>
          <Skeleton className='h-24 w-full rounded-md sm:h-32' />
        </div>
      </div>
      <div className='mt-10'>
        <Skeleton className='h-[88px] w-full rounded-md' />
      </div>
      <div className='mt-10'>
        <Skeleton className='h-[44px] w-full rounded-md' />
      </div>
      <div className='mt-6'>
        <Skeleton className='h-5 w-40 mx-auto rounded-md' />
      </div>
      {children}
    </div>
  );
};

export default SkeletonBasketWrapper;
