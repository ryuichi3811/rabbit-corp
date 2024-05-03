export const Content = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <div className="mx-auto max-w-screen-lg [&_p]:text-sm">
      <div className="mt-12 flex w-full justify-center px-4 py-20">
        <h1 className="text-3xl">{dict.privacy_title}</h1>
      </div>
      {/* イントロ */}
      <div className="mb-12">
        <p>{dict.privacy_intro}</p>
      </div>

      {/* 第１条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_01}</h2>
        <p className="px-4 pb-6">{dict.privacy_title_01_body_01}</p>
        <p className="px-4 pb-4">{dict.privacy_title_01_body_01_child_01}</p>
        <p className="px-4 pb-4">{dict.privacy_title_01_body_01_child_02}</p>
        <p className="px-4 pb-4">{dict.privacy_title_01_body_01_child_03}</p>
        <p className="px-4 pb-4">{dict.privacy_title_01_body_01_child_04}</p>
        <p className="px-4 pb-4">{dict.privacy_title_01_body_01_child_05}</p>
        <p className="px-4 pb-4">{dict.privacy_title_01_body_01_child_06}</p>
        <p className="px-4">{dict.privacy_title_01_body_01_child_07}</p>
      </div>

      {/* 第２条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_02}</h2>
        <p className="px-4 pb-6">{dict.privacy_title_02_body_01}</p>
        <p className="px-4">{dict.privacy_title_02_body_02}</p>
      </div>

      {/* 第３条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_03}</h2>
        <p className="px-4 pb-6">{dict.privacy_title_03_body_01}</p>
        <p className="px-4 pb-4 font-bold">{dict.privacy_title_03_body_02}</p>
        <p className="px-4 pb-4">{dict.privacy_title_03_body_01_child_01}</p>
        <p className="px-4 pb-4">{dict.privacy_title_03_body_01_child_02}</p>
        <p className="px-4 pb-4">{dict.privacy_title_03_body_01_child_03}</p>
        <p className="px-4 pb-4">{dict.privacy_title_03_body_01_child_04}</p>
        <p className="px-4 pb-4">{dict.privacy_title_03_body_01_child_05}</p>
        <p className="px-4">{dict.privacy_title_03_body_01_child_06}</p>
      </div>

      {/* 第４条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_04}</h2>
        <p className="px-4">{dict.privacy_title_04_body_01}</p>
      </div>

      {/* 第５条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_05}</h2>
        <p className="px-4 pb-6">{dict.privacy_title_05_body_01}</p>
        <p className="px-8 pb-4">{dict.privacy_title_05_body_01_child_01}</p>
        <p className="px-8 pb-4">{dict.privacy_title_05_body_01_child_02}</p>
        <p className="px-8 pb-4">{dict.privacy_title_05_body_01_child_03}</p>
        <p className="px-4 pb-6">{dict.privacy_title_05_body_02}</p>
        <p className="px-8 pb-4">{dict.privacy_title_05_body_02_child_01}</p>
        <p className="px-8 pb-4">{dict.privacy_title_05_body_02_child_02}</p>
        <p className="px-8 pb-4">{dict.privacy_title_05_body_02_child_03}</p>
        <p className="px-4">{dict.privacy_title_05_body_03}</p>
      </div>

      {/* 第６条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_06}</h2>
        <p className="px-4">{dict.privacy_title_06_body_01}</p>
      </div>

      {/* 第７条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_07}</h2>
        <p className="px-4">{dict.privacy_title_07_body_01}</p>
      </div>

      {/* 第８条 */}
      <div className="mb-12">
        <h2 className="pb-6 text-lg font-bold">{dict.privacy_title_08}</h2>
        <p className="px-4">{dict.privacy_title_08_body_01}</p>
      </div>

      {/* 改定日 */}
      <div className="mb-12">
        <p>{dict.privacy_revision_date}</p>
      </div>
    </div>
  );
};
