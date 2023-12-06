import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// this outlet helps in making the other components  being stable and static that 
// are header and footeer in this case and other components dynamic that is the Home component


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            
            <Footer/>
        </>        
    )
}

export default Layout
