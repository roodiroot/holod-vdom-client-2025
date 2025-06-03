import TableWorks from "./table-works";
import TableServicePrice from "./table-service-price";
import TableAddingServicePrice from "./table-adding-service-price";
import {
  CostAdditionalServices,
  CostServices,
} from "@/strapi-api/api/data/types";

interface TableSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  listWorks: CostServices[];
  listAddWorks: CostAdditionalServices[];
}

const TableSection: React.FC<TableSectionProps> = ({
  listAddWorks,
  listWorks,
}) => {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl">
        <TableWorks
          info="*Стандартный монтаж включает в себя сверление отверстия под коммуникации
        до 80 сантиметров, 4 метра жидкостных трубок, кронштейны для наружного
        блока, крепления, короб канал до 50 см, удлинение провода до ближайшей
        точки питания до 3 метров. Работы производятся с использованием
        строительного пылесоса."
          title="Стоимость услуг"
          description="Актуальные цены на установку кондиционеров и дополнительные услуги зависят от типа оборудования и сложности монтажа. Для точного расчета рекомендуем консультацию со специалистом."
        >
          <TableServicePrice className="-mx-4 mt-8 sm:mx-0" list={listWorks} />
        </TableWorks>
        <TableWorks
          className="mt-16"
          title="Дополнительные работы"
          description="Цены носят предварительный характер и не являются публичной офертой. Для точного расчета уточните стоимость установки с учетом ваших требований у специалиста."
        >
          <TableAddingServicePrice
            className="-mx-4 mt-8 sm:mx-0"
            list={listAddWorks}
          />
        </TableWorks>
      </div>
    </div>
  );
};

export default TableSection;
