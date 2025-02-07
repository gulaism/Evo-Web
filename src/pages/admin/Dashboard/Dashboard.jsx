import React from 'react'
import Statistics from '../../../components/admin/Statistics/Statistics'
import Partners from '../../../components/admin/Partners/Partners'
import Courses from '../../../components/admin/Courses/Courses'
import Reviews from '../../../components/admin/Reviews/Reviews'

const Dashboard = () => {
  return (
    <div>
        <Statistics />
        <Partners />
        <Courses />
        <Reviews />
    </div>
  )
}

export default Dashboard
