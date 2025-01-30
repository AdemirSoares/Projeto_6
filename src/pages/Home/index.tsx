import ProductsList from '../../components/ProductsList'

import Hero from '../../components/Hero'

import { useGetRestaurantesQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import { HomeParams } from '../../types'

const Home = () => {
  const { id } = useParams() as HomeParams
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery(id)

  return (
    <>
      <Hero />
      <ProductsList
        restaurantes={restaurantes}
        background="pink"
        isLoading={isLoading}
      />
    </>
  )
}

export default Home
