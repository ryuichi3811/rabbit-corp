'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RabbitLogo } from '@/ui';
import LocaleSwitcher from '@/ui/locale-switcher';
import { norikaNav, pm, pmNorika } from '@/utils';

export const Footer = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  const lang = usePathname().substring(1).split('/').shift();
  return (
    <>
      <footer className="bg-rose-300 pt-4 sm:pt-6 lg:pt-8">
        <div className="flex flex-col items-center pt-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
              <div className="col-span-full lg:col-span-2">
                {/* <!-- logo - start --> */}
                <div className="mb-4 lg:-mt-2">
                  <Link
                    href={pmNorika(d.lang, '/')}
                    className="inline-flex items-center gap-2 text-xl text-slate-700 md:text-2xl"
                    aria-label="logo"
                  >
                    <Image
                      src="/svgs/norika/logo-norika.svg"
                      alt="logo"
                      height={64}
                      width={64}
                    />
                    <span className="pl-3 text-3xl text-white">徳薫</span>
                  </Link>
                </div>
                {/* <!-- logo - end --> */}

                <p className="mb-6 text-white sm:pr-8">
                  {d.norika_footer_description}
                </p>

                <div className="mx-0 -ml-8 scale-75 rounded-xl bg-white bg-opacity-10 p-4 backdrop-blur-sm [&_span]:text-white">
                  <RabbitLogo />
                </div>

                {/* locale switcher start */}
                <div className="flex justify-start pl-1 pt-3 md:pl-6">
                  <LocaleSwitcher lang={lang!} />
                </div>
                {/* locale switcher end */}
              </div>

              {/* <!-- nav - start --> */}
              <div className="col-span-4 flex flex-col items-center">
                <div className="mb-4 text-xl font-bold uppercase tracking-widest text-rose-700">
                  menu
                </div>

                <nav className="flex flex-col gap-4">
                  {norikaNav.map((nav) => (
                    <div key={nav.label}>
                      <Link
                        href={pm(d.lang, nav.href)}
                        className="text-white transition duration-100 hover:text-rose-500 active:text-rose-600"
                      >
                        {d.lang === 'ja' ? nav.sub : nav.name}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
              {/* <!-- nav - end --> */}
            </div>

            <div className="border-t py-8 text-center text-sm text-white">
              &copy;2024 Rabbit Corp.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
