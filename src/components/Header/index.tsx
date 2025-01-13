import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import logo from '../../assets/image/logo.png'
import fundo from '../../assets/image/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <nav>
        <Links>
          <LinkItem>
            <Link to="/">Restaurantes</Link>
          </LinkItem>
        </Links>
      </nav>
      <img src={logo} alt="efood" />
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
