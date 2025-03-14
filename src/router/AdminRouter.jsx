import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import AdminLayout from '../layouts/admin/AdminLayout'
import Login from '../pages/admin/AdminLogin/Login/Login'
import ForgetPassword from '../pages/admin/AdminLogin/ForgetPassword/ForgetPassPage'
import ValidateOtp from '../pages/admin/AdminLogin/ValidateOtp/ValidateOtp'
import ResetPassword from '../pages/admin/AdminLogin/ResetPasswordPage/ResetPassPage'
import AdminProtectedRoute from './AdminProtectedRoute'
import AboutPage from '../pages/admin/AboutPage/AboutPage'

const AdminRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        <Route index path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgetPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/otp" element={<ValidateOtp />} />
    </Routes>
  );
}

export default AdminRouter
