"use client";

import ListBasket from "../list-basket";
import ActionBasket from "../action-basket";
import WrapperBasket from "../wrapper-basket";
import Cat from "@/components/ui/elements/cat";
import useModalOrder from "@/hooks/use-modal-order";
import SkeletonBasketWrapper from "../skeleton-basket";

import { format } from "@/lib/format";
import { useFetchAllProducts } from "@/strapi-api/queries/strapi-queries/product-queries";

interface BasketBoodyProps {
  queryString: string;
  dropBasket: () => void;
  removeElementBasketList: (value: string) => void;
}

const BasketBoody: React.FC<BasketBoodyProps> = ({
  queryString,
  dropBasket,
  removeElementBasketList,
}) => {
  const { data, isError, isPending } = useFetchAllProducts(
    queryString + "&populate[0]=images&populate[1]=brand&populate[2]=category"
  );
  const { onOpen } = useModalOrder();

  const summ =
    data?.data.reduce((acc, i) => acc + (Number(i.price) || 0), 0) || 0;
  const orderProducts = JSON.stringify(
    data?.data.map((i) => i?.name).join(", ")
  );

  if (isError) {
    return (
      <SkeletonBasketWrapper className="mt-12">
        <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-full  px-4 text-center my-8 sm:my-16 text-balance flex flex-col items-center">
          <span className="bg-white p-1 rounded-md">
            Ошибка загрузки данных попробуйте позже.
          </span>
          <span className="bg-white inline-block rounded-md">
            <Cat className="w-12 h-12" />
          </span>
        </div>
      </SkeletonBasketWrapper>
    );
  }

  return (
    <WrapperBasket>
      {isPending ? (
        <SkeletonBasketWrapper className="mt-12" />
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="mt-12">
          <ListBasket
            product={data}
            removeElement={removeElementBasketList}
            dropBasket={dropBasket}
          />
          <ActionBasket
            className="mt-10"
            totalSumm={isNaN(summ) ? 0 : summ}
            openModal={() =>
              onOpen(
                `Техника в заказе ${orderProducts} на сумму ${format(
                  summ
                )} руб. После отправки формы ожидайте звонка для уточнения деталей доставки и установки.`
              )
            }
          />
        </form>
      )}
    </WrapperBasket>
  );
};

export default BasketBoody;
