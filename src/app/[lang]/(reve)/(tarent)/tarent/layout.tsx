'use server';
import { ReactNode } from 'react';
import { robotoMono } from '@/styles/fonts';
import { Footer } from '@/ui/layouts/reve';
import { Locale } from '@/utils';
import { fetchDict } from '@/utils';

const Layout = async ({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) => {
  const d = await fetchDict(lang);
  return (
    <div className="w-full">
      <div className={`${robotoMono.className} bg-reve-main`}>
        {children}
        <Footer dict={d} />
      </div>
    </div>
  );
};

export default Layout;
