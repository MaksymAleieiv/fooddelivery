import { createSelector } from "reselect";

const itemsInCart = state => state.orderReducer.cart;

const calculateTotalCartPrice = (itemsInCart) => {
    let total = 0;
    itemsInCart.forEach((item) => {
        total += item.selected_type.price * item.quantity;
    })
    return total;
}

export default createSelector(
    itemsInCart,
    calculateTotalCartPrice
)