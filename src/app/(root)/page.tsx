import { Metadata } from "next";

import CTABlock from "@/components/pages/penza/cta-block/cta-block";
import GridList from "@/components/pages/hero/grid-section/grid-list";
import HeroBlock from "@/components/pages/penza/main-block/hero-block";
import FeaturesBlock from "@/components/pages/penza/features/features-block";
import BenefitsBlock from "@/components/pages/penza/benefits/benefits-block";
import TableSection from "@/components/pages/hero/table-section/table-section";
import CTABlockAction from "@/components/pages/penza/cta-block/cta-block-action";
import TestimonialsSection from "@/components/pages/penza/testimonials-section/testimonials-section";
import reviews from "@/utils/rewiews-penza.json";
import ProductsSection from "@/components/pages/hero/description-link-section/products-section";
import { getAllProductsApi } from "@/strapi-api/api/data/products-api";
import {
  getAdditionalServicesApi,
  getServicesApi,
} from "@/strapi-api/api/data/cost-services-api";
import { getAllSertificatApi } from "@/strapi-api/api/data/sertificat-api";
import { getAllBlogApi } from "@/strapi-api/api/data/blog-api";
import BlogSection from "@/components/pages/hero/blog-section/blog-section";

export const metadata: Metadata = {
  title: "Подбор и установка кондиционеров — «Холод в дом»",
  description:
    "Профессиональный подбор, продажа и установка кондиционеров. От 3 лет гарантии, более 6 лет опыта, честные цены и сотни положительных отзывов.",
  icons: "/favicon.ico",
  openGraph: {
    title: "«Холод в дом» — установка и продажа кондиционеров",
    description:
      "Подбор, продажа и профессиональная установка кондиционеров и сплит-систем. Гарантия от 3 лет, опыт более 6 лет и сотни довольных клиентов.",
    siteName: "Холод в дом",
    type: "website",
    locale: "ru_RU",
    url: "https://holod-vdom.ru",
    images: [
      {
        url: "/image/main_page_logo.jpg",
        width: 669,
        height: 527,
        alt: "«Холод в дом» — установка кондиционеров",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "«Холод в дом» — установка и продажа кондиционеров",
    description:
      "Профессиональный подбор и установка кондиционеров. Гарантия от 3 лет и более 6 лет опыта.",
    images: ["/image/main_page_logo.jpg"],
  },
  alternates: {
    canonical: "https://holod-vdom.ru",
  },
};

const title = (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Подбор и установка <span className="text-accent">кондиционеров</span>
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
  const paramsSert = new URLSearchParams({
    "populate[0]": "img",
  });
  const paramsBlog = new URLSearchParams({
    sort: "publishedAt:desc",
    "populate[0]": "tags",
    "pagination[limit]": "3",
  });

  const productsHit = await getAllProductsApi(paramsHit.toString());
  const productsSale = await getAllProductsApi(paramsSale.toString());
  const services = await getServicesApi();
  const additionalService = await getAdditionalServicesApi();
  const sertifcates = await getAllSertificatApi(paramsSert.toString());
  const blogs = await getAllBlogApi(paramsBlog.toString());

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
      <BlogSection articles={blogs.data} />
      <CTABlockAction />
      <TestimonialsSection reviewsList={reviews} />
      <GridList list={sertifcates.data} />
    </main>
  );
};
export default PenzaPage;
