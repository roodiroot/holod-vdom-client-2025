import { toast } from "sonner";

export const sendMessage = async (data: any) => {
  const d = await fetch(`/api/order?text=${JSON.stringify(data)}`);
  // console.log(data);
  if (d.status === 200) {
    toast.success("Ваша заявка принята!", {
      description: "Ожидайте звонка нашего специалиста.",
    });
    return true;
  }
  toast.error("Ошибка отправки.", {
    description: "Пожалуйста попробуйте еще раз.",
  });
  return false;
};
