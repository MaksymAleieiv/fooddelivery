import React from 'react'
import { connect } from 'react-redux'
import './CartCheckForm.scss'

function CartCheckForm(props) {
    const [userAddress, setAddress] = React.useState(props.userAddress)
    return (
        <div>
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userAddress : state.user.currentUser.Address
    }
}

export default connect(mapStateToProps)(CartCheckForm)
