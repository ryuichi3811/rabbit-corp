import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '../ui/header';
import { AspectRatio } from '@/ui';
import { Locale, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('Reve');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const nav = {
    href: '/tarent/profile',
    name: 'Profile',
  };
  const profiles = [
    {
      img_face: 'bg-[url("/tarent/ryuichi_fujita/face.png")]',
      name_ja: '藤田 竜唯千',
      kana: 'ふじた りゅういち',
      link: 'ryuichi_fujita',
    },
    {
      img_face: 'bg-[url("/tarent/katsutaka_furuhashi/face.png")]',
      name_ja: '古橋 克陵',
      kana: 'ふるはし かつたか',
      link: 'katsutaka_furuhashi',
    },
  ];
  return (
    <>
      <div className="pt-4">
        <Header nav={nav} lang={lang} />
      </div>
      <div className={`min-h-[calc(100vh-96px-320px)] w-full pt-24`}>
        <div className="grid grid-cols-1 justify-items-center px-4 sm:grid-cols-2 md:grid-cols-3">
          {profiles.map((profile, i) => (
            <div className="w-full max-w-[400px] p-8" key={i}>
              <AspectRatio ratio={4 / 5} className="pb-4">
                <Link href={profile.link}>
                  <div
                    className={clsx(
                      'h-full w-full bg-cover bg-center drop-shadow-lg',
                      profile.img_face,
                    )}
                  ></div>
                </Link>
              </AspectRatio>
              <div className="">
                <h1 className="text-center text-3xl">{profile.name_ja}</h1>
                <p className="text-center">{profile.kana}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
