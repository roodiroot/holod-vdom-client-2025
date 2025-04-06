import Image from "next/image";
import HeroAction from "../../hero/main-block/hero-action";
import { Icons } from "@/components/ui/icons";
import FeaturesItem from "./features-item";

const featuresList = [
  {
    title: <h3>Свой склад техники</h3>,
    description:
      "Вся техника всегда в наличии на собственном складе. Быстрая доставка и контроль качества гарантированы!",
  },
  {
    title: <h3>Расширенная гарантия и техническая поддержка</h3>,
    description:
      "Максимальная защита ваших покупок с расширенной гарантией и круглосуточной технической поддержкой. Надежность на 100%!",
  },
  {
    title: <h3>Виртуальный консультант</h3>,
    description:
      "Легко выбрать то, что нужно! Виртуальный консультант поможет найти идеальный товар, исходя из ваших требований, за считанные минуты.",
  },
  {
    title: <h3>Быстрая доставка в тот же день</h3>,
    description:
      "Получите товар уже завтра! Мы привезем и установим технику. Экономьте время и наслаждайтесь покупкой без лишних забот.",
  },
];

interface FeaturesBlockProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const FeaturesBlock: React.FC<FeaturesBlockProps> = ({ ...props }) => {
  return (
    <div
      {...props}
      className="mx-auto max-w-3xl lg:max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row md:justify-between">
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Создаем <span className="text-accent">уют</span> и комфортную
            атмосферу
          </h2>
          <div className="hidden lg:inline-flex">
            <Icons.halfsnow className="h-20 lg:h-40 fill-accent/20 rotate-180" />
          </div>
        </div>
        <div className="flex flex-col gap-8 flex-1 min-w-0 lg:min-w-[669px] ">
          {featuresList.map((i, index) => (
            <FeaturesItem key={index} description={i.description}>
              {i.title}
            </FeaturesItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBlock;
