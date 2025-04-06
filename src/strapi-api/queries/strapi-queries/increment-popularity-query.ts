import { updatePopularityApi } from "@/strapi-api/api/data/popularity-api";
import { useMutation } from "@tanstack/react-query";

export const useIncrementPopularity = () => {
  return useMutation({
    mutationFn: async ({
      slug,
      action,
    }: {
      slug: string;
      action: "views" | "favorites" | "cart_adds";
    }) => await updatePopularityApi(slug, action),
  });
};
