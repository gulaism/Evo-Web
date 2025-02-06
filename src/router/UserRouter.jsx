import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layouts/user/UserLayout'
import HomePage from '../pages/user/HomePage/HomePage'
import FieldsOfStudy from '../pages/user/FieldsOfStudy/FieldsOfStudy.jsx'
import AboutUs from '../pages/user/AboutUs/AboutUs.jsx'
import OneField from '../pages/user/OneField/OneField.jsx'
import Contact from '../pages/user/ContactPage/Contact.jsx'
import OurGraduatesPage from '../pages/user/OurGraduates/OurGraduates.jsx'

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/education' element={<FieldsOfStudy />} /> 
        <Route path='/students' element={<OurGraduatesPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/field' element={<OneField />} />
      </Route>
    </Routes>
  )
}

export default UserRouter
