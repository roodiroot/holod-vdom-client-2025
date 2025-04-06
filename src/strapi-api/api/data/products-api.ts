import { Product, ProductsData } from "./types";

export const getAllProductsApi = async (
  params?: string
): Promise<ProductsData> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/products?${params}`;

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
    return data;
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    throw error;
  }
};

export const getProductBySlugApi = async (slug: string): Promise<Product> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/products?[filters][slug]=${slug}&populate=*`;

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

    const { data } = await response.json();
    return data[0];
  } catch (error) {
    console.error("Ошибка при получении товара:", error);
    throw error;
  }
};

export const getProductSearchApi = async (
  search: string
): Promise<ProductsData> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/products?filters[$or][0][name][$containsi]=${search}&filters[$or][1][compressor_type][$containsi]=${search}&populate=*&filters[$or][2][brand][name][$containsi]=${search}&filters[$or][3][category][name][$containsi]=${search}`;

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
    return data;
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    throw error;
  }
};
