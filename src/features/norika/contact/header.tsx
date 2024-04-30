export const Header = () => {
  return (
    <>
      <div className="bg-[url('/svgs/norika/header/contacts.svg')] relative h-[13rem] md:h-[26rem] bg-center bg-cover py-6 sm:py-8 lg:py-24 mt-24 max-w-screen-xl mx-auto flex justify-center">
        <div className="px-4 md:px-8 absolute -top-20">
          <div className="rounded-lg p-4">
            <p className="mb-2 text-center font-semibold text-rose-500 md:mb-3 lg:text-lg">
              Introducing
            </p>

            <div className="mb-4">
              <h1 className="text-center text-4xl font-bold text-reve-sub md:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p className="text-center text-sm md:mt-2 md:text-lg lg:text-xl">
                お問い合わせ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
