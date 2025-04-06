import { Metadata, ResolvingMetadata } from "next";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import TitleBlock from "@/components/pages/products/title-block";
import { getAllFilterApi } from "@/strapi-api/api/data/filter-api";
import ProductsBody from "@/components/pages/products/strapi/products-body";
import { getCategoryBySlugApi } from "@/strapi-api/api/data/category-api";

type Props = {
  params: Promise<{ categoryslug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).categoryslug;
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

const CatalogCategoryPage = async ({ params }: Props) => {
  const slug = (await params).categoryslug;

  const CATEGORY_PARAMS = new URLSearchParams({
    "[filters][category][slug]": slug,
    "[filters][available][$eq]": "true",
  });

  const filtersData = await getAllFilterApi(CATEGORY_PARAMS.toString());
  const category = await getCategoryBySlugApi(slug);

  return (
    <>
      <Breadcrumbs />
      <main className="mx-auto max-w-2xl px-4 pb-24 lg:max-w-7xl lg:px-8">
        <TitleBlock title={category.name} description={category.description} />
        <ProductsBody
          search_params={CATEGORY_PARAMS.toString()}
          filtersData={filtersData}
        />
      </main>
    </>
  );
};

export default CatalogCategoryPage;
