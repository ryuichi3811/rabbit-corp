'use client';

import { AspectRatio } from '@/ui';
import Image from 'next/image';

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
      <section className="container py-12 text-slate-700 max-w-screen-lg">
        <h2 className='text-2xl text-center font-bold md:pt-8 pb-12'>{d.norika_top_greeting_title}</h2>
        <div className="flex-col md:flex-row flex items-center justify-around">
          <div className="w-64">
            <AspectRatio ratio={3 / 4}>
              <Image
              className='rounded-3xl'
                src={'/images/norika/owner.jpg'}
                alt="owner image"
                width={1108}
                height={1477}
              />
            </AspectRatio>
          </div>
          <div className="w-full md:w-1/2">
            
            <p className='font-medium text-base leading-loose mt-12 md:mt-auto'>{d.norika_top_greeting_description}</p>
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
