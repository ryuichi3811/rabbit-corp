import Image from 'next/image';
import Link from 'next/link';
import { News } from '@/providers';
import { AspectRatio } from '@/ui';
import clsx from 'clsx';

export const NewsItemVertical = ({
  className,
  dict,
  content,
  link,
}: {
  className?: string;
  dict: { [key: string]: string };
  content: News;
  link: string;
}) => {
  const c = content;
  const d = dict;
  return (
    <div className="flex w-full max-w-screen-md flex-row items-center justify-center overflow-hidden md:w-60 md:flex-col lg:w-[18.5rem]">
      {/* カテゴリー スクリーン時のみ表示 */}
      <div className="hidden w-full items-baseline justify-between md:flex">
        <p className="text-sm">
          {d.lang === 'ja' ? c.categories_ja : c.categories_en}
        </p>
        <p className="text-sm">{String(c.date).substring(0, 10)}</p>
      </div>

      {/* ヘッダー画像 */}
      <Link
        href={link}
        className="group relative block h-20 w-32 shrink-0 self-start overflow-hidden bg-gray-100 md:h-auto md:w-full md:rounded-lg"
      >
        <AspectRatio ratio={8 / 5}>
          <Image
            src={c.head_image.url}
            width={c.head_image.width}
            height={c.head_image.height}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            alt={'Header image for news.'}
          />
        </AspectRatio>
      </Link>

      <div className="px-2 md:mt-3 md:px-0 backdrop-blur-md">
        {/* カテゴリー モバイル時のみ表示 */}
        <div className="flex w-full items-baseline justify-between md:hidden">
          <p className="text-xs text-gray-500">
            {String(c.date).substring(0, 10)}
          </p>
          <p className="text-xs">
            {d.lang === 'ja' ? c.categories_ja : c.categories_en}
          </p>
        </div>
        {/* タイトル */}
        <h3 className="max-h-11 text-base font-bold md:max-h-14 md:text-lg">
          {d.lang === 'ja' ? c.title_ja : c.title_en}
        </h3>
        {/* 詳細を見る */}
        <p className="h-5 text-end leading-4">
          <Link
            href={link}
            className={clsx("text-xs tracking-wide text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 md:text-sm", className)}
          >
            {d.reve_component_newsItem_text}
          </Link>
        </p>
      </div>
    </div>
  );
};

export const NewsItemHorizontal = ({
  dict,
  content,
  link,
}: {
  dict: { [key: string]: string };
  content: News;
  link: string;
}) => {
  const d = dict;
  const c = content;
  return (
    <>
      <div className="flex w-full max-w-screen-md flex-row items-center overflow-hidden rounded-lg border">
        {/* ヘッダー画像 */}
        <Link
          href={link}
          className="group relative block h-28 w-28 shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-48 lg:w-48"
        >
          <AspectRatio ratio={1}>
            <Image
              // src={c.head_image.url}
              src={
                'https://images.microcms-assets.io/assets/9a0fcdad42894b26bb37bc2a647c48b5/dd07c76d76314295aefe57b7c6a07439/reve-default-header-image.png'
              }
              width={c.head_image.width}
              height={c.head_image.height}
              loading="lazy"
              alt="Header image for news."
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </AspectRatio>
        </Link>

        {/* 日付 & (カテゴリー（モバイルディスプレイのみ表示）) */}
        <div className="ms:p-4 flex w-full flex-col px-2 py-1 md:gap-2 lg:p-6">
          <div className="flex justify-between md:flex-col">
            <span className="ms:text-sm mt-1 text-xs text-gray-500">
              {String(c.date).substring(0, 10)}
            </span>

            <p className="rounded-md border px-2 pt-1 text-xs sm:text-sm md:hidden">
              {d.lang === 'ja' ? c.categories_ja : c.categories_en}
            </p>
          </div>

          {/* タイトル */}
          <h2 className="max-h-11 overflow-hidden text-base font-bold text-gray-800 md:text-xl">
            <Link
              href={link}
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              {d.lang === 'ja' ? c.title_ja : c.title_en}
            </Link>
          </h2>

          {/* カテゴリー PCディスプレイのみ表示 */}
          <div className="hidden px-2 pt-1 md:block">
            <p className="inline rounded-lg bg-reve-sub/10 px-4 py-1 text-center text-xs">
              {d.lang === 'ja' ? c.categories_ja : c.categories_en}
            </p>
          </div>

          <p className="text-end">
            <Link
              href={link}
              className="text-sm tracking-wide text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              {d.reve_component_newsItem_text}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
