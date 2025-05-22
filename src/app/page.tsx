import SajuChartTable from "@/components/SajuChartTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative max-w-md w-full m-auto bg-[#f3f2ef]">
      <div className="relative w-full">
        <Image src="/img_cut_1.png" alt="" width={448} height={897} />
        <div className="absolute w-[57.3%] px-[10.6%] pt-[12%] pb-[5.86%] left-[35%] bottom-[12%] translate-x-[-50%] translate-y-[50%] leading-[1.5] break-keep text-center font-main max-first-comment-collapse-sm:text-sm max-first-comment-collapes-xs:text-xs">
          <p>
            이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요.
          </p>
        </div>
      </div>
      <div className="relative mr-[6.4%] ">
        <Image src="/img_cut_2.png" alt="" width={448} height={360}  />
      </div>
      <div className="relative mt-[-22.3%]">
        <Image src="/img_cut_3.png" alt="" width={448} height={513.76} />
        <div className="absolute w-[64%] left-[38.2%] translate-[-50%] top-[17.5%] leading-[1.5] text-center font-main p-[9%] break-keep max-first-comment-collapse-sm:text-sm max-first-comment-collapes-xs:text-xs">
          <p>제가 oo님의 사주를 보기 쉽게 표로 정리했어요</p>
        </div>
      </div>
      <div className="px-3 mt-[-6.93%]">
        <SajuChartTable/>
      </div>
    </main>
  );
}
