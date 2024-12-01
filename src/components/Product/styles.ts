import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  padding: 10px;
  margin: 5px;
`

export const Title = styled.h3`
  font-size: 16px;
  color: ${cores.branca};
  margin-top: 8px;
`

export const Texto = styled.p`
  font-size: 14px;
  color: ${cores.branca};
  margin-top: 8px;
`

export const Botao = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 304px;
  height: 24px;
  font-size: 14px;
  background-color: ${cores.branca};
  color: ${cores.rosa};
  margin-top: 8px;
  text-decoration: none;
`
