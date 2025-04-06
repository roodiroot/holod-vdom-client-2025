"use client";

import { format } from "@/lib/format";
import SliderCardProduct from "../components/pages/products/slider-card-product";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

interface CardProductProps extends React.HtmlHTMLAttributes<HTMLElement> {
  productId: string;
  title: string;
  price: number;
  logo?: string;
  img?: string[];
  options?: { id: number; title: string; description: string }[];
}

const CardProduct: React.FC<CardProductProps> = ({
  productId,
  title,
  price,
  logo,
  img,
  options,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      {...props}
      onClick={() => router.push(`products/${productId}`)}
      className="relative cursor-pointer flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white min-h-[382px]"
    >
      <div className="relative aspect-[1/1] overflow-hidden sm:h-[15rem]">
        {img && logo ? (
          <SliderCardProduct list={[logo, ...img]} />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>
      <div className="relative flex flex-1 flex-col p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div className="text-xs">
          {options?.map((i) => (
            <span key={i.id}>
              <span>
                {i.title} ... {i.description}
              </span>
              <br />
            </span>
          ))}
        </div>
        <div className="flex flex-1 flex-col justify-end">
          {/* <p className='text-sm italic'>до 20 м²</p> */}
          <p className="text-gray-900 font-medium">
            {price ? (
              <span>{format(price)}</span>
            ) : (
              "Товар временно отсутствует"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
