import { Metadata } from 'next';
import * as NewsCnt from '@/features/reve/news/detail';
import { FailureNews, News, fetchNewsCnt } from '@/providers';
import { Locale, fetchDict, mReveNews, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('Reve News', mReveNews);

const Page = async ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) => {
  const d = await fetchDict(lang);
  const cnt: News | FailureNews = await fetchNewsCnt(id);
  return (
    <main className={`flex w-full justify-center`}>
      <div className="w-full max-w-[800px] px-4">
        {/* ヘッダー表示 */}
        <NewsCnt.Header content={cnt} lang={lang} />

        {/* 本文表示 */}
        <NewsCnt.Body dict={d} content={cnt} />
      </div>
    </main>
  );
};

export default Page;
