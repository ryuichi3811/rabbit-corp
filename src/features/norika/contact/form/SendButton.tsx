'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/ui';

export const SendButton = ({
  dict,
  ...props
}: {
  dict: {
    [key: string]: string;
  };
}) => {
  const d = dict;
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="bg-rose-500 tracking-widest hover:bg-rose-400 disabled:opacity-60"
      disabled={pending}
      {...props}
    >
      {pending ? d.contact_sending : d.contact_submit}
    </Button>
  );
};
