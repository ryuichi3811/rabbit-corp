import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as C from '@/features/norika/news';
import { fetchNewsCntList, qNorika } from '@/providers';
import { PaginationLayout } from '@/ui/layouts';
import { Locale, fetchDict, mNorikaNews, pmNorika, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('徳薫 News', mNorikaNews);

const Page = async ({
  params: { lang, page },
}: {
  params: { lang: Locale; page: number };
}) => {
  const d = await fetchDict(lang);
  // 表示コンテンツ数
  const perPage = 10;
  // クエリの設定
  const query = {
    limit: 10,
    filters: qNorika,
    offset: page == 0 ? 0 : (page - 1) * perPage,
  };
  // お知らせコンテンツの取得
  const nc = await fetchNewsCntList(query);

  // ページ数の計算
  const endPage = Math.ceil(nc.totalCount / perPage);

  // ページ数が存在しない場合
  if (endPage < page - 1) {
    return notFound();
  }

  return (
    <main>
      <C.Header />
      <C.Overview dict={d} contents={nc.contents} />
      <PaginationLayout
        totalCount={nc.totalCount}
        link={pmNorika(lang, '/news')}
      />
    </main>
  );
};

export default Page;
