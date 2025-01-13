import Stores from '../../models/Stores'
import ProductMenu from '../ProductMenu'
import { Container, List } from './styles'

type Props = {
  background: 'whit' | 'pink'
  stores: Stores[]
}

const ProductsListMenu = ({ background, stores }: Props) => (
  <Container>
    <List>
      {stores.map((store) => (
        <ProductMenu
          key={store.id}
          image={store.image}
          title={store.title}
          description={store.description}
        />
      ))}
    </List>
  </Container>
)

export default ProductsListMenu
