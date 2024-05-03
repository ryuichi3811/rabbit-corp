import { Metadata } from 'next';
import { ContentsController } from '@/features/reve/domain/';
import { Locale, fetchDict, mReveContact, setMetadata } from '@/utils';
import { ParticleBackground, particlesOption } from '@/utils/particles';

export const metadata: Metadata = setMetadata('Reve Domain', mReveContact);

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  const option = particlesOption;
  return (
    <main>
      <ParticleBackground option={option}>
        <ContentsController dict={d} />
      </ParticleBackground>
    </main>
  );
};

export default Page;
