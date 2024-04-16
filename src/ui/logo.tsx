import Image from 'next/image';
import Link from 'next/link';

export const LogoReve = () => {
  return (
    <Link href={'/'}>
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
