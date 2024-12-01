import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.div`
  background-color: ${cores.rosaClaro};
  width: 1366px;
  height: 186px;
  display: block;
  alingn-items: center;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  p {
    color: ${cores.rosa};
    padding-top: 20px;
    text-align: center;
  }
}
`
