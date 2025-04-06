"use client";

import useBasket from "@/hooks/use-basket";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BasketItem = () => {
  const { basketList } = useBasket();
  return (
    <Link href='/basket' className='-m-2 flex items-center p-2'>
      <ShoppingBagIcon className='w-6 h-6 shrink-0 text-gray-400' />
      <div className='ml-2 w-3 relative text-sm font-medium text-gray-700'>
        {basketList.length}
      </div>
    </Link>
  );
};

export default BasketItem;
