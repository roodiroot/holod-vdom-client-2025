"use client";

import { memo } from "react";

import { Accordion } from "@/components/ui/accordion";
import MainCharacterTab from "./main-character-tab";
import CharacterTab from "./character-tab";
import InstalationTab from "./instalation-tab";
import PayTab from "./pay-tab";
import DeliveryTab from "./delivery-tab";
// import { useFetchOptionsByIdProducts } from "@/queries/product";
import Stars from "@/components/ui/elements/stars";
import { format } from "@/lib/format";
import AddingBasket from "./server-component/adding-basket";
import CharacteristicsSkeleton from "./characteristics-skeleton";
import { Char } from "@/strapi-api/api/data/types";
import InstallmentButton from "./installment-button";

interface CharacteristicsBlockProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  slug: string;
  price: number;
  name: string;
  brand?: string;
  category?: string;
  description: string;
  area_of_room?: string;
  wifi_availability?: string;
  cooling_capacity?: string | null;
  series?: string;
  sale?: number;
  refrigerant?: string;
  noise_level?: string;
  max_pipe_length?: string | null;
  compressor_type?: string;
  color?: string;
  energy_efficiency_class?: string;
  compressor_brand?: string;
  country_of_manufacturer?: string;
  warranty_period?: string;
  heating_power?: string;
  cooling_power?: string;
  old_price?: string | null;
  charsetistics?: Char[];
}

const CharacteristicsBlockClient: React.FC<CharacteristicsBlockProps> = ({
  slug,
  name,
  brand,
  category,
  price,
  description,
  area_of_room,
  wifi_availability,
  series,
  sale,
  refrigerant,
  noise_level,
  max_pipe_length,
  cooling_capacity,
  compressor_type,
  color,
  energy_efficiency_class,
  compressor_brand,
  country_of_manufacturer,
  warranty_period,
  heating_power,
  cooling_power,
  old_price,
  charsetistics,
  ...props
}) => {
  // if (isLoading) {
  //   return <CharacteristicsSkeleton />;
  // }

  // if (error) {
  //   return <CharacteristicsSkeleton />;
  // }

  return (
    <>
      <div {...props} className="mt-3">
        <h2 className="sr-only">Информация о товаре</h2>
        <p className="text-3xl tracking-tight text-gray-900">{format(price)}</p>
      </div>
      <div className="mt-3">
        <h3 className="sr-only">Отзывы</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            <Stars />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="sr-only">Описание</h3>
        <p>{description}</p>
      </div>
      <AddingBasket
        className="mt-10"
        prodId={slug}
        name={name}
        price={format(price)}
      />
      <div className="mt-4">
        <InstallmentButton price={price} />
      </div>
      <section className="mt-12">
        <h2 className="sr-only">Подробное описание</h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full border-t border-gray-200"
        >
          <MainCharacterTab
            brand={brand}
            category={category}
            series={series}
            wifi_availability={wifi_availability}
            area_of_room={area_of_room}
            compressor_type={compressor_type}
          />
          <CharacterTab
            brand={brand}
            category={category}
            series={series}
            wifi_availability={wifi_availability}
            area_of_room={area_of_room}
            cooling_capacity={cooling_capacity}
            compressor_type={compressor_type}
            refrigerant={refrigerant}
            noise_level={noise_level}
            max_pipe_length={max_pipe_length}
            color={color}
            energy_efficiency_class={energy_efficiency_class}
            compressor_brand={compressor_brand}
            country_of_manufacturer={country_of_manufacturer}
            warranty_period={warranty_period}
            heating_power={heating_power}
            cooling_power={cooling_power}
            old_price={old_price}
            charsetistics={charsetistics}
          />
          <InstalationTab />
          <PayTab />
          <DeliveryTab />
        </Accordion>
      </section>
    </>
  );
};

export default memo(CharacteristicsBlockClient);
