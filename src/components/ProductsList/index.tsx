import Stores from '../../models/Stores'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  background: 'whit' | 'pink'
  stores: Stores[]
}

const ProductsList = ({ background, stores }: Props) => (
  <Container>
    <List>
      {stores.map((store) => (
        <Product
          key={store.id}
          image={store.image}
          nota={store.nota}
          infos={store.infos}
          title={store.title}
          description={store.description}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
