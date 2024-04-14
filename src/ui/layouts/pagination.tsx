'use client';

import { useParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '..';

export const PaginationLayout = ({
  totalCount,
  link,
}: {
  totalCount: number;
  link: string;
}) => {
  let endNum = 0;
  // 1ページあたりのコンテンツ数
  const perPage = 10;
  // 配列作成メソッド（連番を代入）
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  // ページネーションの最後のページ番号
  const endNumBase = totalCount / perPage;
  // 小数点以下切り上げ
  endNum = Math.ceil(endNumBase);
  // ページネーションのページに合わせて配列作成
  const paginationRange = range(1, endNum);

  const params = useParams();
  const currentPage = params?.id ? Number(params.id) : 1;

  // 表示するページ数を格納した配列を作成
  const setCurrentRange = (array: number[], id: number) => {
    // paginationRangeからcurrentPageを探してindexを取得
    const index = array.indexOf(id);
    // 見つからなければ返却
    if (index === -1) {
      return [];
    }

    let startIndex;
    let endIndex;

    // ページネーションが少ない場合
    if (array.length < 5) {
      startIndex = 0;
      endIndex = array.length - 1;

      // indexが端側だった場合の処理
    } else if (index === 0) {
      startIndex = 0;
      endIndex = Math.min(array.length - 1, startIndex + 2);
    } else if (index === 1) {
      startIndex = 0;
      endIndex = Math.min(array.length - 1, startIndex + 3);
    } else if (index === array.length - 1) {
      endIndex = index;
      startIndex = Math.max(0, endIndex - 2);
    } else if (index === array.length - 2) {
      endIndex = index + 1;
      startIndex = Math.max(0, endIndex - 3);
    } else {
      // 基本はindexが真ん中に来るように配列作成
      startIndex = index - 2;
      endIndex = Math.min(array.length - 1, index + 2);
    }
    // 配列作成
    return array.slice(startIndex, endIndex + 1);
  };
  // 表示するページ数の絞り込み
  const currentRange = setCurrentRange(paginationRange, currentPage);

  // ページネーション進退ボタン
  // type = "previous" | "next"
  const advanceButton = (type: string) => {
    const setButton = (href: string) => {
      const previous = (
        <PaginationPrevious href={href} aria-disabled={currentPage === 1} />
      );
      const next = (
        <PaginationNext
          href={href}
          aria-disabled={currentPage === totalCount}
        />
      );

      return (
        <div className="active:animate-tap">
          <PaginationItem>
            {type === 'next' && next}
            {type === 'previous' && previous}
          </PaginationItem>
        </div>
      );
    };

    switch (type) {
      case 'previous':
        if (1 == currentPage) {
          return setButton(`${link}/1`);
        } else {
          return setButton(`${link}/${currentPage - 1}`);
        }
      case 'next':
        if (endNum == currentPage) {
          return setButton(`${link}/${endNum}`);
        } else {
          return setButton(`${link}/${currentPage + 1}`);
        }

      default:
        return;
    }
  };

  return (
    <>
      <Pagination className="pb-8 pt-5">
        <PaginationContent>
          {/* 前へ */}
          {advanceButton('previous')}

          {currentRange.map((number: number) => (
            <div key={number} className="active:animate-tap">
              <PaginationItem>
                {currentPage === number ? (
                  <PaginationLink href={`${link}/${number}`} isActive>
                    {number}
                  </PaginationLink>
                ) : (
                  <PaginationLink href={`${link}/${number}`}>
                    {number}
                  </PaginationLink>
                )}
              </PaginationItem>
            </div>
          ))}

          {/* 次へ */}
          {advanceButton('next')}
        </PaginationContent>
      </Pagination>
    </>
  );
};
