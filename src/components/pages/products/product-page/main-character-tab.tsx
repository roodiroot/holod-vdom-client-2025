import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MainCharacterTabProps extends React.HtmlHTMLAttributes<HTMLElement> {
  brand?: string;
  category?: string;
  compressor_type?: string;
  area_of_room?: string;
  wifi_availability?: string;
  series?: string;
}

const MainCharacterTab: React.FC<MainCharacterTabProps> = ({
  brand,
  category,
  compressor_type,
  area_of_room,
  wifi_availability,
  series,
  ...props
}) => {
  const characteristics = [
    {
      name: "Бренд производитель",
      value: brand,
    },
    {
      name: "Серия",
      value: series,
    },
    {
      name: "Тип устройства",
      value: category,
    },
    {
      name: "Площадь помещения до м²",
      value: area_of_room,
    },
    {
      name: "Технология компрессора",
      value: compressor_type,
    },
    {
      name: "Наличие Wi-Fi",
      value: wifi_availability,
    },
  ];

  return (
    <AccordionItem {...props} value="item-1">
      <AccordionTrigger>Основные характеристики</AccordionTrigger>
      <AccordionContent>
        <ul className="">
          {characteristics.map((item, index) => {
            if (!item.value) return null;
            return (
              <li
                key={index}
                className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200"
              >
                <span className="flex-1 leading-4 text-balance ">
                  {item.name}:
                </span>
                <span className="text-gray-900 font-medium text-right leading-4">
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default MainCharacterTab;
