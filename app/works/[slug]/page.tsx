import { getWorkBySlug } from '@/components/WorkList';
import Single from '@/components/layout/Single';

type Props = {};

const page = async ({ params: { slug } }: any) => {
  const { meta, content } = await getWorkBySlug(slug);
  return <Single meta={meta}>{content}</Single>;
};

export default page;
