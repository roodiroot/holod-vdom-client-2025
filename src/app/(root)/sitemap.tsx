import { getAllProductsApi } from "@/strapi-api/api/data/products-api";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  let dinamicPages: MetadataRoute.Sitemap = [];
  let staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://holod-vdom.ru",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://holod-vdom.ru/penza",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://holod-vdom.ru/mordovia",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://holod-vdom.ru/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://holod-vdom.ru/products",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://holod-vdom.ru/contacts",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://holod-vdom.ru/policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://holod-vdom.ru/price",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://holod-vdom.ru/delivery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://holod-vdom.ru/sales",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://holod-vdom.ru/basket",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
  await getAllProductsApi().then((data) =>
    data.data.map((i) => {
      dinamicPages.push({
        url: `https://holod-vdom.ru/catalog/product/${i.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    })
  );

  return [...staticPages, ...dinamicPages];
};

export default sitemap;
