import { useDispatch } from 'react-redux'
import * as S from './styles'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  cardapio: Restaurantes
}

const ProductMenu = ({ cardapio, foto, id, nome, descricao }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
  }
  return (
    <S.Card>
      <img src={foto} alt={nome} />
      <S.Titulos>
        <S.Titulo>{nome}</S.Titulo>
      </S.Titulos>
      <S.Text>{descricao}</S.Text>
      <Button
        size="big"
        type="button"
        to={`/profile/${id}`}
        title="Clique aqui para conhecer o restaurante"
      >
        Adicionar ao carrinho
      </Button>
    </S.Card>
  )
}

export default ProductMenu
