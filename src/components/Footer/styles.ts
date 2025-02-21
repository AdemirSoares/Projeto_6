import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.div`
  background-color: ${colors.lightPink};
  width: 1366px;
  height: 298px;
  display: block;
  align-items: center;
  justify-content: center;

  .logo {
    padding-top: 40px;
    padding-bottom: 32.5px;
  }

  a {
    display: flex;
    justify-content: center;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .text {
    display: flex;
    color: ${colors.pink};
    width: 1366px;
    margin-top: 80px;
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      text-align: center;
    }
  }

  .paragrafo {
    width: 790px;
    text-align: center;
`
