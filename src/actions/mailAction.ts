'use server';

import { FormState, sendMail } from '@/providers/resend';
import * as v from '@/utils/validation';

export const mailAction = async (state: FormState, formData: FormData) => {
  // フォームデータを取得
  const form = {
    organisation: formData.get('organisation'),
    name: formData.get('name'),
    company_name: formData.get('company_name'),
    mail: formData.get('mail'),
    tel: formData.get('tel'),
    category: formData.get('category'),
    content: formData.get('content'),
    local: formData.get('local'),
  };

  // バリデーション結果
  state.name = v.name(form.name, formData.get('local'));
  state.company_name = v.companyName(form.company_name, form.local);
  state.mail = v.email(form.mail, form.local);
  state.tel = v.tel(form.tel, form.local);
  state.category = v.category(form.category, form.local);
  state.content = v.content(form.content, form.local);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  // state変更が無ければ、メール送信
  if (JSON.stringify(state) === '{}') {
    state.isSend = true;

    await sendMail({
      organization: form.organisation as string,
      name: form.name as string,
      company_name: form.company_name as string,
      mail: form.mail as string,
      tel: form.tel as string,
      category: form.category as string,
      content: form.content as string,
      isSend: state.isSend as boolean,
    });

    return state;
  } else {
    return state;
  }
};
