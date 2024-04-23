import { Metadata } from 'next';
import * as C from '@/features/norika/contact';
import { Locale, fetchDict, mNorikaContact, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata(
  '徳薫 お問い合わせ',
  mNorikaContact,
);

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
