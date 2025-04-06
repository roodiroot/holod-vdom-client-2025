"use client";

import Image from "next/image";
import { X } from "lucide-react";

import useShowImage from "@/hooks/use-show-image";

const ImageShow = () => {
  const { src, onClose, isOpen } = useShowImage();
  if (!isOpen) {
    return null;
  }
  const myLoader = () => {
    return src;
  };

  return (
    <div
      onClick={onClose}
      className="fixed z-[52] inset-0 bg-black/90 flex justify-center items-center"
    >
      <div className="relative w-auto h-auto">
        <Image
          loader={myLoader}
          src={src}
          width={600}
          height={600}
          alt="photo"
        />
        <X
          size={30}
          className=" absolute cursor-pointer top-2 left-2 text-white hover:text-white/60 transition"
        />
      </div>
    </div>
  );
};

export default ImageShow;
