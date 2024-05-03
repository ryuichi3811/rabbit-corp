import Image from 'next/image';

export const TalentManagement = ({
  dict,
}: {
  dict: { [key: string]: string };
}) => {
  const d = dict;
  return (
    <div className="relative z-10 mb-32 w-full">
      {/* Header start */}
      <div className="relative flex justify-center py-24 backdrop-blur-md">
        <h1 className="relative z-10 text-center text-3xl md:text-4xl xl:text-5xl">
          Management
        </h1>
        <div className="absolute inset-0 h-[15rem] w-full bg-[url('/images/reve/domain/management.webp')] bg-cover opacity-35"></div>
        <div className="absolute -right-16 top-24 h-0 w-44 rotate-90 border-b-2 border-reve-sub sm:right-0 md:right-[10%]"></div>
        <div className="absolute -left-16 bottom-24 h-0 w-44 rotate-90 border-b-2 border-reve-sub sm:left-0 md:left-[10%]"></div>
        <div className="absolute left-0 top-20 h-0 w-52 border-b-2 border-reve-sub sm:left-0 md:left-[10%] lg:w-1/3"></div>
        <div className="absolute bottom-20 right-0 h-0 w-52 border-b-2 border-reve-sub sm:right-0 md:right-[10%] lg:w-1/3"></div>
      </div>
      {/* Header end */}
      {/* Content start */}
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="my-14 text-center text-2xl sm:text-base md:text-3xl lg:text-4xl">
            {d.reve_domain_management_title}
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
            {/* feature - start  */}
            <div className="flex flex-col items-center backdrop-blur-md">
              <div className="mb-2 flex h-16 w-16 items-center justify-center sm:mb-4 md:h-20 md:w-20">
                <Image
                  src="/svgs/reve/icon/contract.svg"
                  alt="contract icon"
                  height={100}
                  width={100}
                />
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                {d.reve_domain_management_service_title_01}
              </h3>
              <p className="mb-2 text-center text-gray-500">
                {d.reve_domain_management_service_description_01}
              </p>
            </div>
            {/* feature - end  */}

            {/* feature - start  */}
            <div className="flex flex-col items-center backdrop-blur-md">
              <div className="mb-2 flex h-16 w-16 items-center justify-center sm:mb-4 md:h-20 md:w-20">
                <Image
                  src="/svgs/reve/icon/goods.svg"
                  alt="goods icon"
                  height={100}
                  width={100}
                />
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                {d.reve_domain_management_service_title_02}
              </h3>
              <p className="mb-2 text-center text-gray-500">
                {d.reve_domain_management_service_description_02}
              </p>
            </div>
            {/* feature - end  */}

            {/* feature - start  */}
            <div className="flex flex-col items-center backdrop-blur-md">
              <div className="mb-2 flex h-16 w-16 items-center justify-center sm:mb-4 md:h-20 md:w-20">
                <Image
                  src="/svgs/reve/icon/blog.svg"
                  alt="community icon"
                  height={100}
                  width={100}
                />
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                {d.reve_domain_management_service_title_03}
              </h3>
              <p className="mb-2 text-center text-gray-500">
                {d.reve_domain_management_service_description_03}
              </p>
            </div>
            {/* feature - end  */}

            {/* feature - start  */}
            <div className="flex flex-col items-center backdrop-blur-md">
              <div className="mb-2 flex h-16 w-16 items-center justify-center sm:mb-4 md:h-20 md:w-20">
                <Image
                  src="/svgs/reve/icon/portrait.svg"
                  alt="portrait icon"
                  height={100}
                  width={100}
                />
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                {d.reve_domain_management_service_title_04}
              </h3>
              <p className="mb-2 text-center text-gray-500">
                {d.reve_domain_management_service_description_04}
              </p>
            </div>
            {/* feature - end  */}

            {/* feature - start  */}
            <div className="flex flex-col items-center backdrop-blur-md">
              <div className="mb-2 flex h-16 w-16 items-center justify-center sm:mb-4 md:h-20 md:w-20">
                <Image
                  src="/svgs/reve/icon/media.svg"
                  alt="media icon"
                  height={100}
                  width={100}
                />
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                {d.reve_domain_management_service_title_05}
              </h3>
              <p className="mb-2 text-center text-gray-500">
                {d.reve_domain_management_service_description_05}
              </p>
            </div>
            {/* feature - end  */}

            {/* feature - start  */}
            <div className="flex flex-col items-center backdrop-blur-md">
              <div className="mb-2 flex h-16 w-16 items-center justify-center sm:mb-4 md:h-20 md:w-20">
                <Image
                  src="/svgs/reve/icon/event.svg"
                  alt="event icon"
                  height={100}
                  width={100}
                />
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                {d.reve_domain_management_service_title_06}
              </h3>
              <p className="mb-2 text-center text-gray-500">
                {d.reve_domain_management_service_description_06}
              </p>
            </div>
          </div>
        </div>
        {/* Content end */}
      </div>
    </div>
  );
};
