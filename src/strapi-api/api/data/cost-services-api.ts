import {
  Category,
  CostAdditionalServicesResponse,
  CostServicesResponse,
} from "./types";

export const getServicesApi = async (): Promise<CostServicesResponse> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/cost-of-services`;

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
    console.error("Ошибка при получении услуг", error);
    throw error;
  }
};
export const getAdditionalServicesApi =
  async (): Promise<CostAdditionalServicesResponse> => {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/cost-of-additional-services`;

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
      console.error("Ошибка при получении доп услуг", error);
      throw error;
    }
  };
