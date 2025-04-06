import { Brand, BrandData, ProductCatalogData } from "./types";

export const getAllBrandsApi = async (params?: string): Promise<BrandData> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/brands`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении брендов", error);
    throw error;
  }
};
export const getBrandBySlugApi = async (slug?: string): Promise<Brand> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/brands?[filters][slug]=${slug}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data?.data[0];
  } catch (error) {
    console.error("Ошибка при получении бренда", error);
    throw error;
  }
};
