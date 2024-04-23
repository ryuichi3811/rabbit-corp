'use client';

import { usePathname, useRouter } from 'next/navigation';

// ui
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTriggerGlobal,
  SelectValue,
} from '.';
import { Locale, i18n } from '@/utils';

export default function LocaleSwitcher({ lang }: { lang: string }) {
  const locales = i18n.contents;
  const pathName = usePathname();
  const router = useRouter();

  // リンク作成
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  // 現在の言語オブジェクト取得
  const langObject = locales.find((locale) => locale.id === lang);

  // ハンドラー
  const handleChange = (value: string) => {
    router.push(redirectedPathName(value));
  };

  return (
    <>
      <div className="w-28 ">
        <div className="z-0 flex flex-col items-end">
          <Select onValueChange={(value) => handleChange(value)}>
            <SelectTriggerGlobal className="bg-light w-full border-white text-white">
              <SelectValue placeholder={langObject?.name} />
            </SelectTriggerGlobal>
            <SelectContent>
              <SelectGroup>
                {locales.map((locale) => (
                  <SelectItem key={locale.id} value={locale.id}>
                    {locale.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
