import React from 'react'
import { connect } from 'react-redux'
import CartCheck from './CartCheck/CartCheck'
import './Cart.scss'
import CartItems from './CartItems/CartItems'

function Cart(props) {
    if(props.cartLength === 0)
        return (
            <div className='cart-container empty'>
                <div>
                    <img src='https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg' alt=''/>
                    <h4>Cart is empty</h4>
                    <span>You can always add something here (:</span>
                </div>
            </div>
        )
    return (
        <div className='cart-container'>
            <CartItems/>
            <div className='cart-check-container'>
                <CartCheck totalPrice={props.totalPrice} setIsOpen={props.setIsOpen}/>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartLength: state.orderReducer.cart.length
    }
}

export default connect(mapStateToProps)(Cart)
