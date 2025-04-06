"use client";

import Link from "next/link";
import Image from "next/image";

import { format } from "@/lib/format";
import { ImageForProduct } from "@/strapi-api/api/data/types";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import useBasket from "@/hooks/use-basket";
import { useIncrementPopularity } from "@/strapi-api/queries/strapi-queries/increment-popularity-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CardProductProps extends React.HtmlHTMLAttributes<HTMLElement> {
  productId: string;
  title: string;
  price: number;
  area_of_room?: string;
  series?: string;
  sale?: number;
  images?: ImageForProduct[] | null;
}

const CardProductHero: React.FC<CardProductProps> = ({
  productId,
  title,
  price,
  area_of_room,
  series,
  images,
  ...props
}) => {
  const router = useRouter();
  const { mutate } = useIncrementPopularity();
  const { basketList, addElementBasketList } = useBasket();

  const handleAddToBasket = () => {
    if (!basketList.includes(productId)) {
      addElementBasketList(productId);
      mutate({ slug: productId, action: "cart_adds" });
    }
  };

  const imageSrc = images
    ? `${process.env.NEXT_PUBLIC_URL}${images[0]?.formats.small.url}`
    : "";

  return (
    <div
      {...props}
      className="relative flex flex-col h-full overflow-hidden rounded-lg "
    >
      <div className="relative aspect-[2/1.7] overflow-hidden">
        <div className="relative w-full h-full p-4 aspect-[2/1.7] bg-white  overflow-hidden rounded-b-lg">
          <div className="w-full h-full">
            <span className="absolute inset-0"></span>
            <Image
              src={imageSrc}
              alt={`main_image`}
              className="w-full h-full object-contain object-center"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col sm:px-4 py-4 sm:gap-y-2">
        <span></span>
        <h3 className="text-sm sm:text-base font-bold text-gray-900">
          {title}
        </h3>
        <div className="text-xs mt-auto flex-1 flex flex-col justify-end">
          <div>
            <span>
              <span>{series}</span>
              <br />
            </span>
            <span>
              <span>
                Помещение до {area_of_room} м<sup>2</sup>
              </span>
              <br />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-end">
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

                toast.info("Товар добавлен в корзину", {
                  description: "Осталось оформить заказ!",
                  action: {
                    label: "Оформить",
                    onClick: () => router.push("/basket"),
                  },
                });
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

export default CardProductHero;
