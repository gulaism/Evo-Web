import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Application from './Header/Application'

const UserLayout = () => {
  const [showApplication, setShowApplication] = useState(false);
  console.log('worked');
  return (
    <div>
      <Header
        showApplication={showApplication}
        setShowApplication={setShowApplication}
      />
      <Outlet />
      <div>
        {showApplication && <Application
          setShowApplication={setShowApplication}
        />}
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout
