import React from 'react'
import Modal from 'react-modal'
import CartIcon from '../../../../../assets/CartIcon.svg'
import ProfileIcon from '../../../../../assets/ProfileIcon.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthorizationForms from './AuthorizationForms/AuthorizationForms'
import CartItemsCounter from './CartItemsCounter/CartItemsCounter'
import Cart from '../../../../Cart/Cart'
import { customStyles } from '../../../../../overlayCustomStyles/overlayCustomStyles'

function HeaderRight(props) {
    const [isOpenCart, setIsOpenCart] = React.useState(false);
    const [isOpenAuth, setIsOpenAuth] = React.useState(false);
        return (
            <>
                <div className='cart-box' onClick={() => {setIsOpenCart(true)}}>
                    <img src={CartIcon} alt=''/>
                    <CartItemsCounter/>
                </div>
                {props.isLoggedIn ? 
                    <Link to='/profile'>
                        <img src={ProfileIcon} alt=''/>
                    </Link>
                :
                    <div style={{cursor: 'pointer'}} onClick={() => {setIsOpenAuth(true)}}>
                        <img src={ProfileIcon} alt=''/>
                        <Modal
                            isOpen={isOpenAuth}
                            onRequestClose={() => setIsOpenAuth(false)}
                            style={customStyles}
                        >
                            <div className='modal-content__inner'>
                                <AuthorizationForms setIsOpen={setIsOpenAuth} />
                            </div>
                        </Modal>
                    </div>
                }
                
                <Modal
                    isOpen={isOpenCart}
                    onRequestClose={() => setIsOpenCart(false)}
                    style={customStyles}
                >
                    <div className='modal-content__inner'>
                        <Cart setIsOpen={setIsOpenCart}/>
                    </div>
                </Modal>
            </>
        )
}

const mapStateToProps = (state) => {
    return {
      isLoggedIn : state.user.isLoggedIn
    }
}

export default connect(mapStateToProps)(HeaderRight)
