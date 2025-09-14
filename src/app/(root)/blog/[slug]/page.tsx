import { Metadata } from "next";

import { beautifulFont } from "@/app/fonts";
import { cn } from "@/lib/utils";
import MarkdownContent from "@/components/markdown-content";
import { getArticleByDocumentIdApi } from "@/strapi-api/api/data/blog-api";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const article = await getArticleByDocumentIdApi(slug);

  return {
    title: article.title,
    description: `Читайте статью "${article.title}" в блоге компании "Холод в дом". Полезные советы по выбору, установке и обслуживанию кондиционеров.`,
    openGraph: {
      title: article.title,
      description: `Читайте статью "${article.title}" в блоге компании "Холод в дом". Полезные советы по выбору, установке и обслуживанию кондиционеров.`,
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${article.slug}`,
      images: [
        {
          url: article.image
            ? article.image.url
            : `${process.env.NEXT_PUBLIC_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/jpeg",
        },
      ],
    },
  };
}

const Article: React.FC<Props> = async ({ params }) => {
  const slug = (await params).slug;
  const article = await getArticleByDocumentIdApi(slug);

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div>
          <p className="text-base font-semibold leading-7 text-accent-600">
            Блог
          </p>
          <h1
            className={cn(
              beautifulFont.className,
              "mt-2 text-4xl font-bold tracking-tight text-gray-900 max-w-2xl text-balance sm:text-4xl"
            )}
          >
            {article.title}
          </h1>
          <MarkdownContent
            className="text-xl mt-10"
            content={article.content}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
