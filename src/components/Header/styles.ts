import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 1366px;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  display: flex;
  margin-right: 16px;

  a {
    color: ${cores.rosa};
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
  }
`

export const LinkCart = styled.a`
  color: ${cores.rosa};
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 40px;
`
