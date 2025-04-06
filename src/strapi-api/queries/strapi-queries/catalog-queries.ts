import { getAllCatalogApi } from "@/strapi-api/api/data/catalog-api";
import { useQuery } from "@tanstack/react-query";

export const useFetchProductsCatalog = (params?: string) => {
  // console.log(string_params);
  return useQuery({
    queryKey: ["products-catalog", params],
    queryFn: () => getAllCatalogApi(params),
  });
};
