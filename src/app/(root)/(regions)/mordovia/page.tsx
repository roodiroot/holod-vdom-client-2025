import { Metadata } from "next";

import GridList from "@/components/pages/hero/grid-section/grid-list";
import PromoSection from "@/components/pages/hero/promo-section/promo-section";
import TableSection from "@/components/pages/hero/table-section/table-section";
import TestimonialsSection from "@/components/pages/hero/testimonials-section/testimonials-section";
import DescriptionLinkSection from "@/components/pages/hero/description-link-section/description-link-section";

import HeroBlock from "@/components/pages/penza/main-block/hero-block";
import {
  getAdditionalServicesApi,
  getServicesApi,
} from "@/strapi-api/api/data/cost-services-api";
import { getAllSertificatApi } from "@/strapi-api/api/data/sertificat-api";

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
  const paramsSert = new URLSearchParams({
    "populate[0]": "img",
  });

  const services = await getServicesApi();
  const additionalService = await getAdditionalServicesApi();
  const sertifcates = await getAllSertificatApi(paramsSert.toString());
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
      <GridList list={sertifcates.data} />
      {/* <SaleSection /> */}
    </main>
  );
};
export default MordoviaPage;
