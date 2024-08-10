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
    img_face: 'bg-[url("/tarent/ryuichi_fujita/face.png")]',
    img_body: 'bg-[url("/tarent/ryuichi_fujita/body.png")]',
    img_fullBody: 'bg-[url("/tarent/ryuichi_fujita/fullBody.png")]',
    name_ja: '藤田 竜唯千',
    kana: 'ふじた りゅういち',
    name_en: 'Ryuichi Fujita',
    birthday: '1997/01/24',
    height: '167cm',
    weight: '59kg',
    foot: '27.5cm',
    hobbies: ['カラオケ'],
    special_skills: ['ソフトテニス', 'お絵描き'],
    favorite_food: ['エビ', 'あさり', 'ドトールのワッフル'],
    holidays: ['カラオケにいく'],
    comments:
      '周りの方々に支えられて今がある事を自負し、感謝の気持ちを忘れず、頂いた機会を精一杯頑張ります。',
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
