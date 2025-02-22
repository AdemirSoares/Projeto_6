import { useParams } from 'react-router-dom'

import Header from '../../components/Header'

import Loader from '../../components/Loader'
import { useGetRestaurantesSelectedQuery } from '../../services/api'
import MenuList from '../../components/MenuList'
import BannerList from '../../components/BannerList'
import Cart from '../../components/Cart'

export const Profile = () => {
  const { id } = useParams() as ProfileParams
  const { data: restaurante } = useGetRestaurantesSelectedQuery(id)

  if (restaurante) {
    return (
      <>
        <Header />
        <BannerList restaurante={restaurante} />
        <MenuList restaurante={restaurante} background="pink" />
        <Cart />
        {/* <Checkout /> */}
      </>
    )
  }

  return <Loader />
}

export default Profile
