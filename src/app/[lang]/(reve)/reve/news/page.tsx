import { Locale, fetchDict, reveMinHeightLayout } from '@/utils';

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  return (
    <main className={`flex w-full justify-center ${reveMinHeightLayout}`}>
      <div className="w-full max-w-[800px] px-4">
        <h1>Welcome to my website</h1>
        <p>Current language: {lang}</p>
        <p>{d.name}</p>
      </div>
    </main>
  );
};

export default Page;
