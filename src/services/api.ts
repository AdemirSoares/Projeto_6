import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name?: string
      number?: string
      code?: number
      expires?: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantesSelected: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurantes: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesSelectedQuery,
  useGetRestaurantesQuery,
  usePurchaseMutation
} = api

export default api
