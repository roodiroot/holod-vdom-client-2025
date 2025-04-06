import TestimonialItem from "./testimonial-item";

interface TestimonialsSectionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  reviewsList: { text?: string; author?: string; city?: string }[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  reviewsList,
}) => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Что о нас пишут?
        </h2>
        <div className="mt-8 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
          {reviewsList.map((i) => (
            <TestimonialItem
              key={i.author}
              text={i.text}
              city={i.city}
              author={i.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
