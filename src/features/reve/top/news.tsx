import clsx from 'clsx';
import Link from 'next/link';
import { News, fetchNewsCntList, qReve } from '@/providers/microcms';
import { Button, NewsItem } from '@/ui';

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

  return (
    // <div className="bg-gradient-to-tr from-reve-main to-reve-sub">
    <div className="">
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
        <div className="mt-8 flex w-full flex-wrap justify-center gap-1 overflow-auto px-4 align-baseline md:flex-nowrap md:gap-10">
          {contents.map((c: News) => (
            <NewsItem dict={d} content={c} key={c.id} />
          ))}
        </div>
        {/* News ページ遷移ボタン */}
        <Link href="/reve/news">
          <Button size={'lg'} className="mt-8">
            {d.reve_top_news_button_text}
          </Button>
        </Link>
      </section>
    </div>
  );
};
