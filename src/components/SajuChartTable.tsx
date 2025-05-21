'use client';
import React, { useState } from 'react'
import SajuStamp from './SajuStamp'
import SajuText from './SajuText'
import { SajuData, User } from '@/type';
import './sajuChart.css';

const sajuData : SajuData = {
  "header": ["", "時", "日", "月", "年"],
  "body": [
    {
      "rowTitle": { "hanjaText": "十星", "koreanText": "(십성)" },
      "columns": [
        { "type": "text", "hanjaText": "傷官", "koreanText": "(상관)" },
        { "type": "text", "hanjaText": "比肩", "koreanText": "(비견)" },
        { "type": "text", "hanjaText": "傷官", "koreanText": "(상관)" },
        { "type": "text", "hanjaText": "傷官", "koreanText": "(상관)" }
      ]
    },
    {
      "rowTitle": { "hanjaText": "天干", "koreanText": "(천간)" },
      "columns": [
        {
          "type": "stamp",
          "fontColor": "white",
          "backgroundColor": "black",
          "border": "none",
          "hanjaText": "壬",
          "koreanText": "임",
          "detailHanjaText": "陽水"
        },
        {
          "type": "stamp",
          "fontColor": "white",
          "backgroundColor": "red",
          "border": "none",
          "hanjaText": "丁",
          "koreanText": "정",
          "detailHanjaText": "陰火"
        },
        {
          "type": "stamp",
          "fontColor": "white",
          "backgroundColor": "black",
          "border": "none",
          "hanjaText": "癸",
          "koreanText": "계",
          "detailHanjaText": "陰水"
        },
        {
          "type": "stamp",
          "fontColor": "white",
          "backgroundColor": "black",
          "border": "none",
          "hanjaText": "癸",
          "koreanText": "계",
          "detailHanjaText": "陰水"
        }
      ]
    },
    {
      "rowTitle": { "hanjaText": "地支", "koreanText": "(지지)" },
      "columns": [
        {
          "type": "stamp",
          "fontColor": "white",
          "backgroundColor": "green",
          "border": "none",
          "hanjaText": "寅",
          "koreanText": "인",
          "detailHanjaText": "陽木"
        },
        {
          "type": "stamp",
          "fontColor": "white",
          "backgroundColor": "red",
          "border": "none",
          "hanjaText": "巳",
          "koreanText": "사",
          "detailHanjaText": "陰火"
        },
        {
          "type": "stamp",
          "fontColor": "white",
          "backgroundColor": "black",
          "border": "none",
          "hanjaText": "亥",
          "koreanText": "해",
          "detailHanjaText": "陰水"
        },
        {
          "type": "stamp",
          "fontColor": "black",
          "backgroundColor": "white",
          "border": "black",
          "hanjaText": "酉",
          "koreanText": "유",
          "detailHanjaText": "陰金"
        }
      ]
    },
    {
      "rowTitle": { "hanjaText": "十星", "koreanText": "(십성)" },
      "columns": [
        { "type": "text", "hanjaText": "比肩", "koreanText": "(비견)" },
        { "type": "text", "hanjaText": "劫財", "koreanText": "(겁재)" },
        { "type": "text", "hanjaText": "食神", "koreanText": "(식신)" },
        { "type": "text", "hanjaText": "偏財", "koreanText": "(편재)" }
      ]
    },
    {
      "rowTitle": { "hanjaText": "十二運星", "koreanText": "(십이운성)" },
      "columns": [
        { "type": "text", "hanjaText": "死", "koreanText": "(사)" },
        { "type": "text", "hanjaText": "帝旺", "koreanText": "(제왕)" },
        { "type": "text", "hanjaText": "胎", "koreanText": "(태)" },
        { "type": "text", "hanjaText": "長生", "koreanText": "(장생)" }
      ]
    },
    {
      "rowTitle": { "hanjaText": "十二神殺", "koreanText": "(십이신살)" },
      "columns": [
        { "type": "text", "hanjaText": "劫殺", "koreanText": "(겁살)" },
        { "type": "text", "hanjaText": "地殺", "koreanText": "(지살)" },
        { "type": "text", "hanjaText": "驛馬殺", "koreanText": "(역마살)" },
        { "type": "text", "hanjaText": "將星殺", "koreanText": "(장성살)" }
      ]
    },
    {
      "rowTitle": { "hanjaText": "十星", "koreanText": "(귀인)" },
      "columns": [
        { "type": "text", "hanjaText": "", "koreanText": "(없음)" },
        { "type": "text", "hanjaText": "", "koreanText": "(없음)" },
        {
          "type": "text",
          "hanjaText": "天乙",
          "koreanText": "(천을귀인)"
        },
        {
          "type": "group",
          "items": [
            { "hanjaText": "天乙", "koreanText": "(천을귀인)" },
            { "hanjaText": "太極", "koreanText": "(태극귀인)" },
            { "hanjaText": "文昌", "koreanText": "(문창귀인)" }
          ]
        }
      ]
    }
  ]
}

