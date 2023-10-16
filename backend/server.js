/* eslint-disable no-undef */
const express  = require('express')
require('dotenv').config()
const config = require('./config/db')
const middleware = require('./middleware/errorMiddleware')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT || 3001

config.connectDB()
const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  response.send('api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(middleware.notFound)
app.use(middleware.errorHandler)

app.listen(PORT, () => console.log(`server running on ${PORT}`))