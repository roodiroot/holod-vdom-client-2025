import { Product } from "@/strapi-api/api/data/types";
import ProductSearchItem from "./product-search-item";

interface ProductsSearchBlockProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  searchList: Product[];
  onClose: () => void;
}

const ProductsSearchBlock: React.FC<ProductsSearchBlockProps> = ({
  searchList,
  onClose,
}) => {
  return (
    <>
      <h2 className="text-xs font-semibold text-gray-900">Кондиционеры</h2>
      <ul className="-mx-4 mt-2 text-sm">
        {searchList.map((i) => (
          <ProductSearchItem
            key={i.documentId}
            id={i.slug}
            name={i.brand?.name + " " + i.name}
            type={i.category?.name || ""}
            prod_catalog={i.product_catalog?.name || ""}
            onClose={onClose}
          />
        ))}
      </ul>
    </>
  );
};

export default ProductsSearchBlock;
