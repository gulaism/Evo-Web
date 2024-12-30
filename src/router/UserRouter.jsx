import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layouts/user/UserLayout'
import HomeBottom from '../pages/user/HomePage/HomeBottom/HomeBottom'

const UserRouter = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index path='/' element={<HomeBottom />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/education' element={<h1>Tedris saheleri</h1>} />
        <Route path='/students' element={<h1>Mezunlarimiz</h1>} />
        <Route path='/contact' element={<h1>Elaqe</h1>} />
      </Route>
    </Routes>
  )
}

export default UserRouter
