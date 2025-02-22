import Section from "@/components/sections/Section";
import BlogCard from "@/components/BlogCard";
import { Separator } from "@/components/ui/separator";

import { Blog } from "@/data/types";
import getPostMetadata from "@/lib/getBlogMetadata";

export default function BlogsPage() {
  const blogs = getPostMetadata("blogs");
  console.log(blogs);

  return (
    <Section title="Blog">
      <Separator />
      <div className="flex flex-col">
        {blogs.map((blog: Blog, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </Section>
  );
}
