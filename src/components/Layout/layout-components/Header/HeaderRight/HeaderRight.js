import React from 'react'
import Modal from 'react-modal'
import CartIcon from '../../../../../assets/CartIcon.svg'
import ProfileIcon from '../../../../../assets/ProfileIcon.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthorizationForms from './AuthorizationForms/AuthorizationForms'
import CartItemsCounter from './CartItemsCounter/CartItemsCounter'
import Cart from '../../../../Cart/Cart'

function HeaderRight(props) {
    const [isOpen, setIsOpen] = React.useState(false);


    const customStyles = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
        overlay : {
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: '1000'
        }
    };
    if(!props.isLoggedIn)
        return (
            <>
                <div className='cart-box' onClick={() => {setIsOpen(true)}}>
                    <img src={CartIcon} alt=''/>
                    <CartItemsCounter/>
                </div>
                <Link to='/profile'>
                    <img src={ProfileIcon} alt=''/>
                </Link>
                
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                >
                    <div className='modal-content__inner'>
                        <Cart setIsOpen={setIsOpen}/>
                    </div>
                </Modal>
            </>
        )
    else
        return (
            <>
                <button onClick={() => setIsOpen(true)}>Sign up</button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                >
                    <div className='modal-content__inner'>
                        <AuthorizationForms setIsOpen={setIsOpen} />
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
