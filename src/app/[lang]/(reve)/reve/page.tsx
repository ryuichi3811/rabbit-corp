import { Metadata } from 'next';
import * as Cnt from '@/features/reve/top';
import { Locale, fetchDict, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('Reve');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <Cnt.Header dict={d} />
      <Cnt.LatestNews dict={d} />
    </main>
  );
};

export default Page;
