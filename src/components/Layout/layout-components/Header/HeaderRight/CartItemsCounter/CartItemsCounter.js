import React from 'react'
import { connect } from 'react-redux'

function CartItemsCounter(props) {
    return (
    <div className='cart-counter'>{props.cartLength}</div>
    )
}

const mapStateToProps = (state) => {
    return {
      cartLength : state.cart.cart.length
    }
}

export default connect(mapStateToProps)(CartItemsCounter)
