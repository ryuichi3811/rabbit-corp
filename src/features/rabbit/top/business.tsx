import { pmNorika, pmReve } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export const Business = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap justify-center">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="title-font mb-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
              {d.rabbit_top_business_title}
            </h1>
            <div className="h-1 w-20 rounded bg-rose-700"></div>
          </div>
          <p className="w-full px-4 leading-relaxed text-slate-700 lg:w-1/2">
            {d.rabbit_top_business_description_1}
            <br />
            {d.rabbit_top_business_description_2}
            <br />
            {d.rabbit_top_business_description_3}
            <br />
            {d.rabbit_top_business_description_4}
          </p>
          <div className="mt-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:gap-20 md:px-20">
            {/* ContentCard start */}
            <Link
              href={pmReve(d.lang, '/')}
              className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 px-6 py-4 shadow-lg md:h-96 md:p-4"
            >
              <Image
                src="/images/reve/top-header.webp"
                loading="lazy"
                width={600}
                height={700}
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex h-48 w-full flex-col rounded-lg border-y-4 border-yellow-400 bg-white/20 p-4 text-center backdrop-blur-sm md:h-auto md:bg-white">
                <span className="text-xl font-bold text-slate-700 lg:text-xl">
                  {d.rabbit_top_business_reve_title}
                </span>
                <span className="text-sm font-semibold text-yellow-700">
                  {d.rabbit_top_business_reve_sub_title}
                </span>
              </div>
            </Link>
            {/* ContentCard end */}
            {/* ContentCard start */}
            <Link
              href={pmNorika(d.lang, '/')}
              className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 px-6 py-4 shadow-lg md:h-96 md:p-4"
            >
              <Image
                src="/images/norika/top-header.webp"
                loading="lazy"
                width={600}
                height={700}
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex h-48 w-full flex-col rounded-lg border-y-4 border-rose-300 bg-white/40 p-4 text-center backdrop-blur-sm md:h-auto md:bg-white">
                <span className="text-xl font-bold text-slate-700 lg:text-xl">
                  {d.rabbit_top_business_norika_title}
                </span>
                <span className="text-sm font-semibold text-rose-700">
                  {d.rabbit_top_business_norika_sub_title}
                </span>
              </div>
            </Link>
            {/* ContentCard end */}
          </div>
        </div>
      </div>
    </section>
  );
};
