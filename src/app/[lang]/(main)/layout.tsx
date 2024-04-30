'use server';
import { ReactNode, Suspense } from 'react';
import { roboto } from '@/styles/fonts';
import { Footer, Header } from '@/ui/layouts/rabbit';
import { Locale } from '@/utils';
// import { ParticleBackground } from '@/utils/particles';
// import { optionsStars, particlesOption } from '@/utils/particles/option';

const Layout = async ({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) => {
  // const option = optionsStars();
  // const option = particlesOption;
  return (
    <html lang={lang}>
      <body>
        {/* wraper */}
        <div className="w-full">
          <div className={`${roboto.className} bg-white`}>
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
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
