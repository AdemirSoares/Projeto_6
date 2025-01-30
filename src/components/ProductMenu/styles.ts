import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  margin-bottom: 32px;
  position: relative;
  border: 1px solid ${colors.pink};
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
  color: ${colors.lightPink};
`

export const Text = styled.p`
  color: ${colors.lightPink};
  font-size: 14px;
  margin: 16px 0;
`
