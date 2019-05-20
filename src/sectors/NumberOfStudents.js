import React from 'react';
import ReactEcharts from 'echarts-for-react'

import number_of_students from '../json/จำนวนนักเรียน'

const option = {
  title : {
    text: 'จำนวนนักเรียน',
    x:'center',
    // padding:
  },
  xAxis: {
      type: 'category',
      data: number_of_students['ปี']
  },
  yAxis: {
      type: 'value'
  },
  legend: {
    data: ['ก่อนประถมศึกษา','เฉลี่ยประถมต้น-ปลาย','มัธยมศึกษาตอนต้น','มัธยมศึกษาตอนปลาย','ปริญญาตรีและต่ำกว่า']
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [
    {
      name: 'ก่อนประถมศึกษา',
      data: number_of_students['ก่อนประถมศึกษา'],
      type: 'line'
    }, {
      name: 'เฉลี่ยประถมต้น-ปลาย',
      data: number_of_students['เฉลี่ยประถมต้น-ปลาย'],
      type: 'line'
    }, {
      name: 'มัธยมศึกษาตอนต้น',
      data: number_of_students['มัธยมศึกษาตอนต้น'],
      type: 'line'
    }, {
      name: 'มัธยมศึกษาตอนปลาย',
      data: number_of_students['มัธยมศึกษาตอนปลาย'],
      type: 'line'
    }, {
      name: 'ปริญญาตรีและต่ำกว่า',
      data: number_of_students['ปริญญาตรีและต่ำกว่า'],
      type: 'line'
    }
  ]
}

const NumberOfStedents = () => {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{ maxWidth: '700px', margin: '0 auto' }}
      />
    </div>
  )
}

export default NumberOfStedents