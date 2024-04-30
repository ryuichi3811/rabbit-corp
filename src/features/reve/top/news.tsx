import clsx from 'clsx';
import Link from 'next/link';
import { News, fetchNewsCntList, qReve } from '@/providers/microcms';
import { Button, NewsItemVertical } from '@/ui';
import { pmReve } from '@/utils';

export const LatestNews = async ({
  dict,
}: {
  dict: { [key: string]: string };
}) => {
  // 辞書の設定
  const d = dict;
  // クエリの設定
  const query = { limit: 3, filters: qReve };
  // お知らせコンテンツの取得
  const { contents } = await fetchNewsCntList(query);

  // const contentsSample: News[] = [];
  // contentsSample.push(contents[0]);
  // contentsSample.push(contents[0]);
  // contentsSample.push(contents[0]);

  return (
    <div className="relative z-30">
      <section className="flex w-full flex-col items-center p-4">
        {/* セクション見出し */}
        <div className="mt-20">
          <h2
            className={clsx(
              'text-center text-2xl tracking-wider lg:text-3xl',
              'font-bold',
            )}
          >
            {d.reve_top_news_headline}
          </h2>
        </div>
        {/* News コンテンツ */}
        <div className="mt-8 flex w-full flex-wrap justify-center gap-4 overflow-auto align-baseline md:flex-wrap md:gap-10 xl:gap-16">
          {contents.map((c: News) => (
            <NewsItemVertical
              dict={d}
              content={c}
              link={pmReve(d.lang, `/news/0/${c.id}`)}
              key={c.id}
            />
          ))}
        </div>
        {/* News ページ遷移ボタン */}
        <Link href={pmReve(d.lang, '/news/1')}>
          <Button size={'lg'} className="mt-8">
            {d.reve_top_news_button_text}
          </Button>
        </Link>
      </section>
    </div>
  );
};
