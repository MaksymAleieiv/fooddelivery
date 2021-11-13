import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { customStyles } from '../../../../../overlayCustomStyles/overlayCustomStyles'
import AuthorizationForms from '../../../../Layout/layout-components/Header/HeaderRight/AuthorizationForms/AuthorizationForms';

function CartCheckFormConfirm(props) {
    const [isOpenAuth, setIsOpenAuth] = React.useState(false)

    const createOrder = () => {
        console.log('order cart => ', props.cartOrder.cart)
        console.log('order address => ', props.cartOrder.orderAddress)
    }

    if(props.isLoggedIn)
        return (
            <button className='orange-btn' onClick={createOrder}>Order</button>
        )
    return(
        <>
            <h4>To procceed you must be logged in</h4>
            <button className='orange-btn' onClick={() => setIsOpenAuth(true)}>Got it</button>
            <Modal
                isOpen={isOpenAuth}
                onRequestClose={() => setIsOpenAuth(false)}
                style={customStyles}
            >
                <div className='modal-content__inner'>
                    <AuthorizationForms setIsOpen={props.setIsOpen} />
                </div>
            </Modal>
        </>
    )
}

function mapStateToProps(state) {
    return {
        userPhone : state.user.currentUser.phone,
        isLoggedIn : state.user.isLoggedIn,
        cartOrder : state.cart
    }
}

export default connect(mapStateToProps)(CartCheckFormConfirm) 
