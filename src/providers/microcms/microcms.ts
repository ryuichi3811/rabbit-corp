import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  createClient,
} from 'microcms-js-sdk';

export type News = {
  id: string;
  organization: string;
  head_image: MicroCMSImage;
  categories: string;
  date: Date;
  title_ja: string;
  title_en: string;
  body_ja: string;
  body_en: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

export const qReve = 'organization[contains]reve';
export const qRabbit = 'organization[contains]rabbit';
export const qNorika = 'organization[contains]norika';
export const qPressRelease = 'categories_en[contains]Press Release';
export const qOther = 'categories_en[contains]Other';

// 環境変数のチェック
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// News 一覧取得
export const fetchNewsCntList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: 'news',
    queries,
  });
  return listData;
};

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
    return null;
  }
};
