const express = require('express')
const router = express.Router()

const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController')

router.route('/').post(registerUser).get(getUsers)

router.route('/logout').post(logoutUser)
router.route('/login').post(authUser)

router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser)

module.exports = router