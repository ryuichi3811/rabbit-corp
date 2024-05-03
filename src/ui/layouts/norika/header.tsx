import { NavMobileMenu, NavScreenMenu } from '.';
import { NorikaLogo } from '@/ui';

export const Header = async () => {
  return (
    <header className="fixed top-0 z-50 flex h-24 w-full items-center justify-between rounded-b-3xl bg-norika-color px-8 shadow-lg md:pb-2 md:pt-4">
      {/* ロゴ */}
      <NorikaLogo />
      {/* ナビゲーション */}
      <NavMobileMenu />
      <NavScreenMenu />
    </header>
  );
};
