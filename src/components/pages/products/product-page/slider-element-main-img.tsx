"use client";

import Image from "next/image";
import { EmblaCarouselType } from "embla-carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SliderElementMainImgProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  setApi: (api: EmblaCarouselType | undefined) => void;
  list: { src: string; alt: string }[];
}

const SliderElementMainImg: React.FC<SliderElementMainImgProps> = ({
  setApi,
  list,
}) => {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent>
          {list.map(({ src, alt }, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square rounded-md overflow-hidden">
                <div className="absolute p-[10%] w-full h-full inset-0 rounded-md overflow-hidden">
                  <Image
                    src={src}
                    alt={alt + "_mini"}
                    className="h-full w-full object-contain object-center"
                    width={600}
                    height={600}
                  />
                  <span className="absolute inset-0 bg-gray-200/30"></span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-accent hover:text-accent bg-inherit hover:bg-inherit border-0 left-0 sm:hidden " />
        <CarouselNext className="text-accent hover:text-accent bg-inherit hover:bg-inherit border-0 right-0 sm:hidden" />
      </Carousel>
    </div>
  );
};

export default SliderElementMainImg;
