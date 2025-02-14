import * as S from './styles'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const Banner = ({ tipo, titulo, capa }: Props) => {
  return (
    <S.Image style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <S.Italiana>{tipo}</S.Italiana>
        <S.Title>{titulo}</S.Title>
      </div>
    </S.Image>
  )
}

export default Banner
