import { cn } from "@/lib/utils";

interface SliderCardThumbProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: string[];
  current: number;
}

const SliderCardThumb: React.FC<SliderCardThumbProps> = ({
  list,
  current,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn(" p-2 flex gap-1 ", className)}>
      {list.map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-1 h-1 rounded-full bg-gray-300",
            current === index && "bg-gray-500"
          )}
        ></div>
      ))}
    </div>
  );
};

export default SliderCardThumb;
