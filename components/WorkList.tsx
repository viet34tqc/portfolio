import { readFileSync, readdirSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

const contentDir = path.join(process.cwd(), 'app', 'works', 'contents');

export async function getWorkBySlug(slug: string) {
  const slugWithoutMdx = slug.replace(/\.mdx$/, '');
  const filePath = path.join(contentDir, `${slugWithoutMdx}.mdx`);
  const fileContent = readFileSync(filePath, { encoding: 'utf-8' });
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return {meta: {...frontmatter, slug: slugWithoutMdx}, content}
}

export function getAllWorks() {
  // Get all works slug from works dir
  const slugs = readdirSync(contentDir);
  console.log('slugs', slugs);
  for (let slug of slugs) {
    getWorkBySlug(slug);
  }
}

const WorkList = () => {
  const works = getAllWorks();
  console.log('works', works);
  return <div>WorkList</div>;
};

export default WorkList;
