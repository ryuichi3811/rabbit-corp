import { Metadata } from 'next';
import { mDefault } from '..';

// メタ情報のベース
const defaultTitle = '株式会社ラビット';
const defaultDescription = mDefault;
// 静的メタデータセット
export const setMetadata = (
  title = defaultTitle,
  description = defaultDescription,
): Metadata => {
  const t = title;
  const d = description;
  return {
    title: {
      default: t,
      template: `%s | ${defaultTitle}`,
    },
    description: d,
  };
};
