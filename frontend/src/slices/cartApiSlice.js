import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils'

const initialState = localStorage.getItem('cart') ? 
  JSON.parse(localStorage.getItem('cart')) : {cartItems: []}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find(x => x._id === item._id)

      if (existItem) {
        console.log('existing item')
        console.log('state: ' + JSON.stringify(state.cartItems))
        state.cartItems = state.cartItems.map(x => {
          console.log('for each ' + x._id)
          return x._id === item._id ? item : x
        })
      } else {
        state.cartItems = [...state.cartItems, item]
        console.log('adding item')
      }

      return updateCart(state)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(x => x._id !== action.payload)

      return updateCart(state)
    }
  }
})

export const { getCart, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer