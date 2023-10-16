import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import Message from '../components/Message'
import { getCart, addToCart, removeFromCart } from '../slices/cartApiSlice'

const CartScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const handleUpdateQty = async (item, qty) => {
    dispatch(addToCart({ ... item, qty: qty }))
    navigate('/cart')
  }

  const handleDeleteFromCart = async (id) => {
    dispatch(removeFromCart(id))
  }

  const handleCheckout = () => {
    navigate('/login?redirect=/shipping')
  }

  return (
    <div className='w-screen mx-auto pb-4'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-3xl pt-2 py-4'>Shopping Cart</h1>
        {cartItems.length === 0 && (
          <Message variant='info'>
            Your cart is empty <Link to='/' className='underline'>go back</Link>
          </Message>
        )}
        {cartItems.length > 0 && (
          <div className='w-full flex flex-col md:flex-row gap-8'>
            <div className='flex flex-col basis-2/3 gap-4'>
              {cartItems.map(item => (
                <div key={item._id}
                  className='flex flex-col md:flex-row justify-between gap-4 w-full shadow-lg'>
                  <img src={item.image} alt={item.name}
                    className='basis-11/12 sm:basis-1/2 md:basis-1/3 object-fill overflow-hidden' />
                  <div className='basis-11/12 sm:basis-1/2 md:basis-2/3 pl-4 flex flex-row justify-between'>
                    <div className='basis-2/3 py-2 justify-between h-full flex flex-col'>
                      <div>
                        <Link to={`/product/${item._id}`} className='text-xl underline text-forest-600 hover:text-forest-900 transition-all duration-200'>{item.name}</Link>
                        <p className='text-lg text-forest-600'>${item.price}</p>
                      </div>
                      <p>{item.countInStock} in stock</p>
                    </div>
                    <div className='flex flex-row p-4 md:justify-end gap-2 basis-1/3 h-fit'>
                      {/* <button onClick={(e) => {
                          console.log(e.target.value)
                        }}
                          className='text-center font-bold bg-cloud-50 text-cloud-800 hover:bg-cloud-100 h-full w-4 rounded-l cursor-pointer outline-none duration-200 transition-colors pl-1 basis-1/3'>–</button> */}
                      <select id='quantity' value={item.qty} onChange={(e) => {
                        handleUpdateQty(item, Number(e.target.value))
                        updateTotals()
                        navigate('/cart')
                      }}
                      className='rounded-md w-1/2 text-center border border-forest-50 py-1 focus:border-brick-900 focus:ring-brick-900'>
                        {[...Array(item.countInStock).keys()].map((x) => <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                      </select>
                      {/* <input type='number' value={item.qty} */}
                      {/* className='text-center rounded-sm font-sans w-16' /> */}
                      {/* <button onClick={handleAddQty}
                          className='text-center font-bold bg-cloud-50 text-cloud-800 hover:bg-cloud-100 h-full w-4 rounded-r cursor-pointer outline-none duration-200 transition-colors basis-1/3'>+</button> */}
                      <button onClick={() => {
                        handleDeleteFromCart(item._id)
                        updateTotals()
                      }}
                      className='border-2 rounded-full border-red-900 text-xs md:w-6 md:h-6 flex flex-row justify-center my-auto bg-default-bg text-brick-900  hover:bg-brick hover:text-default-bg hover:cursor-pointer transition-all duration-200'>
                        <FaTrash className='mx-auto my-auto' />
                      </button>
                    </div>
                  </div>
                </div>))}
            </div>
            <div className='basis-1/4 flex flex-col w-full shadow-lg p-8 text-forest text-sm h-fit'>
              <h1 className='text-xl pb-2 border-b border-forest-100 '>Checkout</h1>
              <div className='flex flex-row justify-between w-full p-2 border-b border-forest-100 '>
                <p className='basis-2/3'>Subtotal: </p>
                <p>${cartItems.reduce((a, b) => a + (b.price * b.qty), 0).toFixed(2)}</p>
              </div>
              <div className='flex flex-row justify-between w-full p-2 border-b border-forest-100'>
                <p className='basis-2/3'>Tax (12%): </p>
                <p className='text-right'>${(cartItems.reduce((a, b) => a + (b.price * b.qty), 0) * 0.12).toFixed(2)}</p>
              </div>
              <div className='flex flex-row justify-between w-full p-2 border-b border-forest-100'>
                <p className='basis-2/3'>Shipping cost:</p>
                <p className='basis-1/3 text-right'>${(cartItems.reduce((a, b) => a + b.qty, 0) > 10 ? 0 : 10).toFixed(2)}</p>
              </div>
              <div className='flex flex-row justify-between w-full px-2 py-6 border-b border-forest-100 font-bold'>
                <p>Total:</p>
                <p>${(Number(cartItems.reduce((a, b) => a + Number(b.price * b.qty), 0).toFixed(2)) + Number(cartItems.reduce((a, b) => a + Number(b.price * b.qty * 0.12), 0).toFixed(2)) + Number((cartItems.reduce((a, b) => a + b.qty, 0) > 10 ? 0 : 10).toFixed(2))).toFixed(2)}</p>
              </div>
              <button onClick={handleCheckout}
                className='w-full text-center my-auto py-2 border border-forest rounded-sm bg-forest-50 hover:bg-forest-100 transition-colors duration-200'>To checkout</button>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartScreen