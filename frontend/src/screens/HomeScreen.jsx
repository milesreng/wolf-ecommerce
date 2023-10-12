import React from 'react'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <div className='flex flex-col gap-8 px-8 w-screen'>
      <h1 className='text-3xl'>Latest Products</h1>
      <div className='w-full flex flex-row flex-wrap mx-auto'>
        { products.map((product) => {
          return (
            <Product key={product._id} product={product} />
          )
        }) }
      </div>
    </div>
  )
}

export default HomeScreen