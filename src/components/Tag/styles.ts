import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.lightPink};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 10px')};
  display: inline-block;
  margin-right: 8px;
`
