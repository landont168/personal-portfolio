import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/lib/getBlogMetadata";
import fs from "fs";
import matter from "gray-matter";

import VerticalImage from "@/components/VerticalImage";
import ExternalLink from "@/components/ExternalLink";
import Callout from "@/components/Callout";

// get post content from slug
function getPostContent(slug: string) {
  const folder = "blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

// create a page for every blog post
export const generateStaticParams = async () => {
  const posts = getPostMetadata("blogs");
  return posts.map((post) => ({ slug: post.slug }));
};

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage(props: BlogPageProps) {
  const params = await props.params;
  const slug = await params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      <article className="text-inherit prose prose-headings:text-inherit prose-img:rounded-lg prose-img:mt-2 prose-video:rounded-lg prose-video:mt-2 prose-p:my-4 prose-li:p-0">
        <Markdown
          options={{
            overrides: {
              ExternalLink: {
                component: ExternalLink,
              },
              Callout: {
                component: Callout,
              },
              VerticalImage: {
                component: VerticalImage,
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}
