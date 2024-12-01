import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/image/logo.png'
import fundoImg from '../../assets/image/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoImg})` }}>
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Restaurantes</a>
        </LinkItem>
      </Links>
    </nav>
    <a href="#">
      <img src={logo} alt="Logo" />
    </a>
    <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
  </HeaderBar>
)
export default Header
