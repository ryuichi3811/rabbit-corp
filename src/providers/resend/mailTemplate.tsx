const MailTemplate = ({
  name,
  company_name,
  email,
  tel,
  category,
  message,
}: {
  name: string;
  company_name: string;
  email: string;
  tel: string;
  category: string;
  message: string;
}) => {
  return (
    <>
      <div>
        <p>=================================================</p>
        <p>
          {company_name} の {name} 様より
          <br />
          {category} のお問い合わせがありました。
        </p>
        <br />

        <p>=================================================</p>
        <p>【 返信用メールアドレス 】</p>
        <p>{email}</p>
        <p>【 連絡先電話番号 】</p>
        <p>{tel}</p>
        <br />

        <p>=================================================</p>
        <p>【 問い合わせ詳細 】</p>
        <p>{message}</p>
        <p>=================================================</p>
      </div>
    </>
  );
};

export default MailTemplate;
