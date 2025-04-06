"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { format } from "@/lib/format";

interface ActionBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {
  totalSumm: number;
  openModal: () => void;
}

const ActionBasket: React.FC<ActionBasketProps> = ({
  openModal,
  totalSumm,
  className,
  ...props
}) => (
  <div {...props} className={className}>
    <h2 className='sr-only'>Стоимость заказа</h2>
    <div>
      <dl className='m-0'>
        <div className='flex items-center justify-between'>
          <dt className='font-medium text-gray-900'>Общая стоимость товаров</dt>
          <dd className='ml-4 font-medium text-gray-900'>
            {format(totalSumm)}
          </dd>
        </div>
      </dl>
      <p className='mt-1 text-sm text-balance'>
        Сразу после оформления заказа наш специалист свяжется с&nbsp;вами
        в&nbsp;течение нескольких минут. Он&nbsp;предоставит детальную
        консультацию, ответит на&nbsp;все интересующие вас вопросы
        и&nbsp;уточнит удобные даты для доставки и&nbsp;установки вашей техники.
      </p>
    </div>
    <div className='mt-10'>
      <Button onClick={openModal} size='lg' className='w-full'>
        Оформить заказ
      </Button>
    </div>
    <div className='mt-6 text-center text-sm'>
      <p>
        или{" "}
        <Link href={"/products"} className='font-medium text-accent'>
          продолжить покупки<span aria-hidden='true'> →</span>
        </Link>
      </p>
    </div>
  </div>
);

export default ActionBasket;
