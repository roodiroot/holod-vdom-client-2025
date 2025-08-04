"use client";

import { useFetchBrands } from "@/strapi-api/queries/strapi-queries/brands-queries";
import { useFetchProductsCatalog } from "@/strapi-api/queries/strapi-queries/catalog-queries";
import Link from "next/link";

const CatalogButton = () => {
  const {
    data: dataProductCatalog,
    isLoading: isLoadingProductCatalog,
    isError: isErrorProductCatalog,
  } = useFetchProductsCatalog();
  const {
    data: dataBrands,
    isLoading: isLoadingBrands,
    isError: isErrorBrands,
  } = useFetchBrands();

  // console.log("CatalogButton dataBrands:", dataBrands);

  return (
    <div className="relative group flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition">
      <button className="flex items-center text-sm font-bold text-gray-700 hover:text-gray-800">
        Каталог
      </button>
      <div className="w-auto absolute top-[95%] -left-6 hidden group-hover:block bg-white border shadow-lg py-4 px-8 rounded-lg z-10">
        <ul className="flex gap-12">
          <li className="">
            <div className="block">
              <Link
                href={"/brands"}
                className="hover:text-accent whitespace-nowrap font-bold"
              >
                Бренды
              </Link>
              <div className="mt-5 block">
                <ul className="grid grid-rows-5 grid-flow-col gap-x-6 gap-y-3">
                  {!isLoadingBrands &&
                    !isErrorBrands &&
                    dataBrands?.data.map((item) => (
                      <li key={item.documentId} className="whitespace-nowrap">
                        <Link
                          className="hover:text-accent"
                          href={`/brands/${item.slug}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </li>
          {!isLoadingProductCatalog &&
            !isErrorProductCatalog &&
            dataProductCatalog?.data.map((item) => (
              <li key={item.documentId}>
                <Link
                  href={`/catalog/${item.slug}`}
                  className=" whitespace-nowrap font-bold hover:text-accent "
                >
                  {item.name}
                </Link>
                <ul className=" space-y-3 mt-5">
                  {item.categories.map((category) => (
                    <li
                      key={category.documentId}
                      className="whitespace-nowrap hover:text-accent "
                    >
                      <Link href={`/catalog/${item.slug}/${category.slug}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CatalogButton;
