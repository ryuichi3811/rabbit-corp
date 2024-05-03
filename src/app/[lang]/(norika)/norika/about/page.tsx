import { Metadata } from 'next';
import * as c from '@/features/norika/about';
import { Locale, fetchDict, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('徳薫 - サービス内容');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <c.Header dict={d} />
      <c.Contents dict={d} />
    </main>
  );
};

export default Page;
