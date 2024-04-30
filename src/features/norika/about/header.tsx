import Image from "next/image";

export const Header = ({ dict }: { dict: { [key: string]: string } }) => {
    const d = dict;
    return (
      <>
        <div className="text-slate-700">
          <div className="mx-auto px-5 py-12 relative min-h-[40.625rem] md:min-h-[35rem] overflow-hidden">
            <div className="flex w-full justify-center items-end absolute top-0 left-0">
                <Image className="absolute md:h-[31.25rem] h-72 md:w-[15rem] w-[8.625rem] top-80 md:top-0 md:block left-0" src={'/svgs/norika/service_left.svg'} alt="" width={240} height={500} />
                <Image className="absolute -top-14 md:-top-8" src={'/svgs/norika/service_bed.svg'} alt="" width={500} height={400} />
                <Image className="absolute md:h-[31.25rem] h-72 md:w-[15rem] w-[8.625rem] top-80 md:top-0 md:block right-0" src={'/svgs/norika/service_right.svg'} alt="" width={240} height={500} />
            </div>
            <div className="relative flex w-full flex-col pl-4 md:pl-20 container">
              <p className="title-font mb-1 text-sm font-bold text-center tracking-widest text-rose-500">
                {d.norika_about_header_subtitle}
              </p>
              <h1 className="title-font text-5xl font-semibold text-center sm:text-6xl">
                {d.norika_about_header_title}
              </h1>
            </div>
          </div>
          <div className="w-full h-auto">
            <Image src={'/svgs/norika/border/1.svg'} alt="" width={1800} height={300} />
          </div>
        </div>
      </>
    );
  };
  