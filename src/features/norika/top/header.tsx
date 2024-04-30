import Image from 'next/image';

export const Header = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <>
      <div className="relative w-full text-slate-700">
        <div className="flex max-h-[calc(100vh-96px)] w-full flex-col items-center py-4">
          <div className="">
            <Image
              alt=""
              src={'/svgs/norika/top/border/1.svg'}
              width={2000}
              height={100}
            />
          </div>
          <div className="relative mx-4 flex max-h-[31.25rem] max-w-screen-2xl items-center justify-center overflow-hidden rounded-3xl py-2 md:mx-12">
            <Image
              className="content-center rounded-3xl"
              src={'/images/norika/top-header.webp'}
              alt="Header image for norika"
              width={1366}
              height={880}
            />

            <div className="absolute h-full w-full bg-rose-300 bg-opacity-30"></div>
            <div className="absolute top-[calc(50%-36px)] rounded-3xl bg-rose-50 bg-opacity-20 px-8 py-4 backdrop-blur-[2px] md:left-[10%] md:top-1/4 md:px-16">
              <h1 className="text-3xl text-white md:text-5xl lg:text-6xl">
                {d.norika_top_hero_title}
              </h1>
            </div>
          </div>

          <div className="">
            <Image
              alt=""
              src={'/svgs/norika/top/border/2.svg'}
              width={2000}
              height={100}
            />
          </div>
        </div>
        <div className="flex w-full justify-center px-8 py-24 relative">
          <div className="w-full max-w-screen-lg">
            <h2 className="text-2xl text-rose-300 md:text-4xl leading-[3rem] md:leading-[6rem]">
              <span className="block">{d.norika_top_hero_subtitle_1}</span>
              <span className="block pl-4">{d.norika_top_hero_subtitle_2}</span>
            </h2>
          </div>
          <div className="absolute top-0 right-8 md:right-[15%] md:h-80 md:w-80 h-28 w-28">
            <Image
                className='[animation:_spin_30s_linear_infinite;]'
              alt=""
              src={'/svgs/norika/top/top_circle.svg'}
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="rotate-180">
            <Image
                alt=""
                src={'/svgs/norika/top/border/1.svg'}
                width={2000}
                height={100}
            />
        </div>
      </div>
    </>
  );
};
