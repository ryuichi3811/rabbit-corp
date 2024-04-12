import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { reveNav } from '../../utils';
import { Button } from '.';

export const NavMobileMenu = ({
  isOpened,
  onClick,
}: {
  isOpened: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={clsx(
        'fixed left-3 top-2 z-40 flex h-full w-full items-center justify-center rounded-tl-2xl bg-reve-sub pb-6 pl-4 pr-7 pt-4 duration-700 ease-in-out',
        { 'translate-x-full bg-opacity-0 backdrop-blur-0': !isOpened },
        { 'translate-x-0 bg-opacity-60 backdrop-blur-md': isOpened },
      )}
    >
      {/* ロゴ */}
      <Link className="absolute left-4 top-4" href="/reve" onClick={onClick}>
        <Image src={'/svgs/reve/reve.svg'} width={72} height={72} alt="" />
      </Link>
      {/* コンテンツ */}
      <div className="h-full w-full px-10 pb-10 pt-40">
        <nav>
          <ul>
            {reveNav.map((n) => (
              <li
                key={n.label}
                className="text-reve-color duration-300 [&+li]:mt-4"
              >
                <Link href={n.href} onClick={onClick}>
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
  );
};
