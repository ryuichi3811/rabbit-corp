'use server';
import { ReactNode, Suspense } from 'react';
import { notoSerifJp } from '@/styles/fonts/noto-serif-jp';
import { Footer, Header } from '@/ui/layouts/norika';
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
      <div className={`${notoSerifJp.className} bg-rose-50`}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <ParticleBackground option={option}> */}
          <Header />
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
