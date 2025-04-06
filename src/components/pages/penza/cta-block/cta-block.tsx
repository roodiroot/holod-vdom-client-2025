import Image from "next/image";

interface CTABlockProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const CTABlock: React.FC<CTABlockProps> = ({ ...props }) => {
  return (
    <div {...props} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl mx-auto max-w-xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
        Положитесь на наш многолетний <span className="text-accent">опыт</span>
      </h2>
      <div className="mt-6 sm:mt-8 bg-gray-200 rounded-lg overflow-hidden aspect-[5/4] md:aspect-[5/2]">
        <Image
          width={1226}
          height={527}
          src="/image/penza-cta.jpg"
          alt="penza-cta"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default CTABlock;
