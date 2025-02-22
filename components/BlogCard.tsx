import { Separator } from "@/components/ui/separator";
import { Blog } from "@/data/types";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="flex items-center justify-between px-3 py-4 cursor-pointer hover:bg-accent">
        <div className="text-md font-normal">{blog.title}</div>
        <div className="text-sm">{blog.date}</div>
      </div>
      <Separator />
    </Link>
  );
}
