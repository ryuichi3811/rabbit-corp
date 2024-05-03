'use client';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { norikaNav, pmNorika } from '../../../utils';
import { Button } from '../../button';
import { HamburgerButton } from '@/ui';
import LocaleSwitcher from '@/ui/locale-switcher';

export const NavMobileMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  const lang = usePathname().substring(1).split('/').shift();

  return (
    <div className="relative">
      <div className="fixed right-20 top-9 z-50 lg:hidden">
        <Link
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-xl tracking-widest text-white hover:bg-rose-400 focus:bg-rose-400 focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-rose-400 active:bg-rose-400"
          href={pmNorika(lang!, '/contact#top')}
        >
          <EnvelopeClosedIcon className="h-6 w-6 text-white" />
        </Link>
      </div>
      <HamburgerButton
        onClick={handleClick}
        color="default"
        isOpened={isOpened}
      />
      <div
        className={clsx(
          'fixed left-3 top-2 z-40 flex h-full w-full items-center justify-center rounded-tl-2xl bg-rose-100 pb-6 pl-4 pr-7 pt-4 duration-700 ease-in-out',
          { 'translate-x-full bg-opacity-0 backdrop-blur-0': !isOpened },
          { 'translate-x-0 bg-opacity-60 backdrop-blur-sm': isOpened },
        )}
      >
        {/* ロゴ */}
        <Link
          className="absolute left-4 top-4"
          href="/norika#top"
          onClick={handleClick}
        >
          <Image
            src={'/svgs/norika/logo-norika.svg'}
            width={64}
            height={64}
            alt=""
          />
        </Link>
        {/* コンテンツ */}
        <div className="h-full w-full px-10 pb-10 pt-40">
          <div className="flex justify-end [&_button]:border-slate-800 [&_button]:text-slate-800">
            <LocaleSwitcher lang={lang!} />
          </div>
          <nav>
            <ul>
              {norikaNav.map((n) => (
                <li
                  key={n.label}
                  className="text-slate-700 duration-300 [&+li]:mt-4"
                >
                  <Link href={n.href + '#top'} onClick={handleClick}>
                    {n.label === 'contact' ? (
                      <Button
                        variant={'default'}
                        size={'lg'}
                        className="mt-12 w-full rounded-full bg-rose-500 text-xl tracking-widest text-white hover:bg-rose-400 focus:bg-rose-400 focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-rose-400 active:bg-rose-400"
                      >
                        {lang == 'ja' ? n.sub : n.name}
                      </Button>
                    ) : (
                      <p className="border-b border-slate-700 pb-4 pl-2 text-xl tracking-widest">
                        {lang == 'ja' ? n.sub : n.name}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
