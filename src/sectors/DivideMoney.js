import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import divide_money from '../json/แบ่งงบ.json'

const data = Object.keys(divide_money)
  .map(key => ({
    name: key,
    value: divide_money[key]
  }))
  .sort((a, b) => b.value - a.value)

const option = {
  title : {
      text: 'การจัดสรรงบประมาณ',
      x:'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
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
          radius : '55%',
          // center: ['40%', '50%'],
          data: data,
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
}

const DivideMoney = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
      />
    </div>
  )
}

export default DivideMoney