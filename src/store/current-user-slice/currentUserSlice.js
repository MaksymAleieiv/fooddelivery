import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import mainInstance from "../../api/mainInstance"

const initialState = {
    isLoggedIn : false,
    currentUser : {}
}

export const fetchCurrentUser = createAsyncThunk(
    'fetchCurrentUser',
    async () => {
        const {data} = await mainInstance.get('auth/users/me/')
        return data
    }
)
/*
export const fetchCurrentUser = createAsyncThunk(
    'fetchCurrentUser',
    async () => {
        const {data} = await mainInstance.get('auth/users/me/')
        return data
    }
)
*/
const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        changeUser(state, action) {
            state.isLoggedIn = true
            state.currentUser = action.payload
        },
        clearUser(state) {
            state =  initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.isLoggedIn = true
            state.currentUser = action.payload
        })
    },
})

const {reducer, actions} = currentUserSlice

export default reducer
export { actions }