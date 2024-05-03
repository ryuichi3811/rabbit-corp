import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as C from '@/features/reve/news/detail';
import { FailureNews, News, fetchNewsCnt } from '@/providers';
import { Locale, fetchDict, mReveNews, setMetadata } from '@/utils';
import { ParticleBackground } from '@/utils/particles';
import { particlesOption } from '@/utils/particles/option/fullScreen';

export const metadata: Metadata = setMetadata('Reve News', mReveNews);

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

  const option = particlesOption;

  return (
    <ParticleBackground option={option}>
      <main className={`flex w-full justify-center`}>
        <div className="w-full max-w-screen-md px-4 backdrop-blur-sm">
          {/* ヘッダー表示 */}
          <C.Header content={cnt} lang={lang} />

          {/* 本文表示 */}
          <C.Body dict={d} content={cnt} />
        </div>
      </main>
    </ParticleBackground>
  );
};

export default Page;
