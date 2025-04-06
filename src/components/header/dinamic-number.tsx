"use client";

import { usePathname } from "next/navigation";

interface DinamicNumberProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement> {}

const DinamicNumber: React.FC<DinamicNumberProps> = ({ ...props }) => {
  const pathname = usePathname();
  // console.log(pathname);
  if (pathname === "/penza") {
    return (
      <a {...props} href="tel:+79050095888">
        +7 (905) 009 58 88
      </a>
    );
  }
  return (
    <a {...props} href="tel:+79050096888">
      +7 (905) 009 68 88
    </a>
  );
};

export default DinamicNumber;
