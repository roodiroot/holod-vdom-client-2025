import { sertifcates } from "@/utils/constance";

import GridList from "@/components/pages/hero/grid-section/grid-list";
import HeroBlock from "@/components/pages/hero/main-block/hero-block";
import PromoSection from "@/components/pages/hero/promo-section/promo-section";
// import SaleSection from '@/components/pages/hero/sale-section/sale-section';
import TableSection from "@/components/pages/hero/table-section/table-section";
import TestimonialsSection from "@/components/pages/hero/testimonials-section/testimonials-section";
import DescriptionLinkSection from "@/components/pages/hero/description-link-section/description-link-section";

import listWorks from "@/utils/price.json";
import listAddWorks from "@/utils/additionalWorks.json";
import ProductsSection from "@/components/pages/hero/description-link-section/products-section";
import { getAllProductsApi } from "@/strapi-api/api/data/products-api";

const Home = async () => {
  // Fetch data from Strapi API
  const params = new URLSearchParams({
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

  const products = await getAllProductsApi(params.toString());

  return (
    <main>
      <HeroBlock />
      <ProductsSection products={products.data} />
      <TableSection listAddWorks={listAddWorks} listWorks={listWorks} />
      <PromoSection />
      <DescriptionLinkSection />
      <TestimonialsSection />
      <GridList list={sertifcates} />
      {/* <SaleSection /> */}
    </main>
  );
};
export default Home;
