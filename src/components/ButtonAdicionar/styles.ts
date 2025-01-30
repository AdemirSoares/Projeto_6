import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 304px;
  height: 24px;
  font-size: 14px;
  background-color: ${colors.white};
  color: ${colors.pink};
  margin-top: 8px;
`

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 320px;
  height: 24px;
  font-size: 14px;
  background-color: ${colors.white};
  color: ${colors.pink};
  margin-top: 16px;
  margin-bottom: 8px;
  text-decoration: none;
`
