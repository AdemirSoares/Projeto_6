import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import Button from '../Button'
import Pizza from '../../assets/image/pizza.png'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartModal className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          <S.CartItem>
            <img src={Pizza} alt="Foto da pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={Pizza} alt="Foto da pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </S.CartItem>
          <S.CartItem>
            <img src={Pizza} alt="Foto da pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </S.CartItem>
        </ul>
        <S.PriceTotal>
          <h2>Valor total</h2>
          <h2>R$ 0,00</h2>
        </S.PriceTotal>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
        <p className="empty-text">
          O carrinho está vazio, adicione pelo menos um produto para continuar
          com a compra
        </p>
      </S.Sidebar>
    </S.CartModal>
  )
}

export default Cart
