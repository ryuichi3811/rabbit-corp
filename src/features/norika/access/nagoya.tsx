import Image from 'next/image';
import Link from 'next/link';

export const Nagoya = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <>
      <div className="h-auto w-full">
        <Image
          src={'/svgs/norika/border/2.svg'}
          alt=""
          width={1800}
          height={300}
        />
      </div>
      <section className="relative my-8 text-slate-700">
        <div className="mt-4 flex items-center justify-center">
          <h2 className="w-1/2 rounded-3xl border-b-2 border-rose-300 bg-rose-100 px-8 py-3 text-center text-3xl font-bold md:text-4xl">
            {d.norika_access_nagoya_title}
          </h2>
        </div>
        <div className="container mx-auto flex flex-wrap px-5 py-12 sm:flex-nowrap">
          <div className="relative flex min-h-80 w-full items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
            <iframe
              className="absolute inset-0 h-[calc(100%)] w-full overflow-hidden border-none [&_div]:hidden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1116.4041247975483!2d136.955107690282!3d35.14418590762989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a9390c13229%3A0x9395fbe958b9b074!2z5b6z6Jar!5e0!3m2!1sja!2sjp!4v1714036266285!5m2!1sja!2sjp"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-8 flex min-h-96 w-full flex-col justify-center bg-white py-4 md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3 [&_p]:tracking-wider">
            <div className="px-6">
              <h3 className="title-font text-lg font-semibold tracking-widest md:text-xl">
                {d.norika_access_address_title}
              </h3>
              <p className="mt-6 pl-2">
                {d.norika_access_nagoya_address_line_1}
              </p>
              <p className="mt-4 pl-2">
                {d.norika_access_nagoya_address_line_2}
              </p>
            </div>
            <div className="mx-auto mt-6 h-0 w-11/12 border-b-2 border-rose-50"></div>
            <div className="mt-6 w-full px-6">
              <h3 className="title-font text-lg font-semibold tracking-widest md:text-xl">
                {d.norika_access_phone_title}
              </h3>
              <p className="my-6 flex w-full leading-relaxed">
                <Image
                  src={'/svgs/norika/phone.svg'}
                  className="mr-2 tracking-widest"
                  alt="telIcon"
                  width={24}
                  height={24}
                />
                <Link
                  href={'tel:052-838-5007'}
                  className="border-b border-rose-300 text-rose-500"
                >
                  {d.norika_access_phone_body}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
