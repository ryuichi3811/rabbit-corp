import { Metadata } from 'next';
import * as c from '@/features/rabbit/about';
import { Locale, fetchDict, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('会社情報');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <c.ConpanyInfo dict={d} />
    </main>
  );
};

export default Page;
