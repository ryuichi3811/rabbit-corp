import { Metadata } from 'next';
import * as c from '@/features/privacy-policy';
import { Locale, fetchDict, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('プライバシーポリシー');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <c.Content dict={d} />
    </main>
  );
};

export default Page;
