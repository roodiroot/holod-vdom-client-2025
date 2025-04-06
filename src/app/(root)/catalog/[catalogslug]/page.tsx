import ProductsBody from "@/components/pages/products/strapi/products-body";
import TitleBlock from "@/components/pages/products/title-block";
import Breadcrumbs from "@/components/ui/breadcrumbs";

import { getCatalogBySlugApi } from "@/strapi-api/api/data/catalog-api";
import { getAllFilterApi } from "@/strapi-api/api/data/filter-api";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ catalogslug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).catalogslug;
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

const CatalogPage = async ({ params }: Props) => {
  const slug = (await params).catalogslug;

  const CATALOG_PARAMS = new URLSearchParams({
    "[filters][category][product_catalog][slug]": slug,
    "[filters][available][$eq]": "true",
  });

  const filtersData = await getAllFilterApi(CATALOG_PARAMS.toString());
  const catalog = await getCatalogBySlugApi(slug);

  return (
    <>
      <Breadcrumbs />
      <main className="mx-auto max-w-2xl px-4 pb-24 lg:max-w-7xl lg:px-8">
        <TitleBlock
          title={catalog?.name}
          description={catalog?.description || ""}
        />
        <ProductsBody
          search_params={CATALOG_PARAMS.toString()}
          filtersData={filtersData}
        />
      </main>
    </>
  );
};

export default CatalogPage;
