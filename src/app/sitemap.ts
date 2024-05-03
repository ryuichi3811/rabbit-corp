import { MetadataRoute } from 'next';
import { fetchNewsCntList, qNorika, qReve } from '@/providers';
import { url } from '@/utils';

const sitemap_base = (lang: string): MetadataRoute.Sitemap => {
  return [
    {
      url: `${url}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${url}/${lang}/reve`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${url}/${lang}/norika`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${url}/${lang}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${url}/${lang}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: `${url}/${lang}/reve/domain`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${url}/${lang}/reve/domain/management`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${url}/${lang}/reve/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${url}/${lang}/norika/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${url}/${lang}/norika/access`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${url}/${lang}/norika/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
};

// サイトマップ作成 （ニューズコンテンツ）
const sitemap_content = async (
  lang: string,
): Promise<MetadataRoute.Sitemap> => {
  const urls: MetadataRoute.Sitemap = [];
  const nQuery = {
    limit: 100,
    filters: qNorika,
  };
  const rQuery = {
    limit: 100,
    filters: qReve,
  };
  // コンテンツ取得
  const nc = await fetchNewsCntList(nQuery);
  const rc = await fetchNewsCntList(rQuery);

  // norika サイトマップ作成
  nc.contents.map((content: any) =>
    urls.push({
      url: `${url}/${lang}/norika/news/0/${content.id}`,
      lastModified: content.updatedAt,
    }),
  );
  // reve サイトマップ作成
  rc.contents.map((content: any) =>
    urls.push({
      url: `${url}/${lang}/reve/news/0/${content.id}`,
      lastModified: content.updatedAt,
    }),
  );

  return urls;
};

// サイトマップ作成 （ニュースリスト）
const sitemap_news_page = async (
  lang: string,
): Promise<MetadataRoute.Sitemap> => {
  // クエリの設定
  const nQuery = {
    limit: 100,
    filters: qNorika,
  };
  const rQuery = {
    limit: 100,
    filters: qReve,
  };
  // お知らせコンテンツの取得
  const nc = await fetchNewsCntList(nQuery);
  const rc = await fetchNewsCntList(rQuery);

  const nPage = Math.ceil(nc.totalCount / 10);
  const rPage = Math.ceil(rc.totalCount / 10);

  // url格納
  const urls: MetadataRoute.Sitemap = [];

  for (let i = 0; i < nPage; i++) {
    urls.push({ url: `${url}/${lang}/norika/news/${i + 1}` });
  }
  for (let i = 0; i < rPage; i++) {
    urls.push({ url: `${url}/${lang}/reve/news/${i + 1}` });
  }

  return urls;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemaps: MetadataRoute.Sitemap = [];
  const locals = ['ja', 'en'];

  for (let i = 0; i < locals.length; i++) {
    // base
    sitemaps.push(...sitemap_base(locals[i]));
    // news list
    sitemaps.push(...(await sitemap_news_page(locals[i])));
    // news content
    sitemaps.push(...(await sitemap_content(locals[i])));
  }

  return sitemaps;
}
