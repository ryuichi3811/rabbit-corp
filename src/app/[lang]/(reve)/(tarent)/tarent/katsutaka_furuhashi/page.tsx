import { Metadata } from 'next';
import { Header } from '../ui/header';
import { ProfileSection } from '../ui/profile';
import { Locale, setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata('Reve');

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const nav = {
    href: '/tarent/profile',
    name: 'Profile',
  };
  const profile = {
    img_face: 'bg-[url("/tarent/katsutaka_furuhashi/face.png")]',
    img_body: 'bg-[url("/tarent/katsutaka_furuhashi/body.png")]',
    img_fullBody: 'bg-[url("/tarent/katsutaka_furuhashi/fullBody.png")]',
    name_ja: '古橋 克陵',
    kana: 'ふるはし かつたか',
    name_en: 'Katsutaka Furuhashi',
    birthday: '1996/02/03',
    height: '171cm',
    weight: '63kg',
    foot: '26.5cm',
    hobbies: ['ウォーキング', 'スポーツ観戦'],
    special_skills: ['水泳'],
    favorite_food: ['唐揚げ', '餃子'],
    holidays: ['動画鑑賞', '自転車'],
    comments: 'よろしくお願いします。',
  };
  return (
    <>
      <div className="pt-4">
        <Header nav={nav} lang={lang} />
      </div>
      <div className={`min-h-[calc(100vh-96px-320px)] w-full pt-24`}>
        <ProfileSection profile={profile} />
      </div>
    </>
  );
};

export default Page;
