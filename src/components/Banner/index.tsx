import { Imagem, Italiana, Titulo } from './styles'

import bannerImg from '../../assets/image/imagem_de_fundo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Italiana>Italiana</Italiana>
    <Titulo>La Dolce Vita Trattoria</Titulo>
  </Imagem>
)

export default Banner
