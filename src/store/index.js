import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentUserSlice from './current-user-slice/currentUserSlice'
import cartSlice from './cart-slice/cartSlice'

const rootReducer = combineReducers({
    user : currentUserSlice,
    cart : cartSlice
})

export const store = configureStore({
    reducer: rootReducer,
})