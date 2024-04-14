import { News } from '@/providers';
import { NewsItemHorizontal } from '@/ui';
import { pmReve } from '@/utils';

export const Overview = async ({
  dict,
  contents,
}: {
  dict: { [key: string]: string };
  contents: News[];
}) => {
  const d = dict;

  return (
    <>
      <div className="grid justify-items-center gap-8 px-4 sm:gap-12 xl:gap-16">
        {contents.map((c: News) => (
          <NewsItemHorizontal
            dict={d}
            content={c}
            link={pmReve(d.lang, `/news/0/${c.id}`)}
            key={c.id}
          />
        ))}
      </div>
    </>
  );
};
