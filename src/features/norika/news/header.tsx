export const Header = () => {
  return (
    <div
      id="top"
      className="relative mx-auto my-4 max-w-screen-xl bg-[url('/svgs/norika/header/news.svg')] bg-cover bg-center py-6 sm:py-14 lg:py-32"
    >
      <div className="relative left-4 z-30 w-28 rounded-lg bg-rose-50 bg-opacity-20 px-1 backdrop-blur-sm md:left-24 md:w-64 md:bg-opacity-0 md:px-12 md:py-12">
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
