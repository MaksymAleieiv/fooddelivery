import React from 'react'
import CartCheckForm from '../../components/Cart/CartCheck/CartCheckForm/CartCheckForm'
import CartItems from '../../components/Cart/CartItems/CartItems'
import Layout from '../../components/Layout/Layout'
import setPageTitle from '../../utils/setPageTitle'

function Profile() {
    React.useEffect(() => {
        setPageTitle('Profile')
    }, [])

    return (
        <Layout>
            <div className='pad' style={{display: 'flex'}}>
                <div style={{width: '65%'}}>
                    <CartItems/>
                </div>
                <div style={{width: '35%', position: 'relative'}}>
                    <CartCheckForm/>
                </div>
            </div>
        </Layout>
    )
}

export default Profile
