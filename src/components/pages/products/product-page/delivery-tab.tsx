import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DeliveryTab = () => {
  return (
    <AccordionItem value='item-5'>
      <AccordionTrigger>Доставка</AccordionTrigger>
      <AccordionContent className='space-y-4'>
        <div>
          <div className='font-medium text-gray-900'>Доставка в Саранске:</div>
          <div className='mt-2  flex flex-col'>
            <span>- Бесплатная доставка по городу Саранску.</span>
            <span>
              - Отсутствие минимальной суммы заказа для бесплатной доставки.
            </span>
          </div>
        </div>
        <div>
          <div className='font-medium text-gray-900'>
            Доставка по Республике:
          </div>
          <div className='mt-2  flex flex-col'>
            <span>
              - Стоимость доставки за пределами Саранска составляет 30 рублей за
              каждый километр.
            </span>
            <span>
              - Расчет стоимости доставки производится от границ города Саранска
              до адреса доставки.
            </span>
          </div>
        </div>
        <div>
          <div className='font-medium text-gray-900'>Доставка по России:</div>
          <div className='mt-2  flex flex-col'>
            <span>
              - Мы сотрудничаем с рядом надежных транспортных компаний .
            </span>
            <span>
              - Расчет стоимости доставки определяется тарифами выбранной
              транспортной компании.
            </span>
          </div>
        </div>
        <div>
          <div className='font-medium text-gray-900'>
            Планирование доставки:
          </div>
          <div className='mt-2 flex flex-col'>
            <span>- Возможность выбора удобной даты и времени доставки.</span>
            <span>
              - Предварительное информирование клиента о времени доставки.
            </span>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default DeliveryTab;
