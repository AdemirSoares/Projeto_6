import { Restaurantes } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  background: 'with' | 'pink'
  restaurantes: Restaurantes[]
}

const ProductsList = ({ restaurantes }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <Container>
      <List>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            id={restaurante.id}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductsList
