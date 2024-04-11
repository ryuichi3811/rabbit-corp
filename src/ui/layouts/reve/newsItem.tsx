import Image from 'next/image';
import Link from 'next/link';
import { News } from '@/providers';
import { AspectRatio } from '@/ui/reve';

export const NewsItem = ({
  dict,
  content,
}: {
  dict: { [key: string]: string };
  content: News;
}) => {
  const d = dict;
  const c = content;
  return (
    <Link href={`/reve/news/${c.id}`} className="my-4 block w-80">
      <div className="flex items-baseline justify-between">
        <p className="text-sm">
          {d.lang === 'ja' ? c.categories_ja : c.categories_en}
        </p>
        <p className="text-sm">{String(c.date).substring(0, 10)}</p>
      </div>
      <div className="mt-0 w-full">
        <AspectRatio ratio={8 / 5}>
          <Image
            src={c.head_image.url}
            width={c.head_image.width}
            height={c.head_image.height}
            alt={'Header image for Reve news.'}
          />
        </AspectRatio>
      </div>
      <h3 className="mt-3 text-lg font-bold">
        {d.lang === 'ja' ? c.title_ja : c.title_en}
      </h3>
    </Link>
  );
};
