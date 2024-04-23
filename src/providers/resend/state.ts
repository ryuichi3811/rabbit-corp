export type FormState = {
  organization: string | undefined;
  name: string | undefined;
  birthday: string | undefined;
  gender: string | undefined;
  company_name: string | undefined;
  mail: string | undefined;
  tel: string | undefined;
  category: string | undefined;
  desired_date: string | undefined;
  content: string | undefined;
  isSend: boolean | undefined;
};

export const initialState = {
  organization: undefined,
  name: undefined,
  birthday: undefined,
  gender: undefined,
  company_name: undefined,
  mail: undefined,
  tel: undefined,
  category: undefined,
  desired_date: undefined,
  content: undefined,
  isSend: undefined,
};
