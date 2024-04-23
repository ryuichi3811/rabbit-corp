'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pm, rabbitNav } from '../../../utils';

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
        {rabbitNav.map((n) => (
          <li
            key={n.label}
            className={clsx(
              'border-black px-8 text-center text-slate-900 duration-300 [&+li]:border-l',
              cPath() === n.label && 'text-slate-400',
            )}
          >
            <Link href={pm(lang, n.href)}>
              <p className="text-xl">{n.name}</p>
              <span className="text-xs">{n.sub}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
