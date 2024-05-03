'use client';
import parse from 'html-react-parser';
import { useRouter } from 'next/navigation';
import { Button } from '@/ui';
import { pm } from '@/utils';

export const Dialog = ({
  dict,
}: {
  dict: {
    [key: string]: string;
  };
}) => {
  const d = dict;
  const router = useRouter();

  const handleClick = () => {
    router.push(pm(d.lang, ''));
  };

  return (
    <>
      {/* 背景 */}
      <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
        {/* ダイアログコンテンツ */}
        <div className="w-3/4 rounded-lg border border-slate-400 bg-slate-100 sm:w-2/3">
          {/* ダイアログタイトル */}
          <div className="border-b border-slate-400 px-4 py-4 md:px-12">
            <h2 className="text-center">{d.reve_contact_dialog_title}</h2>
          </div>
          {/* ダイアログ詳細 */}
          <div className="my-6 px-8 leading-normal tracking-wide md:px-12 [&_p]:mt-2">
            {parse(d.reve_contact_dialog_content)}
          </div>
          {/* ボタン */}
          <div className="flex w-full justify-center p-4">
            <Button
              className="w-full bg-[#492332] tracking-wider text-white hover:bg-[#492332] focus:bg-[#492332] active:bg-[#492332]"
              type="button"
              onClick={handleClick}
            >
              {dict.reve_contact_dialog_button_text}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
