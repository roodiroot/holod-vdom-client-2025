import TestimonialItem from "./testimonial-item";
import reviews from "@/utils/rewiews.json";

const TestimonialsSection = () => {
  return (
    <section className='relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32'>
      <div className='mx-auto max-w-2xl lg:max-w-none'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Что о нас пишут?
        </h2>
        <div className='mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 '>
          {reviews.map((i) => (
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
