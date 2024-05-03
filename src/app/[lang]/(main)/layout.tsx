'use server';
import { ReactNode, Suspense } from 'react';
import { roboto } from '@/styles/fonts';
import { Footer, Header } from '@/ui/layouts/rabbit';
import { Locale, fetchDict } from '@/utils';
// import { ParticleBackground } from '@/utils/particles';
// import { optionsStars, particlesOption } from '@/utils/particles/option';

const Layout = async ({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) => {
  const d = await fetchDict(lang);
  // const option = optionsStars();
  // const option = particlesOption;
  return (
    <div className="w-full">
      <div className={`${roboto.className} bg-white`}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <ParticleBackground option={option}> */}
          <div className="pt-4">
            <Header />
          </div>
          <div
            id="top"
            className={`min-h-[calc(100vh-96px-320px)] w-full pt-24`}
          >
            {children}
          </div>
          {/* </ParticleBackground> */}
        </Suspense>
        <Footer dict={d} />
      </div>
    </div>
  );
};

export default Layout;
