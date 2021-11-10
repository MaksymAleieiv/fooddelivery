import React from 'react'
import './CartItem.scss'
import { useCartActions } from '../../../store/cart-slice/useCartActions'

function CartItem({cartItem}) {

    console.log('cartItem render')

    const { changeQuantity, removeItem } = useCartActions()

    const removeFromCart = () => {
        removeItem({
            id: cartItem.id,
            weight: cartItem.selected_type.weight
        })
    }

    const changeQuantityOfItem = (c) => {
        changeQuantity({
            id: cartItem.id,
            weight: cartItem.selected_type.weight,
            quantity : cartItem.quantity + c > 1 ? cartItem.quantity + c : 1
        })
    }

    return (
        <div className='cart-item'>
            <img className='cart-item-photo' src={cartItem.photo} alt=''/>
            <div className='cart-item-info'>
                <div className='cart-item-info-title'>
                    {cartItem.name}
                    <span>, {cartItem.selected_type.weight}</span>
                </div>
                <div className='cart-item-info-description'>
                    {cartItem.description}
                </div>
                <div className='cart-item-bottom'>
                    <div className='quantity-control'>
                        <div className='quantity-control__decrement' onClick={() => changeQuantityOfItem(-1)}></div>
                        <div className='quantity-control__quantity'>{cartItem.quantity}</div>
                        <div className='quantity-control__increment' onClick={() => changeQuantityOfItem(1)}></div>
                    </div>
                    <div className='types_price large'>
                        {cartItem.selected_type.price * cartItem.quantity} <span>$</span>
                    </div>
                </div>
            </div>
            <div className='cart-remove-item' onClick={removeFromCart}>×</div>
        </div>
    )
}

export default CartItem
