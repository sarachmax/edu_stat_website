import styled, { css } from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* border: 1px solid black; */

`

export const Tbody = styled.tbody`

`

export const Tr = styled.tr`

`

const t_template = css`
  text-align: center;
  border: 1px solid black;
  padding: 10px;
`

export const Th = styled.th`
  ${t_template}
`

export const Td = styled.td`
  ${t_template}
`