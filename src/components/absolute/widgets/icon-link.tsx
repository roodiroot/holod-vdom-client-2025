"use client";

import { motion } from "framer-motion";
import Icon from "./icon";
import { SOCIALType } from "./constanse";

const IconLink: React.FC<{ index: number; link: SOCIALType }> = ({
  index,
  link,
}) => {
  const translate = "-" + (index + 1) * 90 + "%";

  return (
    <motion.a
      href={link.link}
      style={{ background: link.bg, top: translate }}
      initial={{
        opacity: 0,
        translateY: `${(index + 1) * 100}%`,
        translateX: "-50%",
      }}
      animate={{
        opacity: 1,
        zIndex: 20,
        translateY: "0%",
        translateX: "-50%",
      }}
      exit={{
        opacity: 0,
        zIndex: 0,
        translateY: `${(index + 1) * 100}%`,
        translateX: "-50%",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 14,
      }}
      className="absolute shadow-xl z-10 left-1/2 inline-flex rounded-full w-10 h-10 cursor-pointer"
    >
      <Icon
        variant={link.icon}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5"
      />
    </motion.a>
  );
};

export default IconLink;
