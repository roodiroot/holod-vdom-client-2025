import { Skeleton } from "@/components/ui/skeleton";

const AllFiltersSceletone = () => {
  return (
    <div className="hidden lg:block space-y-10 divide-y divide-gray-200">
      <div className="overflow-hidden rounded-lg ">
        <Skeleton className="flex h-[200px]" />
      </div>
      <div className="pt-10 overflow-hidden rounded-lg ">
        <Skeleton className="flex h-[200px]" />
      </div>
      <div className="pt-10 overflow-hidden rounded-lg ">
        <Skeleton className="flex h-[200px]" />
      </div>
    </div>
  );
};

export default AllFiltersSceletone;
