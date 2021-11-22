import React from 'react'
import { connect } from 'react-redux'
import './CartCheckForm.scss';
import CartCheckFormConfirm from './CartCheckFormConfirm/CartCheckFormConfirm';
import { useCartActions } from '../../../../store/order-slice/useCartActions'

let initialValue = {
    city: 'Select city',
    street: '',
    house: '',
    frame: '',
    flat: ''
}

function CartCheckForm(props) {
    const { changeOrderAddress } = useCartActions();

    const [orderAddress, setAddress] = React.useState((props.orderAddressCart && Object.keys(props.orderAddressCart).length !== 0 ? props.orderAddressCart : undefined) || props.userAddress || initialValue);

    React.useEffect(() => {
        changeOrderAddress(orderAddress)
    }, [orderAddress])

    return (
        <div className='cart-check-form'>
            <label>
                Town
                <select value={orderAddress.city} onChange={e => setAddress(p => ({...p, city: e.target.value}))}>
                    <option value='default' hidden disabled>Select city</option>
                    <option value='Kiyv'>Kiyv</option>
                    <option value='Dnipro'>Dnipro</option>
                    <option value='Kriviy Rih'>Kriviy Rih</option>
                </select>
            </label>

            <div>
                <label>
                    Street
                    <input value={orderAddress.street} onChange={e => setAddress(p => ({...p, street: e.target.value}))}/>
                </label>
                
                <label>
                    House
                    <input value={orderAddress.house} onChange={e => setAddress(p => ({...p, house: e.target.value}))}/>
                </label>
            </div>

            <div>
                <label>
                    Frame
                    <input value={orderAddress.frame} onChange={e => setAddress(p => ({...p, frame: e.target.value}))}/>
                </label>
                
                <label>
                    Flat
                    <input value={orderAddress.flat} onChange={e => setAddress(p => ({...p, flat: e.target.value}))}/>
                </label>
            </div>

            <div className='cart-check-form-confirm'>
                <CartCheckFormConfirm setIsOpen={props.setIsOpen}/>
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        userAddress : state.userReducer.currentUser.userAddress,
        orderAddressCart : state.orderReducer.orderAddress
    }
}

export default connect(mapStateToProps)(CartCheckForm)
