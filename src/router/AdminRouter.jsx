import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import AdminLayout from '../layouts/admin/AdminLayout'
import Login from '../pages/admin/AdminLogin/Login/Login'
import ForgetPassword from '../pages/admin/AdminLogin/ForgetPassword/ForgetPassPage'
import ValidateOtp from '../pages/admin/AdminLogin/ValidateOtp/ValidateOtp'
import ResetPassword from '../pages/admin/AdminLogin/ResetPasswordPage/ResetPassPage'

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index path="/" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgetPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/otp" element={<ValidateOtp />} />
      {/* <Route path='/reset-password' element={<ResetPassword />} /> */}
    </Routes>
  );
}

export default AdminRouter
