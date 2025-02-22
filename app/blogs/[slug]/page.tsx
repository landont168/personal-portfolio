import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/lib/getBlogMetadata";
import fs from "fs";
import matter from "gray-matter";

// get post content from slug
function getPostContent(slug: string) {
  const folder = "blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

// create a page for every blog post
export const genereateStaticParams = async () => {
  const posts = getPostMetadata("blogs");
  return posts.map((post) => ({ slug: post.slug }));
};

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <main className="p-6">
      <article className="prose bg-gray-100">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
