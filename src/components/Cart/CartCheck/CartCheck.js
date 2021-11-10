import React from 'react'
import './CartCheck.scss'
import CartCheckForm from './CartCheckForm/CartCheckForm'

function CartCheck(props) {
    return (
        <div className='cart-check'>
            <h3>Total</h3>
            <div className='cart-check__inner'>
                <div className='cart-price'>
                    <div className='cart-price__text'>
                        Total Price
                    </div>
                    <div className='cart-price__price'>
                        {props.totalPrice} <span>$</span>
                    </div>
                </div>
                <CartCheckForm />
            </div>
        </div>
    )
}

export default CartCheck
