import { Restaurantes } from '../../types'
import Loader from '../Loader'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  background: 'with' | 'pink'
  restaurantes?: Restaurantes[]
  isLoading: boolean
}

const ProductsList = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <S.List>
        {restaurantes &&
          restaurantes.map((restaurante) => (
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
      </S.List>
    </S.Container>
  )
}

export default ProductsList
