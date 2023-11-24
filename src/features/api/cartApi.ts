import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICart } from '../../interfaces/ProductInterface';


export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_PRODUCTION_URL}`,
        prepareHeaders(headers) {
            headers.set('Session-ID',"n8ams6xkk")
            return headers;
        },
    }),

    tagTypes:['Cart'],

    endpoints:(builder) => ({
        getCartProducts: builder.query<ICart[],null>({
            query:() => ({
                url:'/view-cart',
                method: 'GET',
            }),
            providesTags: ['Cart']
        }),
        addProductToCart: builder.mutation<string,string>({
            query:(requestId) => ({
                url:`add-to-cart?id=${requestId}`,
                method: 'POST'
            }),
            invalidatesTags: ['Cart']
        })
    })
})

export const { 
    useGetCartProductsQuery,
    useAddProductToCartMutation
} = cartApi;
