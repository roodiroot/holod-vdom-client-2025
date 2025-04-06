"use client";

import { Button } from "@/components/ui/button";
import useModal from "@/hooks/use-modal";

interface HeroActionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const HeroAction: React.FC<HeroActionProps> = ({ className }) => {
  const { onOpen } = useModal();
  return (
    <>
      <Button
        size="xl"
        onClick={() =>
          onOpen(
            "Отправьте форму и наши специалисты по установке свяжутся с вами в течении пяти минут."
          )
        }
        className={className}
      >
        Консультация
      </Button>
    </>
  );
};

export default HeroAction;
