import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux';
import { productsApi } from '../features/api/productsApi';
import { cartApi } from '../features/api/cartApi';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath] : productsApi.reducer,
        [cartApi.reducerPath] : cartApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(
            productsApi.middleware,
            cartApi.middleware
        )
})


setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
