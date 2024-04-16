import { Resend } from 'resend';

export const setResend = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is required');
  }
  return new Resend(process.env.RESEND_API_KEY);
};
