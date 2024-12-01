import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding-top: 56px;
  padding-bottom: 56px;
  background-color: ${cores.branca};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
`
