/* eslint-disable no-undef */
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`connected to MongoDB: ${conn.connection.host}`)
  } catch (error) {
    console.log(`error connecting to MongoDB ${error.message}`)
    process.exit(1)
  }
}

module.exports = {
  connectDB
}