'use client';
import { AspectRatio } from '@/ui';
import Image from 'next/image';

export const Contents = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <section className="body-font mb-32 text-gray-600">
      <div className="container mx-auto px-5 pt-8">
        <div className="flex flex-col">
          <div className="mb-12 flex flex-col flex-wrap py-6 sm:flex-row">
            <h2 className="title-font mb-8 text-3xl font-semibold text-gray-900 sm:mb-0 sm:w-2/5 md:text-4xl">
              {d.norika_about_title}
            </h2>
            <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">
              {d.norika_about_description}
            </p>
          </div>
        </div>
        <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4">
          <div id='body' className="mb-6 px-4 py-4 sm:mb-0 md:w-1/3 md:px-8">
            <div className="min-h-64 overflow-hidden rounded-lg">
              <AspectRatio ratio={4 / 3}>
                <Image
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src={'/svgs/norika/service/body.svg'}
                  width={1000}
                  height={750}
                />
              </AspectRatio>
            </div>
            <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
              {d.norika_about_service_title_1}
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              {d.norika_about_service_description_1}
            </p>
          </div>
          <div id='face' className="mb-6 px-4 py-4 sm:mb-0 md:w-1/3 md:px-8">
            <div className="min-h-64 overflow-hidden rounded-lg">
              <AspectRatio ratio={4 / 3}>
                <Image
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src={'/svgs/norika/service/face.svg'}
                  width={1000}
                  height={750}
                />
              </AspectRatio>
            </div>
            <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
              {d.norika_about_service_title_2}
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              {d.norika_about_service_description_2}
            </p>
          </div>
          <div id='heart' className="mb-6 px-4 py-4 sm:mb-0 md:w-1/3 md:px-8">
            <div className="min-h-64 overflow-hidden rounded-lg">
              <AspectRatio ratio={4 / 3}>
                <Image
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src={'/svgs/norika/service/heart.svg'}
                  width={1000}
                  height={750}
                />
              </AspectRatio>
            </div>
            <h2 className="title-font mt-5 text-xl font-medium text-gray-900">
              {d.norika_about_service_title_3}
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              {d.norika_about_service_description_3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
