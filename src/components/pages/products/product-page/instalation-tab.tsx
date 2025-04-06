import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InstalationTab = () => {
  return (
    <AccordionItem value='item-3'>
      <AccordionTrigger>Установка</AccordionTrigger>
      <AccordionContent>
        При установке кондиционера важно учитывать следующие условия и
        параметры:
        <br />
        <br />
        1. Оценка параметров и размеров жилья
        <br />
        2. Тип и модель кондиционера
        <br /> 3. Место установки внутреннего и внешнего блоков
        <br /> 4. Электропитание и безопасность
        <br />
        5. Вентиляционная система и дренаж
        <br />
        6. Учет закладываемых ресурсов
        <br />
        7. Соблюдение норм и стандартов
        <br />
        8. Качество монтажных работ
        <br />
        <br />
        <span className='text-gray-900'>
          Закажите профессиональный замер для идеального подбора и правильного
          месторасположения вашего кондиционера.
        </span>
      </AccordionContent>
    </AccordionItem>
  );
};

export default InstalationTab;
