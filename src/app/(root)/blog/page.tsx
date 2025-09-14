import { beautifulFont } from "@/app/fonts";
import BlogItem from "@/components/pages/blog/blog-list/blog-item";
import { cn } from "@/lib/utils";
import { getAllBlogApi } from "@/strapi-api/api/data/blog-api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог и полезные статьи и советы по выбору кондиционеров",
  description:
    "Статьи экспертов по выбору, установке и обслуживанию кондиционеров в Саранске. Актуальные руководства, рейтинги моделей от компании «Холод в Дом». Создайте идеальный климат у себя дома!",
};

const DeliveryPage = async () => {
  const paramsBlog = new URLSearchParams({
    sort: "publishedAt:desc",
    "populate[0]": "tags",
  });
  const blogs = await getAllBlogApi(paramsBlog.toString());
  // console.log(blogs);

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Блог
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            Полезные статьи компании &laquo;Холод в Дом&raquo;
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
          {blogs.data.map((blog) => (
            <BlogItem
              key={blog.id}
              publishedAt={blog.publishedAt}
              title={blog.title}
              content={blog.content}
              tags={blog.tags}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
