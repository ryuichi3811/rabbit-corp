import Image from 'next/image';

export const Header = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <>
      <div className="text-slate-700">
        <div className="relative mx-auto min-h-[40.625rem] overflow-hidden px-5 py-12 md:min-h-[35rem]">
          <div className="absolute left-0 top-0 flex w-full items-end justify-center">
            <Image
              className="absolute left-0 top-80 h-72 w-[8.625rem] md:top-0 md:block md:h-[31.25rem] md:w-[15rem]"
              src={'/svgs/norika/service_left.svg'}
              alt=""
              width={240}
              height={500}
            />
            <Image
              className="absolute -top-14 md:-top-8"
              src={'/svgs/norika/service_bed.svg'}
              alt=""
              width={500}
              height={400}
            />
            <Image
              className="absolute right-0 top-80 h-72 w-[8.625rem] md:top-0 md:block md:h-[31.25rem] md:w-[15rem]"
              src={'/svgs/norika/service_right.svg'}
              alt=""
              width={240}
              height={500}
            />
          </div>
          <div className="container relative flex w-full flex-col pl-4 md:pl-20">
            <p className="title-font mb-1 text-center text-sm font-bold tracking-widest text-rose-500">
              {d.norika_about_header_subtitle}
            </p>
            <h1 className="title-font text-center text-5xl font-semibold sm:text-6xl">
              {d.norika_about_header_title}
            </h1>
          </div>
        </div>
        <div className="h-auto w-full">
          <Image
            src={'/svgs/norika/border/1.svg'}
            alt=""
            width={1800}
            height={300}
          />
        </div>
      </div>
    </>
  );
};
