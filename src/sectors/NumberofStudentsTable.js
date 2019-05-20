import React from 'react'

import {
  Table,
  Tbody,
  Tr,
  Th,
  Td,
} from '../styles/table'

const NumberOfStudentsTable = () => {
  return (
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
          <Td>13559470</Td>
          <Td>1891552</Td>
          <Td>2506356</Td>
          <Td>1816138</Td>
          <Td>1802689</Td>
          <Td>2771368</Td>
        </Tr>
        <Tr>
          <Td>SD</Td>
          <Td>640004</Td>
          <Td>184305</Td>
          <Td>195396</Td>
          <Td>251311</Td>
          <Td>317148</Td>
          <Td>260909</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default NumberOfStudentsTable