"use client";

import React, { memo, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "@/hooks/use-open-filters";

interface FilterElementComplexProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  filterKey: string;
  label: string;
  values: { value: string | null; slug: string }[];
  setValue?: (value: any) => void;
}

const FilterElementComplex: React.FC<FilterElementComplexProps> = ({
  filterKey,
  label,
  values,
  setValue,
  ...props
}) => {
  const params = useSearchParams();
  const paramsToStr = params.toString();
  const [select, setSelect] = useState<string[]>([]);

  const { addFilter, removeFilter } = useFilterStore();

  const selectValuesArray = params.get(filterKey)?.split(",");

  useEffect(() => {
    setSelect(selectValuesArray || []);
  }, [paramsToStr]);

  useEffect(() => {
    if (select.length) {
      addFilter(filterKey);
    } else {
      removeFilter(filterKey);
    }
  }, [select.length]);

  useEffect(() => {
    setSelect(selectValuesArray || []);
  }, [paramsToStr]);

  function handleCheckedChange(value: string) {
    if (value === null) value = "null";

    setSelect((prevValues) => {
      let updatedValues;

      if (value === "null") {
        updatedValues = ["null"];
      } else if (prevValues.includes(value)) {
        updatedValues = [...prevValues.filter((v) => v !== value)];
      } else {
        updatedValues = [...prevValues.filter((v) => v !== "null"), value];
      }

      const searchParams = new URLSearchParams(params.toString());
      if (updatedValues.includes("null")) {
        searchParams.set(filterKey, "null");
      } else if (updatedValues.length > 0) {
        searchParams.set(filterKey, updatedValues.join(","));
      } else {
        searchParams.delete(filterKey);
      }
      searchParams.delete("page");

      window.history.pushState(null, "", `?${searchParams.toString()}`);

      return updatedValues;
    });
  }

  if (values.length <= 1) return null;
  return (
    <fieldset {...props} className="border-b pb-8">
      <legend className="block text-sm font-medium text-gray-900">
        {label}
      </legend>
      <div
        className={cn(
          "space-y-6",
          label && "pt-6 space-y-3 gap-y-3",
          values.length > 6 && "grid grid-cols-2 space-y-0 gap-y-6",
          values.length > 16 && "grid grid-cols-3 space-y-0 gap-y-6"
        )}
      >
        {values.length &&
          values?.map((i) => {
            const in_stock = select.includes(i.value || "");
            return (
              <div
                key={i.slug}
                onClick={() => handleCheckedChange(i.value || "")}
                className={cn(
                  "flex items-center cursor-pointer",
                  in_stock && "text-accent font-bold"
                )}
              >
                {i.value}
              </div>
            );
          })}
      </div>
    </fieldset>
  );
};

export default memo(FilterElementComplex);
