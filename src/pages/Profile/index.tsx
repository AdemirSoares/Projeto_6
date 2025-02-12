import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'

import Header from '../../components/Header'

import Loader from '../../components/Loader'
import { useGetRestaurantesSelectedQuery } from '../../services/api'
import ProductsListMenu from '../../components/ProductsListMenu'

export const Profile = () => {
  const { id } = useParams() as ProfileParams
  const { data: restaurante } = useGetRestaurantesSelectedQuery(id)

  if (restaurante) {
    return (
      <>
        <Header />
        <Banner />
        <ProductsListMenu restaurante={restaurante} background="pink" />
      </>
    )
  }

  return <Loader />
}

export default Profile
