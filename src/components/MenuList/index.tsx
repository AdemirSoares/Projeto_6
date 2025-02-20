import Menu from '../Menu'
import * as S from './styles'

export type Props = {
  background: 'whit' | 'pink'
  restaurante: Restaurantes
}

const MenuList = ({ restaurante }: Props) => {
  return (
    <S.Container>
      <S.List>
        {restaurante.cardapio.map((produto) => (
          <Menu
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

export default MenuList
