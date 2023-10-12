/* eslint-disable no-undef */
const express  = require('express')
require('dotenv').config()
const config = require('./config/db')

const PORT = process.env.PORT || 3001

config.connectDB()
const app = express()

app.get('/', (request, response) => {
  response.send('api is running')
})

app.get('/api/products', (request, response) => {
  response.json(products)
})

app.get('/api/products/:id', (request, response) => {
  const product = products.find((p) => p._id === request.params.id)
  response.json(product)
})



app.listen(PORT, () => console.log(`server running on ${PORT}`))