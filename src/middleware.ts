import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';
import { pmNorika, pmReve } from './utils';
import type { NextRequest } from 'next/server';
import { i18n } from '@/utils/i18n';

function fetchLocale(request: NextRequest): string | undefined {
  // ヘッダーを取得
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // サポートされているロケールを取得
  const locales: string[] = i18n.locales;

  // 言語を取得
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export async function middleware(request: NextRequest) {
  // パス名を取得
  const pathname = request.nextUrl.pathname;
  // リダイレクト
  const redirect = (pathname: string) => {
    return NextResponse.redirect(new URL(pathname, request.url));
  };

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/favicon.ico',
      '/icon.svg',
      '/apple-icon.png',
      '/images/',
      '/tarent/',
      '/movies/',
      '/svgs/',
      '/sitemap.xml',
      '/robots.txt',
      '/manifest.webmanifest',
    ].includes(pathname)
  )
    return;

  // パス名にサポートされているロケールがあるかチェック
  // pathname is missing locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // ロケールがない場合はリダイレクト
  if (pathnameIsMissingLocale) {
    const pathname = request.nextUrl.pathname;
    const locale = fetchLocale(request);

    return redirect(
      `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    );
  }

  switch (pathname) {
    case `/ja/reve/news`:
      return redirect(pmReve('ja', '/news/1'));
    case `/en/reve/news`:
      return redirect(pmReve('en', '/news/1'));
    case `/ja/norika/news`:
      return redirect(pmNorika('ja', '/news/1'));
    case `/en/norika/news`:
      return redirect(pmNorika('en', '/news/1'));
  }

  // ニュースコンテンツのURL転送
  // switch (pathname) {
  //   case `/${locale}/news`:
  //     return NextResponse.redirect(new URL(`/news/all/all/1`, request.url));

  //   case `/${locale}/news/all/`:
  //     return NextResponse.redirect(new URL(`/news/all/all/1`, request.url));

  //   case `/${locale}/news/all/all`:
  //     return NextResponse.redirect(new URL(`/news/all/all/1`, request.url));

  //   case `/${locale}/news/content`:
  //     return NextResponse.redirect(new URL(`/news/all/all/1`, request.url));
  // }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|logo|images|movies|tarent|svgs).*)',
  ],
};
