import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import number_of_schools from '../json/จำนวนสถานศึกษา'

const option = {
  title : {
    text: 'จำนวนสถานศึกษา',
    x:'center'
  },
  xAxis: {
      type: 'category',
      data: number_of_schools['ปี']
  },
  yAxis: {
      type: 'value',
      min: 37000,
      max: 39500
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
      data: number_of_schools['จำนวนสถานศึกษา'],
      type: 'line',
      showSymbol: false,
  }],
  color: ['#c11772']
}

const NumberOfSchools = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{ maxWidth: '700px', margin: '0 auto' }}
      />
    </div>
  )
}

export default NumberOfSchools