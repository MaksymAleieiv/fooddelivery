import React from 'react'
import { connect } from 'react-redux'
import calculateTotalCartPrice from '../../store/cart-slice/calculateTotalCartPrice'
import CartItem from './CartItem/CartItem'
import CartCheck from './CartCheck/CartCheck'

function Cart(props) {
    return (
        <div className='cart-container'>
            <div className='cart'>
                <h3>Shopping cart</h3>
                <div className='cart__inner'>
                    {props.cart.map((cartItem) => (
                        <CartItem cartItem={cartItem}/>
                    ))}
                </div>
            </div>
            <div className='cart-check'>
                <CartCheck totalPrice={props.totalPrice} setIsOpen={props.setIsOpen}/>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        totalPrice: calculateTotalCartPrice(state)
    }
}

export default connect(mapStateToProps)(Cart)
