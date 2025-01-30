import { Cardapio, Restaurantes } from '../../types'
import ProductMenu from '../ProductMenu'
import * as S from './styles'

export type Props = {
  background: 'whit' | 'pink'
  restaurantes: Restaurantes[Cardapio]
  // cardapio: Cardapio[]
}

const ProductsListMenu = ({ restaurantes }: Props) => {
  return (
    <S.Container>
      <S.List>
        {restaurantes.map((restaurantes) => (
          <ProductMenu
            key={restaurantes.id}
            foto={restaurantes.foto}
            preco={restaurantes.preco}
            id={restaurantes.id}
            nome={restaurantes.nome}
            descricao={restaurantes.descricao}
            porcao={restaurantes.porcao}
          />
        ))}
      </S.List>
    </S.Container>
  )
}

export default ProductsListMenu
