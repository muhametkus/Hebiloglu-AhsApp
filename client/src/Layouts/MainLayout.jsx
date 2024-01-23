import React from 'react'
import Navbar from '../components/Layout/Header/Navbar'
import Footer from '../components/Layout/Footer/Footer'
import UrundetayProvider from '../context/UrundetayProvider'
import NavbarProvider from '../context/NavbarProvider'

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      <NavbarProvider>
      <UrundetayProvider>
        <div className='pb-16'><Navbar/></div>
        {children}
        <Footer/>
        </UrundetayProvider></NavbarProvider>
    </React.Fragment>
  )
}

export default MainLayout