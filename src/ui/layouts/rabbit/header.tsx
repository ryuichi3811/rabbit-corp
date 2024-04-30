import { NavMobileMenu, NavScreenMenu } from '.';
import { RabbitLogo } from '@/ui';

export const Header = async () => {
  return (
    <header className="fixed z-50 flex h-20 w-full bg-white bg-opacity-80 items-center justify-between px-4 shadow-lg">
      {/* ロゴ */}
      <RabbitLogo />
      {/* ナビゲーション */}
      <NavMobileMenu />
      <NavScreenMenu />
    </header>
  );
};
