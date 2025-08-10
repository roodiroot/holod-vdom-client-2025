import { Metadata } from "next";

import AboutHeader from "@/components/pages/about/about-header";
import AboutScreen from "@/components/pages/about/about-screen";
import AboutStory from "@/components/pages/about/about-story";
import Pattern from "@/components/ui/elements/pattern";
import GridList from "@/components/pages/hero/grid-section/grid-list";
import { getAllSertificatApi } from "@/strapi-api/api/data/sertificat-api";

export const metadata: Metadata = {
  title: "О компании",
  description:
    '"Холод в Дом" - климатическая компания основанная в 2019 году. Основной деятельностью компании является поставка и монтаж климатической оборудования.',
};

const About = async () => {
  const paramsSert = new URLSearchParams({
    "populate[0]": "img",
  });

  const sertifcates = await getAllSertificatApi(paramsSert.toString());
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Pattern className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <AboutHeader />
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <AboutScreen />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <AboutStory />
            </div>
          </div>
        </div>
      </div>
      <GridList list={sertifcates.data} />
    </>
  );
};

export default About;
