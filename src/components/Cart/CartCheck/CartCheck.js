import React from 'react'
import { connect } from 'react-redux'
import './CartCheck.scss'
import CartCheckForm from './CartCheckForm/CartCheckForm'
import calculateTotalCartPrice from '../../../store/cart-slice/calculateTotalCartPrice'

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

function mapStateToProps(state) {
    return {
        totalPrice: calculateTotalCartPrice(state)
    }
}

export default connect(mapStateToProps)(CartCheck)
