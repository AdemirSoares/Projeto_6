import { useFormik } from 'formik'
import Card from '../../components/Card'

import * as S from './styles'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { clear } from '../../store/reducers/cart'
import { useEffect } from 'react'

const Payment = () => {
  const [puschase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    onSubmit: (values) => {
      usePurchaseMutation({
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        })),
        payment: {
          card: {
            name: values.fullName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title={`Pedido realizado - ${data.orderId}`}>
        <>
          <p className="margin-top">
            Estamos felizes em informar que seu pedido já está <br />
            em processo de preparação e, em breve, será entregue <br />
            no endereço fornecido.
          </p>
          <p className="margin-top">
            Gostaríamos de ressaltar que nossos entregadores <br />
            não estão autorizados a realizar cobranças extras.
          </p>
          <p className="margin-top">
            Lembre-se da importância de higienizar as mãos após <br />
            o recebimento do pedido, garantindo assim sua <br />
            segurança e bem-estar durante a refeição.
          </p>
          <p className="margin-top">
            Esperamos que desfrute de uma deliciosa e agradável <br />
            experiência gastronômica. Bom apetite!
          </p>
        </>
      </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Pagamento - Valor a pagar R$ 190,90">
          <S.Row marginTop="16px">
            <S.InputGroup maxWidth="344px">
              <label htmlFor="fullName">Nome no cartão</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('fullName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup maxWidth="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </S.InputGroup>
            <S.InputGroup maxWidth="87px">
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                id="cardCode"
                type="number"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardCode') ? 'error' : ''}
                mask="999"
              />
            </S.InputGroup>
            <S.InputGroup maxWidth="155px">
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
            <S.InputGroup maxWidth="155px">
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresYear') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
            <button type="button" title="Clique aqui para finalizar a compra" disabled={isLoading}>
              {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
              Finalizar pagamento
            </button>
            <button type="button" title="Clique aqui para voltar para o endereço">
              Voltar para a edição de endereço
            </button>
          </S.Row>
          </Card>
        </form>
      )}
    </div>
  )
}

export default Payment
