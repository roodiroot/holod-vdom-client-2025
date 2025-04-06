import { getAllBrandsApi } from "@/strapi-api/api/data/brands-api";
import { useQuery } from "@tanstack/react-query";

export const useFetchBrands = (params?: string) => {
  // console.log(string_params);
  return useQuery({
    queryKey: ["brands", params],
    queryFn: () => getAllBrandsApi(params),
  });
};
