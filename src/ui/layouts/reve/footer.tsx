'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoReve, RabbitLogo } from '@/ui';
import LocaleSwitcher from '@/ui/locale-switcher';
import { pm, reveNav } from '@/utils';

export const Footer = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  const lang = usePathname().substring(1).split('/').shift();
  return (
    <footer className="bg-reve-sub pt-4 sm:pt-6 lg:pt-8">
      <div className="pt-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div className="col-span-full flex flex-col items-start justify-start lg:col-span-2">
              {/* <!-- logo - start --> */}
              <div className="mb-4 lg:-mt-2">
                <LogoReve />
              </div>
              {/* <!-- logo - end --> */}

              <p className="mb-6 text-white sm:pr-8">
                {d.reve_footer_description}
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
              <div className="mb-4 text-xl font-bold uppercase tracking-widest text-reve-color">
                menu
              </div>

              <nav className="flex flex-col gap-4">
                {reveNav.map((nav) => (
                  <div key={nav.label}>
                    <Link
                      href={pm(d.lang, nav.href)}
                      className="text-white transition duration-100 hover:text-amber-200 active:text-amber-300"
                    >
                      {d.lang === 'ja' ? nav.sub : nav.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            {/* <!-- nav - end --> */}
          </div>

          <div className="border-t py-8 text-center text-sm text-reve-color">
            &copy;2024 Rabbit Corp.
          </div>
        </div>
      </div>
    </footer>
  );
};
