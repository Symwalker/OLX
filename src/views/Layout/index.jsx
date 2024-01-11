import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'

const Layout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Layout
