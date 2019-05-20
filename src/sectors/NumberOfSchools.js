import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import number_of_schools from '../json/จำนวนสถานศึกษา'

const option = {
  xAxis: {
      type: 'category',
      data: number_of_schools['ปี']
  },
  yAxis: {
      type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
      data: number_of_schools['จำนวนสถานศึกษา'],
      type: 'line'
  }]
}

const NumberOfSchools = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
      />
    </div>
  )
}

export default NumberOfSchools