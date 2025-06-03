"use client";
import ButtonText from "@/components/ui/button-text";
import useModal from "@/hooks/use-modal";
import { format } from "@/lib/format";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  title: string;
  price: number | string;
  model?: string;
}
const TableRow: React.FC<TableRowProps> = ({
  title,
  model,
  price,
  ...props
}) => {
  const { onOpen } = useModal();

  return (
    <tr {...props}>
      <td className="w-full max-w-0 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0 text-balance">
        {title}
        {model && (
          <dl className="font-normal md:hidden">
            <dt className="sr-only">Модели кондиционеров</dt>
            <dd className="mt-1 text-ellipsis whitespace-nowrap overflow-hidden text-gray-600">
              {model}
            </dd>
          </dl>
        )}
      </td>
      {model && (
        <td className="hidden px-3 py-4 text-sm md:table-cell">{model}</td>
      )}
      <td className="px-3 py-4 text-sm">
        {!isNaN(Number(price)) ? format(Number(price)) : price}
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-smfont-medium sm:pr-0 flex justify-end">
        <ButtonText
          onClick={() =>
            onOpen(
              "Подробнее о ценах вы можете узнать у наших специалистов. Отправьте форму, с вами свяжутся в течении нескольких минут."
            )
          }
        >
          Подробнее
        </ButtonText>
      </td>
    </tr>
  );
};

export default TableRow;
