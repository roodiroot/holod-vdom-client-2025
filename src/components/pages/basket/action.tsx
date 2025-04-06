"use client";

import { Button } from "@/components/ui/button";
import useBasket from "@/hooks/use-basket";

const Action = ({ id }: { id: string }) => {
  const { basketList, addElementBasketList, removeElementBasketList } =
    useBasket();
  return (
    <div className="">
      <Button onClick={() => addElementBasketList(id)}>В корзину</Button>
    </div>
  );
};

export default Action;
