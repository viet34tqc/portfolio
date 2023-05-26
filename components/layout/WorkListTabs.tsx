'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import WorkItem from '../WorkItem';
import { TWorkMeta } from './Single';

export type TFilteredWorks = {
  Frontend: TWorkMeta[];
  WordPress: TWorkMeta[];
};

type Props = { works: TWorkMeta[] };

const WorkListTabs = ({ works }: Props) => {
  const filteredWorks: TFilteredWorks = {
    Frontend: [],
    WordPress: [],
  };
  works.forEach(work => {
    const tag = work.tag as keyof typeof filteredWorks;
    filteredWorks[tag].push(work);
  });
  return (
    <Tabs defaultValue="Frontend">
      <TabsList className="flex justify-center mb-6">
        {Object.keys(filteredWorks).map(tag => (
          <TabsTrigger
            className="py-2 px-4 data-[state='active']:border-b border-b-text"
            key={tag}
            value={tag}
          >
            {tag}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(filteredWorks).map(([tag, worksByTag]) => {
        return (
          <TabsContent
            className="grid gap-8 md:grid-cols-3"
            key={tag}
            value={tag}
          >
            {worksByTag.map(work => (
              <WorkItem key={work.slug} work={work} />
            ))}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default WorkListTabs;
