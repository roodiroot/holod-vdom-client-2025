import BenifitsItem from "./benifits-item";

interface BenefitsBlockProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const benefitsList = [
  {
    title: (
      <h2>
        <span className="text-accent">5+</span> лет устанавливаем{" "}
        <span className="text-accent">для Вас</span> климатическое оборудование
      </h2>
    ),
    description:
      "Мы более 5 лет создаём идеальный климат в домах и офисах, подбирая и устанавливая оборудование, которое обеспечивает комфорт круглый год.",
  },
  {
    title: (
      <h2>
        <span className="text-accent">12 месяцев</span> гарантия на установку
      </h2>
    ),
    description:
      "Мы уверены в качестве нашей работы, поэтому предоставляем гарантию 12 месяцев на установку, чтобы вы могли наслаждаться комфортом без лишних забот.",
  },
  {
    title: (
      <h2>
        <span className="text-accent">Более 400 </span>положительных отзывов на
        площадках
      </h2>
    ),
    description:
      "Нас рекомендуют! Более 400 отзывов от довольных клиентов подтверждают нашу надёжность и высокое качество работы.",
  },
];

const BenefitsBlock: React.FC<BenefitsBlockProps> = ({ ...props }) => {
  return (
    <div {...props} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6  lg:gap-8 xl:grid-cols-3">
        {benefitsList.map((i, index) => (
          <BenifitsItem
            key={index}
            title2={i.title}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsBlock;
