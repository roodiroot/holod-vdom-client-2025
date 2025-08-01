import { sertifcates } from "@/utils/constance";

import GridList from "@/components/pages/hero/grid-section/grid-list";
// import HeroBlock from "@/components/pages/hero/main-block/hero-block";
import PromoSection from "@/components/pages/hero/promo-section/promo-section";
// import SaleSection from '@/components/pages/hero/sale-section/sale-section';
import TableSection from "@/components/pages/hero/table-section/table-section";
import TestimonialsSection from "@/components/pages/hero/testimonials-section/testimonials-section";
import DescriptionLinkSection from "@/components/pages/hero/description-link-section/description-link-section";

// import listWorks from "@/utils/price.json";
// import listAddWorks from "@/utils/additionalWorks.json";
import ProductsSection from "@/components/pages/hero/description-link-section/products-section";
import { getAllProductsApi } from "@/strapi-api/api/data/products-api";
import {
  getAdditionalServicesApi,
  getServicesApi,
} from "@/strapi-api/api/data/cost-services-api";
import HeroBlock from "@/components/pages/penza/main-block/hero-block";

const title = (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Кондиционер <span className="text-accent">+ бесплатная установка</span> до
    15.08.2025 <span className="text-accent">*</span>
  </h1>
);

const Home = async () => {
  // Fetch data from Strapi API
  const paramsHit = new URLSearchParams({
    "filters[hit][$eq]": "true",
    "filters[available][$eq]": "true",
    "fields[0]": "sale",
    "fields[1]": "name",
    "fields[2]": "price",
    "fields[3]": "slug",
    "fields[4]": "area_of_room",
    "fields[5]": "series",
    "populate[0]": "images",
    "populate[1]": "brand",
  });
  const paramsSale = new URLSearchParams({
    "filters[sale][$gt]": "0",
    "filters[available][$eq]": "true",
    "fields[0]": "sale",
    "fields[1]": "name",
    "fields[2]": "price",
    "fields[3]": "slug",
    "fields[4]": "area_of_room",
    "fields[5]": "series",
    "populate[0]": "images",
    "populate[1]": "brand",
  });

  const productsHit = await getAllProductsApi(paramsHit.toString());
  const productsSale = await getAllProductsApi(paramsSale.toString());
  const services = await getServicesApi();
  const additionalService = await getAdditionalServicesApi();

  // console.log(additionalService.data);

  return (
    <main>
      {/* <HeroBlock /> */}
      <HeroBlock h1={title} />
      <ProductsSection products={[productsHit.data, productsSale.data]} />
      <TableSection
        listAddWorks={additionalService.data}
        listWorks={services.data}
      />
      <PromoSection />
      <DescriptionLinkSection />
      <TestimonialsSection />
      <GridList list={sertifcates} />
      {/* <SaleSection /> */}
    </main>
  );
};
export default Home;
