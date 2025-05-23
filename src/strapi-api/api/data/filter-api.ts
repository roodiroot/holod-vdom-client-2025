import { FilterResponse } from "./types";

export const getAllFilterApi = async (
  params?: string
): Promise<FilterResponse> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/products/filter?${params}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      next: { revalidate: 3600 },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении фильтров:", error);
    throw error;
  }
};
