import React from 'react'

import {
  Wrapper,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
} from '../styles/table'

const formatNumber = number => {
  return number.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
}

const NumberOfStudentsTable = () => {
  return (
    <Wrapper>
      <Table>
        <Tbody>
          <Tr>
            <Th></Th>
            <Th>รวมทุกชั้น</Th>
            <Th>ก่อนประถมศึกษา</Th>
            <Th>มัธยมศึกษาตอนต้น</Th>
            <Th>มัธยมศึกษาตอนปลาย</Th>
            <Th>ปริญญาตรีและต่ำกว่า</Th>
            <Th>เฉลี่ยประถมต้น-ปลาย</Th>
          </Tr>
          <Tr>
            <Td>Mean</Td>
            <Td>{ formatNumber(13559470) }</Td>
            <Td>{ formatNumber(1891552) }</Td>
            <Td>{ formatNumber(2506356) }</Td>
            <Td>{ formatNumber(1816138) }</Td>
            <Td>{ formatNumber(1802689) }</Td>
            <Td>{ formatNumber(2771368) }</Td>
          </Tr>
          <Tr>
            <Td>SD</Td>
            <Td>{ formatNumber(640004) }</Td>
            <Td>{ formatNumber(184305) }</Td>
            <Td>{ formatNumber(195396) }</Td>
            <Td>{ formatNumber(251311) }</Td>
            <Td>{ formatNumber(317148) }</Td>
            <Td>{ formatNumber(260909) }</Td>
          </Tr>
        </Tbody>
      </Table>
    </Wrapper>
  )
}

export default NumberOfStudentsTable