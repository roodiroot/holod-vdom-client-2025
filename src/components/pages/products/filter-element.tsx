"use client";

import React, { memo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FilterElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: { name: string; value: string | number }[];
  value: any[];
  setValue: (value: any) => void;
  title?: string;
}

const FilterElement: React.FC<FilterElementProps> = ({
  title,
  list,
  value,
  setValue,
  ...props
}) => (
  <fieldset {...props}>
    {title && (
      <legend className='block text-sm font-medium text-gray-900'>
        {title}
      </legend>
    )}
    <div
      className={cn(
        "space-y-6",
        title && "pt-6 space-y-3 gap-y-3",
        list.length > 6 && "grid grid-cols-2 space-y-0 gap-y-6",
        list.length > 16 && "grid grid-cols-3 space-y-0 gap-y-6"
      )}
    >
      {list &&
        list?.map((i) => (
          <div key={i.name} className='flex items-center'>
            <Checkbox
              checked={value.includes(i.value)}
              onCheckedChange={(e) => {
                if (e) {
                  setValue(
                    (state: any) =>
                      !state?.includes(i.value) && [...state, i.value]
                  );
                } else {
                  setValue((state: string[]) =>
                    state.filter((j) => j !== i.value)
                  );
                }
              }}
              id={`${i.value}`}
            />
            <label
              htmlFor={`${i.value}`}
              className='text-sm pl-3 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-clamp-1'
            >
              {i.name}
            </label>
          </div>
        ))}
    </div>
  </fieldset>
);

export default memo(FilterElement);
