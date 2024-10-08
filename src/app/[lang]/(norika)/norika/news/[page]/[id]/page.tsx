import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as C from '@/features/norika/news/detail';
import { FailureNews, News, fetchNewsCnt } from '@/providers';
import { Locale, fetchDict, mNorikaNews, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('徳薫 News', mNorikaNews);

const Page = async ({
  params: { lang, page, id },
}: {
  params: { lang: Locale; page: string; id: string };
}) => {
  const d = await fetchDict(lang);

  // お知らせコンテンツの取得
  const cnt: News | FailureNews = await fetchNewsCnt(id);

  // pageパラメータが0ではない場合
  if (page !== '0') {
    return notFound();
  }
  return (
    <main className={`flex w-full justify-center`}>
      <div className="w-full max-w-screen-md px-4">
        {/* ヘッダー表示 */}
        <C.Header content={cnt} lang={lang} />

        {/* 本文表示 */}
        <C.Body dict={d} content={cnt} />
      </div>
    </main>
  );
};

export default Page;
