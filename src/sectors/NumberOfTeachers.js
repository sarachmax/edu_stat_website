import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import number_of_teachers from '../json/จำนวนครู.json'

const option = {
  xAxis: {
      type: 'category',
      data: number_of_teachers['ปี']
  },
  yAxis: {
      type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
      data: number_of_teachers['ครู ภูมิภาค'],
      type: 'line'
  }]
}

const NumberOfTeachers = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
      />
    </div>
  )
}

export default NumberOfTeachers