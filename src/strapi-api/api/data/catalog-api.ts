import { ProductCatalog, ProductCatalogData } from "./types";

export const getAllCatalogApi = async (
  params?: string
): Promise<ProductCatalogData> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/product-catalogs?populate=*&${
    params ? params : null
  }`;

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
    console.error("Ошибка при получении товарного каталога:", error);
    throw error;
  }
};

export const getCatalogBySlugApi = async (
  slug?: string
): Promise<ProductCatalog> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/product-catalogs?[filters][slug]=${slug}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data?.data[0];
  } catch (error) {
    console.error("Ошибка при получении товарного каталога", error);
    throw error;
  }
};
