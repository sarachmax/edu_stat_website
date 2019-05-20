import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  overflow-x: auto;
  padding-bottom: 10px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Tbody = styled.tbody`

`

export const Tr = styled.tr`

`

const t_template = css`
  text-align: center;
  border: 1px solid black;
  padding: 8px;
`

export const Th = styled.th`
  ${t_template}
`

export const Td = styled.td`
  ${t_template}
`