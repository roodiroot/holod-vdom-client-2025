"use client";

import { Button } from "@/components/ui/button";
import useModal from "@/hooks/use-modal";
import { cn } from "@/lib/utils";

interface TableWorksProps extends React.HtmlHTMLAttributes<HTMLElement> {
  description: string;
  title: string;
  info?: string;
}

const TableWorks: React.FC<TableWorksProps> = ({
  description,
  title,
  className,
  info,
  children,
  ...props
}) => {
  const { onOpen } = useModal();
  return (
    <div {...props} className={cn("px-4 sm:px6 lg:px-8", className)}>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="font-semibold text-gray-900 ">{title}</h2>
          <p className="mt-2 text-sm text-balance">{description}</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button onClick={() => onOpen()}>Заказать установку</Button>
        </div>
      </div>
      {children}
      {info && <p className="mt-6 text-sm text-balance">{info}</p>}
      <span className="text-sm">
        Телефон для заказа или консультации{" "}
        <a href="tel:+79050096888" className="text-accent font-medium">
          +7 (905) 009 68 88
        </a>
      </span>
    </div>
  );
};

export default TableWorks;
