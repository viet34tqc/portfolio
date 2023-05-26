import { getWorkBySlug } from '@/components/WorkList';
import Single from '@/components/layout/Single';

type Props = {
  params: {
    slug: string;
  }
};

const Work = async ({ params: { slug } }: Props) => {
  const { meta, content } = await getWorkBySlug(slug);
  return <Single meta={meta}>{content}</Single>;
};

export default Work;
