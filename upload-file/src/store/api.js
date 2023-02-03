// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiFile = createApi({
    reducerPath: 'apiFile',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),

    //tagTypes: ['Post'],
    endpoints: builder => ({
        index: builder.query({
            // note: an optional `queryFn` may be used in place of `query`
            query: () => `/`,
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response, meta, arg) => response,
            // Pick out errors and prevent nested properties in a hook or selector
            //transformErrorResponse: (response, meta, arg) => response.status,
            //providesTags: (result, error, id) => [{ type: 'Post', id }],
        }),
        uploadFile: builder.mutation({
            query: (payload) => ({
                url: '/upload',
                method: 'POST',
                body: payload
            })
        }),
    }),
})


export const { useIndexQuery, useUploadFileMutation } = apiFile;