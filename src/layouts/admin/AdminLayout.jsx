import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default AdminLayout
