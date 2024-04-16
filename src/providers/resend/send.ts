'use server';
import MailTemplate from './mailTemplate';
import { setResend } from './setup';
import { FormState } from '@/providers/resend';

// フォームの取得データからメール作成
export const sendMail = async (form: FormState) => {
  const resend = setResend();
  // メール送信処理
  try {
    if (process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: `【 ${form.organization} 】 <onboarding@resend.dev>`,
        to: process.env.TO_MAIL!,
        subject: `[ お問い合わせ (${form.category}) ] ${form.company_name} ${form.name} 様より`,
        react: MailTemplate({
          name: form.name!,
          company_name: form.company_name!,
          email: form.mail!,
          tel: form.tel!,
          category: form.category!,
          message: form.content!,
        }),
      });

      // エラーなら返却
      if (error) return Response.json({ error });
      return Response.json({ data });
    }
  } catch (error) {
    // エラーなら返却
    return Response.json({ error });
  }
};
