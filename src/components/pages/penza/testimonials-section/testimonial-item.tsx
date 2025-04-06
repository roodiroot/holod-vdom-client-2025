import Quotes from "@/components/ui/elements/quotes";
import { Skeleton } from "@/components/ui/skeleton";

interface TestimonialItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  text?: string;
  author?: string;
  city?: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  text,
  author,
  city,
}) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <blockquote className="sm:flex lg:block">
        <Quotes className="text-accent shrink-0" />
        <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
          {text ? (
            <p className="text-gray-600">{text}</p>
          ) : (
            <Skeleton className="w-[250px] h-[56px]" />
          )}
          {author && city ? (
            <cite className="mt-4 block font-semibold text-gray-900">
              {author} {city}
            </cite>
          ) : (
            <div className="mt-4">
              <Skeleton className="w-[180px] h-[24px]" />
            </div>
          )}
        </div>
      </blockquote>
    </div>
  );
};

export default TestimonialItem;
