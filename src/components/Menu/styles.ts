import styled from 'styled-components'
import Close from '../../assets/image/close.png'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  margin-bottom: 32px;
  position: relative;
  border: 1px solid ${colors.pink};
  padding: 7px;
  width: 320px;
  hegth: 338px;

  img {
    width: 304px;
    height: 167px;
  }
`

export const Titulos = styled.div`
  width: 320px;
  hegth: 338px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  padding-top: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.lightPink};
`

export const Text = styled.p`
  color: ${colors.lightPink};
  font-size: 14px;
  margin: 16px 0;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &.visivel {
    display: flex;
    z-index: 1;
  }
`

export const BannerContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 12%;
  width: 1024px;
  height: 344px;
  list-style: none;
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  justify-content: center;
  z-index: 1;
  padding: 32px;
  position: relative;

  .close {
    background-image: url(${Close});
    background-color: transparent;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  li {
    img {
      width: 417px;
      height: 280px;
    }

    .geral {
      display: flex;

      .parcial {
        display: block;
        margin-left: 24px;
      }
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
      margin-bottom: 36px;
    }

    .porcao {
      font-weight: 400;
      font-size: 14px;
      color: ${colors.white};
      margin-bottom: 16px;
    }
  }
`
