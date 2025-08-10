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
import useModal from "@/hooks/use-modal";
import ModalForm from "@/components/action-forms/modal-form";

const ModalWindow: React.FC = () => {
  const { isOpen, onClose, text } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle
            className={cn(beautifulFont.className, "text-gray-900 text-2xl")}
          >
            Добро пожаловать в&nbsp;&laquo;Холод в&nbsp;Дом&raquo;
          </DialogTitle>
          <DialogDescription>
            {text
              ? text
              : "Отправьте форму и наши специалисты свяжутся с вами в течении пяти минут."}
          </DialogDescription>
        </DialogHeader>
        <ModalForm closeModal={onClose} text={text} />
        <div className="text-sm">
          **Отправляя данную форму вы соглашаетесь с{" "}
          <Link onClick={onClose} href={"/docs/policy"} className="text-accent">
            политикой конфиденциальности
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWindow;
