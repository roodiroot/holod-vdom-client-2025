import Link from "next/link";
import { TbAirConditioning } from "react-icons/tb";

interface ProductSearchItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  id: string;
  name: string;
  type: string;
  prod_catalog: string;
  onClose: () => void;
}

const ProductSearchItem: React.FC<ProductSearchItemProps> = ({
  id,
  name,
  type,
  prod_catalog,
  onClose,
}) => {
  return (
    <li className="select-none items-center group hover:bg-accent">
      <Link
        onClick={onClose}
        href={`/catalog/product/${id}`}
        scroll={false}
        className="flex cursor-default px-4 py-2"
      >
        <TbAirConditioning className="w-6 h-6 flex-none text-gray-400 group-hover:text-white" />
        <div className="ml-3 flex-1 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-white">
          <div className="">
            {" "}
            <span className="font-bold text-gray-800">{name}</span>{" "}
            {prod_catalog ? "/ " + prod_catalog : ""}
          </div>
          <div className="">{type}</div>
        </div>
      </Link>
    </li>
  );
};

export default ProductSearchItem;
