import TableRow from "./table-row";

interface TableServicePriceProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: { title: string; model?: string; price: number | string }[];
}
const TableServicePrice: React.FC<TableServicePriceProps> = ({
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
            <th className="hidden px-3 py-3.5 text-left text-sm font-bold text-gray-900 md:table-cell">
              Модели кондиционеров
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
              Цена
            </th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-0"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list?.map((i, index) => (
            <TableRow
              key={i.model + "_" + index}
              title={i.title}
              price={i.price}
              model={i.model}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableServicePrice;
