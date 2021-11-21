import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../common-layout-components/Logo/Logo'
import './Header.scss'
import HeaderRight from './HeaderRight/HeaderRight'

function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <Logo/>
            </Link>
            <div className='header__right'>
                <HeaderRight/>
            </div>
        </header>
    )
}

export default Header
