"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SliderCardThumb from "./slider-card-thumb";
import { type CarouselApi } from "@/components/ui/carousel";

interface SliderCardProductProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: string[];
}

const SliderCardProduct: React.FC<SliderCardProductProps> = ({ list }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (api) {
      setCurrent(api.selectedScrollSnap());
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <div className="w-full h-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full cursor-pointer"
      >
        <CarouselContent>
          {list.map((i, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full p-4 aspect-[2/1.7] bg-white  overflow-hidden rounded-b-lg sm:rounded-none">
                <div className="w-full h-full">
                  <span className="absolute inset-0 bg-gray-500/5"></span>
                  <Image
                    src={i}
                    alt={`${i}_logo`}
                    className="w-full h-full object-contain object-center"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <SliderCardThumb
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        list={list}
        current={current}
      />
    </div>
  );
};

export default SliderCardProduct;
