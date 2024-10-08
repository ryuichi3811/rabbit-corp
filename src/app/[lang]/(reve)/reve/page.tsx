import { Metadata } from 'next';
import * as Cnt from '@/features/reve/top';
import { Locale, fetchDict, setMetadata } from '@/utils';
import { ParticleBackground, particlesOption } from '@/utils/particles';

export const metadata: Metadata = setMetadata('Reve');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  const option = particlesOption;
  return (
    <ParticleBackground option={option}>
      <main>
        <Cnt.Header dict={d} />
        <Cnt.LatestNews dict={d} />
        <Cnt.Domain dict={d} />
      </main>
    </ParticleBackground>
  );
};

export default Page;
