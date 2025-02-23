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
    <main>
      <article className="text-inherit prose prose-headings:text-inherit prose-img:rounded-lg prose-img:mt-2 prose-video:rounded-lg prose-video:mt-2 prose-p:my-4 prose-li:p-0">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
