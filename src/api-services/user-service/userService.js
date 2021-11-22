import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQuery } from '../baseQuery'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    endpoints: (build) => ({
        fetchCurrentUser: build.query({
            query: () => ({
                url: 'auth/users/me/'
            })
        }),
        registerUser: build.mutation({
            query: (body) => ({
                url: 'auth/users/',
                method: 'POST',
                body
            })
        }),
        loginUser: build.mutation({
            query: (body) => ({
                url: 'auth/token/login/',
                method: 'POST',
                body
            })
        })
    })
})
