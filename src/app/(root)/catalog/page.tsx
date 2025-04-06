import { beautifulFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { getAllCatalogApi } from "@/strapi-api/api/data/catalog-api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Каталог товаров с установкой",
  description:
    "Широкий выбор товаров. Подберите идеальный вариант для комфортного климата! ❄️🚀",
};

export default async function CatalogPage() {
  const catalog = await getAllCatalogApi();
  return (
    <div className="bg-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1
              className={cn(
                beautifulFont.className,
                "text-4xl font-bold tracking-tight text-gray-900"
              )}
            >
              Каталог
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl leading-7 lg:mx-0 lg:max-w-none ">
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {catalog.data.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <Link
                    href={`/catalog/${item.slug}`}
                    className="font-bold text-2xl"
                  >
                    {item.name}
                  </Link>
                  <ul className="mt-5 space-y-4">
                    {item.categories.map((category) => (
                      <li key={category.documentId} className="text-lg">
                        <Link href={`/catalog/${item.slug}/${category.slug}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
