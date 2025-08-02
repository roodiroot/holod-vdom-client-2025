"use client";

import { useSearchParams } from "next/navigation";

import SortBlock from "./sorting/sort-block";
import FassetFilters from "./fasset-filters";
import CardProductStrapi from "./card-product-strapi";
import PaginationBlock from "./pagination/pagination-block";
import FiltersSheetWrapper from "./fassets/mobil/filters-sheet-wrapper";

import { useMediaQuery } from "@/hooks/use-media-query";
import { FilterResponse } from "@/strapi-api/api/data/types";
import { getFiltersFromQueryString } from "@/utils/filters/filters";
import { useFetchAllProducts } from "@/strapi-api/queries/strapi-queries/product-queries";
import { Skeleton } from "@/components/ui/skeleton";
import AllFiltersSceletone from "../all-filters-sceletone";

interface ProductsBodyProps {
  search_params?: string;
  filtersData?: FilterResponse;
}

const ProductsBody: React.FC<ProductsBodyProps> = ({
  search_params,
  filtersData,
}) => {
  const searchParams = useSearchParams();
  const isDesctop = useMediaQuery("(min-width: 1024px)");

  // Создание строки URL для API
  const queryStringParams = getFiltersFromQueryString(searchParams.toString());
  const queryParts = [queryStringParams, search_params]
    .filter((part) => part && part.trim()) // убираем пустые строки и undefined
    .join("&");

  const { data: products, isLoading } = useFetchAllProducts(`${queryParts}`);

  const productsList = products?.data || [];
  const metadats = products?.meta || undefined;

  return (
    <>
      <div className="py-4">
        <div className="pt-0 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <div className=""></div>
          <div className="text-sm pb-4 lg:pb-0">
            Нашлось:{" "}
            <span className="font-bold">{metadats?.pagination.total}</span>
          </div>
          <SortBlock />
        </div>
      </div>
      <div className="pt-0 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        {isDesctop ? (
          <FassetFilters filtersData={filtersData} />
        ) : (
          <AllFiltersSceletone />
        )}
        <section className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {isLoading
              ? new Array(9).fill("").map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-lg ">
                    <Skeleton className="flex h-[382px]" />
                  </div>
                ))
              : productsList.map((product) => {
                  // console.log(product);
                  return (
                    <CardProductStrapi
                      key={product.slug}
                      productId={product.slug}
                      title={product.brand?.name + " " + product.name}
                      price={product.price || 0}
                      area_of_room={product.area_of_room}
                      series={product.series}
                      sale={product.sale}
                      images={product.images}
                      btu={product.cooling_capacity}
                    />
                  );
                })}
          </div>
        </section>
      </div>
      <PaginationBlock pagination={metadats?.pagination} />
      {!isDesctop && (
        <FiltersSheetWrapper>
          <div className="max-w-sm mx-auto">
            <FassetFilters filtersData={filtersData} />
          </div>
        </FiltersSheetWrapper>
      )}
    </>
  );
};

export default ProductsBody;
