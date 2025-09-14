import { Blog, BlogData, Brand, BrandData, ProductCatalogData } from "./types";

export const getAllBlogApi = async (params?: string): Promise<BlogData> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/blogs?${params}`;

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
    console.error("Ошибка при получении блога", error);
    throw error;
  }
};
export const getArticleByDocumentIdApi = async (
  slug?: string
): Promise<Blog> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/blogs?[filters][slug]=${slug}`;

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
    console.error("Ошибка при получении статьи", error);
    throw error;
  }
};
