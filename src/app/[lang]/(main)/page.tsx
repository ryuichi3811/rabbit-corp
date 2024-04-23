import { Metadata } from 'next';
import * as c from '@/features/rabbit/top';
import { Locale, fetchDict, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata();

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <c.Hero dict={d} />
      <c.Business dict={d} />
    </main>
  );
};

export default Home;
