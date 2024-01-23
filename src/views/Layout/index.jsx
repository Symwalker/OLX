import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import Footer from '../../components/footer'

const Layout = () => {
 
  return (
    <div className='relative'>
      <Navbar/>
      <div className='pb-[600px]'>

      <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
