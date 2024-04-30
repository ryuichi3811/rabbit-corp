import { NavMobileMenu, NavScreenMenu } from '.';
import { LogoReve } from '@/ui';

export const Header = async () => {
  return (
    <header className="mx-4 fixed z-50 flex h-20 w-[calc(100%-2rem)] items-center justify-between rounded-2xl bg-reve-sub px-8 shadow-reve-header">
      {/* ロゴ */}
      <LogoReve />
      {/* ナビゲーション */}
      <NavMobileMenu />
      <NavScreenMenu />
    </header>
  );
};
