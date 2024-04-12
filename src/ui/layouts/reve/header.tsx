import { NavMobile, NavScreen } from '@/ui/layouts/reve';
import { LogoReve } from '@/ui/reve';

export const Header = async () => {
  return (
    <header className="relative mx-4 flex h-20 w-[calc(100%-2rem)] items-center justify-between rounded-2xl bg-reve-sub px-8 shadow-reve-header">
      {/* ロゴ */}
      <LogoReve />
      {/* ナビゲーション */}
      <NavMobile />
      <NavScreen />
    </header>
  );
};
