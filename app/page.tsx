import Intro from '@/components/Intro';
import WorkList from '@/components/WorkList';

export default function Home() {
  return (
    <main>
      <Intro />
      {/* @ts-expect-error Server Component */}
      <WorkList />
    </main>
  );
}
