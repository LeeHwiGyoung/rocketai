import React from 'react'

interface SajuStampProps {
    fontColor : 'red' | 'black' | 'green' | 'white';
    backgroundColor : 'red' | 'black' | 'green' | 'white';
    border : 'black' | 'none';
    hanjaText : string;
    koreanText : string;
    detailHanjaText : string;
}

export default function SajuStamp({ 
    fontColor,
    backgroundColor,
    border,
    hanjaText,
    koreanText,
    detailHanjaText
    } : SajuStampProps) {

  const textColorVariant = {
    red : 'text-saju-red',
    black : 'text-saju-black',
    green : 'text-saju-green',
    white : 'text-saju-white'
  }

  const backgroundColorVariant = {
    red : 'bg-saju-red',
    black : 'bg-saju-black',
    green : 'bg-saju-green',
    white : 'bg-saju-background-white'
  }
  
  const borderVariant = {
    none : '',
    black : 'border 1'
  }
  return (
    <div className={`relative flex flex-col items-center max-w-[55px] max-h-[55px] w-full h-full ${textColorVariant[fontColor]} ${backgroundColorVariant[backgroundColor]} ${borderVariant[border]} rounded-xl aspect-square`}>
        <p className='absolute top-[7%] text-saju-stamp-korean'>{koreanText}</p>
        <p className='pt-[14.5%] text-saju-stamp-kanji'>{hanjaText}</p>
        <p className='absolute bottom-[7%] text-saju-stamp-hanja'>{detailHanjaText}</p>
    </div>
  )
}
