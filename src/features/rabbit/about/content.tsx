export const ConpanyInfo = ({ dict }: { dict: { [key: string]: string } }) => {
  const d = dict;
  return (
    <>
      {/* ヘッダー  start*/}
      <div className="bg-white py-6 text-slate-700 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <p className="mb-2 text-center font-semibold text-pink-700 md:mb-3 lg:text-lg">
            Introducing
          </p>

          <h1 className="mb-4 text-center text-3xl font-bold md:mb-6 lg:text-4xl">
            {d.rabbit_about_title}
          </h1>

          <p className="mx-auto max-w-screen-md text-center text-slate-500 md:text-lg">
            {d.rabbit_about_description}
          </p>
        </div>
      </div>
      {/* ヘッダー  end*/}
      {/* 企業理念  start*/}
      {/* 目的 start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <p className="text-xl font-semibold text-pink-700 md:text-2xl">
            Purpose
          </p>

          <h2 className="my-6 text-2xl font-bold lg:text-center lg:text-3xl">
            {d.rabbit_about_purpose_title}
          </h2>

          <p className="mx-auto max-w-screen-md md:text-lg">
            {d.rabbit_about_purpose_description}
          </p>
        </div>
      </div>
      {/* 目的 end */}
      {/* ミッション start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <h3 className="text-2xl font-semibold text-pink-700 md:text-3xl">
            Mission
          </h3>
          <div className="my-6 flex justify-center">
            <ul className="pl-14 text-lg font-bold lg:text-2xl">
              <li className="mb-4 list-decimal">
                {d.rabbit_about_mission_title_1}
              </li>
              <li className="list-decimal">{d.rabbit_about_mission_title_2}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ミッション end */}
      {/* ビジョン start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <h3 className="text-2xl font-semibold text-pink-700 md:text-3xl">
            Vision
          </h3>
          <div className="my-6 flex justify-center">
            <ul className="pl-14 text-lg font-bold lg:text-2xl">
              <li className="mb-4 list-decimal">
                {d.rabbit_about_vision_title_1}
              </li>
              <li className="list-decimal">{d.rabbit_about_vision_title_2}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ビジョン end */}
      {/* バリュー start */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center px-4 md:px-8">
          <h3 className="w-full items-start text-2xl font-semibold text-pink-700 md:text-3xl">
            Value
          </h3>
          <div className="mb-10 mt-6 max-w-screen-md">
            <div className="grid grid-cols-[100px_1fr] justify-center gap-4 border-y-2 border-pink-700 px-6 py-8">
              <h4 className="text-lg font-bold">
                {d.rabbit_about_value_title_1}
              </h4>
              <p>{d.rabbit_about_value_description_1}</p>

              <h4 className="text-lg font-bold">
                {d.rabbit_about_value_title_2}
              </h4>
              <p>{d.rabbit_about_value_description_2}</p>

              <h4 className="text-lg font-bold">
                {d.rabbit_about_value_title_3}
              </h4>
              <p>{d.rabbit_about_value_description_3}</p>

              <h4 className="text-lg font-bold">
                {d.rabbit_about_value_title_4}
              </h4>
              <p>{d.rabbit_about_value_description_4}</p>
            </div>
          </div>
        </div>
      </div>
      {/* バリュー end */}
      {/* 企業理念  end*/}
      {/* 会社概要  start*/}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center px-4 md:px-8">
          <h2 className="my-6 text-2xl font-bold lg:text-center lg:text-3xl">
            {d.rabbit_about_info_title}
          </h2>
          <div className="my-10 w-full max-w-screen-md">
            <ul className="w-full">
              <li className="flex w-full justify-start border-b border-t border-pink-700 px-8 py-8">
                <p className="min-w-28 md:w-48">
                  {d.rabbit_about_info_headline_1}
                </p>
                <p className="">{d.rabbit_about_info_text_1}</p>
              </li>
              <li className="flex w-full justify-start border-b border-pink-700 px-8 py-8">
                <p className="min-w-28 md:w-48">
                  {d.rabbit_about_info_headline_2}
                </p>
                <p className="">{d.rabbit_about_info_text_2}</p>
              </li>
              <li className="flex w-full justify-start border-b border-pink-700 px-8 py-8">
                <p className="min-w-28 md:w-48">
                  {d.rabbit_about_info_headline_3}
                </p>
                <p className="">{d.rabbit_about_info_text_3}</p>
              </li>
              <li className="flex w-full justify-start border-b border-pink-700 px-8 py-8">
                <p className="min-w-28 md:w-48">
                  {d.rabbit_about_info_headline_4}
                </p>
                <p className="">{d.rabbit_about_info_text_4}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 会社概要 end */}
    </>
  );
};
