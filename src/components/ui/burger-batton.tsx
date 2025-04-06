import { cn } from "@/lib/utils";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface BurgerBattonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
}

const BurgerBatton: React.FC<BurgerBattonProps> = ({
  open,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "relative rounded-md bg-white p-2 text-gray-400",
        className
      )}
    >
      <span className='absolute -inset-0.5 '></span>
      <span className='sr-only'>Открыть меню</span>
      {open ? (
        <XMarkIcon className='w-6 h-6' />
      ) : (
        <Bars3BottomLeftIcon className='w-6 h-6' />
      )}
    </button>
  );
};

export default BurgerBatton;
