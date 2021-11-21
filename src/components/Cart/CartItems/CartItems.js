import React from 'react'
import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import CartItem from '../CartItem/CartItem'
import SwiperCore, {Mousewheel} from 'swiper';
SwiperCore.use([Mousewheel]);
function CartItems(props) {
    return (
        <div className='cart'>
            <h3>Shopping cart</h3>
            <div className='cart__inner'>
                <Swiper slidesPerView={4} direction={'vertical'} className="cartSwiper" mousewheel={true} 
                >
                    {props.cartItems.map((cartItem) => (
                        <SwiperSlide>
                            <CartItem cartItem={cartItem}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: state.cart.cart
    }
}

export default connect(mapStateToProps)(CartItems)
