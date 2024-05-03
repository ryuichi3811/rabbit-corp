import clsx from 'clsx';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export const Header = ({
  dict,
  tabState,
}: {
  dict: { [key: string]: string };
  tabState: [string, Dispatch<SetStateAction<string>>];
}) => {
  const d = dict;
  const [state, setState] = tabState;

  return (
    <>
      <div className="relative z-10 pb-1 shadow-md sm:pb-2 lg:pb-3">
        {/* nav - start */}
        {/* <nav className="sticky top-0 col-span-1 mx-auto grid w-full grid-cols-2 justify-around gap-8 overflow-x-hidden px-10 text-xs sm:max-w-screen-lg sm:rounded-t-xl sm:text-sm"> */}
        <nav className="sticky top-0 col-span-1 mx-auto grid w-full grid-cols-1 justify-around gap-8 overflow-x-hidden px-10 text-xs sm:max-w-screen-lg sm:rounded-t-xl sm:text-sm">
          {/* マネジメント タブ start */}
          <span
            onClick={() => setState('management')}
            className={clsx(
              'font-xs flex cursor-pointer flex-col items-center gap-1 text-reve-sub md:font-medium',
              state === 'management' &&
                'border-b border-reve-sub pb-1 duration-300',
            )}
          >
            <Image
              src="/svgs/reve/icon/management.svg"
              alt="sport management icon"
              height={32}
              width={32}
            />
            <span className="font-bold">{d.reve_domain_icon_management}</span>
          </span>
          {/* マネジメント タブ end */}

          {/* ホームページ制作 タブ start */}
          {/* <span
            onClick={() => {
              setState('website');
            }}
            className={clsx(
              'font-xs col-span-1 flex cursor-pointer flex-col items-center gap-1 text-reve-sub md:font-medium',
              state === 'website' &&
                'border-b border-reve-sub pb-1 duration-300',
            )}
          >
            <Image
              src="/svgs/reve/icon/website.svg"
              alt="website icon"
              height={32}
              width={32}
            />

            <span className="font-bold">{d.reve_domain_icon_website}</span>
          </span> */}
          {/* ホームページ制作 タブ end */}
        </nav>
        {/* nav - end */}
      </div>
    </>
  );
};
