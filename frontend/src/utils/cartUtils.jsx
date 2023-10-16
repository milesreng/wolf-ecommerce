export const addDecimals = (num) => {
  return Number(Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
  console.log(state.cartItems)
  // item price
  state.itemsPrice = addDecimals(state.cartItems.reduce((a, b) => a + (b.price * b.qty), 0))

  // shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 9.99)
  
  // tax price
  state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice))

  state.totalPrice = addDecimals(
    Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)
  )

  localStorage.setItem('cart', JSON.stringify(state))

  return state
}