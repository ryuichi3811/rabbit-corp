import { ReactNode } from 'react';
import { i18n } from '../utils/i18n/i18nConfig';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { setMetadata } from '@/utils';

export const metadata: Metadata = setMetadata();

// 言語取得
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
