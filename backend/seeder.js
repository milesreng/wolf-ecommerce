/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require('mongoose')
require('dotenv').config()
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/products')

const Product = require('./models/productModel')
const User = require('./models/userModel')
const Order = require('./models/orderModel')

const config = require('./config/db')

config.connectDB()  

const importData = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('data imported'.green)
    process.exit()

  } catch (error) {
    console.error(`${error.message}`.red)
    process.exit(1)
  }

}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    console.log('data destroyed'.green)
  } catch (error) {
    console.error(`${error.message}`.red)
    process.exit(1) 
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else if (process.argv[2] === '-i') {
  importData()
} else {
  console.log('please provide an argument'.red)
}