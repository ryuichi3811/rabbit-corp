'use server';
import { ReactNode, Suspense } from 'react';
import { robotoMono } from '@/styles/fonts';
import { Footer, Header } from '@/ui/layouts/reve';
import { Locale } from '@/utils';
import { fetchDict } from '@/utils';
// import { optionsStars } from '@/utils/particles/option';

const Layout = async ({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) => {
  // const option = optionsStars();
  // const option = particlesOption;
  const d = await fetchDict(lang);
  return (
    <html lang={lang}>
      <body>
        {/* wraper */}
        <div className="w-full">
          <div className={`${robotoMono.className} bg-reve-main`}>
            <Suspense fallback={<div>Loading...</div>}>
              {/* <ParticleBackground option={option}> */}
                <div className="pt-4">
                  <Header />
                </div>
                <div className={`min-h-[calc(100vh-96px-320px)] w-full pt-24`}>
                  {children}
                </div>
              {/* </ParticleBackground> */}
            </Suspense>
            <Footer  dict={d}/>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
