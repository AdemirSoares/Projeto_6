import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const DeliveryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.show {
    display: flex;
    z-index: 1;
  }
`

export const PaymentModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.show {
    display: flex;
    z-index: 1;
  }
`

export const ConfirmedModal = styled.div`
  color: ${colors.pink};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  &.show {
    display: flex;
    z-index: 1;
  }

  .buttomContainer {
    margin-top: 24px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  .entrega,
  .titulo {
    font-size: 16px;
    color: ${colors.lightPink};
    margin-bottom: 16px;
    font-weight: bold;
  }

  h2 {
    color: ${colors.lightPink};
    font-size: 16px;
    margin-bottom: 16px;
    weight: 700;
  }

  p {
    color: ${colors.lightPink};
    font-size: 14px;
    weight: 400;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Row = styled.div<RowProps>`
  display: block;
  width: 100%;
  input {
    width: 100%;
    padding: 8px;
    background-color: ${colors.pink};
    border: 1px solid ${colors.pink};
    margin: 8px 0;
  }

  .cepNumero,
  .ncvv,
  .monthYear {
    display: flex;
    justify-content: space-between;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    color: ${colors.lightPink};
    font-size: 14px;
    weight: 700;
    display: block;
  }

  input {
    background-color: ${colors.lightPink};
    border: 1px solid ${colors.lightPink};
    height: 32px;
    padding: 0 8px;
    weight: 700;
    font-size: 14px;

    &.error {
      border: 1px solid red;
    }
  }
`
