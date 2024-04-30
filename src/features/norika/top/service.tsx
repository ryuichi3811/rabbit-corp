import { AspectRatio } from "@/ui";
import { pmNorika } from "@/utils";
import Link from "next/link";

export const Service = ({ dict }: { dict: { [key: string]: string } }) => {
    const d = dict;

    const content = (id: string, text:string, src:string) => {
        return (<>
            <div>
              <Link href={pmNorika(d.lang, `/about/#${id}`)} className="group mb-2 block min-h-[16.375rem] overflow-hidden rounded-lg shadow-lg lg:mb-3">
                <AspectRatio ratio={4/3}>
                    
                <img src={src} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </AspectRatio>
              </Link>
      
              <div className="flex flex-col">
                <Link href={pmNorika(d.lang, `/about/#${id}`)} className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{text}</Link>
              </div>
            </div>
        </>)
    }
  return (
    <div className="mx-auto py-8 lg:py-12 max-w-screen-lg mb-28">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-700 lg:text-3xl">{d.norika_top_service_title}</h2>
  
        <Link href={pmNorika(d.lang, `/about`)} className="inline-block rounded-lg border border-rose-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 outline-none ring-rose-100 transition duration-100 hover:bg-rose-100 focus-visible:ring active:bg-rose-100 md:px-8 md:py-3 md:text-base">{d.norika_top_service_link_text}</Link>
      </div>

      <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 mt-12">
       {content("body", d.norika_about_service_title_1, "/svgs/norika/service/body.svg")}
       {content("face", d.norika_about_service_title_2, "/svgs/norika/service/face.svg")}
       {content("heart", d.norika_about_service_title_3, "/svgs/norika/service/heart.svg")}
        {/* <!-- product - end --> */}
  
  
      </div>
    </div>
  </div>
  );
};
