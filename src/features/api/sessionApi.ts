import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const sessionApi = createApi({
    reducerPath: 'sessionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://linkedin-cv-crawler.beta-limited.workers.dev/interview`,
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
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Cache-Control":"no-cache, no-store, max-age=0, must-revalidate"
                },
                responseHandler: (response) => response.text(),
            })
        }),
    })
})

export const {
    useCreateSessionQuery, 
} = sessionApi;
