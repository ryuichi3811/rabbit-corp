import { Metadata } from 'next';
import * as C from '@/features/reve/contact';
import { Locale, fetchDict, mReveContact, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('Reve Contact', mReveContact);

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <C.Header />
      <C.Form dict={d} />
    </main>
  );
};

export default Page;
