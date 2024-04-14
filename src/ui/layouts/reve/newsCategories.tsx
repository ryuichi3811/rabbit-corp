// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { News } from '@/providers';
// import { Button } from '@/ui';

export const NewsCategories = () =>
  // {
  //   dict,
  //   contents,
  // }: {
  //   dict: { [key: string]: string };
  //   contents: News[];
  // }
  {
    // const d = dict;
    // const pathname = usePathname().substring(1);
    // const segments = pathname.split('/');
    // const tags = ['ALL'];

    // Setオブジェクトで重複削除で年度別カテゴリー分け
    // const years = tags.concat(
    //   Array.from(
    //     new Set(
    //       contents.map((content) => {
    //         const date = new Date(content.date);
    //         return date.getFullYear().toString();
    //       }),
    //     ),
    //   ),
    // );

    // Setオブジェクトで重複削除でタグ別にカテゴリー分け
    // const setCategories = (lang: string) => {
    //   return tags.concat(
    //     Array.from(
    //       new Set(
    //         contents.flatMap((content) =>
    //           lang === 'ja' ? content.categories_ja : content.categories_en,
    //         ),
    //       ),
    //     ),
    //   );
    // };
    // const categories = setCategories(d.lang);

    // const flugButton = () => {
    //   if (segments.length === 3) {
    //     return 'default';
    //   } else if () {
    //     return 'default'
    //   } else {
    //     return 'outline';
    //   }
    // }

    return <></>;
  };
