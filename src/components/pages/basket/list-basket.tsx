"use client";

import { Trash2 } from "lucide-react";

import ItemBasket from "./item-basket";
import { memo } from "react";
import { ProductsData } from "@/strapi-api/api/data/types";

interface ListBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {
  product: ProductsData;
  removeElement: (value: string) => void;
  dropBasket: () => void;
}

const ListBasket: React.FC<ListBasketProps> = ({
  product,
  removeElement,
  dropBasket,
  ...props
}) => (
  <section {...props}>
    <h2 className="sr-only">Товары в корзине</h2>
    <ul className="border-y border-gray-200 divide-y divide-gray-200">
      {product.data.map((i, index) => (
        <ItemBasket
          key={i.slug}
          name={i?.name}
          slug={i.slug}
          logo={i?.images ? i?.images[0].formats.small.url : ""}
          typeName={i?.category?.name || ""}
          brandName={i?.brand?.name || ""}
          price={i?.price || 0}
          removeElement={removeElement}
        />
      ))}
    </ul>
    <div className="w-full flex justify-end">
      <span onClick={dropBasket} className="p-4 cursor-pointer">
        <Trash2 className="w-5 h-5 text-red-500" />
      </span>
    </div>
  </section>
);

export default memo(ListBasket);
