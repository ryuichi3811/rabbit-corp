import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '株式会社ラビット',
    short_name: '株式会社ラビット',
    description:
      '株式会社ラビットは、リプロダクションやマネジメント、HP制作といった幅広く事業を展開しています。「感動と夢を追求し、人々に新しい体験と感動を提供する」がミッションです。',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