export default function SajuChartTable() {
  const [user, setUser] = useState<User>({
    name : '김로켓',
    year : '1980',
    month : "8",
    day : "27",
    birthTime : "08:10"

  })
 
  return (
    <article className="relative w-full border-3 bg-[#F5F3EC] before:absolute before:w-full before:border-1 before:border-border-blue before:top-1.25 after:absolute after:w-full after:border-1 after:border-border-blue after:bottom-[8px]">
      <div className='relative flex flex-col items-center border-x-2 border-border-blue mx-1.25 px-3
        before:absolute before:bg-[url("/left_layer.png")] before:w-[16.86%] before:aspect-56/38 before:bg-cover before:left-0 before:top-11.25 before:z-10
        after:absolute after:bg-[url("/right_layer.png")] after:w-[16.86%] after:aspect-56/38 after:bg-cover after:right-0  after:top-6.5 after:z-10 '>
        <h2 className='mt-10'>{user.name}님의 사주</h2>
        <p className='mt-3'>{user.year}년 {user.month}월{user.day}일 {user.birthTime}</p>
        <table className='w-full border-collapse border-black mt-6.5 mb-8.25'>
          <thead>
            <tr className='table-header-col'>
              {sajuData.header.map((item, index)=> {
                return <th key={index}>{item}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {sajuData.body.map((rowItem, rowIndex)=> {
              return <tr className='table-body-col' key={rowIndex}>
                <th className={`${rowIndex === 1 && 'celestialstems'}`}>
                  <SajuText size={'small'} hanjaText={rowItem.rowTitle.hanjaText} koreanText={rowItem.rowTitle.koreanText} />
                </th>
                {rowItem.columns.map((colItem , colIndex) => {
                  if(colItem.type === 'text') {
                    return <td key={colIndex}>
                      <SajuText size={'medium'} hanjaText={colItem.hanjaText} koreanText={colItem.koreanText}/> 
                    </td>
                  }
                  if(colItem.type === 'stamp'){
                    return <td key={colIndex} className={`${rowIndex === 1 && 'celestialstems'}`}>
                      <div className='flex items-center justify-center'>
                        <SajuStamp fontColor={colItem.fontColor} backgroundColor={colItem.backgroundColor} border={colItem.border} hanjaText={colItem.hanjaText} koreanText={colItem.koreanText} detailHanjaText={colItem.detailHanjaText} />
                      </div>
                    </td>
                  }

                  if(colItem.type === 'group'){
                    return (
                      <td key={colIndex}>
                      {colItem.items.map((groupItem, index)=> {
                        return <SajuText key={index} size={'medium'} hanjaText={groupItem.hanjaText} koreanText={groupItem.koreanText}/>
                      })}    
                     </td>
                    )
                  }
                })}
              </tr>
            })}
          </tbody>
        </table>
       </div>
    </article>
  )
}
