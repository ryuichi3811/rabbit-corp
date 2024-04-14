import parse from 'html-react-parser';
import Link from 'next/link';
import { FailureNews, News } from '@/providers';
import { Button } from '@/ui';

import { RichEditorLayout } from '@/ui';
import { pmReve } from '@/utils/';

export const Body = ({
  dict,
  content,
}: {
  dict: { [key: string]: string };
  content: News | FailureNews;
}) => {
  const d = dict;
  const cnt = content;
  return (
    <>
      {/* コンテンツ本文 */}
      <RichEditorLayout className="mt-4">
        <div className="px-4">
          {d.lang === 'en' ? parse(cnt.body_en) : parse(cnt.body_ja)}
        </div>
      </RichEditorLayout>

      {/* 一覧に戻る */}
      <div className="my-20 flex justify-center">
        <Link href={pmReve(d.lang, '/news/1')}>
          <Button size={'lg'} variant={'outline'} className="border-reve-sub">
            {d.reve_news_content_button_text}
          </Button>
        </Link>
      </div>
    </>
  );
};
