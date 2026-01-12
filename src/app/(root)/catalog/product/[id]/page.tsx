import { Metadata } from "next";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  getAllProductsApi,
  getProductBySlugApi,
} from "@/strapi-api/api/data/products-api";
import SliderElement from "@/components/pages/products/product-page/slider-element";
import SliderPageSkeleton from "@/components/pages/products/slider-page-skeleton";
import CharacteristicsBlockClient from "@/components/pages/products/product-page/characteristics-block-client";
import { cn } from "@/lib/utils";
import { beautifulFont } from "@/app/fonts";
import { useFetchAllProducts } from "@/strapi-api/queries/strapi-queries/product-queries";
import { Product } from "@/strapi-api/api/data/types";
import { updatePopularityApi } from "@/strapi-api/api/data/popularity-api";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const product = await getProductBySlugApi(id);

  if (!product?.available) {
    return redirect("/not-found");
  }

  return {
    title: product.brand?.name + " " + product?.name,
    description: `Кондиционер ${product.brand?.name} ${product?.name} купить с доставкой и установкой в магазине "Холод в дом".`,
    openGraph: {
      title: `${product.brand?.name} ${product?.name}`,
      description: `Кондиционер ${product.brand?.name} ${product?.name} купить с доставкой и установкой в магазине "Холод в дом".`,
      url: `https://holod-vdom.ru/catalog/product/${id}`,
      images: [
        {
          url: product.images
            ? process.env.NEXT_PUBLIC_URL + product.images[0].url
            : "/image/kond.jpg", // Ставь дефолтную картинку, если у товара нет изображения
          width: 1200,
          height: 630,
          alt: `${product.brand?.name} ${product?.name}`,
        },
      ],
    },
  };
}

const Page: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const id = (await params).id;
  const product = await getProductBySlugApi(id);
  await updatePopularityApi(id, "views");

  const productImages =
    product.images?.map((image) => ({
      src: process.env.NEXT_PUBLIC_URL + image.url,
      alt: image.name,
    })) || [];

  return (
    <>
      <Breadcrumbs
        catalogName={product.brand?.slug}
        productName={product.brand?.name + " " + product?.name}
      />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {productImages ? (
            <SliderElement images={productImages} />
          ) : (
            <SliderPageSkeleton />
          )}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1
              className={cn(
                beautifulFont.className,
                "text-4xl font-bold tracking-tight text-gray-900"
              )}
            >
              {product.brand?.name + " " + product.name}{" "}
              {product.sale && (
                <span className="text-white px-3 py-1 bg-rose-500 inline-block rounded-md text-base font-medium">
                  sale - {product.sale} %
                </span>
              )}
            </h1>
            <CharacteristicsBlockClient
              slug={product.slug}
              name={product.brand?.name + product.name}
              brand={product.brand?.name}
              category={product.category?.name}
              description={product.description || ""}
              title={product.brand?.name + " " + product.name}
              price={product.price || 0}
              area_of_room={product.area_of_room}
              cooling_capacity={product.cooling_capacity}
              wifi_availability={product.wifi_availability}
              series={product.series}
              sale={product.sale}
              refrigerant={product.refrigerant}
              noise_level={product.noise_level}
              max_pipe_length={product.max_pipe_length}
              compressor_type={product.compressor_type}
              color={product.color}
              energy_efficiency_class={product.energy_efficiency_class}
              compressor_brand={product.compressor_brand}
              country_of_manufacturer={product.country_of_manufacturer}
              warranty_period={product.warranty_period}
              heating_power={product.heating_power}
              cooling_power={product.cooling_power}
              old_price={product.old_price}
              charsetistics={product.char}
            />
            {product.file && (
              <div className="mt-6">
                <a
                  target="_blank"
                  className="text-sm font-medium text-accent hover:text-blue-500"
                  href={`${process.env.NEXT_PUBLIC_URL}${product.file?.url}`}
                >
                  Посмотреть файл с описанием
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

// export async function generateStaticParams() {
//   const product = await getAllProductsApi();
//   return product.data.map((product: Product) => ({
//     id: product.slug,
//   }));
// }
