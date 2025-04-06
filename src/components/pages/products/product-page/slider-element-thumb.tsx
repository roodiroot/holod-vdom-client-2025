"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface SliderElementThumbProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  list: { src: string; alt: string }[];
  scroll: (index: number) => void;
  current: number;
}
const SliderElementThumb: React.FC<SliderElementThumbProps> = ({
  list,
  scroll,
  current,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("grid grid-cols-4 gap-6", className)}>
      {list.map(({ src, alt }, index) => (
        <button
          key={src}
          onClick={() => scroll(index)}
          className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase"
        >
          <span className="absolute inset-0 overflow-hidden p-[10%] rounded-md">
            <Image
              src={src}
              alt={alt}
              priority
              className="h-full w-full object-contain object-center"
              width={150}
              height={100}
            />
            <span className="absolute inset-0 bg-gray-200/30"></span>
          </span>
          {index === current && (
            <span className="absolute z-10 pointer-events-none inset-0 rounded-md border-2 border-accent-600"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default SliderElementThumb;
