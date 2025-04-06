import { CheckCircle2 } from "lucide-react";

const AboutStory: React.FC = () => {
  return (
    <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
      <p>
        Пройдя путь от маленькой мастерской до ведущего установщика
        кондиционеров в Мордовии, мы сохранили свои основные принципы -
        качество, надежность и индивидуальный подход к каждому клиенту.
        Установка кондиционера - это не просто покупка оборудования, это
        инвестиция в комфорт вашего дома или офиса.
      </p>
      <ul role='list' className='mt-8 space-y-8 text-gray-600'>
        <li className='flex gap-x-3'>
          <CheckCircle2
            className='mt-1 h-5 w-5 flex-none text-accent-600'
            aria-hidden='true'
          />
          <span>
            <strong className='font-semibold text-gray-900'>
              Профессиональная установка.
            </strong>{" "}
            Все специалисты - мастера своего дела, обеспечивают быструю и
            аккуратную установку.
          </span>
        </li>
        <li className='flex gap-x-3'>
          <CheckCircle2
            className='mt-1 h-5 w-5 flex-none text-accent-600'
            aria-hidden='true'
          />
          <span>
            <strong className='font-semibold text-gray-900'>
              Индивидуальный подход.
            </strong>{" "}
            Мы всегда подбираем оборудование исходя из ваших нужд и особенностей
            помещения.
          </span>
        </li>
        <li className='flex gap-x-3'>
          <CheckCircle2
            className='mt-1 h-5 w-5 flex-none text-accent-600'
            aria-hidden='true'
          />
          <span>
            <strong className='font-semibold text-gray-900'>
              Качественное обслуживание.
            </strong>{" "}
            Последующее обслуживание и ремонт, гарантия долговечность и
            надежность наших систем.
          </span>
        </li>
      </ul>
      <p className='mt-8'>
        Спасибо за ваш интерес к “Холод в Дом”! Мы ценим ваше время и стремимся
        сделать процесс выбора и установки кондиционера максимально простым и
        приятным. Ваши комфорт и удовлетворенность - наш главный приоритет. И
        уверены что вы по достоинству оцените наш сервис при встрече.
      </p>
      <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
        Почему именно мы?
      </h2>
      <p className='mt-6'>
        Потому что мы не просто устанавливаем оборудование - мы создаем
        идеальный климат для вашей жизни. С нами вы получаете не только
        высококлассное оборудование, но и гарантию долгосрочной и надежной
        работы, профессиональную установку и обслуживание. Мы заботимся о каждом
        клиенте, потому что ваш комфорт - это наша репутация.
      </p>
    </div>
  );
};

export default AboutStory;
