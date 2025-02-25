import Section from "@/components/sections/Section";
import BlogCard from "@/components/cards/BlogCard";
import { Separator } from "@/components/ui/separator";

import { Blog } from "@/data/types";
import getPostMetadata from "@/lib/getBlogMetadata";

export default function BlogsPage() {
  const blogs = getPostMetadata("blogs");
  const postedBlogs = blogs.filter((blog) => !blog.draft);

  return (
    <Section title="Journal">
      <Separator />
      <div className="flex flex-col">
        {postedBlogs.map((blog: Blog, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </Section>
  );
}
