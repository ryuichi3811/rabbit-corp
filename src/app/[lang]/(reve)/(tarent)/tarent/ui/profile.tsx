'use client';

import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { AspectRatio, Button } from '@/ui';
import { Carousel, CarouselContent, CarouselItem } from '@/ui/carousel';

export type Profile = {
  img_face: string;
  img_body: string;
  img_fullBody: string;
  name_ja: string;
  kana: string;
  name_en: string;
  birthday: string;
  height: string;
  weight: string;
  foot: string;
  hobbies: string[];
  special_skills: string[];
  favorite_food: string[];
  holidays: string[];
  comments: string;
};

export const ProfileSection = ({ profile }: { profile: Profile }) => {
  const p = profile;
  const imgs = [p.img_face, p.img_body, p.img_fullBody];
  return (
    <section>
      {/* Profile start */}
      <div className="pt-4 md:hidden">
        <p className="text-center text-3xl font-bold [text-shadow:0_.25rem_.25rem_#aaa]">
          {p.name_en}
        </p>
      </div>
      <div className="mx-auto h-full w-full max-w-screen-xl justify-around pt-8 md:flex md:py-20">
        <div className="w-full md:h-[500px] md:w-[400px] lg:h-[550px] lg:w-[440px] [&_div]:h-full">
          <AspectRatio ratio={4 / 5}>
            <Carousel
              className="drop-shadow-lg"
              plugins={[Autoplay({ delay: 4000 })]}
            >
              <CarouselContent className="w-full md:h-[500px] md:w-[400px] lg:h-[550px] lg:w-[440px]">
                {/* <AspectRatio ratio={4 / 5}> */}
                {imgs.map((img, i) => (
                  <CarouselItem
                    key={i}
                    className={clsx(
                      'h-full w-full min-w-0 bg-cover bg-center pl-0',
                      img,
                    )}
                  ></CarouselItem>
                ))}
                {/* </AspectRatio> */}
              </CarouselContent>
            </Carousel>
          </AspectRatio>
        </div>
        <div className="flex items-center justify-center pb-20 pt-28 md:py-0">
          <div className="lg:w-[500px]">
            <h1 className="pb-2 text-center text-4xl">{p.name_ja}</h1>
            <p className="text-center">{p.kana}</p>
            <div className="flex flex-col gap-2 px-4 pt-6 md:px-0">
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">生年月日</p>
                <p>{p.birthday}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">身長</p>
                <p>{p.height}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">体重</p>
                <p>{p.weight}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">足のサイズ</p>
                <p>{p.foot}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">趣味</p>
                <div className="">
                  {p.hobbies.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">特技</p>
                <div className="">
                  {p.special_skills.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">好きな食べ物</p>
                <div className="">
                  {p.favorite_food.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b py-2">
                <p className="font-bold lg:pl-10">休日の過ごし方</p>
                <div className="">
                  {p.holidays.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Profile end */}
      <div className="px-4 pb-32">
        <h2 className="pb-8 text-center text-2xl font-bold">メッセージ</h2>
        <div className="mx-auto max-w-screen-lg rounded-xl border bg-white px-4 py-6">
          <p>{p.comments}</p>
        </div>
        <div className="flex justify-center pt-16">
          <Button size={'lg'} variant={'default'} asChild>
            <Link href="profile">一覧に戻る</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
