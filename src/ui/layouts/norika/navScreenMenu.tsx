'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { norikaNav, pm } from '../../../utils';

export const NavScreenMenu = ({ path }: { path?: string }) => {
  const hookPathname = usePathname();
  const pathname = path || hookPathname;
  const segments = pathname.split('/');
  const lang = segments[1];
  // パスの長さによって表示するナビゲーションを変更
  // current path
  const cPath = () => {
    // root path
    const rPath = 3;
    // page path
    const pPath = 3;
    if (segments.length === rPath) {
      return segments[pPath - 1];
    } else if (segments.length > rPath) {
      return segments[pPath];
    }
  };
  return (
    <nav>
      <ul className="hidden items-center justify-around lg:flex">
        {norikaNav.map((n) => (
          <li
            key={n.label}
            className={clsx(
              'mx-4 cursor-pointer text-center text-amber-100 duration-300 hover:text-amber-200',
              cPath() === n.label && 'text-reve-main',
            )}
          >
            <Link href={pm(lang, n.href)}>
              <span className="text-lg">{n.sub}</span>
              <p className="text-sm tracking-wider">{n.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
