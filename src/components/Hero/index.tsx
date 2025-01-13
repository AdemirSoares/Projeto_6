import logo from '../../assets/image/logo.png'
import fundo from '../../assets/image/fundo.png'
import { HeroBar } from './styles'

const Hero = () => (
  <HeroBar style={{ backgroundImage: `url(${fundo})` }}>
    <div className="logo">
      <a href="#/">
        <img src={logo} alt="efood" />
      </a>
    </div>
    <h2>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </h2>
  </HeroBar>
)

export default Hero
