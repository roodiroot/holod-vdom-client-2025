import Link from "next/link";

import TitleBlockBg from "@/components/pages/hero/description-link-section/title-block-bg";

const DescriptionLinkSection: React.FC = () => (
  <section className="bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="flex justify-between items-baseline">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Свой склад техники
        </h2>
        <Link
          href="/catalog"
          className="hidden text-sm font-semibold text-accent sm:block"
        >
          Выбрать кондиционер <span aria-hidden="true"> →</span>
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <TitleBlockBg
          linear
          img="/image/ab1.jpg"
          className="aspect-[2/1] sm:aspect-[1/1] sm:row-span-2"
          title="О нас"
          link={{
            name: "Изучите историю нашей компании и убедитесь, что мы — надежный партнер.",
            to: "/about",
          }}
        />
        <TitleBlockBg
          linear
          img="/image/ab.jpeg"
          className="aspect-[2/1] sm:aspect-auto  sm:h-full"
          title="Доставка"
          link={{
            name: "Ознакомьтесь с условиями доставки и установки.",
            to: "/delivery",
          }}
        />
        <TitleBlockBg
          img="/image/promo/avito2.png"
          className="aspect-[2/1] sm:aspect-auto  bg-accent-600 sm:h-full"
          title="Мы на Авито"
          link={{
            name: "Ознакомьтесь с нашим профилем на Avito.",
            to: "https://www.avito.ru/saransk/predlozheniya_uslug/ustanovka_konditsionerov_prodazha_obsluzhivanie_2312600300",
          }}
        />
      </div>
    </div>
  </section>
);

export default DescriptionLinkSection;
