import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 82px;
  height: 24px;
  font-size: 14px;
  background-color: ${colors.pink};
  color: ${colors.white};
  margin-top: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 82px;
  height: 24px;
  font-size: 14px;
  background-color: ${colors.pink};
  color: ${colors.lightPink};
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
  text-decoration: none;
`
