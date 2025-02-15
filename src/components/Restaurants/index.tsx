import Button from '../Button'
import * as S from './styles'
import estrela from '../../assets/image/estrela.png'
import Tag from '../Tag'

type Props = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Product = ({ id, titulo, avaliacao, descricao, capa, tipo }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img className="capa" src={capa} alt={titulo} />
      <S.Infos>
        <Tag>{tipo}</Tag>
      </S.Infos>
      <S.Titulos>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Avaliacao>
          <S.Titulo>{avaliacao}</S.Titulo>
          <img src={estrela} />
        </S.Avaliacao>
      </S.Titulos>
      <S.Text>{getDescricao(descricao)}</S.Text>
      <Button
        type="link"
        to={`/profile/${id}`}
        title="Clique aqui para conhecer o restaurante"
      >
        Saiba mais
      </Button>
    </S.Card>
  )
}

export default Product
