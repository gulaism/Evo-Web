import React from 'react'
import HomeAbove from '../../../components/HomePage/HomeAbove/HomeAbove'
import HomeBottom from '../../../components/HomePage/HomeBottom/HomeBottom'

const HomePage = () => {
  return (
    <div>
      <HomeAbove />
      <div style={{ marginBottom: "150px" }}>
        <HomeBottom />
      </div>
    </div>
  );
}

export default HomePage
