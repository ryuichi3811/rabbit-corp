import Image from 'next/image';
import { FailureNews, News } from '@/providers';
import { AspectRatio } from '@/ui';

export const Header = ({
  content,
  lang,
}: {
  content: News | FailureNews;
  lang: string;
}) => {
  const cnt = content;
  return (
    <>
      {/* ヘッダー */}

      <div id="top" className="my-12">
        <h1 className="text-4xl font-bold tracking-wider text-reve-sub md:text-5xl">
          News
        </h1>
        <p className="text-sm md:text-lg">お知らせ</p>
      </div>
      {/* ヘッダー画像 */}
      <div className="my-8">
        <AspectRatio
          ratio={8 / 5}
          className="relative overflow-hidden rounded-xl"
        >
          <Image
            src={cnt.head_image.url}
            // src={
            //   'https://images.microcms-assets.io/assets/9a0fcdad42894b26bb37bc2a647c48b5/dd07c76d76314295aefe57b7c6a07439/reve-default-header-image.png'
            // }
            width={cnt.head_image.width}
            height={cnt.head_image.height}
            alt={`${cnt.title_ja} ヘッダー画像`}
            className="absolute inset-0 h-full w-full rounded-md object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </AspectRatio>
      </div>

      {/* カテゴリー & 日付 */}
      <div className="flex items-baseline justify-between px-6">
        <p className="rounded-md border border-reve-sub bg-reve-sub px-2 py-1 text-xs text-reve-main">
          {cnt.categories_ja}
        </p>
        <p className="text-xs">{String(cnt.date).substring(0, 10)}</p>
      </div>

      {/* タイトル */}
      <div className="my-12">
        <h2 className="text-xl font-bold drop-shadow-[0px_1px_2px_rgba(120,100,0,.6)] sm:pl-4">
          {cnt && (lang === 'en' ? cnt.title_en : cnt.title_ja)}
        </h2>
      </div>
    </>
  );
};
