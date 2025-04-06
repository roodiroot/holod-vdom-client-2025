import {
  getAllProductsApi,
  getProductSearchApi,
} from "@/strapi-api/api/data/products-api";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllProducts = (params?: string) => {
  // console.log(string_params);
  return useQuery({
    queryKey: ["brands", params],
    queryFn: async () => await getAllProductsApi(params),
  });
};

export const useFetchSearchProducts = (search: string) => {
  return useQuery({
    queryKey: ["brands", search],
    queryFn: async () => await getProductSearchApi(search),
  });
};
