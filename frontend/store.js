import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiSlice } from './src/slices/apiSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },
  devTools: true
})

export default store