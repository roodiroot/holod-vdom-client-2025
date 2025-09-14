"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import MenuLinkHref from "../menu-link-href";

import { useFetchProductsCatalog } from "@/strapi-api/queries/strapi-queries/catalog-queries";
import { useFetchBrands } from "@/strapi-api/queries/strapi-queries/brands-queries";
import { routes } from "../../../../static-routes";

const MenuBody = ({ onClose }: { onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: dataProductCatalog,
    isLoading: isLoadingProductCatalog,
    isError: isErrorProductCatalog,
  } = useFetchProductsCatalog();
  const {
    data: dataBrands,
    isLoading: isLoadingBrands,
    isError: isErrorBrands,
  } = useFetchBrands();

  return (
    <div className="relative h-full px-4 py-6 space-y-6">
      <MenuLinkHref label="Главная" href="/" onClick={onClose} />
      <div>
        <div
          className="-m-2 p-2 font-medium text-gray-900 cursor-pointer flex items-center gap-2"
          onClick={() => setIsOpen(true)}
        >
          Каталог
          <ChevronRight className="size-5" />
        </div>
        {isOpen && (
          <ul className="absolute bg-white inset-0 px-4 py-6 space-y-6 overflow-y-auto">
            <li
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <ChevronLeft className="size-5" /> Назад
            </li>
            {!isLoadingProductCatalog &&
              !isErrorProductCatalog &&
              dataProductCatalog?.data.map((item) => (
                <li key={item.documentId}>
                  <Link
                    href={`/catalog/${item.slug}`}
                    className=" whitespace-nowrap font-bold"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                  <ul className=" space-y-3 mt-5">
                    {item.categories.map((category) => (
                      <li
                        key={category.documentId}
                        className="whitespace-nowrap"
                      >
                        <Link
                          onClick={onClose}
                          href={`/catalog/${item.slug}/${category.slug}`}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            <li className=" space-y-3 mt-5">
              <span className=" whitespace-nowrap font-bold"> Бренды</span>
              <ul className="space-y-3 mt-5">
                {!isLoadingBrands &&
                  !isErrorBrands &&
                  dataBrands?.data.map((item) => (
                    <li key={item.documentId} className="whitespace-nowrap">
                      <Link onClick={onClose} href={`/brands/${item.slug}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        )}
      </div>
      {routes.staticPage.map((i) => (
        <MenuLinkHref
          key={i.title}
          label={i.title}
          href={i.link}
          onClick={onClose}
        />
      ))}
    </div>
  );
};

export default MenuBody;
