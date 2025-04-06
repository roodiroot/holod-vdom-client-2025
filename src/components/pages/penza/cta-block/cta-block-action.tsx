import Image from "next/image";
import HeroAction from "../../hero/main-block/hero-action";
import { Icons } from "@/components/ui/icons";

interface CTABlockActionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const CTABlockAction: React.FC<CTABlockActionProps> = ({ ...props }) => {
  return (
    <div {...props} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row md:justify-between">
        <div className="rounded-lg overflow-hidden flex-1 aspect-square sm:aspect-[2.5/1] lg:aspect-[1.26/1]">
          <Image
            width={1000}
            height={1000}
            src="/image/cta-action.jpg"
            alt="penza-cta-action"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 min-w-0 gap-8 lg:min-w-[669px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Обеспечьте <span className="text-accent">комфорт в</span> своем{" "}
            <span className="text-accent">доме</span> – закажите установку
            климатической техники прямо сейчас.
          </h2>
          <div className="w-full flex justify-between items-end">
            <HeroAction />
            <Icons.halfsnow className="h-20 lg:h-40 fill-accent/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABlockAction;
