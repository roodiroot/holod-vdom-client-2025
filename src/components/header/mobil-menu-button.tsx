"use client";
import useMenu from "@/hooks/use-menu";
import BurgerBatton from "@/components/ui/burger-batton";

const MobilMenuButton = () => {
  const { onOpen } = useMenu();
  return <BurgerBatton onClick={onOpen} className='lg:hidden' />;
};

export default MobilMenuButton;
