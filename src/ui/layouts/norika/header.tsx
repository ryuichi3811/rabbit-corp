import { NavMobileMenu, NavScreenMenu } from '.';
import { NorikaLogo } from '@/ui';

export const Header = async () => {
  return (
    <header className="flex top-0 h-24 w-full fixed z-50 shadow-lg items-center justify-between rounded-b-3xl bg-norika-color px-8 md:pb-2 md:pt-4">
      {/* ロゴ */}
      <NorikaLogo />
      {/* ナビゲーション */}
      <NavMobileMenu />
      <NavScreenMenu />
    </header>
  );
};
