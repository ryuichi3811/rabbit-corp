export const WebsiteCreation = ({
  dict,
}: {
  dict: { [key: string]: string };
}) => {
  const d = dict;
  console.log(d);
  return (
    <div className="relative z-0 h-[30rem] [&_canvas]:top-[10.3125rem]">
      <div className="relative z-10">ホームページ制作コンテンツ</div>
    </div>
  );
};
