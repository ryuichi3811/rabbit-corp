'use client';

import { useRef } from 'react';
import { useFormState } from 'react-dom';
import { Dialog, SendButton } from '.';
import { mailAction } from '@/actions';
import { initialState } from '@/providers/resend';
import { Input, Label, Textarea } from '@/ui';
import * as S from '@/ui/select';
import Link from 'next/link';
import { pm } from '@/utils';

export const Form = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  const ref = useRef<HTMLFormElement>(null);
  const [state, dispatch] = useFormState(mailAction, initialState);
  return (
    <>
      <div className="flex flex-col items-center pb-20 pt-16 backdrop-blur-md">
        <form
          action={dispatch}
          ref={ref}
          className="flex w-full flex-col px-4 md:w-3/5 xl:w-2/5"
        >
          {/* ------------------------------------------------------------- */}
          {/* 名前入力欄 */}
          {state.name && <p className="text-red-500">{state.name}</p>}
          <Label htmlFor="name">{d.reve_contact_form_name}</Label>
          <Input
            className="mb-5 mt-2 border-slate-500 tracking-widest"
            type="text"
            id="name"
            name="name"
          />

          {/* ------------------------------------------------------------- */}
          {/* 会社名入力欄 */}
          {state.company_name && (
            <p className="text-red-500">{state.company_name}</p>
          )}
          <Label htmlFor="company_name">
            {d.reve_contact_form_company_name}
          </Label>
          <Input
            className="mb-5 mt-2 border-slate-500 tracking-widest"
            type="text"
            id="company_name"
            name="company_name"
          />

          {/* ------------------------------------------------------------- */}
          {/* メールアドレス入力欄 */}
          {state.mail && <p className="text-red-500">{state.mail}</p>}
          <Label htmlFor="mail">{d.reve_contact_form_mail}</Label>
          <Input
            className="mb-5 mt-2 border-slate-500 tracking-widest"
            type="email"
            id="mail"
            name="mail"
          />

          {/* ------------------------------------------------------------- */}
          {/* 電話番号入力欄 */}
          {state.tel && <p className="text-red-500">{state.tel}</p>}
          <Label htmlFor="tel">{d.reve_contact_form_tel}</Label>
          <Input
            className="mb-5 mt-2 border-slate-500 tracking-widest"
            type="text"
            id="tel"
            name="tel"
          />

          {/* ------------------------------------------------------------- */}
          {/* 問い合わせ内容入力欄 */}
          {state.category && <p className="text-red-500">{state.category}</p>}
          <Label htmlFor="category">{d.reve_contact_form_category}</Label>
          <S.Select name="category" defaultValue="マネジメント">
            <S.SelectTrigger className="mb-5 mt-2 border-slate-500 tracking-widest">
              <S.SelectValue
                placeholder={d.reve_contact_form_category_option1}
              />
            </S.SelectTrigger>
            <S.SelectContent>
              <S.SelectGroup>
                <S.SelectItem value="マネジメント">
                  {d.reve_contact_form_category_option1}
                </S.SelectItem>
                <S.SelectItem value="ホームページ">
                  {d.reve_contact_form_category_option2}
                </S.SelectItem>
                <S.SelectItem value="その他">
                  {d.reve_contact_form_category_option3}
                </S.SelectItem>
              </S.SelectGroup>
            </S.SelectContent>
          </S.Select>

          {/* ------------------------------------------------------------- */}
          {/* 詳細入力欄 */}
          {state.content && <p className="text-red-500">{state.content}</p>}
          <Label htmlFor="content">{d.reve_contact_form_content}</Label>
          <Textarea
            className="mb-5 mt-2 border-slate-500 bg-white tracking-widest"
            name="content"
            id="content"
            cols={30}
            rows={10}
          />

          <div className="mb-5">
            <input
              type="checkbox"
              id="privacyPolicy"
              required
            />
            <label htmlFor="privacyPolicy" className="ml-2">
              {d.lang === 'ja' ? (
                <>
                  <Link href={pm(d.lang, '/privacy-policy')} target="_blank" className='text-indigo-500 border-b border-indigo-500 hover:text-indigo-700 px-2'>
                    {d.form_privacy_policy_agreement_link}
                  </Link>
                  {d.form_privacy_policy_agreement}
                </>
              ) : (
                <>
                  {d.form_privacy_policy_agreement}
                  <Link href={pm(d.lang, '/privacy-policy')} target="_blank" className='text-indigo-500 border-b border-indigo-500 hover:text-indigo-700 px-2'>
                    {d.form_privacy_policy_agreement_link}
                  </Link>
                </>
              )}
            </label>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* 言語 */}
          <input type="text" name="locale" defaultValue={d.lang} hidden />

          {/* ------------------------------------------------------------- */}
          {/* 組織 */}
          <input type="text" name="organisation" defaultValue={'Reve'} hidden />

          {/* ------------------------------------------------------------- */}
          {/* 送信ボタン */}
          <SendButton dict={d} />

          {/* ダイアログ表示 */}
          {state.isSend && <Dialog dict={d} />}
        </form>
      </div>
    </>
  );
};
