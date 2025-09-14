interface BlogItemProps {
  publishedAt: Date;
  title: string;
  slug: string;
  content?: string;
  tags?: { id: number; tag: string }[] | null;
}
const BlogItem: React.FC<BlogItemProps> = ({
  publishedAt,
  title,
  slug,
  content,
  tags,
}) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time
          dateTime="2020-03-16"
          className="text-gray-500 dark:text-gray-400"
        >
          {new Date(publishedAt).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        {tags &&
          tags.length > 0 &&
          tags?.map((tag) => (
            <span
              key={tag.id}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {tag.tag}
            </span>
          ))}
      </div>
      <div className="group relative grow">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
          <a href={`/blog/${slug}`}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
          {content}
        </p>
      </div>
    </article>
  );
};

export default BlogItem;
