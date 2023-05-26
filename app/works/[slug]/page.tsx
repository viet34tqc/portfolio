import { getAllWorks, getWorkBySlug } from '@/components/WorkList';
import Single from '@/components/layout/Single';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const [errors, works] = await getAllWorks(); //deduped!

  if (errors.length > 0 || Object.values(works).length === 0) return [];

  return works.map(work => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getWorkBySlug(slug); //deduped!

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
  };
}

const Work = async ({ params: { slug } }: Props) => {
  const { meta, content } = await getWorkBySlug(slug);
  return <Single meta={meta}>{content}</Single>;
};

export default Work;
