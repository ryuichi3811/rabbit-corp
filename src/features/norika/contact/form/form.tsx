'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import { Dialog, SendButton } from '.';
import { mailAction } from '@/actions';
import { initialState } from '@/providers/resend';
import {
  DatePicker,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from '@/ui';
import * as S from '@/ui/select';
import { pm } from '@/utils';

export const Form = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  const ref = useRef<HTMLFormElement>(null);
  const [state, dispatch] = useFormState(mailAction, initialState);
  return (
    <>
      <div className="mb-20 mt-16 flex flex-col items-center">
        <form
          action={dispatch}
          ref={ref}
          className="flex w-full flex-col px-4 md:w-3/5 xl:w-2/5"
        >
          {/* ------------------------------------------------------------- */}
          {/* 名前入力欄 */}
          {state.name && <p className="text-red-500">{state.name}</p>}
          <Label htmlFor="name">{d.norika_contact_form_name}</Label>
          <Input
            className="mb-5 mt-2 border-slate-500 tracking-widest"
            type="text"
            id="name"
            name="name"
          />

          {/* ------------------------------------------------------------- */}
          {/* 生年月日入力欄 */}
          {state.birthday && <p className="text-red-500">{state.birthday}</p>}
          <Label htmlFor="birthday">{d.norika_contact_form_birthday}</Label>
          <Input
            type="date"
            id="birthday"
            name="birthday"
            className="mb-4 mt-2 border-slate-500 tracking-widest"
          />

          {/* ------------------------------------------------------------- */}
          {/* 性別入力欄 */}
          {state.gender && <p className="text-red-500">{state.gender}</p>}
          <Label htmlFor="gender">{d.norika_contact_form_gender}</Label>
          <RadioGroup
            defaultValue="男性"
            id="gender"
            name="gender"
            className="mb-6 mt-4 flex gap-8 pl-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="男性" id="gender_1" />
              <Label htmlFor="gender_1">
                {d.norika_contact_form_gender_male}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="女性" id="gender_2" />
              <Label htmlFor="gender_2">
                {d.norika_contact_form_gender_female}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="その他" id="gender_3" />
              <Label htmlFor="gender_3">
                {d.norika_contact_form_gender_other}
              </Label>
            </div>
          </RadioGroup>

          {/* ------------------------------------------------------------- */}
          {/* メールアドレス入力欄 */}
          {state.mail && <p className="text-red-500">{state.mail}</p>}
          <Label htmlFor="mail">{d.norika_contact_form_mail}</Label>
          <Input
            className="mb-5 mt-2 border-slate-500 tracking-widest"
            type="email"
            id="mail"
            name="mail"
          />

          {/* ------------------------------------------------------------- */}
          {/* 電話番号入力欄 */}
          {state.tel && <p className="text-red-500">{state.tel}</p>}
          <Label htmlFor="tel">{d.norika_contact_form_tel}</Label>
          <Input
            className="mb-5 mt-2 border-slate-500 tracking-widest"
            type="text"
            id="tel"
            name="tel"
          />

          {/* ------------------------------------------------------------- */}
          {/* 問い合わせ内容入力欄 */}
          {state.category && <p className="text-red-500">{state.category}</p>}
          <Label htmlFor="category">{d.norika_contact_form_category}</Label>
          <S.Select name="category" defaultValue="身体施術">
            <S.SelectTrigger className="mb-5 mt-2 border-slate-500 tracking-widest">
              <S.SelectValue
                placeholder={d.norika_contact_form_category_option1}
              />
            </S.SelectTrigger>
            <S.SelectContent>
              <S.SelectGroup>
                <S.SelectItem value="身体施術">
                  {d.norika_contact_form_category_option1}
                </S.SelectItem>
                <S.SelectItem value="顔施術">
                  {d.norika_contact_form_category_option2}
                </S.SelectItem>
                <S.SelectItem value="カウンセリング">
                  {d.norika_contact_form_category_option3}
                </S.SelectItem>
                <S.SelectItem value="その他">
                  {d.norika_contact_form_category_option4}
                </S.SelectItem>
              </S.SelectGroup>
            </S.SelectContent>
          </S.Select>

          {/* ------------------------------------------------------------- */}
          {/* 施術希望日入力欄 */}
          {state.desired_date && (
            <p className="text-red-500">{state.desired_date}</p>
          )}
          <Label htmlFor="desired_date">
            {d.norika_contact_form_desired_date}
          </Label>
          <DatePicker
            text={d.date_picker_text}
            id={'desired_date'}
            name={'desired_date'}
          />

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
            <input type="checkbox" id="privacyPolicy" required />
            <label htmlFor="privacyPolicy" className="ml-2">
              {d.lang === 'ja' ? (
                <>
                  <Link
                    href={pm(d.lang, '/privacy-policy')}
                    target="_blank"
                    className="border-b border-rose-500 px-2 text-rose-500 hover:text-rose-700"
                  >
                    {d.form_privacy_policy_agreement_link}
                  </Link>
                  {d.form_privacy_policy_agreement}
                </>
              ) : (
                <>
                  {d.form_privacy_policy_agreement}
                  <Link
                    href={pm(d.lang, '/privacy-policy')}
                    target="_blank"
                    className="border-b border-rose-500 px-2 text-rose-500 hover:text-rose-700"
                  >
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
          <input type="text" name="organisation" defaultValue={'徳薫'} hidden />

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
