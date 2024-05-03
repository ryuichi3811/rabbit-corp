import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { pm } from '@/utils';

export const Hero = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <div className="mt-2 bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="relative flex min-h-[530px] flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          {/* image - start */}
          <Image
            src="/images/rabbit/rabbit-header.webp"
            loading="lazy"
            width={3552}
            height={2368}
            alt="Rabbit Header Design"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* image - end */}

          {/* overlay - start */}
          <div className="absolute inset-0 bg-pink-300 mix-blend-multiply"></div>
          {/* overlay - end */}

          {/* text start */}
          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <p className="mb-4 text-center text-lg text-pink-100 sm:text-xl md:mb-8">
              {d.rabbit_top_hero_subtitle}
            </p>
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              {d.rabbit_top_hero_title}
            </h1>

            <div className="flex w-full justify-center tracking-wider">
              <Link
                href={pm(d.lang, '/about')}
                className="inline-flex w-40 items-center justify-between rounded-lg bg-pink-700 px-8 py-3 text-center text-sm text-white outline-none ring-pink-900 transition duration-100 hover:bg-pink-600 focus-visible:ring active:bg-pink-600 md:text-base"
              >
                {d.rabbit_top_hero_button_text}{' '}
                <ArrowRightIcon className="h-6 w-6" />
              </Link>

              {/* <Link
                href={pm(d.lang, '/about')}
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm text-gray-700 outline-none ring-pink-900 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                {d.rabbit_top_hero_button_text}
              </Link> */}
            </div>
          </div>
          {/* text end */}
        </section>
      </div>
    </div>
  );
};
