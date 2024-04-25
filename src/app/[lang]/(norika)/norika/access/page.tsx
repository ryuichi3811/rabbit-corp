import { Metadata } from 'next';
import { Locale, fetchDict, setMetadata } from '@/utils';
import * as c from '@/features/norika/access';

export const metadata: Metadata = setMetadata('徳薫 - アクセス');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <c.Header dict={d} />
      <c.Nagoya dict={d} />
      <c.Tokyo dict={d} />
    </main>
  );
};

export default Page;
