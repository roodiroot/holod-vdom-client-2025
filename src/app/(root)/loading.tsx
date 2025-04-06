import Preloader from "@/components/ui/elements/preloader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='mx-auto max-w-2xl px-4 pb-24 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center justify-center h-[300px]'>
        <Preloader />
      </div>
    </div>
  );
}
