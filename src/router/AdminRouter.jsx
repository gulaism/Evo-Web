import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import AdminLayout from '../layouts/admin/AdminLayout'

const AdminRouter = () => {
  return (
    <Routes>
        <Route element={<AdminLayout />}>
            <Route index path='/' element={<Dashboard />} />
        </Route>
    </Routes>
  )
}

export default AdminRouter
