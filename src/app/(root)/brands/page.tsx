import Link from "next/link";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import { beautifulFont } from "@/app/fonts";
import { getAllBrandsApi } from "@/strapi-api/api/data/brands-api";

export const metadata: Metadata = {
  title: "Бренды кондиционеров",
  description:
    "Каталог ведущих брендов кондиционеров. Подберите оборудование от проверенных производителей с гарантией качества и надежности. 🚀 Holod-vdom.ru",
};

export default async function BrandsPage() {
  const brands = await getAllBrandsApi();

  // console.log("Brands data:", brands);

  return (
    // <div className="bg-white">
    //   <div className="py-24 sm:py-32">
    //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //       <div className="mx-auto max-w-2xl lg:mx-0">
    //         <h1
    //           className={cn(
    //             beautifulFont.className,
    //             "text-4xl font-bold tracking-tight text-gray-900"
    //           )}
    //         >
    //           Бренды
    //         </h1>
    //       </div>
    //       <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">

    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Бренды
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            Надежные бренды кондиционеров компании &laquo;Холод в Дом&raquo;
          </p>
        </div>
        <div className="mx-auto mt-10 border-t border-gray-200 pt-10 grid max-w-2xl grid-cols-1 gap-8 leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {brands.data.map((brand) => (
            <Link
              key={brand.documentId}
              href={`/brands/${brand.slug}`}
              className="w-full aspect-[2/1] border rounded-lg p-6"
            >
              <h2 className="text-3xl font-bold">{brand.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
