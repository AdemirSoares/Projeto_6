import styled from 'styled-components'
import Close from '../../assets/image/close.png'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  position: relative;
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
  opacity: 0.7;
`

export const Modal = styled.div`
  position: absolute;
  margin-top: 200px;
  margin-left: 512px;
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
  width: 1024px;
  height: 344px;
  margin-top: -750px;
  list-style: none;

  @media (max-width: ${breakpoints.tablet}) {
    left: 30px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  justify-content: center;
  z-index: 1;
  padding: 32px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 370px;
    height: 600px;
  }

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

      @media (max-width: ${breakpoints.tablet}) {
        width: 300px;
        height: 200px;
      }
    }

    .geral {
      display: flex;

      @media (max-width: ${breakpoints.tablet}) {
        display: block;
      }

      .parcial {
        display: block;
        margin-left: 24px;

        @media (max-width: ${breakpoints.tablet}) {
          margin-left: 0;
        }
      }
    }

    h3 {
      font-weight: bold;
      font-size: 18px;
      color: ${colors.white};
      margin-bottom: 16px;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 26px;
        margin-top: 20px;
      }
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: ${colors.white};
      margin-bottom: 36px;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 17px;
      }
    }

    .porcao {
      font-weight: 400;
      font-size: 14px;
      color: ${colors.white};
      margin-bottom: 16px;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 17px;
      }
    }
  }
`
