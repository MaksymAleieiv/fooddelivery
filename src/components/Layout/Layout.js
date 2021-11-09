import React from 'react'
import Footer from './layout-components/Footer/Footer'
import Header from './layout-components/Header/Header'
import './Layout.scss'

function Layout({children}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
