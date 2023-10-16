import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { addToCart } from '../slices/cartApiSlice'

const ProductScreen = () => {
  const { id: productId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [qty, setQty] = useState(1)

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId)
  const [canOrder, setCanOrder] = useState(true)

  const handleValidQty = (e) => {
    setQty(Number(e.target.value))
    if (Number(e.target.value) > product.countInStock || Number(e.target.value) === 0) {
      setCanOrder(false)
    } else if (!canOrder) {
      setCanOrder(true)
    }
  }

  const handleSubtractQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }

    if (qty - 1 <= product.countInStock) {
      setCanOrder(true)
    }
  }

  const handleAddQty = () => {
    if (qty >= product.countInStock) {
      setCanOrder(false)
    }

    setQty(qty + 1)
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ... product, qty: qty }))
    navigate('/cart')
  }
  
  return (
    <div className='px-4 py-1 w-screen'>
      <Link to='/'
        className='rounded-md text-sm border-2 border-cloud-300 py-1 px-2 bg-cloud-50 text-cloud-900 hover:bg-cloud-100 my-4'>
          Back to home
      </Link>
      {isLoading && !error && (
        <div className='mx-auto h-1/2 pt-64'>
          <Loader className='mx-auto' />  
        </div>
      )}
      {error && <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>}
      {!isLoading && !error && (
        <div className='flex flex-col md:flex-row justify-between pt-8 w-11/12 mx-auto gap-4 md:gap-0'>
          <div className='basis-full md:basis-2/3'>
            <img src={product.image} alt={product.name} 
              className='overflow-hidden w-11/12 rounded-md border-cloud-50 border-2 mx-auto'/>
          </div>
          <div className='basis-full md:basis-1/2 px-4 gap-2 flex flex-col'>
            <h3 className='text-xl md:text-2xl border-b-2 border-forest-200 pb-2 w-full md:w-11/12'>{product.name}</h3>
            <div className='border-b-2 border-forest-200 pb-2 w-full md:w-11/12' >
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </div>
            <p>Price: ${product.price}</p>
            <p className='text-sm w-full md:w-11/12'>{product.description}</p>
          </div>
          <div className='basis-1/4 md:border-2 rounded-md text-center border-forest-50 md:shadow-lg p-2 h-1/4 flex flex-row md:flex-col gap-2 md:gap-4 justify-between'>
            <p className='hidden md:block md:border-b-2 md:border-forest-50 pb-2'>Price: ${product.price}</p>
            <h3 className='text-sm my-auto'>Status: 
              <strong> {product.countInStock > 0 ? 
                <span className='text-forest'>{product.countInStock} in stock</span> : 
                <span className='text-brick'>out of stock</span>}
              </strong>
            </h3>
            {product.countInStock > 0 && (
              <div className='basis-1/2 flex flex-row md:flex-col w-full md:w-11/12 mx-auto'>
                {/* <span className='pr-2'>Qty</span> */}
                <div className='flex flex-row gap-1 justify-around text-center my-auto font-mono mx-auto w-1/3 md:w-3/4'>
                  <button onClick={handleSubtractQty}
                    className='text-center font-bold bg-cloud-50 text-cloud-800 hover:bg-cloud-100 h-full w-4 rounded-l cursor-pointer outline-none duration-200 transition-colors pl-1 basis-1/4'>–</button>
                  <input type='number' value={qty} onChange={handleValidQty}
                    className='w-1/6 text-center rounded-sm font-sans basis-1/3' />
                  <button onClick={handleAddQty}
                    className='text-center font-bold bg-cloud-50 text-cloud-800 hover:bg-cloud-100 h-full w-4 rounded-r cursor-pointer outline-none duration-200 transition-colors basis-1/4'>+</button>
                </div>
                <button className={`md:mt-4 mx-auto rounded-md border-forest-500 bg-forest-50 border-2 text-xs px-2 py-1 w-1/2 md:w-full lg:w-2/3 hover:bg-forest-100 transition-all duration-200 ${!canOrder ? 'opacity-50' : 'opacity-100'}`}
                  disabled={!canOrder}
                  onClick={handleAddToCart}>
                  Add to cart
                </button>
              </div>
                
            )}
            {product.countInStock === 0 && (
              <span className='text-sm'>
                Go <Link className='underline hover:text-gray-600 transition-all duration-200'
                  to ='/'>back to home</Link> to discover more products
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductScreen