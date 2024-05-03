import { MetadataRoute } from 'next';
import { url } from '@/utils';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: url + 'sitemap.xml',
  };
}
