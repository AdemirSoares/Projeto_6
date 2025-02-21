import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeroBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1366px;
  height: 384px;
  display: block;
  margin-bottom: 50px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 767px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 500px;
    height: 280px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 64px;

    @media (max-width: ${breakpoints.tablet}) {
      text-align: center;
    }

    img {
      width: 125px;
      height: 57.5px;

      @media (max-width: ${breakpoints.tablet}) {
        text-align: center;
      }
    }
  }

  h2 {
    color: ${colors.pink};

    font-weight: bold;
    padding: 138.5px 414px 40px 414px;
    text-align: center;

    @media (max-width: ${breakpoints.desktop}) {
      padding: 138.5px 100px 40px 100px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      padding: 50px 50px 40px 50px;
    }
  }
`
