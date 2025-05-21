'use client';
import React, { useState } from 'react'
import SajuStamp from './SajuStamp'
import SajuText from './SajuText'

export default function SajuChartTable() {
  const [name, setName] = useState<string>("김로켓");
  const [year ,setYear] = useState<string>("1980");
  const [month ,setMonth] = useState<string>("8");
  const [day ,setDay] = useState<string>("27");
  const [birthTime ,setBirthTime] = useState<string>("08:10");
  return (
    <article className="relative w-full border-3 bg-[#F5F3EC] before:absolute before:w-full before:border-1 before:border-border-blue before:top-1.25 after:absolute after:w-full after:border-1 after:border-border-blue after:bottom-[8px]">
      <div className='relative flex flex-col items-center border-x-2 border-border-blue mx-1.25 px-3
        before:absolute before:bg-[url("/left_layer.png")] before:w-[16.86%] before:aspect-56/38 before:bg-cover before:left-0 before:top-11.25 before:z-10
        after:absolute after:bg-[url("/right_layer.png")] after:w-[16.86%] after:aspect-56/38 after:bg-cover after:right-0  after:top-6.5 after:z-10 '>
        <h2 className='mt-10'>{name}님의 사주</h2>
        <p className='mt-3'>{year}년 {month}월{day}일 {birthTime}</p>
        <table className='w-full border-collapse border-black mt-6.5 mb-8.25'>
          <thead>
            <tr>
              <th className='border-r border-b'></th>
              <th className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>時</th>
              <th className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>日</th>
              <th className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>月</th>
              <th className='border-r border-b'>年</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='border-r border-b'>
                <SajuText size={'small'} hanjaText={'十星'} koreanText={'(십성)'} />
              </th>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b] '>
                <SajuText size={'medium'} hanjaText={'傷官'} koreanText={'(상관)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'比肩'} koreanText={'(비견)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'傷官'} koreanText={'(상관)'} />
              </td>
              <td className='border-r border-b'>
                <SajuText size={'medium'} hanjaText={'傷官'} koreanText={'(상관)'} />
              </td>
            </tr>
            <tr>
              <th className='border-r-1 border-b-[0.5px] border-b-[#9b9b9b]'>
                <SajuText size={'small'} hanjaText={'天干'} koreanText={'(천간)'} />
              </th>
              <td className='border-b border-b-[#9b9b9b] border-r-[0.5px] border-r-[#9b9b9b]'>
                <div className='flex align-center justify-center'>
                 <SajuStamp fontColor={'white'} backgroundColor={'black'} border={'none'} hanjaText={'壬'} koreanText={'임'} detailHanjaText={'陽水'}/>
                </div>
              </td>
              <td className='border-b border-b-[#9b9b9b] border-r-[0.5px] border-r-[#9b9b9b] '>
                <div className='flex align-center justify-center'>
                  <SajuStamp fontColor={'white'} backgroundColor={'red'} border={'none'} hanjaText={'丁'} koreanText={'정'} detailHanjaText={'陰火'}/>
                </div>
              </td>
              <td className='border-b border-b-[#9b9b9b] border-r-[0.5px] border-r-[#9b9b9b] '>
                <div className='flex align-center justify-center'>
                  <SajuStamp fontColor={'white'} backgroundColor={'black'} border={'none'} hanjaText={'癸'} koreanText={'계'} detailHanjaText={'陰水'}/>
                </div>
              </td>
              <td className='border-r border-b border-b-[#9b9b9b] '>
                <div className='flex align-center justify-center'>
                  <SajuStamp fontColor={'white'} backgroundColor={'black'} border={'none'} hanjaText={'癸'} koreanText={'계'} detailHanjaText={'陰水'}/>
                </div>
              </td>
            </tr>
            <tr>
              <th className='border-r border-b'>
                <SajuText size={'small'} hanjaText={'地支'} koreanText={'(지지)'} />
              </th>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b] '>
                <div className='flex align-center justify-center'>
                  <SajuStamp fontColor={'white'} backgroundColor={'green'} border={'none'} hanjaText={'寅'} koreanText={'인'} detailHanjaText={'陽木'}/>
                </div>
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b] '>
                <div className='flex align-center justify-center'>
                  <SajuStamp fontColor={'white'} backgroundColor={'red'} border={'none'} hanjaText={'巳'} koreanText={'사'} detailHanjaText={'陰火'}/>
                </div>
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b] '>
                <div className='flex align-center justify-center'>
                  <SajuStamp fontColor={'white'} backgroundColor={'black'} border={'none'} hanjaText={'亥'} koreanText={'해'} detailHanjaText={'陰水'}/>
                </div>
              </td>
              <td className='border-r border-b '>
                <div className='flex align-center justify-center'>
                  <SajuStamp fontColor={'black'} backgroundColor={'white'} border={'black'} hanjaText={'酉'} koreanText={'유'} detailHanjaText={'陰金'}/>
                </div>
              </td>
            </tr>
            <tr>
              <th className='border-r border-b'>
                <SajuText size={'small'} hanjaText={'十星'} koreanText={'(십성)'} />
              </th>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'比肩'} koreanText={'(비견)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'劫財'} koreanText={'(겁재)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'食神'} koreanText={'(식신)'} />
              </td>
              <td className='border-r border-b'>
                <SajuText size={'medium'} hanjaText={'偏財'} koreanText={'(편재)'} />
              </td>
            </tr>
            <tr>
              <th className='border-r border-b'>
                <SajuText size={'small'} hanjaText={'十二運星'} koreanText={'(십이운성)'} />
              </th>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'死'} koreanText={'(사)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'帝旺'} koreanText={'(제왕)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'胎'} koreanText={'(태)'} />
              </td>
              <td className='border-r border-b'>
                <SajuText size={'medium'} hanjaText={'長生'} koreanText={'(장생)'} />
              </td>
            </tr>
            <tr>
              <th className='border-r border-b'>
                <SajuText size={'small'} hanjaText={'十二神殺'} koreanText={'(십이신살)'} />
              </th>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'劫殺'} koreanText={'(겁살)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'地殺'} koreanText={'(지살)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'驛馬殺'} koreanText={'(역마살)'} />
              </td>
              <td className='border-r border-b'>
                <SajuText size={'medium'} hanjaText={'將星殺'} koreanText={'(장성살)'} />
              </td>
            </tr>
            <tr>
              <th className='border-r border-b'>
                <SajuText size={'small'} hanjaText={'十星'} koreanText={'(귀인)'} />
              </th>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={''} koreanText={'(없음)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={''} koreanText={'(없음)'} />
              </td>
              <td className='border-b border-r-[0.5px] border-r-[#9b9b9b]'>
                <SajuText size={'medium'} hanjaText={'天乙'} koreanText={'(천을귀인)'} />
              </td>
              <td className='border-r border-b'>
                <SajuText size={'medium'} hanjaText={'天乙'} koreanText={'(천을귀인)'}/>
                <SajuText size={'medium'} hanjaText={'太極'} koreanText={'(태극귀인)'} />
                <SajuText size={'medium'} hanjaText={'文昌'} koreanText={'(문창귀인)'} />
              </td>
            </tr>
          </tbody>
        </table>
       </div>
    </article>
  )
}
