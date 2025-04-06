"use client";

import { memo } from "react";

// import { useSearchProducts } from "@/queries/product";
import NoResults from "./no-results";
import ProductsSearchBlock from "./products-search-block";
import SearchLoadig from "./search-loadig";
import { useFetchSearchProducts } from "@/strapi-api/queries/strapi-queries/product-queries";

interface SearchResultContentProps {
  submit: string;
  loading?: boolean;
  onClose: () => void;
}

const SearchResultContent: React.FC<SearchResultContentProps> = ({
  loading,
  submit,
  onClose,
}) => {
  const { data, isLoading } = useFetchSearchProducts(submit);

  console.log(data);

  if (loading || isLoading) return <SearchLoadig />;

  if (!data?.data || !data?.data.length) return <NoResults />;

  return <ProductsSearchBlock searchList={data?.data} onClose={onClose} />;

  // return <NoResults />;
};

export default memo(SearchResultContent);
