const data = [
  {
    id: 'ja',
    name: '日本語',
  },
  {
    id: 'en',
    name: 'English',
  },
];

export const i18n = {
  defaultLocale: 'ja',
  locales: data.map((d) => d.id),
  contents: data,
} as const;

export type Locale = (typeof i18n)['locales'][number];
