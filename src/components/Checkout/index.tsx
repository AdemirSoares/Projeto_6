import { useFormik } from 'formik'

import * as S from './styles'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import {
  backtoCart,
  payment,
  startCheckout,
  openClose,
  close,
  open,
  clear
} from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import InputMask from 'react-input-mask'
import { getTotalPrice, parseToBrl } from '../../utils'
import { useEffect } from 'react'

type Props = {
  checkoutStart?: boolean
  priceTotal: number
}

const Checkout = ({ checkoutStart = false }: Props) => {
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

  const { items, isOpenPayment } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const finish = () => {
    dispatch(openClose())
  }

  const backCart = () => {
    dispatch(backtoCart())
  }

  const backAdress = () => {
    dispatch(startCheckout())
  }

  const closeDelivery = () => {
    dispatch(close())
    openCart()
  }

  const openCart = () => {
    dispatch(open())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const activePayment = () => {
    if (
      form.values.fullName &&
      form.values.description &&
      form.values.city &&
      form.values.zipCode &&
      form.values.number &&
      form.values.complement
    ) {
      dispatch(payment())
    } else {
      alert('Preencha antes os dados obrigatórios')
    }
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(10, 'O CEP precisa ter pelo menos 5 caracteres')
        .max(10, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string()
        .min(2, 'O complemento precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O número precisa ter pelo menos 16 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O código precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O data precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkoutInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <S.ConfirmedModal>
          <S.Sidebar>
            <h2>Pedido realizado - {data.orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <br />
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <div className="buttomContainer">
              <Button
                type="button"
                onClick={finish}
                title="Clique aqui para concluir o pedido"
              >
                Concluir
              </Button>
            </div>
          </S.Sidebar>
        </S.ConfirmedModal>
      ) : (
        <form onSubmit={form.handleSubmit} className="container">
          <S.DeliveryModal className={checkoutStart ? 'show' : ''}>
            <S.Overlay onClick={closeDelivery} />
            <S.Sidebar>
              <S.Row>
                <S.InputGroup maxWidth="344px">
                  <h2>Entrega</h2>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkoutInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="344px">
                  <label htmlFor="description">Endereço</label>
                  <input
                    id="description"
                    type="text"
                    name="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkoutInputHasError('description') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="344px">
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkoutInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <div className="cepNumero">
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="zipCode">Cep</label>
                    <InputMask
                      id="zipCode"
                      type="text"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkoutInputHasError('zipCode') ? 'error' : ''
                      }
                      mask="99.999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkoutInputHasError('number') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </div>
                <S.InputGroup maxWidth="344px">
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkoutInputHasError('complement') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <br />
                <Button
                  onClick={activePayment}
                  type="button"
                  title="Clique aqui para pagamento"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  onClick={backCart}
                  type="button"
                  title="Clique aqui para voltar para o carrinho"
                >
                  Voltar para o carrinho
                </Button>
              </S.Row>
            </S.Sidebar>
          </S.DeliveryModal>
          <S.PaymentModal className={isOpenPayment ? 'show' : ''}>
            <S.Overlay />
            <S.Sidebar>
              <p className="titulo">
                {`Pagamento - Valor a pagar ${parseToBrl(getTotalPrice(items))}`}
              </p>
              <S.Row>
                <S.InputGroup maxWidth="344px">
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    type="text"
                    required
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkoutInputHasError('cardName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <div className="ncvv">
                  <S.InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      mask="9999 9999 9999 9999"
                      id="cardNumber"
                      type="text"
                      required
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkoutInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      mask="999"
                      id="cardCode"
                      type="text"
                      required
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkoutInputHasError('cardCode') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </div>
                <div className="monthYear">
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      mask="99"
                      id="expiresMonth"
                      type="text"
                      required
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkoutInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      mask="99"
                      id="expiresYear"
                      type="text"
                      required
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkoutInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </div>
                <br />
                <Button
                  onClick={form.handleSubmit}
                  type="submit"
                  title="Clique aqui para finalizar pagamento"
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando pagamento...' : 'Finalizar compra'}
                </Button>
                <Button
                  onClick={backAdress}
                  type="button"
                  title="Clique aqui para voltar para o carrinho"
                >
                  Voltar para a edição de endereço
                </Button>
              </S.Row>
            </S.Sidebar>
          </S.PaymentModal>
        </form>
      )}
    </div>
  )
}

export default Checkout
