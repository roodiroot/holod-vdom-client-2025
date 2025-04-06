import Image from "next/image";

import HeroAction from "@/components/pages/hero/main-block/hero-action";

const HeroBlock = ({ h1 }: { h1: React.ReactNode }) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="py-5  lg:py-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between flex-col gap-6 md:gap-8 md:flex-row">
            <div className="flex-1 min-h-full flex flex-col justify-center">
              <div className="sm:max-w-lg">
                {h1}
                <p className="mt-6 md:mt-8 text-xl ">
                  Идеальный климат в&nbsp;вашем доме: лучшие модели
                  кондиционеров, качественный авторизованный сервис
                  и&nbsp;3&nbsp;года гарантии.
                </p>
                <HeroAction className="mt-6 md:mt-8 lg:mt-16" />
              </div>
            </div>
            <div className="bg-gray-200 aspect-[1.27/1] rounded-lg w-full max-w-[669px] overflow-hidden">
              <Image
                width={669}
                height={527}
                src="/image/penza-hero.jpg"
                alt="penza"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
