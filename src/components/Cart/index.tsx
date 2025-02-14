// import * as S from './styles'

// import { useDispatch, useSelector } from 'react-redux'
// import { RootReducer } from '../../store'
// import { close, remove } from '../../store/reducers/cart'
// import { useNavigate } from 'react-router-dom'
// import Button from '../Button'
// import { parseToBrl } from '../../utils'

// const Cart = () => {
//   const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
//   const navigate = useNavigate()

//   const dispatch = useDispatch()

//   const closeCart = () => {
//     dispatch(close())
//   }

//   const getPriceTotal = () => {
//     return items.reduce((accumulator, currentItem) => {
//       if (currentItem.priceTotal.current) {
//         return (accumulator += currentItem.priceTotal.current)
//       }
//       return 0
//     }, 0)
//   }

//   const removeItem = (id: number) => {
//     dispatch(remove(id))
//   }

//   const goToCheckout = () => {
//     navigate('/checkout')
//     closeCart()
//   }

//   return (
//     <S.CartContainer className={isOpen ? 'is-open' : ''}>
//       <S.Overlay onClick={closeCart} />
//       <S.Sidebar>
//         {items.length > 0 ? (
//           <>
//             <ul>
//               {items.map((item) => (
//                 <S.CartItem key={item.id}>
//                   <img src={item.foto} alt={item.nome} />
//                   <div>
//                     <h3>{item.nome}</h3>
//                     <span>{parseToBrl(item.prices.current)}</span>
//                   </div>
//                   <button onClick={() => removeItem(item.id)} type="button" />
//                 </S.CartItem>
//               ))}
//             </ul>
//             <S.PriceTotal>
//               <h2>Valor total</h2>
//               <h2>R$ {parseToBrl(getPriceTotal())}</h2>
//             </S.PriceTotal>
//             <Button
//               onClick={goToCheckout}
//               title="Clique aqui para continuar com a entrega"
//               type="button"
//             >
//               Continuar com a entrega
//             </Button>
//           </>
//         ) : (
//           <p className="empty-text">
//             O carrinho está vazio, adicione pelo menos um produto para continuar
//             com a compra
//           </p>
//         )}
//       </S.Sidebar>
//     </S.CartContainer>
//   )
// }

// export default Cart
