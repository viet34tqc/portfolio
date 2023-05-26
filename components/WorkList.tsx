import { readFileSync, readdirSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import path from 'path';
import { TWorkMeta } from './layout/Single';
import WorkListTabs from './layout/WorkListTabs';

const contentDir = path.join(process.cwd(), 'app', 'works', 'contents');

export async function getWorkBySlug(slug: string) {
  const slugWithoutMdx = slug.replace(/\.mdx$/, '');
  const filePath = path.join(contentDir, `${slugWithoutMdx}.mdx`);
  const fileContent = readFileSync(filePath, { encoding: 'utf-8' });
  const { frontmatter, content } = await compileMDX<TWorkMeta>({
    source: fileContent,
    components: {
      Image,
      ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
    },
    options: { parseFrontmatter: true },
  });
  return { meta: { ...frontmatter, slug: slugWithoutMdx }, content };
}

export async function getAllWorks() {
  // Get all works slug from works dir
  const slugs = readdirSync(contentDir);
  const results = await Promise.allSettled(
    slugs.map(slug => getWorkBySlug(slug))
  );

  // Using forEach as a workaround because of allSettled
  const errors: string[] = [];
  const works: TWorkMeta[] = [];
  results.forEach(result => {
    if (result.status === 'rejected') {
      errors.push(result.reason);
    }
  });
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      works.push(result.value.meta);
    }
  });

  return [errors, works] as [string[], TWorkMeta[]];
}

const WorkList = async () => {
  const [errors, works] = await getAllWorks();
  let Content: () => JSX.Element;
  if (errors.length > 0 || Object.values(works).length === 0)
    // eslint-disable-next-line react/display-name
    Content = () => <>Cannot get works</>;
  else {
    // eslint-disable-next-line react/display-name
    Content = () => <WorkListTabs works={works} />;
  }
  return (
    <div className="container py-16">
      <h2>Recent Works</h2>
      <Content />
    </div>
  );
};

export default WorkList;
