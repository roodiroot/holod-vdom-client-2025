import type { Metadata } from "next";

import MainBasketKomponent from "@/components/pages/basket/strapi-component/basket";

export const metadata: Metadata = {
  title: "Корзина",
  description:
    'Интернет–магазин климатической техники: кондиционеров, сплит систем "Холод в дом" 8 (905) 009 68 88. Гарантия на все климатическое оборудование.',
};

const Basket = () => <MainBasketKomponent />;

export default Basket;
