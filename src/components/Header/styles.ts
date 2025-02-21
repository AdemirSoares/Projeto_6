import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 1366px;
  height: 186px;
  margin-top: -23px;
  display: flex;

  @media (max-width: ${breakpoints.desktop}) {
    width: 767px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 500px;
    align-items: center;
    justify-content: center;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.desktop}) {
      width: 600px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      text-align: center;
    }

    nav {

      @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
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

    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 20px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
`

export const LinkItem = styled.li`
  display: flex;
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

export const CartButton = styled.a`
  color: ${colors.pink};
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`
