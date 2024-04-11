import { ReactNode } from 'react';
import { robotoMono } from '@/styles/fonts';
import { Footer, Header } from '@/ui/layouts/reve';
import { Locale } from '@/utils';

const Layout = ({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <html lang={lang}>
      <body>
        {/* wraper */}
        <div className="min-h-screen w-full">
          <div className={`${robotoMono.className} bg-reve-main`}>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
