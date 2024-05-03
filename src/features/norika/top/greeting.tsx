'use client';

import Image from 'next/image';
import { AspectRatio } from '@/ui';

export const Greeting = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <>
      <div className="h-auto w-full pt-12">
        <Image
          src={'/svgs/norika/top/border/2.svg'}
          alt=""
          width={2000}
          height={100}
        />
      </div>
      <section className="container max-w-screen-lg py-12 text-slate-700">
        <h2 className="pb-12 text-center text-2xl font-bold md:pt-8">
          {d.norika_top_greeting_title}
        </h2>
        <div className="flex flex-col items-center justify-around md:flex-row">
          <div className="w-64">
            <AspectRatio ratio={3 / 4}>
              <Image
                className="rounded-3xl"
                src={'/images/norika/owner.jpg'}
                alt="owner image"
                width={1108}
                height={1477}
              />
            </AspectRatio>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-12 text-base font-medium leading-loose md:mt-auto">
              {d.norika_top_greeting_description}
            </p>
          </div>
        </div>
      </section>
      <div className="">
        <Image
          src={'/svgs/norika/border/3.svg'}
          alt=""
          width={2000}
          height={100}
        />
      </div>
    </>
  );
};
