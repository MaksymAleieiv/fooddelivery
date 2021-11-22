import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userApi } from "../api-services/user-service/userService";
import currentUserSlice from './current-user-slice/currentUserSlice'
import orderSlice from './order-slice/orderSlice'

const rootReducer = combineReducers({
    userReducer : currentUserSlice,
    orderReducer : orderSlice,
    [userApi.reducerPath] : userApi.reducer

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})