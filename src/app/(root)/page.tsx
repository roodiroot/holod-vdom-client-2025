import GridList from "@/components/pages/hero/grid-section/grid-list";
// import HeroBlock from "@/components/pages/hero/main-block/hero-block";
import PromoSection from "@/components/pages/hero/promo-section/promo-section";
// import SaleSection from '@/components/pages/hero/sale-section/sale-section';
import TableSection from "@/components/pages/hero/table-section/table-section";
import TestimonialsSection from "@/components/pages/hero/testimonials-section/testimonials-section";
import DescriptionLinkSection from "@/components/pages/hero/description-link-section/description-link-section";
import ProductsSection from "@/components/pages/hero/description-link-section/products-section";
import { getAllProductsApi } from "@/strapi-api/api/data/products-api";
import {
  getAdditionalServicesApi,
  getServicesApi,
} from "@/strapi-api/api/data/cost-services-api";
import HeroBlock from "@/components/pages/penza/main-block/hero-block";
import { getAllSertificatApi } from "@/strapi-api/api/data/sertificat-api";
import { getAllBlogApi } from "@/strapi-api/api/data/blog-api";
import BlogSection from "@/components/pages/hero/blog-section/blog-section";

const title = (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Установка кондиционера в <span className="text-accent">подарок</span>
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

  // console.log(blogs);

  return (
    <main>
      {/* <HeroBlock /> */}
      <HeroBlock h1={title} />
      <ProductsSection products={[productsHit.data, productsSale.data]} />
      <TableSection
        listAddWorks={additionalService.data}
        listWorks={services.data}
      />
      <BlogSection articles={blogs.data} />
      <PromoSection />
      <DescriptionLinkSection />
      <TestimonialsSection />
      <GridList list={sertifcates.data} />
      {/* <SaleSection /> */}
    </main>
  );
};
export default Home;
