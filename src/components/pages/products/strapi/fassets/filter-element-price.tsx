"use client";

import React, { memo, useCallback, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";

import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "@/hooks/use-open-filters";

interface FilterElementPriceProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  label: string;
  values: (string | null)[];
  setValue?: (value: any) => void;
}

// Возвращает самую максимальную и минимальную цену в фильтрах
export function findMinMax(arr: (string | null)[]) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  // Преобразуем строки в числа, игнорируя null
  const numbers = arr
    .filter((item) => item !== null) // Убираем null
    .map(Number) // Преобразуем строки в числа
    .filter((num) => !isNaN(num)); // Убираем некорректные значения

  if (numbers.length === 0) {
    return null;
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return [min, max];
}

const FilterElementPrice: React.FC<FilterElementPriceProps> = ({
  label,
  values,
  setValue,
  ...props
}) => {
  const findMinMaxCallback = useCallback(() => {
    return findMinMax(values);
  }, [values]);
  const defaultValue = findMinMaxCallback();

  const params = useSearchParams();
  const { addFilter, removeFilter } = useFilterStore();

  const paramsToString = params.toString();
  const [price, setPrice] = useState<number[] | null>(defaultValue);

  useEffect(() => {
    const selectValuesArray = params.get("price")?.split(",");
    if (selectValuesArray) {
      if (
        !isNaN(Number(selectValuesArray[0])) &&
        !isNaN(Number(selectValuesArray[1]))
      ) {
        setPrice([Number(selectValuesArray[0]), Number(selectValuesArray[1])]);
      } else {
        setPrice(defaultValue);
      }
    } else {
      setPrice(defaultValue);
    }
  }, [paramsToString, params]);

  useEffect(() => {
    if (
      Array.isArray(price) &&
      Array.isArray(defaultValue) &&
      price.length === defaultValue.length &&
      price.every((num, index) => num === defaultValue[index])
    ) {
      removeFilter("price");
    } else {
      addFilter("price");
    }
  }, [price]);

  if (!defaultValue || defaultValue[0] === defaultValue[1]) {
    return null;
  }

  const updatePriceRange = (newRange: number[]) => {
    const updatedParams = new URLSearchParams(params.toString());

    const [minPrice, maxPrice] = defaultValue;
    const [newMinPrice, newMaxPrice] = newRange;

    if (newMinPrice === minPrice && newMaxPrice === maxPrice) {
      updatedParams.delete("price");
    } else {
      updatedParams.set("price", newRange.join(","));
    }
    updatedParams.delete("page");

    window.history.pushState(null, "", `?${updatedParams.toString()}`);
  };
  if (values.length <= 1) return null;

  return (
    <fieldset {...props} className="border-b pb-8">
      <legend className="block text-sm font-medium text-gray-900">Цена:</legend>
      <div className="flex flex-col gap-4 py-4">
        {price && (
          <div className="w-full flex justify-between px-1">
            <div className="px-2 py-1 border rounded-sm text-sm text-gray-700">
              {new Intl.NumberFormat("ru-RU").format(Number(price[0]))} руб.
            </div>
            <div className="px-2 py-1 border rounded-sm text-sm  text-gray-700">
              {new Intl.NumberFormat("ru-RU").format(Number(price[1]))} руб.
            </div>
          </div>
        )}
        <Slider
          onValueCommit={(e) => updatePriceRange(e)}
          onValueChange={(e) => setPrice(e)}
          value={price ? price : undefined}
          min={defaultValue[0]}
          max={defaultValue[1]}
          step={1000}
        />
      </div>
    </fieldset>
  );
};

export default memo(FilterElementPrice);
