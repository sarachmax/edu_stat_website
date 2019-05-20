import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import money_per_year from '../json/งบต่อปี.json'

const option = {
  title : {
    text: 'งบประมาณ vs. ปีการศึกษา',
    x:'center'
  },
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
      type: 'line',
      showSymbol: false,
  }]
}

const MoneyPerYear = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{ maxWidth: '700px', margin: '0 auto' }}
      />
    </div>
  )
}

export default MoneyPerYear