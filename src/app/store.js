import { configureStore } from '@reduxjs/toolkit'
import carritoReducer from "../features/Carrito/carritoSlice"

export const store = configureStore({
    reducer: {
        carrito: carritoReducer
    },
})  

