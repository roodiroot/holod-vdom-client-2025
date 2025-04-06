"use client";

import Link from "next/link";

import { useFetchProductsCatalog } from "@/strapi-api/queries/strapi-queries/catalog-queries";

interface ListLinkFooterProps extends React.HtmlHTMLAttributes<HTMLElement> {}
const ListLinkFooterCatalog: React.FC<ListLinkFooterProps> = ({ ...props }) => {
  const {
    data: dataProductCatalog,
    isLoading: isLoadingProductCatalog,
    isError: isErrorProductCatalog,
  } = useFetchProductsCatalog();

  return (
    <div {...props}>
      <h3 className="text-sm font-medium text-gray-900">Каталог</h3>
      <ul className="mt-6 text-sm space-y-6">
        {!isLoadingProductCatalog &&
          !isErrorProductCatalog &&
          dataProductCatalog?.data.map((i) => (
            <li key={i.documentId}>
              <Link
                href={`/catalog/${i.slug}`}
                className="font-bold hover:text-accent"
              >
                {i.name}
              </Link>
              <ul className="space-y-2 mt-4">
                {i.categories.map((category) => (
                  <li key={category.documentId} className="">
                    <Link
                      className="hover:text-accent"
                      href={`/catalog/${i.slug}/${category.slug}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListLinkFooterCatalog;
