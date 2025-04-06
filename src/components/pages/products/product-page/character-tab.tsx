import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Char } from "@/strapi-api/api/data/types";

interface CharacterTabProps extends React.HtmlHTMLAttributes<HTMLElement> {
  brand?: string;
  category?: string;
  area_of_room?: string;
  cooling_capacity?: string | null;
  wifi_availability?: string;
  series?: string;
  refrigerant?: string;
  noise_level?: string;
  max_pipe_length?: string | null;
  compressor_type?: string;
  color?: string;
  energy_efficiency_class?: string;
  compressor_brand?: string;
  country_of_manufacturer?: string;
  warranty_period?: string;
  heating_power?: string;
  cooling_power?: string;
  old_price?: string | null;
  charsetistics?: Char[];
}

const CharacterTab: React.FC<CharacterTabProps> = ({
  brand,
  category,
  area_of_room,
  cooling_capacity,
  wifi_availability,
  series,
  refrigerant,
  noise_level,
  max_pipe_length,
  compressor_type,
  color,
  energy_efficiency_class,
  compressor_brand,
  country_of_manufacturer,
  warranty_period,
  heating_power,
  cooling_power,
  old_price,
  charsetistics,
}) => {
  const characteristics = [
    {
      id: 1,
      title: "Бренд производитель",
      description: brand,
    },
    {
      id: 2,
      title: "Серия",
      description: series,
    },
    {
      id: 3,
      title: "Тип устройства",
      description: category,
    },
    {
      id: 4,
      title: "Площадь помещения до м²",
      description: area_of_room,
    },
    {
      id: 5,
      title: "Охлаждающая способность, BTU",
      description: cooling_capacity,
    },
    {
      id: 5,
      title: "Технология компрессора",
      description: compressor_type,
    },
    {
      id: 6,
      title: "Наличие Wi-Fi",
      description: wifi_availability,
    },
    {
      id: 7,
      title: "Хладагент",
      description: refrigerant,
    },
    {
      id: 8,
      title: "Уровень шума, дБ",
      description: noise_level,
    },
    {
      id: 9,
      title: "Максимальная длина трубопровода, м",
      description: max_pipe_length,
    },
    {
      id: 10,
      title: "Цвет",
      description: color,
    },
    {
      id: 11,
      title: "Класс энергоэффективности",
      description: energy_efficiency_class,
    },
    {
      id: 12,
      title: "Бренд компрессора",
      description: compressor_brand,
    },
    {
      id: 13,
      title: "Страна производитель",
      description: country_of_manufacturer,
    },
    {
      id: 14,
      title: "Гарантия",
      description: warranty_period,
    },
    {
      id: 15,
      title: "Мощность обогрева, кВт",
      description: heating_power,
    },
    {
      id: 16,
      title: "Мощность охлаждения, кВт",
      description: cooling_power,
    },
    {
      id: 17,
      title: "Старая цена",
      description: old_price,
    },
  ];
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>Все характеристики</AccordionTrigger>
      <AccordionContent>
        <ul>
          {characteristics.map((item) => {
            if (!item.description) return null;
            return (
              <li
                key={item.title}
                className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200"
              >
                <span className="flex-1 leading-4 text-balance ">
                  {item.title}:
                </span>
                <span className="text-gray-900 font-medium text-right leading-4">
                  {item.description}
                </span>
              </li>
            );
          })}
          {characteristics.length &&
            charsetistics?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="relative pl-1.5  my-2  pr-6 w-full flex gap-4 justify-between sm:pl-6 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:absolute sm:before:left-2 sm:before:w-1 sm:before:h-1 sm:before:bg-slate-200"
                >
                  <span className="flex-1 leading-4 text-balance ">
                    {item.key}:
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

export default CharacterTab;
