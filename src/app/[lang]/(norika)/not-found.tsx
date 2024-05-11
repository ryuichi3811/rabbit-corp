'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/ui';

const NotFound = () => {
  const params = useParams();
  return (
    // 真ん中寄せ
    <div className="flex w-full justify-center">
      {/* コンテンツラップ */}
      <div className="md:w-2/5">
        {/* 文章左寄せ */}
        <div className="flex w-full justify-start">
          {/* 見出しとボディの距離調整 */}
          <div className="flex flex-col justify-between">
            <h2 className="px-6 py-10 text-3xl font-bold">Not Found</h2>
            <p>Could not find requested resource</p>
            <p>ご指定のURLでは、ページが見つかりませんでした。</p>
          </div>
        </div>

        <Link
          href={`/${params.lang}/norika`}
          className="mb-10 mt-20 flex w-full justify-center"
        >
          <Button className="flex w-full flex-col bg-rose-400 py-7 hover:bg-rose-300 active:bg-rose-200">
            <span className="text-xs">Return Top</span>
            <span className="text-base">トップに戻る</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
