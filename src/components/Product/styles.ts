import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  margin-bottom: 48px;
  position: relative;
  border: 1px solid ${cores.rosa};

  .capa {
    width: 472px;
    height: 217px;
  }
`

export const Titulos = styled.div`
  width: 472px;
  hegth: 217px;
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
  color: ${cores.rosa};
`

export const Text = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
  margin: 16px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
