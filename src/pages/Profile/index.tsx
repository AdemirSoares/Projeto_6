// import { useParams } from 'react-router-dom'
// import Banner from '../../components/Banner'

// import Header from '../../components/Header'
// import ProductsListMenu from '../../components/ProductsListMenu'

// import Loader from '../../components/Loader'
// import { useGetRestaurantesSelectedQuery } from '../../services/api'

// export const Profile = () => {
//   const { id } = useParams()
//   const {
//     data: restaurante,
//     error,
//     isLoading
//   } = useGetRestaurantesSelectedQuery(id!)

//   if (isLoading) return <p>Carregando...</p>
//   if (error) return <p>Erro ao carregar os dados.</p>
//   if (!restaurante || !restaurante.cardapio)
//     return <p>Restaurante não encontrado.</p>

//   if (restaurante) {
//     return (
//       <>
//         <Header />
//         <Banner />
//         <ProductsListMenu restaurante={restaurante} background="pink" />
//       </>
//     )
//   }

//   return <Loader />
// }

// export default Profile
