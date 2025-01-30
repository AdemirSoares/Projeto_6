import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/image/logo.png'
import fundo from '../../assets/image/fundo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link title="Clique aqui para acessar os restaurantes" to="/">
                Restaurantes
              </Link>
            </S.LinkItem>
          </S.Links>
        </nav>
        <h1>
          <img src={logo} alt="efood" />
        </h1>
        <S.CartButton role="button" onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header
