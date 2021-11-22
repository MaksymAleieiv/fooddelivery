import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import mainInstance from "../../api/mainInstance"

const initialState = {
    cart: [],
    orderAddress : {}
}

export const fetchCart = createAsyncThunk(
    'fetchCart',
    async () => {
        const {data} = await mainInstance.get('auth/users/me/') // change
        return data
    }
)

const orderSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            let index = state.cart.findIndex(item => item.id === action.payload.id && item.selected_type.weight === action.payload.selected_type.weight)
            if(index === -1) state.cart.push(action.payload)
            else state.cart[index].quantity++
        },
        changeOrderAddress(state, action) {
            state.orderAddress = action.payload
        },
        changeQuantity(state, action) {
            let cartItem = state.cart.filter(item => item.id === action.payload.id && item.selected_type.weight === action.payload.weight)[0];
            let cartItemIndex = state.cart.indexOf(cartItem);
            cartItem.quantity = action.payload.quantity;
            state.cart[cartItemIndex] = cartItem;
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(item => item.id + '/' + item.selected_type.weight !== action.payload.id + '/' + action.payload.weight)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
    },
})

const {reducer, actions} = orderSlice

export default reducer
export { actions }