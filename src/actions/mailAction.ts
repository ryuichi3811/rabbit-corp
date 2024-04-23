'use server';

import { FormState, sendMail } from '@/providers/resend';
import * as v from '@/utils/validation';

export const mailAction = async (state: FormState, formData: FormData) => {
  // フォームデータを取得
  const form = {
    organisation: formData.get('organisation'),
    name: formData.get('name'),
    birthday: formData.get('birthday'),
    gender: formData.get('gender'),
    company_name: formData.get('company_name'),
    mail: formData.get('mail'),
    tel: formData.get('tel'),
    category: formData.get('category'),
    desired_date: formData.get('desired_date'),
    content: formData.get('content'),
    locale: formData.get('locale'),
  };

  if (form.organisation == '徳薫') {
    state.name = v.name(form.name, formData.get('locale'));
    state.birthday = v.birthday(form.birthday, form.locale);
    state.gender = v.gender(form.gender, form.locale);
    state.mail = v.email(form.mail, form.locale);
    state.tel = v.tel(form.tel, form.locale);
    state.category = v.category(form.category, form.locale);
    state.desired_date = v.desired_date(form.desired_date, form.locale);
    state.content = v.content(form.content, form.locale);
  } else {
    state.name = v.name(form.name, formData.get('locale'));
    state.company_name = v.companyName(form.company_name, form.locale);
    state.mail = v.email(form.mail, form.locale);
    state.tel = v.tel(form.tel, form.locale);
    state.category = v.category(form.category, form.locale);
    state.content = v.content(form.content, form.locale);
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  // state変更が無ければ、メール送信
  if (JSON.stringify(state) === '{}') {
    state.isSend = true;

    await sendMail({
      organization: form.organisation as string,
      name: form.name as string,
      birthday: form.birthday as string,
      gender: form.gender as string,
      company_name: form.company_name as string,
      mail: form.mail as string,
      tel: form.tel as string,
      category: form.category as string,
      desired_date: form.desired_date as string,
      content: form.content as string,
      isSend: state.isSend as boolean,
    });

    return state;
  } else {
    return state;
  }
};
