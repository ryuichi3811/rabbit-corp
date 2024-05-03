import { Metadata } from 'next';
import * as c from '@/features/norika/top';
import { Locale, fetchDict, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('徳薫');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <c.Header dict={d} />
      <c.LatestNews dict={d} />
      <c.Greeting dict={d} />
      <c.Service dict={d} />
    </main>
  );
};

export default Page;
