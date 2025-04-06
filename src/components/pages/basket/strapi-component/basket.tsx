"use client";

import Cat from "@/components/ui/elements/cat";
import SkeletonBasketWrapper from "../skeleton-basket";
import WrapperBasket from "../wrapper-basket";
import BasketBoody from "./basket-boody";
import useBasket from "@/hooks/use-basket";
// import { useFetchAllProductsByIds } from "@/queries/product";

const MainBasketKomponent = () => {
  const { basketList, removeElementBasketList, dropBasket } = useBasket();

  const queryString = basketList
    .map((id) => `filters[slug][$in]=${id}`)
    .join("&");
  if (!basketList.length)
    return (
      <WrapperBasket>
        <SkeletonBasketWrapper className="mt-12 ">
          <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-full  px-4 text-center my-8 sm:my-16 text-balance flex flex-col items-center">
            <span className="bg-white p-1 rounded-md">
              В вашей корзине пока нет ни одного товара.
            </span>
            <span className="bg-white inline-block rounded-md">
              <Cat className="w-12 h-12" />
            </span>
          </div>
        </SkeletonBasketWrapper>
      </WrapperBasket>
    );

  return (
    <BasketBoody
      queryString={queryString}
      dropBasket={dropBasket}
      removeElementBasketList={removeElementBasketList}
    />
  );
};

export default MainBasketKomponent;
