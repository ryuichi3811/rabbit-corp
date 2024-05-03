'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pm, reveNav } from '../../../utils';

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
        {reveNav.map((n) => (
          <li
            key={n.label}
            className={clsx(
              'mx-4 text-center text-reve-color drop-shadow-[1px_4px_0px_#000] duration-300 hover:block hover:w-full hover:rounded-full hover:shadow-reve-hover-light',
              cPath() === n.label && 'text-reve-main',
            )}
          >
            <Link href={pm(lang, n.href)}>
              <p className="text-xl">{n.name}</p>
              <span className="hover:block hover:w-full hover:shadow-reve-hover-light"></span>
              <span className="text-xs">{n.sub}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
