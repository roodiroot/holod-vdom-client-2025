export const getPolicyPageApi = async (): Promise<string> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/policy-page`;

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
    return data.data.content;
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    throw error;
  }
};
export const getTermsPageApi = async (): Promise<string> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/terms-page
`;

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
    return data.data.content;
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    throw error;
  }
};
