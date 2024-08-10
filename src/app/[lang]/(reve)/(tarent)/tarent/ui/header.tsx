import Link from 'next/link';
import { LogoReve } from '@/ui';
import { url } from '@/utils/constants';

export const pathMerge = (locale: string, path: string) => {
  return url + locale + path;
};

export const Header = async ({
  nav,
  lang,
}: {
  nav: { href: string; name: string };
  lang: string;
}) => {
  return (
    <header className="fixed z-50 mx-4 flex h-20 w-[calc(100%-2rem)] items-center justify-between rounded-2xl bg-reve-sub px-8 shadow-reve-header">
      {/* ロゴ */}
      <LogoReve />
      {/* ナビゲーション */}
      <div className="text-xl text-reve-color">
        <Link href={pathMerge(lang, nav.href)}>{nav.name}</Link>
      </div>
    </header>
  );
};
