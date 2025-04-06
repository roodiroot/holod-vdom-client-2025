"use client";

import { FilterResponse } from "@/strapi-api/api/data/types";
import FilterElement from "./fassets/filter-element";
import FilterElementPrice from "./fassets/filter-element-price";
import FilterElementComplex from "./fassets/filter-element-complex";
import AllFiltersSceletone from "../all-filters-sceletone";

interface FassetFiltersProps {
  filtersData?: FilterResponse;
}

const FassetFilters: React.FC<FassetFiltersProps> = ({ filtersData }) => {
  if (!filtersData) {
    return <AllFiltersSceletone />;
  }

  const simpleFilters = filtersData?.simpleFilters || {};
  const complexFilters = filtersData?.complexFilters || {};

  return (
    <aside className="">
      <h2 className="sr-only">Фильтры</h2>
      <div className="block">
        <form className="space-y-10">
          {complexFilters &&
            Object.entries(complexFilters).map(([key, { label, values }]) => {
              return (
                <FilterElementComplex
                  key={key}
                  label={label}
                  values={values}
                  filterKey={key}
                />
              );
            })}
          {simpleFilters &&
            Object.entries(simpleFilters).map(([key, { label, values }]) => {
              if (key === "price") {
                return (
                  <FilterElementPrice key={key} label={label} values={values} />
                );
              } else {
                return (
                  <FilterElement
                    key={key}
                    filterKey={key}
                    label={label}
                    values={values}
                  />
                );
              }
            })}
        </form>
      </div>
    </aside>
  );
};

export default FassetFilters;
