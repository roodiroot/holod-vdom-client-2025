import { Metadata } from "next";

import { beautifulFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import MarkdownContent from "@/components/markdown-content";
import { getPolicyPageApi } from "@/strapi-api/api/data/static-page-api";

export const metadata: Metadata = {
  title: "Документы компании",
  description: "Политика в отношении обработки персональных данных.",
};

const Policy = async () => {
  const content = await getPolicyPageApi();

  // console.log("Policy content:", content);
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <p className="text-base font-semibold leading-7 text-accent-600">
            Документы
          </p>
          <h1
            className={cn(
              beautifulFont.className,
              "mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            )}
          >
            Политика в отношении обработки персональных данных
          </h1>
          <MarkdownContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default Policy;
