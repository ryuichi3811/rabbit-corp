'use server';
import { Locale } from '.';

const dict: {
  [key: string]: () => Promise<{ [key: string]: string }>;
} = {
  ja: () => import('./dict/japanese.json').then((module) => module.default),
  en: () => import('./dict/english.json').then((module) => module.default),
};

export const fetchDict = async (locale: Locale) => dict[locale]();
