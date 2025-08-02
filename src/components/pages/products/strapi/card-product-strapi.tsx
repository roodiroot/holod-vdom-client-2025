"use client";

import SliderCardProduct from "../slider-card-product";

import { format } from "@/lib/format";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageForProduct } from "@/strapi-api/api/data/types";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import useBasket from "@/hooks/use-basket";
import { useIncrementPopularity } from "@/strapi-api/queries/strapi-queries/increment-popularity-query";
import Link from "next/link";

interface CardProductProps extends React.HtmlHTMLAttributes<HTMLElement> {
  productId: string;
  title: string;
  price: number;
  area_of_room?: string;
  series?: string;
  sale?: number;
  btu?: string | null;
  images?: ImageForProduct[] | null;
}

const CardProductStrapi: React.FC<CardProductProps> = ({
  productId,
  title,
  price,
  area_of_room,
  series,
  sale,
  images,
  btu,
  ...props
}) => {
  const { mutate } = useIncrementPopularity();
  const { basketList, addElementBasketList } = useBasket();

  const handleAddToBasket = () => {
    if (!basketList.includes(productId)) {
      addElementBasketList(productId);
      mutate({ slug: productId, action: "cart_adds" });
    }
  };

  const slider = images?.map(
    (i) =>
      `${process.env.NEXT_PUBLIC_URL}${i?.formats?.small?.url || i?.url}` || ""
  );

  return (
    <div
      {...props}
      className="relative flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white "
    >
      {sale && (
        <span className="absolute z-20 top-4 left-4 px-2 py-0.5 bg-rose-500 text-white text-sm font-semibold rounded-md">
          - {sale} %
        </span>
      )}
      <div className="relative aspect-[2/1.7] overflow-hidden">
        {slider ? (
          <SliderCardProduct list={slider} />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>
      <div className="relative flex flex-1 flex-col p-4 space-y-2">
        <span></span>
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div className="text-xs">
          {series && (
            <span>
              <span>Серия: {series}</span>
              <br />
            </span>
          )}
          {area_of_room && (
            <span>
              <span>
                Помещение до {area_of_room} м<sup>2</sup>
              </span>
              <br />
            </span>
          )}
          {btu && (
            <span>
              <span>Мощность охлаждения {btu} BTU</span>
              <br />
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex justify-between items-end">
            <p className="text-gray-900 font-medium">
              {price ? (
                <span>{format(price)}</span>
              ) : (
                "Товар временно отсутствует"
              )}
            </p>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToBasket();
              }}
              size={"icon"}
              disabled={basketList.includes(productId)}
              className="z-10"
            >
              <ShoppingCartIcon className="size-5" />
            </Button>
            <Link
              href={`/catalog/product/${productId}`}
              className="absolute inset-0 z-0"
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductStrapi;
