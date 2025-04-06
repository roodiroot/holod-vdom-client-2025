import HeroAction from "@/components/pages/hero/main-block/hero-action";
import HeroSlider from "@/components/pages/hero/main-block/hero-slider";
import { cn } from "@/lib/utils";

interface HeroBlockProps {
  h1?: React.ReactNode;
}

const HeroBlock: React.FC<HeroBlockProps> = ({ h1 }) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            {h1 ?? (
              <h1
                className={cn(
                  "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                )}
              >
                Установка и <span className="text-accent">продажа</span>{" "}
                кондиционеров
              </h1>
            )}
            <p className="mt-4 text-xl ">
              Мы&nbsp;делаем климат в&nbsp;Ваших домах идеальным, лучшие модели,
              и&nbsp;качественный, авторизованый сервис.
            </p>
          </div>
          <div className="mt-10">
            <HeroSlider />
            <HeroAction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
