import React from 'react';
import ReactEcharts from 'echarts-for-react' 

import number_of_teachers from '../json/จำนวนครู.json'

const option = {
  title : {
    text: 'จำนวนครู - อาจารย์',
    x:'center'
  },
  xAxis: {
      type: 'category',
      data: number_of_teachers['ปี']
  },
  yAxis: {
      type: 'value',
      min: 550000,
      max: 750000
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
        style={{ maxWidth: '700px', margin: '0 auto' }}
      />
    </div>
  )
}

export default NumberOfTeachers