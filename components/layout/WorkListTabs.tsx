'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import WorkItem from '../WorkItem';
import { SingleType } from './Single';

export type TWorks = {
  Frontend: SingleType['meta'][];
  WordPress: SingleType['meta'][];
};

type Props = { works: TWorks };

const WorkListTabs = ({ works }: Props) => {
  return (
    <Tabs defaultValue="Frontend">
      <TabsList className="flex justify-center mb-6">
        {Object.keys(works).map(tag => (
          <TabsTrigger
            className="py-2 px-4 data-[state='active']:border-b border-b-text"
            key={tag}
            value={tag}
          >
            {tag}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(works).map(([tag, works]) => {
        return (
          <TabsContent
            className="grid gap-8 md:grid-cols-3"
            key={tag}
            value={tag}
          >
            {works.map(work => (
              <WorkItem key={work.slug} work={work} />
            ))}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default WorkListTabs;
