import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/ui';
import { pmReve } from '@/utils';

export const Domain = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <>
      <section className="relative z-10 mb-32">
        {/* header start */}
        <div className="mt-32">
          <h2
            className={clsx(
              'text-center text-2xl tracking-wider lg:text-3xl',
              'font-bold',
            )}
          >
            {d.reve_top_domain_title}
          </h2>
        </div>
        {/* header end */}
        {/* content start */}
        <div className="body-font text-reve-sub">
          <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
            <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <Image
                className="h-52 rounded-2xl object-cover md:h-80"
                alt="management header image"
                src="/images/reve/domain/management.webp"
                width={720}
                height={600}
              />
            </div>
            <div className="flex flex-col items-center text-center backdrop-blur-md md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <h3 className="title-font mb-4 pb-4 text-2xl font-medium text-gray-900 sm:text-3xl md:pb-8">
                {d.reve_top_domain_management_title}
              </h3>
              <p className="mb-8 leading-relaxed">
                {d.reve_top_domain_management_description}
              </p>
              <div className="flex justify-center">
                <Link href={pmReve(d.lang, '/domain/management#top')}>
                  <Button size={'lg'} className="mt-8">
                    {d.reve_top_domain_button_text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* content end */}
      </section>
    </>
  );
};
