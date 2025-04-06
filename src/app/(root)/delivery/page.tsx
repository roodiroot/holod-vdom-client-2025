import { beautifulFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия доставки",
  description:
    "Бесплатная доставка в черте города Саранска, Рузаевке, Берсеневке, Лямбирь, Оброчное.",
};

const DeliveryPage = () => {
  return (
    <div className='bg-white'>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto  lg:mx-0'>
            <h1
              className={cn(
                beautifulFont.className,
                "text-4xl font-bold tracking-tight text-gray-900"
              )}
            >
              Условия доставки
            </h1>
          </div>
          <div className='mt-16 space-y-8'>
            <div className='space-y-4'>
              <span className='font-medium text-gray-900'>
                1. Доставка в Саранске:
              </span>
              <ul className='space-y-2'>
                <li>
                  - Бесплатная доставка в черте города Саранска, Рузаевке ,
                  Берсеневке , Лямбирь , Оброчное.
                </li>
                <li>
                  - Отсутствие минимальной суммы заказа для бесплатной доставки.
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <span className='font-medium text-gray-900'>
                2. Доставка по Республике:
              </span>
              <ul className='space-y-2'>
                <li>
                  - Стоимость доставки за пределами Саранска составляет 30
                  рублей за каждый километр.{" "}
                </li>
                <li>
                  - Расчет стоимости доставки производится от границ города
                  Саранска до адреса доставки.
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <span className='font-medium text-gray-900'>
                2. Доставка по РФ:
              </span>
              <ul className='space-y-2'>
                <li>- Сотрудничаем с рядом надежных транспортных компаний.</li>
                <li>
                  - Расчет стоимости доставки производится по тарифам выбранных
                  транспортных компаний.
                </li>
                <li>- Отправка техники производится по 100% предоплате.</li>
              </ul>
            </div>
            <div className='space-y-4'>
              <span className='font-medium text-gray-900'>
                3. Планирование доставки:
              </span>
              <ul className='space-y-2'>
                <li>- Возможность выбора удобной даты и времени доставки. </li>
                <li>
                  - Предварительное информирование клиента о времени доставки.
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <span className='font-medium text-gray-900'>
                4. Условия и ограничения:
              </span>
              <ul className='space-y-2'>
                <li>
                  - Доставка осуществляется до подъезда или ворот объекта.
                </li>
                <li>
                  - В случае необходимости подъема оборудования на этаж может
                  взиматься дополнительная плата.
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <span className='font-medium text-gray-900'>
                5. Отслеживание доставки:
              </span>
              <ul className='space-y-2'>
                <li>
                  - Предоставление информации о статусе доставки и
                  ориентировочного времени прибытия.
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
