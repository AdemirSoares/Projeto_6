import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  width: 472px;
  margin-bottom: 32px;
  position: relative;
  border: 1px solid ${colors.pink};

  @media (max-width: ${breakpoints.desktop}) {
    width: 768px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 370px;
  }

  .capa {
    width: 470px;
    height: 217px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 368px;
    }
  }
`

export const Titulos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
`

export const Avaliacao = styled.div`
  display: flex;
  width: 55px;
  heigth: 21px;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.pink};
`

export const Text = styled.p`
  color: ${colors.pink};
  font-size: 14px;
  margin: 16px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
