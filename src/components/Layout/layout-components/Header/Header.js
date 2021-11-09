import React from 'react'
import Logo from '../common-layout-components/Logo/Logo'
import './Header.scss'
import HeaderRight from './HeaderRight/HeaderRight'

function Header() {
    return (
        <header className='header'>
            <Logo/>
            <div className='header__right'>
                <HeaderRight/>
            </div>
        </header>
    )
}

export default Header
