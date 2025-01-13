import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1366px;
  height: 384px;
  display: block;
  margin-bottom: 50px;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 64px;

    img {
      width: 125px;
      height: 57.5px;
    }
  }

  h2 {
    color: ${cores.rosa};
    font-size: 36px;
    font-weight: bold;
    padding: 138.5px 414px 40px 414px;
    text-align: center;
  }
`
