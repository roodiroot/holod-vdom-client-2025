import { beautifulFont } from "@/app/fonts";
import TableSection from "@/components/pages/hero/table-section/table-section";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

import listWorks from "@/utils/price.json";
import listAddWorks from "@/utils/additionalWorks.json";
import {
  getAdditionalServicesApi,
  getServicesApi,
} from "@/strapi-api/api/data/cost-services-api";

export const metadata: Metadata = {
  title: "Цены на услуги",
  description:
    'Актуальные цены на услуги "Холод в дом", Звоните, уточняйте по поводу индивидуальных условий.',
};

const PricePage = async () => {
  const services = await getAdditionalServicesApi();
  const additionalService = await getAdditionalServicesApi();
  return (
    <div className="bg-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="px-4 mx-auto  lg:mx-0 lg:px-8">
            <h1
              className={cn(
                beautifulFont.className,
                "text-4xl font-bold tracking-tight text-gray-900"
              )}
            >
              Цены на услуги
            </h1>
          </div>
          <TableSection
            listAddWorks={additionalService.data}
            listWorks={services.data}
          />
        </div>
      </div>
    </div>
  );
};

export default PricePage;
