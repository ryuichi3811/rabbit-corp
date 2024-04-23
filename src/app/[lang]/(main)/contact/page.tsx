import { Metadata } from 'next';
import * as C from '@/features/rabbit/contact';
import { Locale, fetchDict, mRabbitContact, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('問い合わせ', mRabbitContact);

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
