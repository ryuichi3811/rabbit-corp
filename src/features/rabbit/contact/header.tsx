import Image from 'next/image'; // Import the Image component from the appropriate library

export const Header = () => {
  return (
    <>
      <div className="my-4 bg-pink-700 py-6 sm:py-8 lg:py-10">
        
      <Image
            src="/images/rabbit/rabbit-header.webp"
            loading="lazy"
            width={3552}
            height={2368}
            alt="Rabbit Header Design"
            className="absolute top-28 inset-0 h-64 md:h-[296px] lg:h-[360px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 h-64 md:h-[296px] lg:h-[360px] top-28 bg-pink-300 mix-blend-multiply"></div>
          
          <div className="relative flex flex-col items-center p-4 w-full">

        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 w-full">
          <div className="rounded-lg bg-reve-main/70 px-4 py-6 md:py-8 lg:py-12">
            <p className="mb-2 text-center font-semibold text-[rgb(73_35_50)] md:mb-3 lg:text-lg">
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
          </div>
    </>
  );
};
