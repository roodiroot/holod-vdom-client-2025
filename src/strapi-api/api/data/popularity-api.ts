export const updatePopularityApi = async (
  slug: string,
  action: "views" | "favorites" | "cart_adds"
): Promise<string> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/products/increment-popularity`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        slug,
        action,
      }),
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return "OK";
  } catch (error) {
    console.error("Ошибка", error);
    throw error;
  }
};
