import Image from 'next/image';
import Link from 'next/link';
import { TWorkMeta } from './layout/Single';

const WorkItem = ({ work }: { work: TWorkMeta }) => {
  const slug = `/works/${work.slug}`;
  return (
    <article className="space-y-3">
      <Link href={slug} className="block rounded-md overflow-hidden">
        <Image
          width={450}
          height={300}
          src={'/' + work.thumb}
          alt=""
          className="aspect-[4/3] transition-transform duration-300 hover:scale-110"
        />
      </Link>

      <h3>
        <Link href={slug}>{work.title}</Link>
      </h3>

      <p className="text-[16px]">{work.description}</p>
    </article>
  );
};

export default WorkItem;
