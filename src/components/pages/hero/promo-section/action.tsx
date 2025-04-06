"use client";

import { Button } from "@/components/ui/button";
import useModal from "@/hooks/use-modal";

const Action: React.FC = () => {
  const { onOpen } = useModal();
  return (
    <Button
      onClick={() =>
        onOpen(
          "Заполните форму и в течении нескольких минут с вами свяжутся эксперты по подбору техники."
        )
      }
      className='mt-8'
      variant='pale'
      size='lg'
    >
      Подобрать технику
    </Button>
  );
};

export default Action;
