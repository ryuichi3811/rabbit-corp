import { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';

export type News = {
  id: string;
  organization: string;
  head_image: MicroCMSImage;
  date: Date;
  categories_ja: string;
  categories_en: string;
  title_ja: string;
  title_en: string;
  body_ja: string;
  body_en: string;
  eyecatch?: MicroCMSImage | undefined;
} & MicroCMSDate;

export type FailureNews = {
  head_image: MicroCMSImage;
  date: Date;
  categories_ja: string;
  categories_en: string;
  title_ja: string;
  title_en: string;
  body_ja: string;
  body_en: string;
};
