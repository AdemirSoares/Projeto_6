import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Checkout, Restaurantes } from '../types'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
    payment: {
      card: {
        name: string
        number: number
        code: number
        expires: {
          month: number
          year: number
        }
      }
    }
  }
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
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'payment',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesSelectedQuery,
  useGetCheckoutQuery,
  // useGetCardapioQuery,
  usePurchaseMutation
} = api

export default api
