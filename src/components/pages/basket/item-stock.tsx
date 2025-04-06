import { Check, X } from "lucide-react";

interface ItemStockProps extends React.HtmlHTMLAttributes<HTMLElement> {
  price: number;
}

const ItemStock: React.FC<ItemStockProps> = ({ price }) => {
  return (
    <p className='flex items-center text-sm text-gray-900'>
      {price ? (
        <>
          <Check className='h-5 w-5 shrink-0 text-green-500' />
          <span>В наличии</span>
        </>
      ) : (
        <>
          <X className='h-5 w-5 shrink-0 text-gray-400' />
          <span className='text-gray-400'>Нет в наличии</span>
        </>
      )}
    </p>
  );
};

export default ItemStock;
