import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div style={{display: "flex", alignItems: "flex-start", gap: "20px"}}>
      <Sidebar />
      <div className='adminContainer' style={{height: "100vh", overflowY: "scroll", scrollbarWidth: "none"}}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout
