import { PropsWithChildren } from 'react';

export type TWorkMeta = {
    title: string;
    tag: string;
    description: string;
    position: string;
    tech: string;
    thumb: string;
    demo: string;
    github: string;
    slug: string;
}

export type TWorkProps = {
  meta: TWorkMeta;
};

export default function Single({ children, meta }: PropsWithChildren<TWorkProps>) {
  return (
    <article className="py-16 container">
      <div className="grid md:grid-cols-[3fr,1fr] gap-4">
        <div>
          <h1 className="mb-3">{meta.title}</h1>
          <div className="flex gap-2 mb-6 [&>*]:text-blue">
            {meta.github && (
              <a href={meta.github} target="_blank">
                Github
              </a>
            )}
            {meta.demo && (
              <a href={meta.demo} target="_blank">
                Demo
              </a>
            )}
          </div>
          <div className="space-y-8">{children}</div>
        </div>
        <aside className="space-y-4 text-[16px] ">
          <div>
            <h4 className="text-text-secondary font-bold mb-2 opacity-[0.7]">
              Position
            </h4>
            {meta.position}
          </div>
          <div>
            <h4 className="text-text-secondary font-bold mb-2 opacity-[0.7]">
              Tech
            </h4>
            {meta.tech}
          </div>
        </aside>
      </div>
    </article>
  );
}
