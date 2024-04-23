'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pm, pmNorika, pmReve } from '@/utils';

export const LogoReve = () => {
  const lang = usePathname().substring(1).split('/').shift();
  return (
    <Link href={pmReve(lang!, '/')}>
      <Image
        src={'/svgs/reve/logo-reve.svg'}
        priority={true}
        height={72}
        width={180}
        alt="logo"
        className="drop-shadow-[3px_3px_1px_#000]"
      />
    </Link>
  );
};

export const NorikaLogo = () => {
  const lang = usePathname().substring(1).split('/').shift();
  return (
    <Link href={pmNorika(lang!, '/')} className="flex items-center">
      <Image
        src={'/svgs/norika/logo-norika.svg'}
        priority={true}
        height={64}
        width={64}
        alt="logo"
        // className="drop-shadow-[3px_3px_1px_#000]"
      />
      <span className="pl-3 text-3xl text-white">徳薫</span>
    </Link>
  );
};

export const RabbitLogo = () => {
  const lang = usePathname().substring(1).split('/').shift();
  return (
    <Link href={pm(lang!, '/')} className="flex items-center">
      <Image
        src={'/svgs/rabbit/logo-rabbit.svg'}
        priority={true}
        height={64}
        width={64}
        alt="logo"
        // className="drop-shadow-[3px_3px_1px_#000]"
      />
      <span className="text-xl md:text-3xl">株式会社ラビット</span>
    </Link>
  );
};
