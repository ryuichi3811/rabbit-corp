import clsx from 'clsx';
import Link from 'next/link';
import { News, fetchNewsCntList, qNorika } from '@/providers/microcms';
import { Button, NewsItemVertical } from '@/ui';
import { pmNorika } from '@/utils';

export const LatestNews = async ({
  dict,
}: {
  dict: { [key: string]: string };
}) => {
  // 辞書の設定
  const d = dict;
  // クエリの設定
  const query = { limit: 3, filters: qNorika };
  // お知らせコンテンツの取得
  const { contents } = await fetchNewsCntList(query);

  return (
    <div className="text-slate-700">
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
              className="text-rose-300 hover:text-rose-500 active:text-rose-500"
              dict={d}
              content={c}
              link={pmNorika(d.lang, `/news/0/${c.id}`)}
              key={c.id}
            />
          ))}
        </div>
        {/* News ページ遷移ボタン */}
        <Link href={pmNorika(d.lang, '/news/1')}>
          <Button
            size={'lg'}
            className="mt-8 bg-rose-500 hover:bg-rose-400 active:bg-rose-400"
          >
            {d.reve_top_news_button_text}
          </Button>
        </Link>
      </section>
    </div>
  );
};
