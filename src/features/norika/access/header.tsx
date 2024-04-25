export const Header = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <>
      <div className="text-slate-700">
        <div className="container mx-auto px-5 py-12">
          <div className="relative flex w-full flex-col pl-4 md:pl-20">
            <p className="title-font mb-1 text-sm font-bold tracking-widest text-rose-500">
              {d.norika_access_header_subtitle}
            </p>
            <h1 className="title-font text-4xl font-semibold sm:text-5xl">
              {d.norika_access_header_title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
