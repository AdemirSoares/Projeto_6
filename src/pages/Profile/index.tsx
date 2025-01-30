import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'

import Header from '../../components/Header'
import ProductsListMenu from '../../components/ProductsListMenu'

// import { useGetCardapioQuery } from '../../services/api'
import Loader from '../../components/Loader'
import { useGetRestaurantesQuery } from '../../services/api'
import { ProfileParams } from '../../types'

export const Profile = () => {
  const { id } = useParams() as ProfileParams
  const { data: restaurantes } = useGetRestaurantesQuery(id)

  if (restaurantes) {
    return (
      <>
        <Header />
        <Banner />
        <ProductsListMenu restaurantes={restaurantes} background="pink" />
      </>
    )
  }

  return <Loader />
}

export default Profile
