'use client';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { pmReve, reveNav } from '../../../utils';
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
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-reve-color text-xl tracking-widest text-white hover:bg-reve-color/90 focus:bg-reve-color/80 focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 active:bg-reve-color/80"
          href={pmReve(lang!, '/contact/#top')}
        >
          <EnvelopeClosedIcon className="h-6 w-6 text-reve-sub" />
        </Link>
      </div>
      <HamburgerButton
        onClick={handleClick}
        color="default"
        isOpened={isOpened}
      />
      <div
        className={clsx(
          'fixed left-3 top-2 z-40 flex h-full w-full items-center justify-center rounded-tl-2xl bg-reve-sub pb-6 pl-4 pr-7 pt-4 duration-700 ease-in-out',
          { 'translate-x-full bg-opacity-0 backdrop-blur-0': !isOpened },
          { 'translate-x-0 bg-opacity-60 backdrop-blur-md': isOpened },
        )}
      >
        {/* ロゴ */}
        <Link
          className="absolute left-4 top-4"
          href="/reve"
          onClick={handleClick}
        >
          <Image src={'/svgs/reve/reve.svg'} width={72} height={72} alt="" />
        </Link>
        {/* コンテンツ */}
        <div className="h-full w-full px-10 pb-10 pt-40">
          <div className="flex justify-end">
            <LocaleSwitcher lang={lang!} />
          </div>
          <nav>
            <ul>
              {reveNav.map((n) => (
                <li
                  key={n.label}
                  className="text-reve-color duration-300 [&+li]:mt-4"
                >
                  <Link href={n.href} onClick={handleClick}>
                    {n.label === 'contact' ? (
                      <Button
                        variant={'blur'}
                        size={'lg'}
                        className="mt-12 w-full rounded-full text-xl"
                      >
                        {n.name}
                      </Button>
                    ) : (
                      <p className="border-b border-reve-color pb-4 pl-2 text-xl tracking-widest">
                        {n.name}
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
