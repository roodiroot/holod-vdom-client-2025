"use client";

import { memo, useCallback, useEffect, useState } from "react";

import { type CarouselApi } from "@/components/ui/carousel";
import SliderElementThumb from "./slider-element-thumb";
import SliderElementMainImg from "./slider-element-main-img";

interface SliderElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  images: { src: string; alt: string }[];
}

const SliderElement: React.FC<SliderElementProps> = memo(({ images }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scroll = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <SliderElementThumb list={images} scroll={scroll} current={current} />
      </div>
      <SliderElementMainImg list={images} setApi={setApi} />
    </div>
  );
});

SliderElement.displayName = "SliderElement";

export default SliderElement;
