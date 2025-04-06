import { cn } from "@/lib/utils";
import Icon from "./icon";

interface ContainerWidgetProps extends React.HtmlHTMLAttributes<HTMLElement> {
  open?: boolean;
}
const ContainerWidger: React.FC<ContainerWidgetProps> = ({
  open,
  ...props
}) => {
  return (
    <div
      {...props}
      className=" w-[75px] h-[75px] relative flex cursor-pointer rounded-full shadow-xl"
    >
      <span
        className={cn(
          "absolute inline-flex h-full w-full rounded-full bg-accent-600 opacity-75",
          !open && "animate-ping"
        )}
      ></span>
      <span className="relative inline-flex rounded-full w-[75px] h-[75px] bg-accent-600">
        <Icon
          variant="chat"
          className="absolute rotate-[12deg] fill-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10"
        />
      </span>
    </div>
  );
};

export default ContainerWidger;
