"use client";

import useShowImage from "@/hooks/use-show-image";
import Image from "next/image";
import { useCallback } from "react";

interface GridListProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: { img: string; brand: string; data: string }[];
}

const GridList: React.FC<GridListProps> = ({ list, ...props }) => {
  const showImage = useShowImage();

  const getImage = useCallback((src: string) => {
    showImage.onOpen(src);
  }, []);
  return (
    <div {...props} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {list &&
          list.map((i) => (
            <li key={i.brand} className="relative overflow-hidden">
              <div className="block pb-[130%]  relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-200">
                <Image
                  src={i.img}
                  width={300}
                  height={500}
                  className="absolute w-full h-full pointer-events-none object-cover"
                  alt="sert"
                />
                <button
                  onClick={() => getImage(i.img)}
                  className="absolute inset-0"
                />
              </div>
              <p className="pointer-events-none mt-2 block text-sm font-medium uppercase line-clamp-1 text-gray-900">
                {i.brand}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500 line-clamp-1">
                {i.data}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GridList;
