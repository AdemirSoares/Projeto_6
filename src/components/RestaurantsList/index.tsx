import Loader from '../Loader'
import Restaurants from '../Restaurants'
import * as S from './styles'

export type Props = {
  background: 'with' | 'pink'
  restaurante: Restaurantes[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurante, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <S.List>
        {restaurante &&
          restaurante.map((produto) => (
            <Restaurants
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

export default RestaurantsList
