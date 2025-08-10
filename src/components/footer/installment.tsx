"use client";
import { tinkoffSans } from "@/app/fonts";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";
import useModal from "@/hooks/use-modal";

const InstallmentBuner = () => {
  const { onOpen } = useModal();
  return (
    <div className="border-t border-gray-200 py-7 flex items-center justify-between gap-4">
      <div className="sm:flex items-center gap-10">
        <Icons.tbank />
        <p
          className={cn(
            tinkoffSans.className,
            "text-gray-900 font-bold text-sm mt-4 sm:mt-0 sm:text-xl"
          )}
        >
          Рассрочка за 2 минуты, не выходя из дома
        </p>
      </div>
      <button
        onClick={() =>
          onOpen("Отпраьте форму что бы узнать подробнее о рассрочке.")
        }
        className="text-xs py-2 px-5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium"
      >
        Узнать подробнее
      </button>
    </div>
  );
};

export default InstallmentBuner;
