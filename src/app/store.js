import { configureStore } from '@reduxjs/toolkit'
import carritoReducer from "../features/Carrito/carritoSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from './services/shop'

export const store = configureStore({
    reducer: {
        carrito: carritoReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware)
})  

setupListeners(store.dispatch)