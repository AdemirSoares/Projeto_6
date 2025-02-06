// import { useDispatch } from 'react-redux'
// import * as S from './styles'
// import { add, open } from '../../store/reducers/cart'
// import Button from '../Button'

// type Props = {
//   foto: string
//   preco: number
//   id: number
//   nome: string
//   descricao: string
//   porcao: string
//   cardapio: any
// }

// const ProductMenu = ({
//   cardapio,
//   foto,
//   preco,
//   id,
//   nome,
//   descricao,
//   porcao
// }: Props) => {
//   const dispatch = useDispatch()

//   const addToCart = () => {
//     dispatch(add(cardapio))
//     dispatch(open())
//   }
//   return (
//     <S.Card>
//       <img src={foto} alt={nome} />
//       <S.Titulos>
//         <S.Titulo>{nome}</S.Titulo>
//       </S.Titulos>
//       <S.Text>{descricao}</S.Text>
//       <Button
//         type="link"
//         to={`/${id}`}
//         title="Clique aqui para conhecer o restaurante"
//         onClick={addToCart}
//       >
//         Adicionar ao carrinho
//       </Button>
//       <S.Titulo>{preco}</S.Titulo>
//       <S.Titulo>{porcao}</S.Titulo>
//     </S.Card>
//   )
// }

// export default ProductMenu
