import React from 'react'
import Header from './componenents/Header/Header'
import Footer from './componenents/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (

 <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout