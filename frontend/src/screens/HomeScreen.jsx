import React from 'react'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Product from '../components/Product'

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    <div className='flex flex-col gap-2 px-8 w-screen'>
      {isLoading && !error && <h1>Loading...</h1>}
      {error && <p>{error?.data?.message || error.error}</p>}
      {!isLoading && !error && (
        <div className='w-full h-screen'>
          <h1 className='text-3xl pt-2'>Latest Products</h1>
          <div className='w-full flex flex-row flex-wrap mx-auto'>
            { products.map((product) => {
              return (
                <Product key={product._id} product={product} />
              )
            }) }
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeScreen