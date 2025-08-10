"use client";
import { tinkoffSans } from "@/app/fonts";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { format } from "@/lib/format";
import useModal from "@/hooks/use-modal";

const InstallmentButton = ({ price }: { price: number }) => {
  const { onOpen } = useModal();
  return (
    <button
      onClick={() =>
        onOpen(
          `Рассрочка на сумму ${price} руб. После отправки формы ожидайте звонка для уточнения деталей.`
        )
      }
      className="bg-[#FFDD2D] w-full rounded-[8.62px] px-6 py-3 flex items-center gap-4"
    >
      <div className="mt-1">
        <Icons.tb />
      </div>
      <div className={cn(tinkoffSans.className, "flex flex-col items-start")}>
        <div className="text-gray-900 font-medium leading-4">
          Купить в рассрочку
        </div>
        <div className="text-gray-800 text-sm leading-4">
          от {format(price / 9)} в месяц
        </div>
      </div>
    </button>
  );
};

export default InstallmentButton;
