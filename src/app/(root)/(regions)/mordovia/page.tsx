import { Metadata } from "next";

import { sertifcates } from "@/utils/constance";

import GridList from "@/components/pages/hero/grid-section/grid-list";
import PromoSection from "@/components/pages/hero/promo-section/promo-section";
// import SaleSection from '@/components/pages/hero/sale-section/sale-section';
import TableSection from "@/components/pages/hero/table-section/table-section";
import TestimonialsSection from "@/components/pages/hero/testimonials-section/testimonials-section";
import DescriptionLinkSection from "@/components/pages/hero/description-link-section/description-link-section";

import listWorks from "@/utils/price.json";
import listAddWorks from "@/utils/additionalWorks.json";
import HeroBlock from "@/components/pages/penza/main-block/hero-block";
import {
  getAdditionalServicesApi,
  getServicesApi,
} from "@/strapi-api/api/data/cost-services-api";

export const metadata: Metadata = {
  title: "Кондиционеры в Мордовии — «Холод в дом»",
  description:
    "Установка кондиционеров в Мордовии с гарантией 12 месяцев. Профессиональный монтаж и обслуживание от компании с 7-летним опытом.",
};

const title = (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Устанавливаем и <span className="text-accent">продаем кондиционеры</span> в
    Мордовии
  </h1>
);

const MordoviaPage = async () => {
  const services = await getServicesApi();
  const additionalService = await getAdditionalServicesApi();
  return (
    <main>
      <HeroBlock h1={title} />
      <DescriptionLinkSection />
      <PromoSection />
      <TableSection
        listAddWorks={additionalService.data}
        listWorks={services.data}
      />
      <TestimonialsSection />
      <GridList list={sertifcates} />
      {/* <SaleSection /> */}
    </main>
  );
};
export default MordoviaPage;
