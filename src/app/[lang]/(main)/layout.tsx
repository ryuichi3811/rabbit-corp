import { ReactNode } from 'react';
import { roboto } from '@/styles/fonts';
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
      {/* <html lang={""}> */}
      <body>
        {/* wraper */}
        <div className="min-h-screen w-full">
          <div className={roboto.className}>{children}</div>;
        </div>
      </body>
    </html>
  );
};

export default Layout;
