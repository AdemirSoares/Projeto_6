import ProductMenu from '../ProductMenu'
import * as S from './styles'

export type Props = {
  background: 'whit' | 'pink'
  restaurante: Restaurantes
}

const ProductsListMenu = ({ restaurante }: Props) => {
  return (
    <S.Container>
      <S.List>
        {restaurante.cardapio.map((produto) => (
          <ProductMenu
            key={produto.id}
            foto={produto.foto}
            preco={produto.preco}
            id={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            porcao={produto.porcao}
            cardapio={produto}
          />
        ))}
      </S.List>
    </S.Container>
  )
}

export default ProductsListMenu
