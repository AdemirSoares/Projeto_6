import Banner from '../../components/Banner'

import Header from '../../components/Header'
import ProductsListMenu from '../../components/ProductsListMenu'
import { useEffect, useState } from 'react'

export type Restaurantes = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: []
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const Profile = () => {
  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <ProductsListMenu cardapio={cardapio} background="pink" />
    </>
  )
}

export default Profile
