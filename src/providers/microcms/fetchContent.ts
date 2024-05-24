'use server';
import { MicroCMSQueries } from 'microcms-js-sdk';
import { cache } from 'react';
import { News, client } from '.';

// News 一覧取得
export const fetchNewsCntList = cache(async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    customRequestInit: {
      cache: 'no-store',
    },
    endpoint: 'news',
    queries,
  });
  return listData;
});

// News特定コンテンツ取得
export const fetchNewsCnt = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  try {
    const contentData = await client.getListDetail<News>({
      endpoint: 'news',
      contentId,
      queries,
    });

    return contentData;
  } catch (error) {
    console.warn(error);
    // Not Found コンテンツ
    const notFoundCnt = {
      head_image: {
        url: 'https://images.microcms-assets.io/assets/9a0fcdad42894b26bb37bc2a647c48b5/2157b9d870f74768969d80036acd1a3c/not-found.png',
        width: 800,
        height: 500,
      },
      date: new Date('2024-01-01T00:00:00Z'),
      categories_ja: 'Not Found',
      categories_en: 'Not Found',
      title_ja: 'ご指定のURLでは、お知らせページが見つかりませんでした',
      title_en:
        'The News content page could not be found at the URL you provided.',
      body_ja:
        '<p>申し訳ございません、お探しのページは見つかりませんでした。</p><p>ページが移動または削除された可能性があります。URLをご確認の上、再度お試しください。</p><p>ご不明点がございましたら、お問い合わせページよりお知らせください。</p>',
      body_en:
        '<p>Sorry, the page you are looking for could not be found. </p><p>The page may have been moved or removed, please check the URL and try again. </p><p>If you have any questions, please let us know via our contact page. Thank you</p>',
    };
    return notFoundCnt;
  }
};
