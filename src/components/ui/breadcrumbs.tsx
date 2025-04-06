"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Home, List } from "lucide-react";

interface BreadcrumbsProps extends React.HtmlHTMLAttributes<HTMLElement> {
  productName?: string;
  catalogName?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  productName,
  catalogName,
}) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center py-4 text-sm space-x-4">
          <li>
            <div className="flex items-center">
              <Button variant="link" size="icon" asChild>
                <Link href="/" className="mr-4 font-medium ">
                  <Home className="w-4 h-4 sm:hidden text-gray-500" />
                  <span className="hidden sm:inline-block text-gray-500">
                    Главная
                  </span>
                </Link>
              </Button>
              <Icons.slash />
            </div>
          </li>
          <li className="flex items-center">
            {productName ? (
              <>
                <Button variant="link" size="icon" asChild>
                  <Link
                    href={`/brands/${catalogName}`}
                    className="mr-4 font-medium "
                  >
                    <List className="w-4 h-4 sm:hidden text-gray-500" />
                    <span className="hidden sm:inline-block text-gray-500">
                      Каталог
                    </span>
                  </Link>
                </Button>
                <Icons.slash />
              </>
            ) : (
              <div className="mr-4 font-medium text-gray-900">Каталог</div>
            )}
          </li>
          {productName && (
            <li className="">
              <div className="mr-4 font-medium text-gray-900">
                {productName}
              </div>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
