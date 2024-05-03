'use client';

import clsx from 'clsx';
import { useState } from 'react';
import * as c from '@/features/reve/domain/';

export const ContentsController = ({
  dict,
}: {
  dict: { [key: string]: string };
}) => {
  //   ['management', 'website', 'animation']
  const [tab, setTab] = useState('management');
  const d = dict;
  return (
    <div className="relative">
      {/* タブメニュー */}
      <c.Header dict={d} tabState={[tab, setTab]} />
      {/* マネジメント */}
      <div className={clsx(tab === 'management' ? 'block' : 'hidden')}>
        <c.TalentManagement dict={d} />
      </div>
      {/* ホームページ制作 */}
      <div className={clsx(tab === 'website' ? 'block' : 'hidden')}>
        <c.WebsiteCreation dict={d} />
      </div>
      {/* アニメーション制作 */}
      <div className={clsx(tab === 'animation' ? 'block' : 'hidden')}>
        {/* <c.Animation dict={d} /> */}
      </div>
    </div>
  );
};
