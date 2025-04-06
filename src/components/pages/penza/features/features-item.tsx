import { Icons } from "@/components/ui/icons";

interface FeaturesItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  description: string;
}

const FeaturesItem: React.FC<FeaturesItemProps> = ({
  children,
  description,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div {...props} className="flex flex-row gap-4 items-center">
        <div className="w-20 h-20 rounded-md bg-gray-100 relative">
          <Icons.snow className="w-10 fill-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="font-bold text-[22px] leading-6 tracking-tight text-gray-900">
          {children}
        </div>
      </div>
      {description}
    </div>
  );
};

export default FeaturesItem;
