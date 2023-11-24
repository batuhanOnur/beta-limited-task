import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux';
import { productsApi } from '../features/api/productsApi';
import { cartApi } from '../features/api/cartApi';
import { searchReducer,sessionReducer } from '../features/slices';
import { sessionApi } from '../features/api/sessionApi';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        session: sessionReducer,
        [sessionApi.reducerPath] : sessionApi.reducer,
        [productsApi.reducerPath] : productsApi.reducer,
        [cartApi.reducerPath] : cartApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(
            sessionApi.middleware,
            productsApi.middleware,
            cartApi.middleware
        )
})


setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
