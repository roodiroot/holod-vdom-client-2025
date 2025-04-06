import { Icons } from "@/components/ui/icons";

interface BenefitsItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title2: React.ReactNode;
  description: string;
}

const BenifitsItem: React.FC<BenefitsItemProps> = ({ title2, description }) => {
  return (
    <div className="relative  overflow-hidden rounded-lg bg-gray-100 min-h-[382px]">
      <div className="absolute inset-0 flex flex-col p-8">
        <Icons.snow className="w-16 fill-accent/50" />
        <div className="mt-auto">
          <div className="font-bold text-[22px] leading-6 tracking-tight text-gray-900">
            {title2}
          </div>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenifitsItem;
