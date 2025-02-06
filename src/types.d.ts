declare type Restaurantes = {
  nome: string
  foto: string | undefined
  name: string | undefined
  prices: number
  priceTotal: number
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

declare type Checkout = {
  products: [
    {
      id: 1
      price: 0
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
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare type HomeParams = {
  id: void
}

declare type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type ProfileParams = {
  id: void
}
