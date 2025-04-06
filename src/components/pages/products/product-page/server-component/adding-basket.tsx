"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import useBasket from "@/hooks/use-basket";
import { cn } from "@/lib/utils";
import useModal from "@/hooks/use-modal";
import { useIncrementPopularity } from "@/strapi-api/queries/strapi-queries/increment-popularity-query";

interface AddingBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {
  prodId: string;
  name?: string;
  price?: string;
}

const AddingBasket: React.FC<AddingBasketProps> = ({
  prodId,
  name = "товар",
  price = "0",
  className,
  ...props
}) => {
  const router = useRouter();
  const { basketList, addElementBasketList, removeElementBasketList } =
    useBasket();
  const { onOpen } = useModal();
  const { mutate: incrementPopularity, isError } = useIncrementPopularity();

  const togleProductBasket: () => void = () => {
    if (basketList.includes(prodId)) {
      removeElementBasketList(prodId);
      toast.info("Товар удален из корзины");
    } else {
      addElementBasketList(prodId);
      incrementPopularity({ slug: prodId, action: "cart_adds" });
      if (isError) {
        console.log("Ошибка при обновлении популярности");
      }
      toast.info("Товар добавлен в корзину", {
        description: "Осталось оформить заказ!",
        action: {
          label: "Оформить",
          onClick: () => router.push("/basket"),
        },
      });
    }
  };

  return (
    <div
      {...props}
      className={cn("flex flex-col gap-4 sm:flex-row", className)}
    >
      <Button
        variant={basketList.includes(prodId) ? "togleDefault" : "default"}
        onClick={togleProductBasket}
        size="lg"
      >
        {basketList.includes(prodId)
          ? "Удалить из корзины"
          : "Добавить в корзину"}
      </Button>
      <Button
        onClick={() =>
          onOpen(
            `Рассрочка на ${name} на сумму ${price} руб. После отправки формы ожидайте звонка для уточнения деталей.`
          )
        }
        variant="outline"
        size="lg"
      >
        Рассрочка
      </Button>
    </div>
  );
};

export default AddingBasket;
