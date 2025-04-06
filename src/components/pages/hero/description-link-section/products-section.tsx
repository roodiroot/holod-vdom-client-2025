import Link from "next/link";
import ProductsSaleCarousel from "./products-carousel";
import { Product } from "@/strapi-api/api/data/types";

const ProductsSection: React.FC<{ products: Product[] }> = ({ products }) => (
  <section className="bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="flex justify-between items-baseline">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Вас может заинтересовать
        </h2>
        <Link
          href="/catalog"
          className="hidden text-sm font-semibold text-accent sm:block"
        >
          В каталог <span aria-hidden="true"> →</span>
        </Link>
      </div>
      <div className="relative z-10 w-full mt-4">
        <ProductsSaleCarousel products={products} />
      </div>
    </div>
  </section>
);

export default ProductsSection;
