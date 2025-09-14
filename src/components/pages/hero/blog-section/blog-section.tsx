import Link from "next/link";

import BlogItem from "./blog-item";
import { Blog } from "@/strapi-api/api/data/types";

interface TestimonialItemProps {
  articles: Blog[];
}
const BlogSection: React.FC<TestimonialItemProps> = ({ articles }) => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Последние статьи
        </h2>
        <div className="mt-10 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
          {articles?.map((i) => (
            <BlogItem
              key={i.id}
              publishedAt={i.publishedAt}
              title={i.title}
              content={i.content}
              tags={i.tags}
              slug={i.slug}
            />
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-8 inline-flex text-accent items-center text-sm font-medium text-pretty hover:text-accent-500"
        >
          Все статьи
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
