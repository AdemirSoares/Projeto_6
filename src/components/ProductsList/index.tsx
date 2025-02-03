import { Restaurantes } from '../../types'
import Loader from '../Loader'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  background: 'with' | 'pink'
  restaurante: Restaurantes[]
  isLoading: boolean
}

const ProductsList = ({ restaurante, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <S.List>
        {restaurante &&
          restaurante.map((produto) => (
            <Product
              key={produto.id}
              id={produto.id}
              titulo={produto.titulo}
              tipo={produto.tipo}
              avaliacao={produto.avaliacao}
              descricao={produto.descricao}
              capa={produto.capa}
            />
          ))}
      </S.List>
    </S.Container>
  )
}

export default ProductsList
