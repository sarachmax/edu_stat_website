import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import divide_money from '../json/แบ่งงบ.json'

const data = Object.keys(divide_money)
  .map(key => ({
    name: key,
    value: divide_money[key]
  }))
  .sort((a, b) => b.value - a.value)

const formatNumber = number => {
  return number.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
}

const option = {
  title : {
      text: 'การจัดสรรงบประมาณ',
      x:'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: ({name, value, percent}) => {
        return `${name} : ${formatNumber(value)} (${percent}%)`
      }
  },
  // legend: {
  //     type: 'scroll',
  //     orient: 'vertical',
  //     right: 10,
  //     top: 20,
  //     bottom: 20,
  //     data: data.legendData,
  // },
  series : [
      {
          name: 'การจัดสรรงบประมาณ',
          type: 'pie',
          radius : '65%',
          center: ['50%', '60%'],
          data: data,
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ],
  color: ['#1dd1a1', '#5f27cd', '#ff9f43', '#54a0ff', '#ee5253', '#eae075']
}

const DivideMoney = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          height: '340px'
        }}
      />
    </div>
  )
}

export default DivideMoney