import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const AdminLayout = () => {
  const [ isAddPageOpen , setIsAddPageOpen ] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.split("/").pop() == "newcourse") {
      setIsAddPageOpen(true);
    }
  }, [location]);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
      <Sidebar
        isAddPageOpen={isAddPageOpen}
        setIsAddPageOpen={setIsAddPageOpen}
      />
      <div
        className="adminContainer"
        style={{ height: "100vh", overflowY: "scroll", scrollbarWidth: "none" }}
      >
        <Navbar isAddPageOpen={isAddPageOpen} />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout
