const Product = require('../models/productModel')

// @desc get all products
// @route GET /api/products
// @access public
const getProducts = (request, response) => {
  Product.find(({})).then(products => {
    response.json(products)
  })
}

// @desc get one product
// @route GET /api/product/id
// @access public
const getProductById = (request, response) => {
  Product.findById(request.params.id).then(product => {
    if (product) {
      response.json(product)
    } else {
      response.status(404)
      throw new Error('Resource not found')
    }
  })
}

module.exports = {
  getProducts,
  getProductById
}