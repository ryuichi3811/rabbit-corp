export const Header = () => {
  return (
    <>
      <div className="relative mx-auto mt-24 flex h-[13rem] max-w-screen-xl justify-center bg-[url('/svgs/norika/header/contacts.svg')] bg-cover bg-center py-6 sm:py-8 md:h-[26rem] lg:py-24">
        <div className="absolute -top-20 px-4 md:px-8">
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
