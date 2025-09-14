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
import { getAllBlogApi } from "@/strapi-api/api/data/blog-api";
import BlogSection from "@/components/pages/hero/blog-section/blog-section";

export const metadata: Metadata = {
  title: "Кондиционеры в Мордовии — «Холод в дом»",
  description:
    "Установка кондиционеров в Мордовии с гарантией 12 месяцев. Профессиональный монтаж и обслуживание от компании с 7-летним опытом.",
};

const title = (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Установка кондиционера в <span className="text-accent">подарок</span>
  </h1>
);

const MordoviaPage = async () => {
  const paramsSert = new URLSearchParams({
    "populate[0]": "img",
  });
  const paramsBlog = new URLSearchParams({
    sort: "publishedAt:desc",
    "populate[0]": "tags",
    "pagination[limit]": "3",
  });

  const services = await getServicesApi();
  const additionalService = await getAdditionalServicesApi();
  const sertifcates = await getAllSertificatApi(paramsSert.toString());
  const blogs = await getAllBlogApi(paramsBlog.toString());
  return (
    <main>
      <HeroBlock h1={title} />
      <DescriptionLinkSection />
      <PromoSection />
      <TableSection
        listAddWorks={additionalService.data}
        listWorks={services.data}
      />
      <BlogSection articles={blogs.data} />
      <TestimonialsSection />
      <GridList list={sertifcates.data} />
      {/* <SaleSection /> */}
    </main>
  );
};
export default MordoviaPage;
