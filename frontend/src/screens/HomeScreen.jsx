import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <div className='flex flex-col gap-2 px-8 w-screen'>
      <h1 className='text-3xl pt-2'>Latest Products</h1>
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