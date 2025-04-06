import { Category } from "./types";

export const getCategoryBySlugApi = async (
  slug?: string
): Promise<Category> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/categories?[filters][slug]=${slug}`;

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
    console.error("Ошибка при получении категории", error);
    throw error;
  }
};
