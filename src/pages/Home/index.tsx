import RestaurantsList from '../../components/RestaurantsList'

import Hero from '../../components/Hero'

import { useGetRestaurantesQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'

const Home = () => {
  const { id } = useParams() as HomeParams

  const { data: restaurante, isLoading } = useGetRestaurantesQuery(id)

  if (!restaurante) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <RestaurantsList
        restaurante={restaurante}
        background="pink"
        isLoading={isLoading}
      />
    </>
  )
}

export default Home
