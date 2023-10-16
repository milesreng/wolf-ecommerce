const User = require('../models/userModel')

// @desc auth user and get token
// @route POST /api/users/login
// @access public
const authUser = (request, response) => {
  const { email, password } = request.body
  
  User.findOne({ email }).then(user => {
    if (user) {
      user.matchPassword(password).then(() => response.json(user)).catch(error => {
        response.status(401)
        throw new Error('Invalid email or password')
      })
    } else {
      response.status(401)
      throw new Error('Invalid email or password')
    }
  })
}

// @desc register user
// @route POST /api/users
// @access public
const registerUser = (request, response) => {
  response.send('register user')
}

// @desc logout user and clear cookies
// @route POST /api/users/logout
// @access private
const logoutUser = (request, response) => {
  response.send('logout user')
}

// @desc get user profile
// @route GET /api/users/profile
// @access public
const getUserProfile = (request, response) => {
  response.send('get user profile')
}

// @desc update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = (request, response) => {
  response.send('update user profile')
}

// // @desc get users
// // @route GET /api/users
// // @access private/admin
const getUsers = (request, response) => {
  User.find(({})).then(products => {
    response.json(products)
  })
}

// @desc get user by id
// @route GET /api/users/:id
// @access private/admin
const getUserById = (request, response) => {
  response.send('get user by id')
}

// @desc delete users
// @route PUT /api/users/:id
// @access private/admin
const updateUser = (request, response) => {
  response.send('update user')
}

// @desc delete users
// @route DELETE /api/users/:id
// @access private/admin
const deleteUser = (request, response) => {
  response.send('delete user')
}



module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
}