import { beautifulFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Скидки и акции",
  description:
    "Кондиционеры и сплит системы: купить по выгодной цене с доставкой по Саранску, Мордовии и всей России. ✔Широкий ассортимент. ✔ Гарантия от производителя..",
};

const Page = () => {
  return (
    <div className='bg-white'>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h1
              className={cn(
                beautifulFont.className,
                "text-4xl font-bold tracking-tight text-gray-900"
              )}
            >
              Акции
            </h1>
            <p className='mt-6 text-lg leading-8 '>
              Выгодные предложения и акции.
            </p>
          </div>
          <p className='mt-16'>
            С <span className='font-medium'>1.01.2024г.</span> действует
            постояная скидка участникам СВО, а так же пенсинанерам 10% на
            установку и на покупку техники в нашем магазине, при предъявлении
            соответствующего удостоверения.
          </p>
          <p className='mt-16'>
            Мы постоянно работаем над созданием специальных предложений для
            наших клиентов. Мы предлагаем Вам связаться с нами для обсуждения
            ваших потребностей. И всегда готовы предложить для Вас
            индивидуальные условия и выгодные решения, исходя из ваших
            конкретных задач и пожеланий.
          </p>
          <p className='mt-10'>
            Пожалуйста, не стесняйтесь обращаться к нам — каждое ваше обращение
            будет внимательно рассмотрено нашими специалистами, чтобы найти
            наилучший вариант специально для Вас.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
