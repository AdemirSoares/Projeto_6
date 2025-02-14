import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BannerContainer = styled.div`
  position: fixed;
  top: 30%;
  left: 50$;
  width: 1024px;
  height: 344px;
  display: none;
  list-style: none;
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  justify-content: center;
  z-index: 1;
  padding: 32px;

  li {
    img {
    }

    h3 {
      font-weight: bold;
      font-size: 18px;
      color: ${colors.white};
      margin-bottom: 16px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: ${colors.white};
      margin-bottom: 28px;
    }

    .porcao {
      font-weight: 400;
      font-size: 14px;
      color: ${colors.white};
      margin-bottom: 32px;
    }
  }
`
