import { Metadata } from "next";

// import { fetchAllProducts, fetchProductById } from "@/api";
import SliderElement from "@/components/pages/products/product-page/slider-element";
import SliderPageSkeleton from "@/components/pages/products/slider-page-skeleton";
// import CharacteristicsBlockClient from "@/components/pages/products/product-page/characteristics-block-client";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { cn } from "@/lib/utils";
import { beautifulFont } from "@/app/fonts";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  // const product = await fetchProductById(id);

  return {
    title: id,
    description: `Кондиционер ${id} купить с доставкой и установкой в магазине "Холод в дом".`,
  };
}

const Page: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;
  // const product = await fetchProductById(id);

  return (
    <>
      {/* <Breadcrumbs productName={id} /> */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          {product?.logo && product.img ? (
            <SliderElement images={[product?.logo, ...product?.img]} />
          ) : (
            <SliderPageSkeleton />
          )}
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1
              className={cn(
                beautifulFont.className,
                "text-4xl font-bold tracking-tight text-gray-900"
              )}
            >
              {product?.name}
            </h1>
            <CharacteristicsBlockClient productId={id} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Page;

// export async function generateStaticParams() {
//   const product = await fetchAllProducts({});
//   return product.data.data.map((p: any) => ({
//     id: p.id,
//   }));
// }
