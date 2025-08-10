"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/lib/send-message";
import { DialogFooter } from "@/components/ui/dialog";
import InputPhoneMask from "@/components/ui/input-phone-mask";
import { usePathname } from "next/navigation";

type InputsContactForm = {
  name: string;
  phone: string;
  policy?: boolean;
};

interface ModalOrderFormProps extends React.HtmlHTMLAttributes<HTMLElement> {
  closeModal: () => void;
  text: string;
}

const ModalOrderForm: React.FC<ModalOrderFormProps> = ({
  closeModal,
  text,
  ...props
}) => {
  const [disabled, setDisabled] = useState(false);
  const [loc, setLoc] = useState<string | undefined>("");
  const pathname = usePathname();

  useEffect(() => {
    const location = localStorage.getItem("geo");
    setLoc(location as string);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<InputsContactForm>();

  const onSubmit: SubmitHandler<InputsContactForm> = (data) => {
    setDisabled(true);
    // console.log({ loc: pathname === "/penza" ? "Penza" : "Mordovia" });
    sendMessage({
      ...data,
      text,
      loc: pathname,
    })
      .then((d) => {
        if (!d) return;
        setDisabled(false);
        reset({
          name: "",
          phone: "",
        });
        closeModal();
        //@ts-ignore
        window.ym(96992027, "reachGoal", "order");
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  return (
    <>
      <div {...props} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="name"
            className={cn("text-right", !!errors.name && "text-rose-500")}
          >
            Имя*
          </Label>
          <Input
            {...register("name", { required: true })}
            id="name"
            placeholder="Введите имя"
            className="col-span-3"
            invalid={!!errors.name}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="phone"
            className={cn("text-right", !!errors.phone && "text-rose-500")}
          >
            Телефон*
          </Label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              pattern: regExp,
            }}
            render={({ field: { value, onChange } }) => (
              <InputPhoneMask
                className="col-span-3"
                value={value}
                setValue={onChange}
                invalide={!!errors.phone}
              />
            )}
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={disabled}
          size="lg"
          type="submit"
        >
          Отправить**
        </Button>
      </DialogFooter>
    </>
  );
};

export default ModalOrderForm;
