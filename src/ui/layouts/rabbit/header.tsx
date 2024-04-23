import { NavMobileMenu, NavScreenMenu } from '.';
import { RabbitLogo } from '@/ui';

export const Header = async () => {
  return (
    <header className="relative flex h-20 w-full items-center justify-between px-4">
      {/* ロゴ */}
      <RabbitLogo />
      {/* ナビゲーション */}
      <NavMobileMenu />
      <NavScreenMenu />
    </header>
  );
};
