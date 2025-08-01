import { Metadata } from "next";

import { sertifcates } from "@/utils/constance";

import CTABlock from "@/components/pages/penza/cta-block/cta-block";
import GridList from "@/components/pages/hero/grid-section/grid-list";
import HeroBlock from "@/components/pages/penza/main-block/hero-block";
import FeaturesBlock from "@/components/pages/penza/features/features-block";
import BenefitsBlock from "@/components/pages/penza/benefits/benefits-block";
import TableSection from "@/components/pages/hero/table-section/table-section";
import CTABlockAction from "@/components/pages/penza/cta-block/cta-block-action";
import TestimonialsSection from "@/components/pages/penza/testimonials-section/testimonials-section";

import listWorks from "@/utils/price-penza.json";
import listAddWorks from "@/utils/additionalWorks_penza.json";
import reviews from "@/utils/rewiews-penza.json";
import ProductsSection from "@/components/pages/hero/description-link-section/products-section";
import { getAllProductsApi } from "@/strapi-api/api/data/products-api";
import {
  getAdditionalServicesApi,
  getServicesApi,
} from "@/strapi-api/api/data/cost-services-api";

export const metadata: Metadata = {
  title: "Установка кондиционеров в Пензе — «Холод в дом»",
  description:
    "Профессиональная установка кондиционеров в Пензе. 12 месяцев гарантии, более 5 лет опыта и сотни положительных отзывов.",
};

// const title = (
//   <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//     Продаем <span className="text-accent">и</span> устанавливаем кондиционеры в{" "}
//     <span className="text-accent">Пензе</span>
//   </h1>
// );

const title = (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Кондиционер <span className="text-accent">+ бесплатная установка</span> до
    15.08.2025 <span className="text-accent">*</span>
  </h1>
);

const PenzaPage = async () => {
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

  return (
    <main>
      <HeroBlock h1={title} />
      <BenefitsBlock />
      <ProductsSection products={[productsHit.data, productsSale.data]} />
      <CTABlock />
      <FeaturesBlock />
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:pt-8">
        <h2 className="text-3xl mx-auto max-w-xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
          <span className="text-accent">Установка</span> и дополнительные работы
        </h2>
      </div>
      <TableSection
        listAddWorks={additionalService.data}
        listWorks={services.data}
      />
      <CTABlockAction />
      <TestimonialsSection reviewsList={reviews} />
      <GridList list={sertifcates} />
    </main>
  );
};
export default PenzaPage;
