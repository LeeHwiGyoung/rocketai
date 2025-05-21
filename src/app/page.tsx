import SajuChartTable from "@/components/SajuChartTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative max-w-md w-full m-auto bg-[#f3f2ef]">
      <div className="relative w-full">
        <div className="absolute left-[35%] translate-x-[-50%] translate-y-[50%] bottom-[10%] leading-[1.5] wrap-anywhere text-center font-main">
          <p>이제 본격적으로</p>
          <p> OO님의 사주팔자를</p>
          <p> 분석해볼 차례네요.</p>
        </div>
        <Image src="/img_cut_1.png" alt="" width={448} height={897} />
      </div>
      <div className="relative mr-[6.4%] ">
        <Image src="/img_cut_2.png" alt="" width={448} height={360}  />
      </div>
      <div className="relative mt-[-22.3%]">
        <div className="absolute left-[38.2%] translate-[-50%] top-[17.5%] leading-[1.5] wrap-anywhere text-center font-main">
          <p>제가 oo님의 사주를</p>
          <p> 보기 쉽게 표로 정리했어요</p>
        </div>
        <Image src="/img_cut_3.png" alt="" width={448} height={513.76} />
      </div>
      <div className="px-3 mt-[-6.93%]">
        <SajuChartTable/>
      </div>
    </main>
  );
}
