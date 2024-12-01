import image from '../../assets/image/image.png'
import { Botao, Card, Texto, Title } from './styles'

const Product = () => (
  <Card>
    <img src={image} />
    <Title>Pizza Marguerita</Title>
    <Texto>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Texto>
    <Botao href="#">Adicionar ao carrinho</Botao>
  </Card>
)

export default Product
