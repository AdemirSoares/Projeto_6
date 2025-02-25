import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, startCheckout } from '../../store/reducers/cart'
import Button from '../Button'
import { getTotalPrice, parseToBrl } from '../../utils'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, items, isOpenAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const activeCheckout = () => {
    if (getTotalPrice(items) > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartModal className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item && item.foto} alt={item && item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.PriceTotal>
              <h2>Valor total</h2>
              <h2>{parseToBrl(getTotalPrice(items))}</h2>
            </S.PriceTotal>
            <Button
              onClick={activeCheckout}
              title="Clique aqui para continuar com a entrega"
              type="button"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            <S.CartStage className={!isCart ? 'is-checkout' : ''}>
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra.
              </p>
            </S.CartStage>
          </>
        )}
        <Checkout
          checkoutStart={isOpenAddress}
          priceTotal={getTotalPrice(items)}
        />
      </S.Sidebar>
    </S.CartModal>
  )
}

export default Cart
