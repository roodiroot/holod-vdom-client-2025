"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { beautifulFont } from "@/app/fonts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useModalOrder from "@/hooks/use-modal-order";
import ModalOrderForm from "../action-forms/modal-order-form";

const ModalOrder: React.FC = () => {
  const { isOpen, onClose, text } = useModalOrder();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle
            className={cn(beautifulFont.className, "text-gray-900 text-2xl")}
          >
            Подтвердите заказ
          </DialogTitle>
          <DialogDescription>
            {text
              ? text
              : "Отправьте форму и наши специалисты свяжутся с вами в течении пяти минут."}
          </DialogDescription>
        </DialogHeader>
        <ModalOrderForm closeModal={onClose} text={text} />
        <div className="text-sm">
          **Отправляя данную форму вы соглашаетесь с{" "}
          <Link onClick={onClose} href={"/policy"} className="text-accent">
            политикой конфиденциальности
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalOrder;
