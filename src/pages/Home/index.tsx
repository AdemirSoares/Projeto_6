import ProductsList from '../../components/ProductsList'

import Hero from '../../components/Hero'

import { useGetRestaurantesSelectedQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import { HomeParams } from '../../types'

const Home = () => {
  const { id } = useParams() as HomeParams
  const { data: restaurante, isLoading } = useGetRestaurantesSelectedQuery(id!)

  return (
    <>
      <Hero />
      <ProductsList
        restaurante={restaurante}
        background="pink"
        isLoading={isLoading}
      />
    </>
  )
}

export default Home
