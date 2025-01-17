import ButtonAdicionar from '../ButtonAdicionar'
import { Card, Titulos, Text, Titulo } from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const ProductMenu = ({ foto, preco, id, nome, descricao, porcao }: Props) => (
  <Card>
    <img src={foto} alt={nome} />
    <Titulos>
      <Titulo>{nome}</Titulo>
    </Titulos>
    <Text>{descricao}</Text>
    <ButtonAdicionar
      type="link"
      to={`/${id}`}
      title="Clique aqui para conhecer o restaurante"
    >
      Adicionar ao carrinho
    </ButtonAdicionar>
    <Titulo>{preco}</Titulo>
    <Titulo>{porcao}</Titulo>
  </Card>
)

export default ProductMenu
