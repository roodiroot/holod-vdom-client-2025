"use client";

import React, { memo } from "react";

import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterElementBrandProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  label: string;
  values: (string | null)[];
  setValue?: (value: any) => void;
}

const FilterElementBrand: React.FC<FilterElementBrandProps> = ({
  label,
  values,
  setValue,
  ...props
}) => {
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
            if (i === null) return;
            return (
              <div key={i} className="flex items-center">
                <Checkbox id={i || ""} />
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

export default memo(FilterElementBrand);
