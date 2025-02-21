import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  margin: 56px 171px 120px 171px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 56px 0 120px 40px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
