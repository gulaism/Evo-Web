import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layouts/user/UserLayout'
import HomePage from '../pages/user/HomePage/HomePage'
import FieldsOfStudy from '../pages/user/FieldsOfStudy/FieldsOfStudy.jsx'

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path='/' element={<HomePage />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/education' element={<FieldsOfStudy />} /> 
        <Route path='/students' element={<h1>Mezunlarimiz</h1>} />
        <Route path='/contact' element={<h1>Elaqe</h1>} />
        
      </Route>
    </Routes>
  )
}

export default UserRouter
