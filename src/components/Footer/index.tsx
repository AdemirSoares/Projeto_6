import logo from '../../assets/image/logo.png'
import instagram from '../../assets/image/instagram.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'
import { FooterBar } from './styles'

export const Footer = () => (
  <FooterBar>
    <a className="logo" href="#">
      <img src={logo} alt="Logo" />
    </a>
    <div>
      <a href="#">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
    </div>
    <div className="text">
      <div className="paragrafo">
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado
        </p>
      </div>
    </div>
  </FooterBar>
)

export default Footer
