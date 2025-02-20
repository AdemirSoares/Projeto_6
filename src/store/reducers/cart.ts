import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  isOpenAddress: boolean
  isOpenPayment: boolean
  isConfirmed: boolean
  isCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenAddress: false,
  isOpenPayment: false,
  isConfirmed: false,
  isCart: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const cardapio = state.items.find((item) => item.id === action.payload.id)

      if (!cardapio) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openClose: (state) => {
      state.isOpen = false
      state.isOpenAddress = false
      state.isOpenPayment = false
      state.isCart = true
      state.isConfirmed = false
    },
    startCheckout: (state) => {
      state.isCart = false
      state.isConfirmed = false
      state.isOpenAddress = true
      state.isOpenPayment = false
    },
    payment: (state) => {
      state.isConfirmed = false
      state.isOpenAddress = false
      state.isOpenPayment = true
      state.isCart = false
    },
    confirmed: (state) => {
      state.isConfirmed = true
      state.isOpenAddress = false
      state.isOpenPayment = false
      state.isCart = false
    },
    backtoCart: (state) => {
      state.isOpenAddress = false
      state.isOpenPayment = false
      state.isConfirmed = false
      state.isCart = true
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  startCheckout,
  payment,
  openClose,
  confirmed,
  backtoCart
} = cartSlice.actions
export default cartSlice.reducer
