import React from 'react'
interface SajuTextProps {
    size : 'small' | 'medium'
    hanjaText: string;
    koreanText : string;
}
export default function SajuText({size ,hanjaText , koreanText}:SajuTextProps) {
  const sizeVariable = {
    small : {
        hanja : 'text-xs',
        korean : "text-saju-xs font-main",
    },
    medium :  {
        hanja : 'text-[0.92rem]',
        korean : "text-[0.61rem] font-main",
    }
  }
  return (
    <div className='flex flex-col text-center leading-[1.1]'>
      <p className={`${sizeVariable[size]['hanja']}`}>{hanjaText}</p>
      <p className={`${sizeVariable[size]['korean']}`}>{koreanText}</p>
    </div>
  )
}
