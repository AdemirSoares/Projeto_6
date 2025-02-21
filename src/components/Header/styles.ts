import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 1366px;
  height: 186px;
  margin-top: -23px;
  display: flex;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
  }

  a,
  span {
    color: ${colors.pink};
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }

  img {
    width: 125px;
    height: 57px;
`

export const Links = styled.ul`
  display: flex;
`

export const LinkItem = styled.li`
  display: flex;
  margin-right: 16px;
`

export const CartButton = styled.a`
  color: ${colors.pink};
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`
