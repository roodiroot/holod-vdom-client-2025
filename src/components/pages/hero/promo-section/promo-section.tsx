import Action from "@/components/pages/hero/promo-section/action";
import Image from "next/image";

const PromoSection = () => (
  <section className="bg-white py-16 sm:py-24">
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          fill
          alt="bg_cta"
          src="/image/cta-block.jpg"
          className="w-full h-full object-right  sm:object-center object-cover "
        />
      </div>
      {/* <div className='absolute inset-0 bg-gray-900/50'></div> */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Поможем с выбором
        </h2>
        <p className="mt-3 text-xl text-white">
          Наши эксперты помогут подобрать идеальный кондиционер по оптимальной
          цене. Нажмите ниже, чтобы начать, и доверьте выбор профессионалам!
        </p>
        <Action />
      </div>
    </div>
  </section>
);

export default PromoSection;
