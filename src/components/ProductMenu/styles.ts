import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  margin-bottom: 32px;
  position: relative;
  border: 1px solid ${cores.rosa};
  padding: 8px;

  img {
    width: 320px;
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
  color: ${cores.rosaClaro};
`

export const Text = styled.p`
  color: ${cores.rosaClaro};
  font-size: 14px;
  margin: 16px 0;
`
