import ButtonAdicionar from '../ButtonAdicionar'
import { Card, Titulo, Titulos, Text } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductMenu = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulos>
      <Titulo>{title}</Titulo>
    </Titulos>
    <Text>{description}</Text>
    <ButtonAdicionar
      type="link"
      to="/perfil"
      title="Clique aqui para conhecer o restaurante"
    >
      Adicionar ao carrinho
    </ButtonAdicionar>
  </Card>
)

export default ProductMenu
