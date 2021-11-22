import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
    isLoading : false,
    currentUser : {},
    token : ''
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        changeUser(state, action) {
            state.currentUser = action.payload
        },
        changeUserToken(state, action) {
            state.currentUserToken = action.payload
        },
        clearUser(state) {
            state =  initialState
        }
    }
})

const {reducer, actions} = currentUserSlice

export default reducer
export { actions }