export const Header = () => {
  return (
    <div className="my-4 bg-[url('/svgs/norika/header/news.svg')] relative max-w-screen-xl mx-auto py-6 sm:py-14 lg:py-32 bg-center bg-cover">
      <div className="z-30 relative left-4 w-28 md:left-24 bg-rose-50 bg-opacity-20 md:bg-opacity-0 px-1 md:w-64 rounded-lg md:py-12 md:px-12 backdrop-blur-sm">
        <p className="mb-2 font-semibold text-rose-500 md:mb-3 md:text-lg">
          Introducing
        </p>

        <h1 className="text-4xl font-bold tracking-wider text-reve-sub md:text-5xl lg:text-6xl">
          News
        </h1>
        <p className="text-sm md:text-lg lg:text-xl">お知らせ</p>
      </div>
    </div>
  );
};
