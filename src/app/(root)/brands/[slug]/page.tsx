import { Metadata, ResolvingMetadata } from "next";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import TitleBlock from "@/components/pages/products/title-block";
import ProductsBody from "@/components/pages/products/strapi/products-body";

import { getBrandBySlugApi } from "@/strapi-api/api/data/brands-api";
import { getAllFilterApi } from "@/strapi-api/api/data/filter-api";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  // const brand = await getBrandForSlug(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: slug,
    description: `Устанавливаем климатическую технику ${slug} более 6 лет.`,
    openGraph: {
      images: ["/kondish.svg", ...previousImages],
    },
  };
}

const BrandCatalogPage = async ({ params }: Props) => {
  const slug = (await params).slug;

  const BRAND_PARAMS = new URLSearchParams({
    "filters[available][$eq]": "true",
    "filters[brand][slug][$eq]": slug,
  });

  const brand = await getBrandBySlugApi(slug);
  const filtersData = await getAllFilterApi(BRAND_PARAMS.toString());

  return (
    <>
      <Breadcrumbs />
      <main className="mx-auto max-w-2xl px-4 pb-24 lg:max-w-7xl lg:px-8">
        <TitleBlock title={brand.name} description={brand.description} />
        <ProductsBody
          search_params={BRAND_PARAMS.toString()}
          filtersData={filtersData}
        />
      </main>
    </>
  );
};

export default BrandCatalogPage;
