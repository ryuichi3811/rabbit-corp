export const MailTemplate = ({
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

export const NorikaMailTemplate = ({
  name,
  birthday,
  gender,
  email,
  tel,
  category,
  desired_date,
  message,
}: {
  name: string;
  birthday: string;
  gender: string;
  email: string;
  tel: string;
  category: string;
  desired_date: string;
  message: string;
}) => {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // 誕生日がまだ来ていない場合は1年引く
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return (
    <>
      <div style={{ width: '100%' }}>
        <p>========================================</p>
        <p>
          {name} 様より
          <br />
          {category} のお問い合わせがありました。
        </p>
        <br />

        <p>========================================</p>
        <p>【 お名前 】</p>
        <p>{name}</p>
        <p>【 性別 】</p>
        <p>{gender}</p>
        <p>【 生年月日 】</p>
        <p>{birthday}</p>
        <p>【 年齢 】</p>
        <p>{age}</p>
        <br />

        <p>========================================</p>
        <p>【 返信用メールアドレス 】</p>
        <p>{email}</p>
        <p>【 連絡先電話番号 】</p>
        <p>{tel}</p>
        <br />

        <p>========================================</p>
        <p>【 施術希望日 】</p>
        <p>{desired_date}</p>
        <p>【 問い合わせ詳細 】</p>
        <p>{message}</p>
        <p>========================================</p>
      </div>
    </>
  );
};

export default MailTemplate;
