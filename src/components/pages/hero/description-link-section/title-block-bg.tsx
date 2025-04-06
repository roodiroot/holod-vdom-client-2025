import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface TitleBlockBgProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  link: { name: string; to: string };
  img: string;
  linear?: boolean;
}
const TitleBlockBg: React.FC<TitleBlockBgProps> = ({
  title,
  link,
  className,
  linear,
  img,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-white pb-0",
        className
      )}
    >
      <Image
        width={600}
        height={600}
        src={img}
        alt={title + "_screen"}
        className="absolute w-full h-full object-cover object-center"
      />
      {linear && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
      )}
      <div className="absolute inset-0 p-6 flex items-end">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <Link href={link?.to} className="mt-1 text-sm text-white">
            <span className="absolute inset-0"></span>
            <span className="flex gap-2 items-center">
              {link?.name}
              <Icons.link />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TitleBlockBg;
