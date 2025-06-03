import { CostAdditionalServices } from "@/strapi-api/api/data/types";
import TableRow from "./table-row";

interface TableAddingServicePriceProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  list: CostAdditionalServices[];
}
const TableAddingServicePrice: React.FC<TableAddingServicePriceProps> = ({
  list,
  className,
  ...props
}) => {
  return (
    <div {...props} className={className}>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Услуга
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
              Цена
            </th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-0"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list?.map((i) => (
            <TableRow key={i.documentId} title={i.service} price={i.price} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAddingServicePrice;
