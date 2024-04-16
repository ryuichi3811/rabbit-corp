export type FormState = {
  organization: string | undefined;
  name: string | undefined;
  company_name: string | undefined;
  mail: string | undefined;
  tel: string | undefined;
  category: string | undefined;
  content: string | undefined;
  isSend: boolean | undefined;
};

export const initialState = {
  organization: undefined,
  name: undefined,
  company_name: undefined,
  mail: undefined,
  tel: undefined,
  category: undefined,
  content: undefined,
  isSend: undefined,
};
