"use client";

import React, { memo, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "@/hooks/use-open-filters";

interface FilterElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  label: string;
  values: (string | null)[];
  filterKey: string;
}

const FilterElement: React.FC<FilterElementProps> = ({
  label,
  values,
  filterKey,
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

  function handleCheckedChange(isChecked: boolean, value: string) {
    if (value === null) value = "null";
    setSelect((prevValues) => {
      let updatedValues;
      if (isChecked) {
        if (value === "null") {
          updatedValues = ["null"];
          // addFilter(filterKey);
        } else {
          updatedValues = [...prevValues.filter((v) => v !== "null"), value];
          // addFilter(filterKey);
        }
      } else {
        updatedValues = prevValues.filter((item) => item !== value);
        // removeFilter(filterKey);
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
          values
            ?.filter((i) => i !== null)
            .sort((a, b) => String(a).localeCompare(String(b)))
            .map((i) => {
              const checked =
                (select?.length &&
                  ((i && select?.includes(i)) ||
                    (select?.includes("null") && i === null))) ||
                false;
              return (
                <div key={i} className="flex items-center">
                  <Checkbox
                    id={i || ""}
                    checked={checked}
                    onCheckedChange={(checked) =>
                      handleCheckedChange(checked as boolean, i || "")
                    }
                  />
                  <label
                    htmlFor={i || ""}
                    className="text-sm pl-3 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-clamp-1"
                  >
                    {i}
                  </label>
                </div>
              );
            })}
      </div>
    </fieldset>
  );
};

export default memo(FilterElement);
