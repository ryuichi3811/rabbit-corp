import { Metadata } from 'next';
import * as C from '@/features/reve/contact';
import { Locale, fetchDict, mReveContact, setMetadata } from '@/utils';
import { particlesOption } from '@/utils/particles/option';
import { ParticleBackground } from '@/utils/particles';

export const metadata: Metadata = setMetadata('Reve Contact', mReveContact);

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const d = await fetchDict(lang);
  const option = particlesOption;
  return (
    <main>
      <ParticleBackground option={option}>

      <C.Header />
      <div className="relative backdrop-blur-md">

      <C.Form dict={d} />
      </div>
      </ParticleBackground>
    </main>
  );
};

export default Page;
