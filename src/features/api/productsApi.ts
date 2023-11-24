import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../interfaces/ProductInterface';


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_PRODUCTION_URL}`,
        prepareHeaders(headers) {
            headers.set('Session-ID',"n8ams6xkk")
            return headers;
        },
    }),

    tagTypes:['Products'],

    endpoints:(builder) => ({
        getProducts: builder.query<IProduct[],null>({
            query:() => ({
                url:`/products`,
                method: 'GET',
            }),
            providesTags: ['Products']
        }),
    })
})

export const { 
    useGetProductsQuery
} = productsApi;
