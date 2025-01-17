import { Cardapio } from '../../pages/Home'
import ProductMenu from '../ProductMenu'
import { Container, List } from './styles'

export type Props = {
  background: 'whit' | 'pink'
  cardapio: Cardapio[]
}

const ProductsListMenu = ({ background, cardapio }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <Container>
      <List>
        {cardapio.map((cardapio) => (
          <ProductMenu
            key={cardapio.id}
            foto={cardapio.foto}
            preco={cardapio.preco}
            id={cardapio.id}
            nome={cardapio.nome}
            descricao={cardapio.descricao}
            porcao={cardapio.porcao}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductsListMenu
