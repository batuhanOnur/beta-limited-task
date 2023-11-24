import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const sessionApi = createApi({
    reducerPath: 'sessionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_PRODUCTION_URL}`,
        prepareHeaders(headers) {
            headers.set('Session-ID',"7vf1imzjb")
            return headers;
        },
    }),

    endpoints:(builder) => ({
        createSession: builder.query<any,any>({
            query:() => ({
                url:'/createsession',
                method: 'GET',
                headers:{
                    'Content-Type':'application/json'
                },
                responseHandler: (response) => response.text(),
            })
        }),
    })
})

export const {
    useCreateSessionQuery, 
} = sessionApi;
