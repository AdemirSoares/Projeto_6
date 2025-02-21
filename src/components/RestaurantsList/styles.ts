import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  margin: 80px 171px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    align-items: center;
  }
}
`
