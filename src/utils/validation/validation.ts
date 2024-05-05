/* eslint-disable no-undef */
// XSS対策

import { isValid } from 'date-fns';

// 不要な特殊文字やHTMLタグを置換する
export const sanitizeInput = (input: string): string => {
  return input.replace(/[&<>"'/\\]/g, function (match) {
    return (
      {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        '/': '&#x2F;',
        '\\': '&#x5C;',
        // もしマッチした文字が置換テーブルに含まれていない場合、元の文字をそのまま返す
      }[match] || match
    );
  });
};

// 必須項目チェック
export const checkBlank = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  const blank_message_ja = '必須項目が未入力です。';
  const blank_message_en = 'Required fields have not been filled in.';

  const validation = (message: string): string | undefined => {
    if (!input) return message;
  };

  const sanitized_message_ja = sanitizeInput(blank_message_ja);
  const sanitized_message_en = sanitizeInput(blank_message_en);

  switch (local) {
    case 'ja':
      return validation(sanitized_message_ja);
    case 'en':
      return validation(sanitized_message_en);
    case null:
      return 'null';
    default:
      return 'Invalid language';
  }
};

// 日付形式チェック
export const checkDate = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/; // "yyyy-MM-dd" 形式の日付

  const blank_message_ja = '必須項目が未入力です。';
  const blank_message_en = 'Required fields have not been filled in.';
  const message_ja = '有効な日付を入力してください。';
  const message_en = 'Please enter a valid date.';

  const validation = (message: string, blank_message: string) => {
    if (input) {
      const date = input.toString();
      if (!regex.test(date) || !isValid(new Date(date))) return message;
    } else {
      return blank_message;
    }
  };

  switch (local) {
    case 'ja':
      return validation(message_ja, blank_message_ja);
    case 'en':
      return validation(message_en, blank_message_en);
    default:
      return 'null';
  }
};

// メール形式チェック
export const checkMail = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const blank_message_ja = '必須項目が未入力です。';
  const blank_message_en = 'Required fields have not been filled in.';
  const message_ja = '有効なメールアドレスを入力してください。';
  const message_en = 'Please enter a valid email address.';

  const validation = (message: string, blank_message: string) => {
    if (input) {
      const mail = input.toString();
      if (!regex.test(mail)) return message;
    } else {
      return blank_message;
    }
  };

  switch (local) {
    case 'ja':
      return validation(message_ja, blank_message_ja);
    case 'en':
      return validation(message_en, blank_message_en);
    case null:
      return 'null';
  }
};

// 電話番号チェック
export const checkTelNumber = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  const regex = /^\+?\d{1,4}[-]?\d{1,4}[-]?\d{1,4}[-]?\d{1,4}$/;
  const blank_message_ja = '必須項目が未入力です。';
  const blank_message_en = 'Required fields have not been filled in.';
  const message_ja = '電話番号を入力してください。';
  const message_en = 'Please enter your phone number.';

  const validation = (message: string, blank_message: string) => {
    if (input) {
      const string = input.toString();
      if (!regex.test(string)) return message;
    } else {
      return blank_message;
    }
  };

  switch (local) {
    case 'ja':
      return validation(message_ja, blank_message_ja);
    case 'en':
      return validation(message_en, blank_message_en);
    case null:
      return 'null';
  }
};

// バリデーションチェック - 名前 -
export const name = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkBlank(input, local);

  return error;
};

// バリデーションチェック - 誕生日 -
export const birthday = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkDate(input, local);

  return error;
};

// バリデーションチェック - 性別 -
export const gender = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkBlank(input, local);

  return error;
};

// バリデーションチェック - 会社名 -
export const companyName = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkBlank(input, local);

  return error;
};

// バリデーションチェック - メールアドレス -
export const email = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkMail(input, local);

  return error;
};

// バリデーションチェック - 電話番号 -
export const tel = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkTelNumber(input, local);

  return error;
};

// バリデーションチェック - 問い合わせ内容 -
export const category = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkBlank(input, local);

  return error;
};

// バリデーションチェック - 希望日 -
export const desired_date = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkDate(input, local);

  return error;
};

// バリデーションチェック - 詳細 -
export const content = (
  input: FormDataEntryValue | null,
  local: FormDataEntryValue | null,
) => {
  // バリデーション結果格納
  const error = checkBlank(input, local);

  return error;
};
