export const Header = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    // <div className="relative h-[calc(100vh-112px+0px)] w-full overflow-x-hidden py-0 md:pb-[calc(5%+16px)] md:pt-[5%]">
    <div className="relative my-8 h-[100vw] w-full overflow-x-hidden md:h-[700px] md:pb-[calc(5%+16px)] md:pt-[5%]">
      {/* 画像 */}
      <div className="absolute bottom-0 right-0 h-full w-full bg-no-repeat [background-size:100%] md:bottom-auto md:right-[5%] md:h-[86.5%] md:w-2/3 md:bg-[url('/images/reve/top-header.webp')]  md:bg-bottom lg:h-[82.5%] xl:h-[78.5%] xl:w-1/2"></div>
      {/* 見出し */}
      <div className="absolute md:top-auto left-4 md:left-[5%]">
        <section>
          <h1 className="animate-text-shadow-drop-br text-[13.8vw] font-bold leading-snug tracking-tighter md:mt-5 md:text-8xl md:leading-normal md:tracking-wide xl:text-9xl">
            <span className="block md:pb-4 lg:pb-8 xl:pb-4">
              {d.reve_top_title_headline_1}
            </span>
            <span className="block md:pb-4 lg:pb-8 xl:pb-4">
              {d.reve_top_title_headline_2}
            </span>
            <span className="block">{d.reve_top_title_headline_3}</span>
          </h1>
        </section>
      </div>
    </div>
  );
};
