import * as S from './styles'
import bannerImg from '../../assets/image/imagem_de_fundo.png'

const Banner = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <S.Italiana>Italiana</S.Italiana>
      <S.Title>La Dolce Vita Trattoria</S.Title>
    </div>
  </S.Image>
)

export default Banner
