import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://secure-reaches-62123.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().userReducer.token
        if (!!token) {
            headers.set('Authorization', `Token ${token}`)
        }
        return headers
    }
})

/*
// JWT. use as baseQuery when creating APIs
export const baseQueryWithReauth = async (args, api, extraOptions) => { 
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
        if (refreshResult.data) {
            api.dispatch(tokenReceived(refreshResult.data))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(loggedOut())
        }
    }
    return result
}
*/