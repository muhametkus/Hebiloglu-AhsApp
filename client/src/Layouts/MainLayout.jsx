import React from 'react'
import Navbar from '../components/Layout/Header/Navbar'
import Footer from '../components/Layout/Footer/Footer'
import NavbarProvider from '../context/NavbarProvider'

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      <NavbarProvider>
        <div className='pb-16'><Navbar/></div>
        {children}
        <Footer/></NavbarProvider>
    </React.Fragment>
  )
}

export default MainLayout