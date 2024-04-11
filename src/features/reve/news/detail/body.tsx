import parse from 'html-react-parser';
import Link from 'next/link';
import { FailureNews, News } from '@/providers';
import { Button } from '@/ui/reve';

import { RichEditorLayout } from '@/ui/reve';
import { pmReve } from '@/utils';

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
      <RichEditorLayout className="mb-20 mt-16 px-4">
        {d.lang === 'en' ? parse(cnt.body_en) : parse(cnt.body_ja)}
      </RichEditorLayout>

      {/* 一覧に戻る */}
      <div className="mb-20 flex justify-center">
        {/* <Link href={`${d.lang}/reve/news`}> */}
        <Link href={pmReve(d.lang, '/news')}>
          <Button size={'lg'} variant={'outline'} className="border-reve-sub">
            {d.reve_news_content_button_text}
          </Button>
        </Link>
      </div>
    </>
  );
};
