import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Checkout, Restaurantes } from '../types'

type Product = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type PurchasePayload = {
  cardapio: Product[]
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantesSelected: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurantes: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getCheckoutSelected: builder.query<Checkout, string>({
      query: (id) => `checkout/${id}`
    }),
    getCheckout: builder.query<Checkout[], void>({
      query: () => 'checkout'
    }),
    // getCardapioSelected: builder.query<Cardapio, string>({
    //   query: () => 'cardapio'
    // }),
    // getCardapio: builder.query<Cardapio[], void>({
    //   query: () => 'cardapio'
    // }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'pagamento',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetCheckoutQuery,
  // useGetCardapioQuery,
  usePurchaseMutation
} = api

export default api
