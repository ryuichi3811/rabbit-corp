import { NavMobile, NavScreen } from '@/ui/layouts/reve';
import { LogoReve } from '@/ui/reve';

export const Header = async () => {
  return (
    <header className="h-28 w-full p-4">
      <div className="flex h-full w-full items-center justify-between rounded-2xl bg-reve-sub px-8 shadow-reve-header">
        {/* ロゴ */}
        <LogoReve />
        {/* ナビゲーション */}
        <NavMobile />
        <NavScreen />
      </div>
    </header>
  );
};

export const headerHeight = 112;
