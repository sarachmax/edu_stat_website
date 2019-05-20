import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import money_per_year from '../json/งบต่อปี.json'

const option = {
  xAxis: {
      type: 'category',
      data: money_per_year['ปี']
  },
  yAxis: {
      type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
      data: money_per_year['งบประมาณรายจ่ายด้านการศึกษา'],
      type: 'line'
  }]
}

const MoneyPerYear = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
      />
    </div>
  )
}

export default MoneyPerYear