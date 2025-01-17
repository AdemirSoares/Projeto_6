import Button from '../Button'
import { Avaliacao, Card, Titulo, Titulos, Text, Infos } from './styles'
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
    <Card>
      <img className="capa" src={capa} alt={titulo} />
      <Infos>
        <Tag>{tipo}</Tag>
      </Infos>
      <Titulos>
        <Titulo>{titulo}</Titulo>
        <Avaliacao>
          <Titulo>{avaliacao}</Titulo>
          <img src={estrela} />
        </Avaliacao>
      </Titulos>
      <Text>{getDescricao(descricao)}</Text>
      <Button
        type="link"
        to={`/profile/${id}`}
        title="Clique aqui para conhecer o restaurante"
      >
        Saiba mais
      </Button>
    </Card>
  )
}

export default Product
