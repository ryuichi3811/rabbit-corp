import { Metadata } from 'next';
import { Locale, fetchDict, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('徳薫');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main>
      <h1>Welcome to my website</h1>
      <p>Current language: {lang}</p>
      <p>{d.name}</p>
    </main>
  );
};

export default Page;
