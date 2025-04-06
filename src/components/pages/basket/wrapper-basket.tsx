import { beautifulFont } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface WrapperBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const WrapperBasket: React.FC<WrapperBasketProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0'>
        <h1
          className={cn(
            beautifulFont.className,
            "text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          )}
        >
          Корзина товаров
        </h1>
        {children}
      </div>
    </div>
  );
};

export default WrapperBasket;
