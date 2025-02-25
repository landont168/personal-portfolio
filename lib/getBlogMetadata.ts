import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetadata(basePath: string) {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  // get file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${folder}/${filename}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      draft: matterResult.data.draft,
      slug: filename.replace('.md', ''),
    }
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}