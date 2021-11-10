import React from 'react'
import { connect } from 'react-redux'
import calculateTotalCartPrice from '../../store/cart-slice/calculateTotalCartPrice'
import CartItem from './CartItem/CartItem'
import CartCheck from './CartCheck/CartCheck'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Pagination]);

function Cart(props) {
    if(props.cart.length === 0 )
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
            <div className='cart'>
                <h3>Shopping cart</h3>
                <div className='cart__inner'>
                    <Swiper slidesPerView={4} direction={'vertical'} pagination={{ 'clickable': true }} className="cartSwiper">
                        {props.cart.map((cartItem) => (
                            <SwiperSlide>
                                <CartItem cartItem={cartItem}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                </div>
            </div>
            <div className='cart-check-container'>
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
