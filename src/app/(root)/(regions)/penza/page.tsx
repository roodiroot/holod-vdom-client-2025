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

export const metadata: Metadata = {
  title: "Установка кондиционеров в Пензе — «Холод в дом»",
  description:
    "Профессиональная установка кондиционеров в Пензе. 12 месяцев гарантии, более 5 лет опыта и сотни положительных отзывов.",
};

const title = (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    Продаем <span className="text-accent">и</span> устанавливаем кондиционеры в{" "}
    <span className="text-accent">Пензе</span>
  </h1>
);

const PenzaPage = () => (
  <main>
    <HeroBlock h1={title} />
    <BenefitsBlock />
    <CTABlock />
    <FeaturesBlock />
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:pt-8">
      <h2 className="text-3xl mx-auto max-w-xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
        <span className="text-accent">Установка</span> и дополнительные работы
      </h2>
    </div>
    <TableSection listAddWorks={listAddWorks} listWorks={listWorks} />
    <CTABlockAction />
    <TestimonialsSection reviewsList={reviews} />
    <GridList list={sertifcates} />
  </main>
);
export default PenzaPage;
