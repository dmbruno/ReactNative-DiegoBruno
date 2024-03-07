import { configureStore } from '@reduxjs/toolkit'
import carritoReducer from "../features/Carrito/carritoSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from './services/shop'
import { authApi } from './services/auth'
import authReducer from "../features/auth/authSlice"
import { profileApi } from './services/Profile'



export const store = configureStore({
    reducer: {
        carrito:carritoReducer,
        auth:authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware, profileApi.middleware)
})  

setupListeners(store.dispatch)