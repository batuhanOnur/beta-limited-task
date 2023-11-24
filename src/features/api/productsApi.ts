import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../interfaces/ProductInterface';


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_PRODUCTION_URL}`,
        prepareHeaders(headers, { getState }: any) {
            headers.set('Session-ID',getState().session.sessionId)
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
        searchProduct: builder.mutation<IProduct[],string>({
            query: (name) => ({
                url: `search?name=${name}`,
                method: 'POST'
            }),
        })
    })
})

export const {
    useGetProductsQuery,
    useSearchProductMutation
} = productsApi;
